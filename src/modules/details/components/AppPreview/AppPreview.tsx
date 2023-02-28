import { HStack, IconButton, Text, Image, Box } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { AppDetails } from "../../api";

interface Props {
  details: AppDetails;
  onRefresh: () => void;
}

export const AppPreview = ({ details, onRefresh }: Props) => {
  return (
    <Box p="6" bgColor="gray.100">
      <Image src={details.logo} />

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
    </Box>
  );
};
