import React, {useState} from 'react';
import { CssBaseline, Box, Drawer, Toolbar, Typography, AppBar, Button } from '@mui/material';
import ContentArea from '../components/ContentArea';
import tectsharthilogo from '../public/techsharthilogo.png'
import Header from '../components/Header';
import UploadSection from '../components/UploadSection';
import AISection from '../components/AISection';
import TemplatesSection from '../components/TemplateSection';
import InputContainer from '../components/InputContainer';
import Aiwriter from '../components/AiWriter';
import { useDispatch, useSelector } from 'react-redux';
 
 
function AIwriter() {
 
  const dispatch = useDispatch();
  const fileInputRef = React.useRef(null);
  const ImageInputRef = React.useRef(null);
  const pdfInputRef = React.useRef(null)
 
  const { chats, currentChatIndex } = useSelector((state) => state.chat);
 
  const renderMessageContent = (content) => {
    if (content[0].type === 'text') {
      const formattedText = content[0].text
        .split('\n')
        .map((str, index, arr) => {
          const trimmedStr = index < arr.length - 1 ? str.trimEnd() : str;
          const boldItalic = trimmedStr
            .replace(/\*\*(.*?)\*\*/g, '<b><i>$1</i></b>')
            .replace(/\*(.*?)\*/g, '<i>$1</i>')
            .replace(/__(.*?)__/g, '<b>$1</b>');
          return <span key={index} dangerouslySetInnerHTML={{ __html: boldItalic }} />;
        });
 
      return <p>{formattedText.reduce((acc, curr) => [acc, ' ', curr])}</p>; // Join with space
    } else if (content[0].type === 'image_url') {
      return <img src={content[0].image_url.url} alt="Uploaded" style={{ maxWidth: '50%' }} />;
    }
  };
 
 
 
  return (
    // <Box sx={{overflow: 'hidden', backgroundColor: "#000000", height: "100%",  }}>
      <ContentArea>  
        <Box sx={{height: "100%",
                  width: "600px",
                  boxSizing: "border-box",
                  overflowY: "auto",
                  scrollbarWidth: 'none', /* Firefox */
                  '-ms-overflow-style': 'none', /* IE and Edge */
                  '&::-webkit-scrollbar': {
                    display: 'none', /* Chrome, Safari, and Opera */
                  },
                  display: "flex",
                  justifyContent: "center"
                  }}>
           <Aiwriter/>
        </Box>
      </ContentArea>
    // </Box>
  );
}
 
export default AIwriter;