import axios from "axios";
import { formDataType } from "../types/formData";

export const postSignup = async (formData: formDataType) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BASE_URL}/user`,
      {
        username: formData.name,
        password: formData.password,
        hobby: formData.hobby,
      }
    );
    return { success: true, result: response };
  } catch (error) {
    return { success: false, error };
  }
};
