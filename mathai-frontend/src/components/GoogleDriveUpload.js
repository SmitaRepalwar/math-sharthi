// // export default GoogleDriveUpload;
// import React, { useState } from "react";
// import useDrivePicker from "react-google-drive-picker";

// const CLIENT_ID =
//   "424884035722-obhv2nos0k46gvvf39n5ih085meia9vm.apps.googleusercontent.com";
// const DEVELOPER_KEY = "AIzaSyBm1AMf_-dMk3EpCYpxiAf-MU6D8qwUoII";

// const GoogleDriveUpload = ({ fileInputRef }) => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [openPicker, authResponse] = useDrivePicker();

//   const handleOpenPicker = () => {
//     openPicker({
//       clientId: CLIENT_ID,
//       developerKey: DEVELOPER_KEY,
//       viewId: "DOCS",
//       multiselect: true,
//       navHidden: true,
//       authImmediate: false,
//       mimeTypes: ["application/pdf", "image/png"],
//       callbackFunction: (data) => {
//         if (data.action === "picked") {
//           setSelectedFiles(data.docs);
//           console.log("Files chosen:", data.docs);
//         }
//       },
//       cancelCallback: () => {
//         console.log("Picker cancelled");
//       },
//     });
//   };

//   const onSubmit = (event) => {
//     event.preventDefault()
//     handleFileChange(event, dispatch, chats, currentChatIndex);
//     if (location.pathname === "/" || location.pathname === "/chatwithdoc") {
//       navigate("/chats");
//     }
//   };

//   return (
//     <form>
//       <div>
//         <button type="button" onClick={handleOpenPicker}>
//           Open Google Drive Picker
//         </button>
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default GoogleDriveUpload;
