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
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
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
          "https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggTFJcbiAgaW5wdXRbXCJ7IG86IHsgcm9sbCwgcGl0Y2gsIHlhdyB9ICZlbnNwOyAmZW5zcDtcIl0gLS0-IG1ldGFmcmFtZXtEaWFsfVxuICBtZXRhZnJhbWUgLS0-IHxcIjAgLi4uIDLwnZuRICZlbnNwO1wifCByYWRpYW5zW1wicmFkaWFucyAgXCJdXG4gIG1ldGFmcmFtZSAtLT4gfFwiMCAuLi4gMzYwICZlbnNwO1wifCBkZWdyZWVzW1wiZGVncmVlcyBcIl1cbiAgbWV0YWZyYW1lIC0tPiB8XCJjb25maWd1cmFibGUgMCAuLi4gbiAgJmVuc3A7XCJ8IHZhbHVlW1widmFsdWVcIl0iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9"
        }
      />
    ),
    description: (
      <div>
        <UnorderedList>
          <ListItem>Map one rotation direction to a switch</ListItem>
          <ListItem>Configurable scaled range (e.g. 1-10, 1-150)</ListItem>
          <ListItem>Configurable: always start at zero</ListItem>
          <ListItem>
            <Link href="https://app.metapages.org/#?definition=IntcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4zXCIsXG4gIFwibWV0YVwiOiB7XG4gICAgXCJsYXlvdXRzXCI6IHtcbiAgICAgIFwiZmxleGJveGdyaWRcIjoge1xuICAgICAgICBcImRvY3NcIjogXCJodHRwOi8vZmxleGJveGdyaWQuY29tL1wiLFxuICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkaWFsXCIsXG4gICAgICAgICAgICAgIFwid2lkdGhcIjogXCJjb2wteHMtNFwiLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1heEhlaWdodFwiOiBcIjYwMHB4XCIsXG4gICAgICAgICAgICAgICAgXCJvdmVyZmxvd1lcIjogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vbWV0YXBhZ2VzLm9yZy9tZXRhZnJhbWVzL3Bhc3N0aHJvdWdoLWFycm93Lz9yb3RhdGlvbj05MFwiLFxuICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiY29sLXhzLTFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicGxvdFwiLFxuICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiY29sLXhzLTdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJtZXRhZnJhbWVzXCI6IHtcbiAgICBcImRpYWxcIjoge1xuICAgICAgXCJ1cmxcIjogXCJodHRwczovL21ldGFwYWdlcy5naXRodWIuaW8vbWV0YWZyYW1lLWltdS1jb250cm9scy8jP21vZGU9ZGlhbFwiXG4gICAgfSxcbiAgICBcInBsb3RcIjoge1xuICAgICAgXCJ1cmxcIjogXCJodHRwczovL21ldGFwYWdlcy5vcmcvbWV0YWZyYW1lcy9ncmFwaC1keW5hbWljL1wiLFxuICAgICAgXCJpbnB1dHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJtZXRhZnJhbWVcIjogXCJkaWFsXCIsXG4gICAgICAgICAgXCJzb3VyY2VcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgIFwidGFyZ2V0XCI6IFwieVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGx1Z2luc1wiOiBbXG4gICAgXCJodHRwczovL21ldGFwYWdlcy5naXRodWIuaW8vbWV0YWZyYW1lLWVkaXRvci9cIlxuICBdXG59Ig==" isExternal>
              Live example <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </div>
    ),
    object: <Dial />,
  },

  {
    name: "switch",
    title: "Switch",
    image: (
      <ImageMermaid
        url={
          "https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggTFJcbiAgaW5wdXRbXCJ7IG86IHsgcm9sbCwgcGl0Y2gsIHlhdyB9ICZlbnNwOyAmZW5zcDsgXCJdIC0tPiBtZXRhZnJhbWV7RGlhbH1cbiAgbWV0YWZyYW1lIC0tPiB8XCJ0cnVlIHwgZmFsc2UgJmVuc3A7IFwifCBzd2l0Y2hbXCJzd2l0Y2ggIFwiXVxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ"
        }
      />
    ),
    description: (
      <UnorderedList>
        <ListItem>Map one rotation direction to a dial controller</ListItem>
      </UnorderedList>
    ),
    object: <SwitchControl />,
  },
];

export const Home: FunctionalComponent = () => (
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

export const WidgetItem: FunctionalComponent<ComponentDescription> = ({
  title,
  name,
  image,
  description,
  object,
}) => {
  const [_, setMode] = useHashParam("mode");
  return (
    <Box p="5" borderWidth="1px" rounded="md">
      <SimpleGrid columns={3} spacing={10}>
        <Box
          w="100%"
          onClick={(e) => {
            setMode(name, { modifyHistory: true });
          }}
        >
          <Heading size="md" my="2">
            {title}
          </Heading>
          <VStack>{description}</VStack>
        </Box>
        {image}
        <Box w="100%" onClick={() => setMode(name, { modifyHistory: true })}>
          {object}
        </Box>
      </SimpleGrid>
    </Box>
  );
};
