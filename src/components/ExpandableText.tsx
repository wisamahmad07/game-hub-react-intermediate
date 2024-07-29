import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  children: string[];
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const limit = 500;

  if (!children) return null;

  if (children[0].length <= limit) return <Text>{children}</Text>;

  const summary = children[0].substring(0, limit);
  if (children[0].length >= limit)
    return (
      <>
        <Text>
          {expanded ? children : summary + "..."}
          <Button
            marginLeft={2}
            onClick={() => setExpanded(!expanded)}
            size="xs"
            fontWeight="bold"
            colorScheme="yellow"
          >
            {expanded ? "Show Less" : "Load More"}
          </Button>
        </Text>
      </>
    );
};

export default ExpandableText;
