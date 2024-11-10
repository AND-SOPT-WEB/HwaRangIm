import { useState } from "react";

export const useLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, name: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, password: value }));
  };

  return {
    formData,
    handleNameChange,
    handlePasswordChange,
  };
};
