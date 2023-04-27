import { FC } from 'react';
import Image from 'next/image';
import { Box } from '@smg-automotive/components';

type Props = {
  caption: string;
  src: string;
  index: number;
};

const Figure: FC<Props> = ({ index, caption, src }) => (
  <Box
    as="figure"
    id={`fig-${index}`}
    display="flex"
    flexDirection="column"
    padding="sm"
    border="1px solid"
    rounded="sm"
    borderColor="gray.100"
    shadow="xs"
  >
    <Box flexShrink={0} h="250px" w="100%" position="relative">
      <Image
        src={src}
        alt={caption}
        fill={true}
        style={{ objectFit: 'contain' }}
      />
    </Box>
    <Box as="figcaption" textAlign="center">
      <Box as="span" fontWeight="700">
        Fig. {index}
      </Box>
      &nbsp;-&nbsp;
      <Box as="span" fontStyle="italic">
        {caption}
      </Box>
    </Box>
  </Box>
);

export default Figure;
