import axios from "axios";

export interface putInfoProps {
  hobby?: string;
  password?: string;
}

export const putInfo = async ({ hobby, password }: putInfoProps) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.put(
      `${import.meta.env.VITE_APP_BASE_URL}/user`,
      {
        hobby,
        password,
      },
      {
        headers: {
          token,
        },
      }
    );
    return { success: true, result: response };
  } catch (error) {
    return { success: false, error };
  }
};
