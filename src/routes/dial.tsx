import { FunctionalComponent } from "preact";
import { useCallback, useState, useContext, useEffect } from "preact/hooks";
import {
  Box,
  Flex,
  Heading,
  Select,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { Basic } from "react-dial-knob";
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
        <Dial />
      </Flex>

      <Spacer />
      <ButtonOptionsMenu options={options} hashkey="dialoptions" />
      <ButtonHelp url="README-dial.md" />
    </Flex>
  );
};

export const Dial: FunctionalComponent = () => {
  const metaframeObj = useMetaframe();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const metaframe = metaframeObj?.metaframe;
    if (!metaframe) {
      return;
    }
    const onInputs = (inputs: MetaframeInputMap): void => {
      // console.log('metaframe.inputs', metaframe.inputs);
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
        console.log(
          `deg=${deg}  pitch=${inputs?.["o"]?.["pitch"]}  yaw=${inputs?.["o"]?.["yaw"]}  roll=${inputs?.["o"]?.["roll"]}`
        );

        metaframe.setOutput("degrees", deg);
        metaframe.setOutput("pitch", pitch);

        setValue(deg);
      }
    };
    metaframe.onInputs(onInputs);
    return () => {
      metaframe.removeListener(Metaframe.INPUTS, onInputs);
    };
  }, [metaframeObj, setValue]);

  // console.log('value', value);

  return (
    <Basic
      diameter={200}
      min={1}
      max={360}
      step={1}
      value={Math.floor(value)}
      theme={{
        defaultColor: "#333",
        activeColor: "#f33",
      }}
      onValueChange={setValue}
    //   ariaLabelledBy={"my-label"}
    >
      {/* <label id={"my-label"}>Degrees</label> */}
    </Basic>
  );
};
