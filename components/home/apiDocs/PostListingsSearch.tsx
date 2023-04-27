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
  path: '/v1/listings/search',
};

const body = {
  query: {
    makeModelVersions: [
      {
        makeKey: 'string',
        modelKey: 'string',
      },
    ],
  },
};

const PostListingsSearch: FC = () => (
  <>
    <AccordionButton bg="green.100" _hover={{ bg: 'green.100' }}>
      <Title {...request} id="postListingsSearch" />
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
              description: 'Listings returned',
              shape: {
                content: [
                  {
                    id: 0,
                    make: {
                      id: 0,
                      name: 'string',
                      key: 'string',
                    },
                    model: {
                      id: 0,
                      name: 'string',
                      key: 'string',
                    },
                    versionFullName: 'string',
                    price: 0,
                  },
                ],
                last: true,
                totalPages: 0,
                totalElements: 0,
                size: 0,
                number: 0,
                numberOfElements: 0,
                first: true,
                empty: true,
              },
              note: 'Other properties omitted for simplicity',
            },
          ]}
        />
      </Stack>
    </AccordionPanel>
  </>
);

export default PostListingsSearch;
