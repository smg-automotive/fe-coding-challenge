import { FC } from 'react';
import {
  AccordionButton,
  AccordionPanel,
  Box,
  Divider,
  Stack,
} from '@smg-automotive/components';

import Title from './item/Title';
import Responses from './item/Response';
import Parameters from './item/Parameters';
import Body from './item/Body';

const request = {
  verb: 'POST' as const,
  path: '/v1/listings/count',
};

const body = {
  query: {
    makeModelVersions: [
      {
        makeKey: 'vw',
        modelKey: 'golf',
      },
    ],
  },
};

const PostListingsCount: FC = () => (
  <>
    <AccordionButton bg="green.100" _hover={{ bg: 'green.100' }}>
      <Title {...request} id="postListingsCount" />
    </AccordionButton>
    <AccordionPanel bg="green.100">
      <Stack spacing="md">
        <Box as="section" p="lg">
          Returns listings count per specified query
        </Box>
        <Divider borderColor="gray.200" />
        <Parameters parameters={[]} />
        <Divider borderColor="gray.200" />
        <Body
          required={true}
          body={body}
          note="Other filters have been omitted for simplicity"
        />
        <Divider borderColor="gray.200" />
        <Responses
          {...request}
          body={body}
          responses={[
            {
              code: 200,
              description: 'Listing count returned',
              shape: {
                count: 0,
              },
            },
          ]}
        />
      </Stack>
    </AccordionPanel>
  </>
);

export default PostListingsCount;
