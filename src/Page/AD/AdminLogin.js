import {
  Box,
  Button,
  Center,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase/Config";
import { useNavigate } from "react-router-dom";
import { popmint } from "../../App";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(formData);
    signInWithEmailAndPassword(auth, formData.id, formData.password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        if (user.uid === "oNd1IccrCLTOQRbnsRFv7BUg3r32") {
          navigate("/admin");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <Center minH={"100vh"}>
      <Stack align={"center"} w={"520px"}>
        <Box boxSize={"340px"}>
          <Image src={require("../../Asset/Logo/KpopLogo.png")} />
        </Box>
        <Stack spacing={12} w={"full"}>
          <Text
            textAlign={"center"}
            color={popmint}
            fontSize={"4xl"}
            fontWeight={"800"}
          >
            K-POP School admin
          </Text>
          <Stack w={"full"}>
            <Input
              placeholder="ID"
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Stack>
        </Stack>
        <Box pt={16}>
          <Button
            size={"lg"}
            color={"white"}
            bgColor={popmint}
            onClick={handleLogin}
          >
            SIGN IN
          </Button>
        </Box>
      </Stack>
    </Center>
  );
};

export default AdminLogin;
