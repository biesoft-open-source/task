import { useParams } from "react-router-dom";
import { AppId } from "../../../types";
import { AppPreview } from "../components";
import { useAppDetails } from "../hooks";
import { AppDetailsData } from "../types";

export const Details = () => {
  const params = useParams();
  const { data: details, refetch } = useAppDetails(params.appId as AppId);

  return (
    <AppPreview
      details={details as AppDetailsData}
      onRefresh={() => refetch()}
    />
  );
};
