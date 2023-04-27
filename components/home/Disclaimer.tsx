import { FC } from 'react';
import { Box, Text } from '@smg-automotive/components';

const Disclaimer: FC = () => (
  <Text textStyle="body-small">
    <Box as="span" fontWeight="700">
      Note:{' '}
    </Box>
    Please treat the above images as guidelines and wireframes, not as design
    and requirements. The challenge is quite open, and it&apos;s up to you how
    far you&apos;d like to go.
  </Text>
);

export default Disclaimer;
