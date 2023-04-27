import { FC } from 'react';
import { Box, Stack } from '@smg-automotive/components';

type Props = {
  required?: boolean;
  body: object;
  note?: string;
};

const Body: FC<Props> = ({ required = false, body, note }) => (
  <Stack spacing="md">
    <Box textStyle="heading3">
      Request body
      {required && (
        <Box as="sup" color="red.500">
          * required
        </Box>
      )}
    </Box>
    <Box textStyle="heading4">Example value</Box>
    <Box
      as="code"
      bg="black"
      rounded="sm"
      color="white"
      p="sm"
      whiteSpace="pre"
      display="block"
    >
      {JSON.stringify(body, null, 2)}
    </Box>
    {note && (
      <Box textStyle="body-small" fontStyle="italic">
        {note}
      </Box>
    )}
  </Stack>
);

export default Body;
