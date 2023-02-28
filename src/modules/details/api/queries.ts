import { axios } from "../../../config";
import { endpoints } from "../../../constants";
import { AppId } from "../../../types";

interface Admin {
  email: string;
  first_name: string;
  last_name: string;
}

export interface AppDetails {
  id: number;
  name: string;
  logo: string;
  company: string;
  number_of_users: number;
  number_of_active_users: number;
  server_address: string;
  admin: Admin;
}

export const getAppDetails = async (appId: AppId) => {
  const { data } = await axios.get<AppDetails>(endpoints.details(appId));

  return data;
};
