import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const Page = () => {
  return (
    <Container py="6">
      <Outlet />
    </Container>
  );
};
