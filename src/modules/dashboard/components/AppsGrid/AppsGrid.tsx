import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../../../../constants";
import { AppListData } from "../../api";

interface Props {
  apps: AppListData;
}

export const AppsGrid = ({ apps }: Props) => {
  return (
    <VStack spacing="3">
      <Text as="h1" fontWeight="bold" fontSize="xl">
        Apps
      </Text>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {apps.map((app) => (
          <GridItem
            as={Link}
            to={routes.details(app.id.toString())}
            key={app.id}
            bgColor="gray.100"
            py={6}
          >
            <Text fontWeight="bold" as="h2" align="center">
              {app.name}
            </Text>

            <Text as="h3" align="center">
              {app.company}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};
