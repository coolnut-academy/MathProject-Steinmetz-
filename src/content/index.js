import { homeRoute } from "./home.js";
import {
  abstractThaiRoute,
  abstractEnglishRoute,
  chapterRoutes
} from "./chapters.js";
import {
  bibliographyRoute,
  appendicesRoute,
  simulationRoute,
  notFoundRoute
} from "./supporting.js";

export const routes = [
  homeRoute,
  abstractThaiRoute,
  abstractEnglishRoute,
  ...chapterRoutes,
  bibliographyRoute,
  appendicesRoute,
  simulationRoute,
  notFoundRoute
];

export function getDefaultRoute() {
  return homeRoute;
}

export function getRouteById(id) {
  return routes.find((route) => route.id === id);
}

export function getContentRoutes() {
  return routes.filter((route) => route.nav !== false);
}
