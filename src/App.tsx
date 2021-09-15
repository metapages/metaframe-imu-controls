import { FunctionalComponent } from "preact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Home } from "/@/routes/home";
import { Route as RouteDial } from "/@/routes/dial";
import { ButtonHelp } from "/@/components/ButtonHelp";
import { ButtonOptionsMenu, Option } from "/@/components/ButtonOptionsMenu";
import { useHashParam } from "@metapages/metaframe-hook";

const options: Option[] = [
  {
    name: "someoption",
    displayName: "A boolean option",
    default: true,
    type: "boolean",
  },
];

export const App: FunctionalComponent = () => {
  const [mode] = useHashParam("mode");

  switch(mode) {
    case "dial": return <RouteDial />;
    default: return <Home />;
  }
  // return (
  //   <Router basename="/metaframe-imu-controls">
  //     <Switch>
  //       <Route exact path="/">
  //         <Home />
  //       </Route>
  //       <Route exact path="/dial">
  //         <RouteDial />
  //       </Route>
  //     </Switch>
  //   </Router>
  // );
};
