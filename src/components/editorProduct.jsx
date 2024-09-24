'use client'
// components/EditorComponent.jsx
import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";

const EditorProduct = ({ initialValue }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    console.log(editorState)

    useEffect(() => {
        // Only run this code on the client
        if (initialValue) {
            const contentBlock = htmlToDraft(initialValue);
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                const editorState = EditorState.createWithContent(contentState);
                setEditorState(editorState);
            }
        }
    }, [initialValue]);

    // draftToHtml(convertToRaw(editorState.getCurrentContent()))

    return (
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={setEditorState}
        />
    );
};

export default EditorProduct;
