import { FunctionalComponent } from "preact";
import { useHashParam } from "@metapages/metaframe-hook";
import { Home } from "/@/routes/home";
import { Route as RouteDial } from "/@/routes/dial";
import { Route as RouteSwitch } from "/@/routes/switch";

export const App: FunctionalComponent = () => {
  const [mode] = useHashParam("mode");

  switch (mode) {
    case "dial":
      return <RouteDial />;
    case "switch":
      return <RouteSwitch />;
    default:
      return <Home />;
  }
};
