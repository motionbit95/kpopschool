import React, { useState, useEffect } from "react";
import { Flex, Image } from "@chakra-ui/react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageWidth = 240; // 이미지 너비
  const imageGap = 8; // 이미지 간격
  const totalImagesToShow = 5; // 한 번에 보여줄 이미지 개수
  const totalWidth = imageWidth + imageGap; // 이미지 한 개의 총 너비 (이미지 너비 + 간격)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Supporters.length - totalImagesToShow ? 0 : prevIndex + 1
      );
    }, 2000); // 이미지 변경 간격 (ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      justify="center"
      align="center"
      w="100%"
      overflow="hidden"
      position="relative"
      p={2}
    >
      <Flex
        transform={`translateX(-${currentIndex * totalWidth}px)`} // 240px 이미지 너비 + 8px 간격
        transition="transform 0.5s ease-out"
      >
        {Supporters.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Supporter ${index}`}
            w="240px"
            h="auto"
            mr={index < Supporters.length - 1 ? "8px" : "0"} // 마지막 이미지에는 간격을 적용하지 않음
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ImageCarousel;

const Supporters = [
  require("../Asset/Supporters/강동대학교.png"),
  require("../Asset/Supporters/계성고.png"),
  require("../Asset/Supporters/대전민예총.png"),
  require("../Asset/Supporters/대전시립합창단.png"),
  require("../Asset/Supporters/대평중.png"),
  require("../Asset/Supporters/목원대학교.png"),
  require("../Asset/Supporters/백제예대.png"),
  require("../Asset/Supporters/서나무기획사.png"),
  require("../Asset/Supporters/서울예대.png"),
  require("../Asset/Supporters/서일대학교.png"),
  require("../Asset/Supporters/여주대학교.png"),
  require("../Asset/Supporters/우송정보대학.png"),
  require("../Asset/Supporters/청운대학교.png"),
  require("../Asset/Supporters/포항공과대학.png"),
];
