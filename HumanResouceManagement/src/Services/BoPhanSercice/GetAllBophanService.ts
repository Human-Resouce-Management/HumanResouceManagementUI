import axios from "axios";

export const fetchDataBoPhan = async () => {

  let data = <any><any>[]
  try {
    const respons = await axios.get("https://localhost:7141/api/BoPhan");
    data= respons.data.data;
  } catch (error) {
    console.error("Error:", error);
  }
  return data
};