import { FunctionalComponent } from "preact";
import { Image, Link } from "@chakra-ui/react";

export const ImageMermaid: FunctionalComponent<{ url: string }> = ({ url }) => {
  const editableUrl = `${url
    .replace(
      "https://mermaid.ink/img/",
      "https://mermaid-js.github.io/mermaid-live-editor/edit#"
    )
    .replace(
      "https://mermaid.ink/svg/",
      "https://mermaid-js.github.io/mermaid-live-editor/edit#"
    )}`;
  return (
    <Link href={editableUrl}>
      <Image src={url} />
    </Link>
  );
};
