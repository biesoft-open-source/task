import { Container } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export const Page = ({ children }: Props) => {
  return <Container py="6">{children}</Container>;
};
