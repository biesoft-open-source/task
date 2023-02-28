import { Grid } from "@chakra-ui/react";
import { AppListData } from "../../types";
import { AppGridItem } from "./AppGridItem";

interface Props {
  apps: AppListData;
}

export const AppsGrid = ({ apps }: Props) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {apps.map((app) => (
        <AppGridItem key={app.id} {...app} />
      ))}
    </Grid>
  );
};
