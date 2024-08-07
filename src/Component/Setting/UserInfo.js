import {
  Avatar,
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { host_url, popmint } from "../../App";

const UserInfo = (props) => {
  const { userInfo, onChange, onSave } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(props.userInfo.profile);
  const [uploading, setUploading] = useState(false);
  const imageRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedFile(event.target.files[0]);
    handleUpload(file);
  };

  const handleUpload = async (file) => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    setUploading(true);

    try {
      const response = await fetch(`${host_url}/upload-image`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setImageUrl(data.imageUrl);
        props.setImageUrl(data.imageUrl);
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      alert("Error uploading image: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Stack spacing={8} color={"#4E4E4E"}>
      <HStack spacing={8} fontSize={"24px"} fontWeight={"600"}>
        <Box boxSize={"100px"} position={"relative"}>
          <Avatar size={"full"} src={imageUrl} />
          <Circle
            position={"absolute"}
            size={"30px"}
            bgColor={popmint}
            bottom={0}
            right={0}
            onClick={() => imageRef.current.click()}
          >
            <Image src={require("../../Asset/Icon/pencil.png")} />
          </Circle>
          <input
            style={{ display: "none" }}
            ref={imageRef}
            type="file"
            onChange={handleFileChange}
          />
        </Box>
        <Text>
          {userInfo?.name} {userInfo?.firstName}
        </Text>
      </HStack>
      <Flex>
        <Grid templateColumns={"repeat(2, 1fr)"} rowGap={8} columnGap={16}>
          <GridItem>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Name
              </Text>
              <Input
                focusBorderColor={popmint}
                defaultValue={userInfo?.name}
                onChange={(e) =>
                  onChange({ ...userInfo, name: e.target.value })
                }
              />
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                First Name
              </Text>
              <Input
                focusBorderColor={popmint}
                defaultValue={userInfo?.firstName}
                onChange={(e) =>
                  onChange({ ...userInfo, firstName: e.target.value })
                }
              />
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Email Address
              </Text>
              <Input
                type={"email"}
                readOnly
                isDisabled
                _disabled={{ cursor: "not-allowed", bgColor: "gray.100" }}
                focusBorderColor={popmint}
                defaultValue={userInfo?.email}
              />
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Birthday
              </Text>
              <Input
                focusBorderColor={popmint}
                placeholder="DD/MM/YY"
                defaultValue={userInfo?.birthday}
                onChange={(e) =>
                  onChange({ ...userInfo, birthday: e.target.value })
                }
              />
            </Stack>
          </GridItem>
          <GridItem>
            <Stack>
              <Text fontSize={"20px"} fontWeight={"600"}>
                Other class experience
              </Text>
              <Select
                defaultValue={userInfo?.experience}
                onChange={(e) =>
                  onChange({ ...userInfo, experience: e.target.value })
                }
              >
                <option value="At all">At all</option>
                <option value="option 1">option 1</option>
                <option value="option 2">option 2</option>
              </Select>
            </Stack>
          </GridItem>
        </Grid>
      </Flex>
      <Stack>
        <Text fontSize={"20px"} fontWeight={"600"}>
          K-pop genre or artist you are interested in
        </Text>
        <Input
          focusBorderColor={popmint}
          w={"484px"}
          placeholder="Fill the text"
          defaultValue={userInfo?.interest}
          onChange={(e) => onChange({ ...userInfo, interest: e.target.value })}
        />
      </Stack>
      <Box>
        <Button color={"white"} bgColor={popmint} onClick={onSave}>
          SAVE
        </Button>
      </Box>
    </Stack>
  );
};

export default UserInfo;
