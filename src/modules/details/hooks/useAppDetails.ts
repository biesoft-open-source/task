import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "../../../constants";
import { AppId } from "../../../types";
import { getAppDetails } from "../api";

export const useAppDetails = (appId: AppId) => {
  return useQuery([QueryKey.Details, appId], () => getAppDetails(appId));
};
