import { Params } from "react-router-dom";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { QueryKey } from "../../../constants";
import { AppId } from "../../../types";
import { getAppDetails } from "../api";

const appDetailsQuery = (id: AppId) => ({
  queryKey: [QueryKey.Details, id],
  queryFn: () => getAppDetails(id),
});

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: Params }) => {
    const query = appDetailsQuery(params.appId as AppId);

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

export const useAppDetails = (appId: AppId) => {
  return useQuery(appDetailsQuery(appId));
};
