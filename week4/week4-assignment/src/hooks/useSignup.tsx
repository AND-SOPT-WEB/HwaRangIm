// import { useState } from "react";

// export const useSignup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     password: "",
//     passwordCheck: "",
//     hobby: "",
//   });

//   const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prev) => ({ ...prev, name: value }));
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prev) => ({ ...prev, password: value }));
//   };

//   const handlePasswordCheckChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = e.target.value;
//     setFormData((prev) => ({ ...prev, passwordCheck: value }));
//   };

//   const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prev) => ({ ...prev, hobby: value }));
//   };

//   return {
//     formData,
//     handleNameChange,
//     handlePasswordChange,
//     handlePasswordCheckChange,
//     handleHobbyChange,
//   };
// };
