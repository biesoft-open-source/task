import { axios } from "../../../config";
import { endpoints } from "../../../constants";
import { AppId } from "../../../types";
import { AppDetailsData } from "../types";

export const getAppDetails = async (appId: AppId) => {
  const { data } = await axios.get<AppDetailsData>(endpoints.details(appId));

  return data;
};
