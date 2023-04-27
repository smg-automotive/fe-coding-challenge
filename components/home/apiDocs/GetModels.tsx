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

const request = {
  verb: 'GET' as const,
  path: '/v1/makes/key/{makeKey}/models',
};

const GetModels: FC = () => (
  <>
    <AccordionButton bg="blue.100" _hover={{ bg: 'blue.100' }}>
      <Title {...request} id="getModels" />
    </AccordionButton>
    <AccordionPanel bg="blue.100">
      <Stack spacing="md">
        <Box as="section" p="lg">
          Returns models by makeKey and vehicleCategory
        </Box>
        <Divider borderColor="gray.200" />
        <Parameters
          parameters={[
            {
              name: 'makeKey',
              required: true,
              type: 'string',
              parameterType: 'path',
              description: 'a make for which you want to fetch models',
            },
            {
              name: 'vehicleCategory',
              required: true,
              type: 'string',
              parameterType: 'query',
              description:
                'Available values: car, utility, motorcycle, truck, camper, trailer',
            },
          ]}
        />
        <Divider borderColor="gray.200" />
        <Responses
          {...request}
          path="/v1/makes/key/audi/models"
          query="?vehicleCategory=car"
          responses={[
            {
              code: 200,
              description:
                'All models for a make and a vehicle category returned',
              shape: [
                {
                  id: 0,
                  key: 'string',
                  name: 'string',
                },
              ],
            },
          ]}
        />
      </Stack>
    </AccordionPanel>
  </>
);

export default GetModels;
