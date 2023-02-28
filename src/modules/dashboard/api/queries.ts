import { axios } from "../../../config";
import { endpoints } from "../../../constants";
import { AppListData } from "../types";

export const getList = async () => {
  const { data } = await axios.get<AppListData>(endpoints.list);

  return data;
};
