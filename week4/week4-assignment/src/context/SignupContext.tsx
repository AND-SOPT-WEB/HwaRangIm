import React, { createContext, ReactNode, useContext, useState } from "react";
import { formDataType, SignupContextType } from "../types/formData";

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export const useSignup = () => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error("useSignup must be used within a SignupProvider");
  }
  return context;
};

export const SignupProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    password: "",
    passwordCheck: "",
    hobby: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, password: e.target.value }));
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({ ...prev, passwordCheck: e.target.value }));
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, hobby: e.target.value }));
  };

  return (
    <SignupContext.Provider
      value={{
        formData,
        handleNameChange,
        handlePasswordChange,
        handlePasswordCheckChange,
        handleHobbyChange,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};
