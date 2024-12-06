import axios from "axios";
import { loginFormDataType } from "../types/formData";

export const postLogin = async (formData: loginFormDataType) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BASE_URL}/login`,
      {
        username: formData.name,
        password: formData.password,
      }
    );
    return { success: true, result: response };
  } catch (error) {
    return { success: false, error };
  }
};
