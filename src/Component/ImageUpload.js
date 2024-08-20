import { Box, Button, Center, IconButton, Image } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { host_url, popmint } from "../App";
import { AddIcon, EditIcon } from "@chakra-ui/icons";

const ImageUpload = ({ ...props }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(props.defaultValue);
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

  useEffect(() => {
    setImageUrl(props.defaultValue);
  }, [props.defaultValue]);

  return (
    <Center
      height={"full"}
      alignItems={"flex-start"}
      justifyContent={"flex-end"}
    >
      <input
        type="file"
        onChange={handleFileChange}
        ref={imageRef}
        style={{ display: "none" }}
      />
      {/* Image Add Button */}
      <Box position={"absolute"} top={2} right={2}>
        {imageUrl ? (
          <IconButton
            _hover={{ bgColor: "#000000aa" }}
            borderRadius={"full"}
            icon={<EditIcon />}
            size="sm"
            color={"white"}
            bgColor={"#00000088"}
            onClick={() => imageRef.current.click()}
          />
        ) : (
          <IconButton
            _hover={{ bgColor: "#000000aa" }}
            borderRadius={"full"}
            icon={<AddIcon />}
            size="sm"
            color={"white"}
            bgColor={popmint}
            onClick={() => imageRef.current.click()}
          />
        )}
      </Box>
      {/* {!imageUrl && (
        <IoAddCircle
          color={popmint}
          style={{ width: "36px", height: "36px" }}
          onClick={() => imageRef.current.click()}
        />
      )} */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Uploaded"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          borderRadius={"md"}
          // onClick={() => imageRef.current.click()}
        />
      )}
    </Center>
  );
};

export default ImageUpload;
