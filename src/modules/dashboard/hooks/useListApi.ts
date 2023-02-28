import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "../../../constants";
import { getList } from "../api";

export const useListApi = () => {
  return useQuery([QueryKey.Dashboard], getList);
};
