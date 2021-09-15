import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useMetaframe } from "@metapages/metaframe-hook";
import { Metaframe, MetaframeInputMap } from "@metapages/metapage";
import { Badge } from "@chakra-ui/react";

export const MetaframeOutputsRaw: FunctionalComponent = () => {
  const metaframeObj = useMetaframe();
  const [inputs, setInputs] = useState<MetaframeInputMap>({});

  useEffect(() => {
    const metaframe = metaframeObj?.metaframe;
    if (!metaframe) {
      return;
    }
    const onInputs = (inputs: MetaframeInputMap): void => {
      setInputs(inputs);
    };
    metaframe.onInputs(onInputs);
    return () => {
      metaframe.removeListener(Metaframe.INPUTS, onInputs);
    };
  }, [metaframeObj, setInputs]);

  return (
    <div>
      <Badge>metaframe inputs:</Badge>{" "}
      {inputs ? JSON.stringify(inputs) : "none yet"}
    </div>
  );
};
