import { AppId } from "./types";

export const endpoints = {
  list: "list",
  details: (appId: AppId) => `details/${appId}`,
} as const;

export enum QueryKey {
  Dashboard = "dashboard",
  Details = "details",
}

export const routes = {
  dashboard: "/",
  details: (appId: AppId = ":appId") => `/details/${appId}`,
} as const;
