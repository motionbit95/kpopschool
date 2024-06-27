import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";

import React from "react";

function ToastEditor(props) {
  return (
    <Editor
      {...props}
      initialEditType="wysiwyg"
      previewStyle="vertical"
      initialValue=" "
      hideModeSwitch={true}
      placeholder="내용을 입력하세요."
    />
  );
}

export default ToastEditor;
