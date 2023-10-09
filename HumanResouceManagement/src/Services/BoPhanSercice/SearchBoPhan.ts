import axios from "axios";
import { ref, watch } from "vue";
import { axiosInstance } from "../axiosConfig";
import type { User } from "@/Models/Usermodel";
import { BoPhan } from "@/Models/Dtos/BoPhanDto";
import type { SearchRequest } from "@/Models/Request/SearchModels/SearchRequest";
import { LoginViewModel } from "@/Models/LoginViewModel";

export const fetchData2 = async (model: SearchRequest): Promise<BoPhan[]> => {
  let data2 = [] as BoPhan[];
  try {
    const response =  await axiosInstance.post('BoPhan/search', model)
    data2 = response.data.data.data;
  } catch (error) {
    // Handle any errors here
    console.error("Error:", error);
  }
  return data2;
};