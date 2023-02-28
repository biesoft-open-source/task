import { GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../../../../constants";
import { AppData } from "../../types";

type Props = AppData;

export const AppGridItem = ({ id, name, company }: Props) => {
  return (
    <GridItem
      as={Link}
      to={routes.details(id.toString())}
      bgColor="gray.100"
      py={6}
    >
      <Text fontWeight="bold" as="h2" align="center">
        {name}
      </Text>

      <Text as="h3" align="center">
        {company}
      </Text>
    </GridItem>
  );
};
