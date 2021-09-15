import { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import {
  Flex,
  Spacer,
  Switch,
} from "@chakra-ui/react";
import { useMetaframe } from "@metapages/metaframe-hook";
import { MetaframeInputMap, Metaframe } from "@metapages/metapage";
import { ButtonHelp } from "/@/components/ButtonHelp";
import { ButtonOptionsMenu, Option } from "/@/components/ButtonOptionsMenu";

const options: Option[] = [
  {
    name: "min",
    displayName: "A boolean option",
    default: true,
    type: "boolean",
  },
];

export const Route: FunctionalComponent = () => {
  return (
    <Flex padding="2px">
      <Flex flexDirection="column">
        <SwitchControl />
      </Flex>

      <Spacer />
      <ButtonOptionsMenu options={options} hashkey="dialoptions" />
      <ButtonHelp url="README-switch.md" />
    </Flex>
  );
};

export const SwitchControl: FunctionalComponent = () => {
  const metaframeObj = useMetaframe();
  const [value, setValue] = useState<boolean>(false);

  useEffect(() => {
    const metaframe = metaframeObj?.metaframe;
    if (!metaframe) {
      return;
    }
    const onInputs = (inputs: MetaframeInputMap): void => {
      console.log("metaframe.inputs", metaframe.inputs);
      if (inputs?.["o"]?.["pitch"] !== undefined) {
        let pitch: number = inputs?.["o"]?.["pitch"];
        const yaw: number = inputs?.["o"]?.["yaw"];
        if (pitch > 0 && yaw > 0) {
          pitch = Math.PI - pitch;
        }
        if (pitch < 0 && yaw < 0) {
          pitch = Math.PI * 2 + pitch;
        }

        let deg: number = pitch * (180 / Math.PI);
        if (deg < 0) {
          deg = 180 - deg;
        }

        const newValue: boolean = deg > 90;

        metaframe.setOutput("switch", newValue);
        setValue(newValue);
      }
    };
    metaframe.onInputs(onInputs);
    return () => {
      metaframe.removeListener(Metaframe.INPUTS, onInputs);
    };
  }, [metaframeObj, setValue]);

  return <Switch size="lg" isChecked={value} />;
};
