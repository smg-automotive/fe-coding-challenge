import { FC } from 'react';
import { Box, H2, H3, Link, Stack, Text } from '@smg-automotive/components';

const Description: FC = () => (
  <Stack spacing="md">
    <H2 id="description">Description</H2>
    <Text>
      One of the most popular way of browsing cars is filtering by make and
      model. To be able to select a model the user needs to provide a make
      first.
    </Text>
    <Text>
      As a user, I would like to see cars of the make and model I&apos;m
      interested in.
    </Text>
    <H3>The flow</H3>
    <Text>
      At first, the user needs to choose a{' '}
      <Link href="#make">
        <Box as="span" fontWeight="700">
          make
        </Box>
      </Link>
      . The select should provide{' '}
      <Link href="#getMakes">
        all for which there currently are listings on the platform
      </Link>{' '}
      as valid options. See <Link href="#fig-1">Fig. 1</Link> and{' '}
      <Link href="#fig-2">Fig. 2</Link> below.
    </Text>
    <Text>
      Next step is to select the{' '}
      <Link href="#model">
        <Box as="span" fontWeight="700">
          model
        </Box>
      </Link>
      . Initially, the model select is disabled (see{' '}
      <Link href="#fig-1">Fig. 1</Link>), after the make is selected all models
      of the chosen make should become available as options (see{' '}
      <Link href="#fix-3">Fig. 3</Link>) - they can be fetched from the{' '}
      <Link href="#getModels">catalogue search service</Link>. If the make
      select is cleared model select should return to its default state.
    </Text>
    <Text>
      After choosing the model, we have enough information to proceed to the
      next step - listing search. Please provide a visual confirmation to the
      user that they can continue the process. On{' '}
      <Link href="#fig-4">Fig. 4</Link> we decided to show a number of{' '}
      <Link href="#listing">
        <Box as="span" fontWeight="700">
          listings
        </Box>
      </Link>{' '}
      available on the platform, but any other visual feedback is good too.
    </Text>
  </Stack>
);

export default Description;
