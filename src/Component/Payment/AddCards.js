import {
  Box,
  Button,
  HStack,
  Input,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { popmint } from "../../App";

const AddCards = () => {
  const [values, setValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // 숫자만 허용
    if (inputValue.length <= 4) {
      const newValues = [...values];
      newValues[index] = inputValue;
      setValues(newValues);

      // 다음 인풋으로 포커스 이동
      if (inputValue.length === 4 && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
      e.preventDefault();
    }
  };

  const handleCardPaste = (e) => {
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
    if (pasteData.length === 16) {
      const newValues = [];
      for (let i = 0; i < 4; i++) {
        newValues.push(pasteData.slice(i * 4, (i + 1) * 4));
      }
      setValues(newValues);
      inputRefs.current[3].focus();
    }
  };
  return (
    <Stack color={"#4E4E4E"} fontWeight={"500"} spacing={3}>
      <Text fontSize={"25px"} fontWeight={"600"}>
        Add Cards
      </Text>
      <Stack>
        <Text fontSize={"lg"}>Card Number</Text>
        <HStack>
          {values.map((value, index) => (
            <>
              <Input
                w={"100px"}
                key={index}
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyPress={handleKeyPress}
                maxLength={4}
                ref={(el) => (inputRefs.current[index] = el)}
                onPaste={handleCardPaste}
                textAlign="center"
                focusBorderColor={popmint}
                borderColor={value.length === 4 ? popmint : "#E1E4E4"}
                borderWidth={value.length === 4 ? "2px" : "1px"}
              />
              {index < 3 && <FiMinus color={"#4E4E4E"} />}
            </>
          ))}
        </HStack>
      </Stack>
      <HStack spacing={8}>
        <Stack>
          <Text fontSize={"lg"}>Validity Period</Text>
          <HStack>
            <Input
              placeholder="MM"
              maxLength={2}
              w={"60px"}
              textAlign={"center"}
            />
            <Text>/</Text>
            <Input
              placeholder="YY"
              maxLength={2}
              w={"60px"}
              textAlign={"center"}
            />
          </HStack>
        </Stack>
        <Stack>
          <Text fontSize={"lg"}>CVC Number</Text>
          <HStack>
            <Input w={"100px"} textAlign={"center"} maxLength={3} />
          </HStack>
        </Stack>
      </HStack>
      <Stack>
        <Text fontSize={"lg"}>Password</Text>
        <Input
          placeholder="Password first two numbers"
          w={"250px"}
          textAlign={"center"}
        />
      </Stack>
      <HStack>
        <Radio />
        <Text>
          I agree to all terms and conditions and use of personal information.
        </Text>
      </HStack>
      <Box pt={4}>
        <Button size={"lg"} color={"white"} bg={popmint}>
          SAVE
        </Button>
      </Box>
    </Stack>
  );
};

export default AddCards;
