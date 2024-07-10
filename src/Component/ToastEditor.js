import React, { useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "../Style/custom-editor-styles.css";
const ToastEditor = ({ onChange, ...props }) => {
  const editorRef = useRef();

  const handleChange = () => {
    const editorInstance = editorRef.current.getInstance();
    const html = editorInstance.getHTML();
    // console.log(html);
    onChange(html);
  };

  return (
    <Editor
      {...props}
      ref={editorRef}
      previewStyle="vertical"
      height="600px"
      initialEditType="wysiwyg"
      initalValue={props.initialValue || " "}
      useCommandShortcut={true}
      onChange={handleChange}
      plugins={[colorSyntax]}
      hideModeSwitch={true}
    />
  );
};

export default ToastEditor;
