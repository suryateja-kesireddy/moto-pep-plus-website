import axios from "axios";

export const uploadFileToCloudinary = async (file) => {

  if (!file) return null;

  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    "motopep"
  );

  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/dtorp0ja9/auto/upload",
    formData
  );

  return response.data.secure_url;
};