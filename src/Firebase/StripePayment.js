import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "./Config";

/** 하단 부분 테스트 완료 후 서버단으로 이동 예정 */
export const getCheckoutUrl = async (priceId) => {
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User is not logged in");

  console.log("userId", userId, priceId);

  const checkoutSessionRef = collection(
    db,
    "customers",
    userId,
    "checkout_sessions"
  );

  const docRef = await addDoc(checkoutSessionRef, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
    mode: "payment", // 여기서 mode를 'payment'로 설정합니다.
  });

  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const { error, url } = snap.data();
      if (error) {
        // Handle error
        unsubscribe();
        reject(error);
      }
      if (url) {
        unsubscribe();
        resolve(url);
      }
    });
  });
};

export const getIsPayment = async (priceId) => {
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User is not logged in");
  console.log("userId", userId, priceId);

  return new Promise((resolve, reject) => {
    const checkoutSessionRef = collection(db, "customers", userId, "payments");
    onSnapshot(checkoutSessionRef, (snap) => {
      snap.forEach((doc) => {
        // console.log(doc.data().items);
        doc.data().items?.forEach((item) => {
          if (item.price.id === priceId) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    });
  });
};
