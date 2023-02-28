import { useParams } from "react-router-dom";
import { DataPageTemplate } from "../../../components";
import { AppDetails } from "../api";
import { AppPreview } from "../components";
import { useAppDetails } from "../hooks";

export const Details = () => {
  const { appId } = useParams();
  const { status, data, refetch } = useAppDetails(appId as string);

  return (
    <DataPageTemplate
      status={status}
      renderSuccess={() => (
        <AppPreview details={data as AppDetails} onRefresh={() => refetch()} />
      )}
    />
  );
};
