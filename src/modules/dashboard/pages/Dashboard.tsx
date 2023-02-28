import { DataPageTemplate } from "../../../components";
import { AppListData } from "../api";
import { AppsGrid } from "../components";
import { useListApi } from "../hooks";

export const Dashboard = () => {
  const { data, status } = useListApi();

  return (
    <DataPageTemplate
      status={status}
      renderSuccess={() => <AppsGrid apps={data as AppListData} />}
    />
  );
};
