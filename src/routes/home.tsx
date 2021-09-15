import { FunctionalComponent } from "preact";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  ListItem,
  Select,
  SimpleGrid,
  Spacer,
  UnorderedList,
} from "@chakra-ui/react";
import { ButtonHelp } from "/@/components/ButtonHelp";
import { Link as ReachLink } from "react-router-dom";
import { useHashParam } from "@metapages/metaframe-hook";
import { Dial } from "/@/routes/dial";
import { SwitchControl } from "/@/routes/switch";
import { ImageMermaid } from "/@/components/ImageMermaid";

type ComponentDescription = {
  name: string;
  image: JSX.Element;
  title: string;
  description: JSX.Element;
  object: JSX.Element;
};

const components: ComponentDescription[] = [
  {
    name: "dial",
    title: "Dial",
    image: (
      <ImageMermaid
        url={
          "https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggTFJcbiAgaW5wdXRbXCJ7IG86IHsgcm9sbCwgcGl0Y2gsIHlhdyB9IFwiXSAtLT4gbWV0YWZyYW1le0RpYWx9XG4gIG1ldGFmcmFtZSAtLT4gfFwiMCAuLi4gMvCdm5EgXCJ8IHJhZGlhbnNbXCJyYWRpYW5zICBcIl1cbiAgbWV0YWZyYW1lIC0tPiB8XCIwIC4uLiAzNjAgXCJ8IGRlZ3JlZXNbXCJkZWdyZWVzIFwiXVxuICBtZXRhZnJhbWUgLS0-IHxcImNvbmZpZ3VyYWJsZSAwIC4uLiBuICBcInwgdmFsdWVbXCJ2YWx1ZVwiXSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6dHJ1ZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOnRydWV9"
        }
      />
    ),
    description: (
      <UnorderedList>
        <ListItem>Map one rotation direction to a switch</ListItem>
        <ListItem>Configurable scaled range (e.g. 1-10, 1-150)</ListItem>
        <ListItem>Configurable: always start at zero</ListItem>
      </UnorderedList>
    ),
    object: <Dial />,
  },

  {
    name: "switch",
    title: "Switch",
    image: (
      <ImageMermaid
        url={
          "https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggTFJcbiAgaW5wdXRbXCJ7IG86IHsgcm9sbCwgcGl0Y2gsIHlhdyB9IFwiXSAtLT4gbWV0YWZyYW1le0RpYWx9XG4gIG1ldGFmcmFtZSAtLT4gfFwidHJ1ZSB8IGZhbHNlIFwifCBzd2l0Y2hbXCJzd2l0Y2ggIFwiXVxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ"
        }
      />
    ),
    description: (
      <UnorderedList>
        <ListItem>Map one rotation direction to a dial controler</ListItem>
      </UnorderedList>
    ),
    object: <SwitchControl />,
  },
];

export const Home: FunctionalComponent = () => {
  const [mode, setMode] = useHashParam("mode");

  return (
    <Box w="100%" p={4}>
      <Flex>
        <Flex stretch flexDirection="column">
          <Box w="100%" p={2}>
            <Heading size="md">Motion to control</Heading>
          </Box>
          <Box w="10px" h="20px" />

          {components.map((item, i) => (
            <WidgetItem key={i} {...item} />
          ))}
        </Flex>

        <Spacer />
        <ButtonHelp />
      </Flex>
    </Box>
  );
};

export const WidgetItem: FunctionalComponent<ComponentDescription> = ({
  title,
  name,
  image,
  description,
  object,
}) => {
  const [_, setMode] = useHashParam("mode");
  return (
    <Box as="article" p="5" borderWidth="1px" rounded="md">
      <SimpleGrid columns={3} spacing={10}>
        <Box
          as="button"
          w="100%"
          onClick={() => setMode(name, { modifyHistory: true })}
        >
          <Flex flexDirection="column">
            <Heading size="md" my="2">
              {title}
            </Heading>
            {description}
          </Flex>
        </Box>
        {image}
        {object}
      </SimpleGrid>
    </Box>
  );
};
