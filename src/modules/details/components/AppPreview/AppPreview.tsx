import { HStack, IconButton, Text, Image, Box } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { AppDetailsData } from "../../types";

interface Props {
  details: AppDetailsData;
  onRefresh: () => void;
}

export const AppPreview = ({ details, onRefresh }: Props) => {
  return (
    <Box p="6" bgColor="gray.100">
      <Image src={details.logo} alt="" />

      <HStack justify="space-between">
        <Text as="h1" fontSize="lg">
          {details.name}
        </Text>

        <IconButton
          aria-label="refresh"
          onClick={onRefresh}
          icon={<RepeatIcon />}
        />
      </HStack>

      {/* ... and more details */}
    </Box>
  );
};
