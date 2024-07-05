import { Box, Button, Center, IconButton, Image } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";

const ImageUpload = ({ ...props }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
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
      const response = await fetch("http://localhost:8080/upload-image", {
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
    <Center height={"full"}>
      <input
        type="file"
        onChange={handleFileChange}
        ref={imageRef}
        style={{ display: "none" }}
      />
      {!imageUrl && (
        <FiPlus
          color="#8c8c8c"
          style={{ width: "100px", height: "100px" }}
          onClick={() => imageRef.current.click()}
        />
      )}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Uploaded"
          style={{ width: "100%" }}
          onClick={() => imageRef.current.click()}
        />
      )}
    </Center>
  );
};

export default ImageUpload;
