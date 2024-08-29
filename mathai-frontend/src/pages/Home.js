import React, { useState } from "react";
import {
  CssBaseline,
  Box,
  Drawer,
  Toolbar,
  Typography,
  AppBar,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContentArea from "../components/ContentArea";
import tectsharthilogo from "../public/techsharthilogo.png";
import Header from "../components/Header";
import UploadSection from "../components/UploadSection";
import AISection from "../components/AISection";
import TemplatesSection from "../components/TemplateSection";
import InputContainer from "../components/InputContainer";
import { useDispatch, useSelector } from "react-redux";
import GoogleDriveUpload from "../components/GoogleDriveUpload";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useDispatch();
  const fileInputRef = React.useRef(null);
  const ImageInputRef = React.useRef(null);
  const pdfInputRef = React.useRef(null);

  const { chats, currentChatIndex } = useSelector((state) => state.chat);

  const renderMessageContent = (content) => {
    if (content[0].type === "text") {
      const formattedText = content[0].text
        .split("\n")
        .map((str, index, arr) => {
          const trimmedStr = index < arr.length - 1 ? str.trimEnd() : str;
          const boldItalic = trimmedStr
            .replace(/\*\*(.*?)\*\*/g, "<b><i>$1</i></b>")
            .replace(/\*(.*?)\*/g, "<i>$1</i>")
            .replace(/__(.*?)__/g, "<b>$1</b>");
          return (
            <span
              key={index}
              dangerouslySetInnerHTML={{ __html: boldItalic }}
            />
          );
        });

      return <p>{formattedText.reduce((acc, curr) => [acc, " ", curr])}</p>; // Join with space
    } else if (content[0].type === "image_url") {
      return (
        <img
          src={content[0].image_url.url}
          alt="Uploaded"
          style={{ maxWidth: "50%" }}
        />
      );
    }
  };

  return (
    <ContentArea>
      <Box
        sx={{
          height: "100%",
          width: isMobile ? "100%" : "600px",
          boxSizing: "border-box",
          overflowY: "auto",
          padding: isMobile ? "10px" : "20px",
          scrollbarWidth: "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE and Edge */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, and Opera */,
          },
        }}
      >
        {/* <Header /> */}
        <UploadSection
          fileInputRef={fileInputRef}
          pdfInputRef={pdfInputRef}
          ImageInputRef={ImageInputRef}
        />
        <AISection />
      </Box>
      <InputContainer
        fileInputRef={fileInputRef}
        ImageInputRef={ImageInputRef}
        pdfInputRef={pdfInputRef}
      />
    </ContentArea>
  );
}

export default Home;
