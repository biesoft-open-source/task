import { VStack, Text } from "@chakra-ui/react";
import { AppsGrid } from "../components";
import { useAppsList } from "../hooks";
import { AppListData } from "../types";

export const Dashboard = () => {
  const { data: apps } = useAppsList();

  return (
    <VStack spacing="3">
      <Text as="h1" fontWeight="bold" fontSize="xl">
        Apps
      </Text>

      <AppsGrid apps={apps as AppListData} />
    </VStack>
  );
};
