export interface formDataType {
  name: string;
  password: string;
  passwordCheck: string;
  hobby: string;
}

export interface SignupContextType {
  formData: formDataType;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleHobbyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface loginFormDataType {
  name: string;
  password: string;
}
