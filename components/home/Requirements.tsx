import { FC } from 'react';
import { Box, H2, Stack, Text } from '@smg-automotive/components';

const Requirements: FC = () => (
  <Stack spacing="md">
    <H2 id="requirements">Requirements</H2>
    <Text>
      Please edit the existing application and create{' '}
      <Box as="code" backgroundColor="blue.100">
        MakeModelSelect
      </Box>{' '}
      component and a page where it is displayed. It is up to you to structure
      the code and choose the tools. It is okay to use libraries. Do not
      hesitate to reach out to us if you have any questions.
    </Text>

    <Text>
      We are aware that front-end development is quite broad nowadays;
      therefore, the challenge is quite open too. If you prefer to focus on
      creating beautiful visuals and/or custom input fields - great. If
      you&apos;d rather create the most-amazing API layer it&apos;s great too -
      a native select is good enough.
    </Text>

    <Text>
      Please invest a{' '}
      <Box as="span" fontWeight="700">
        maximum of 3-4 hours
      </Box>
      . We understand we&apos;re asking for a substantial amount of your time.
      It&apos;s fine to stop earlier. Also, don&apos;t sweat it if you&apos;re
      not 100% happy with the result when the time is over.
    </Text>

    <Text>
      When you finish, please send us the archived project (
      <Box as="span" fontWeight="700">
        do not submit a pull request
      </Box>{' '}
      - the repository is public so your solution would be visible to everyone).
      We will review your code, the review will be a basis for a follow-up call.
      We will give you feedback and discuss your code.
    </Text>
  </Stack>
);

export default Requirements;
