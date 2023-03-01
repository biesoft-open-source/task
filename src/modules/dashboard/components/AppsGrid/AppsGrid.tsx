import { Grid } from "@chakra-ui/react";
import { AppListData } from "../../types";
import { AppsGridItem } from "./AppsGridItem";

interface Props {
  apps: AppListData;
}

export const AppsGrid = ({ apps }: Props) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {apps.map((app) => (
        <AppsGridItem key={app.id} {...app} />
      ))}
    </Grid>
  );
};
