import { QueryClient, useQuery } from "@tanstack/react-query";
import { QueryKey } from "../../../constants";
import { getList } from "../api";

const appsListQuery = () => ({
  queryKey: [QueryKey.Dashboard],
  queryFn: () => getList(),
});

export const loader = (queryClient: QueryClient) => async () => {
  const query = appsListQuery();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const useAppsList = () => {
  return useQuery(appsListQuery());
};
