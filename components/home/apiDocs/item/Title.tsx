import { FC } from 'react';
import { Box, Stack } from '@smg-automotive/components';

type Verb = 'GET' | 'POST';

type Props = {
  verb: Verb;
  path: string;
  id: string;
};

const badgeBackground = (verb: Verb) => {
  switch (verb) {
    case 'GET':
      return 'blue.200';
    case 'POST':
      return 'green.200';
  }
};

const Title: FC<Props> = ({ verb, path, id }) => (
  <Stack direction="row" alignItems="center">
    <Box
      textStyle="body-small"
      fontWeight="700"
      p="xs"
      bg={badgeBackground(verb)}
      rounded="xs"
      w="80px"
      textAlign="center"
    >
      {verb}
    </Box>
    <Box as="span" textStyle="body-large" fontWeight="700" id={id}>
      {path}
    </Box>
  </Stack>
);

export default Title;
