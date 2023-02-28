import { axios } from "../../../config";
import { endpoints } from "../../../constants";

interface AppData {
  id: number;
  name: string;
  company: string;
}

export type AppListData = AppData[];

export const getList = async () => {
  const { data } = await axios.get<AppListData>(endpoints.list);

  return data;
};
