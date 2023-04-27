import { FC } from 'react';
import {
  Accordion,
  AccordionItem,
  H2,
  Stack,
} from '@smg-automotive/components';

import PostListingsSearch from './PostListingsSearch';
import PostListingsCount from './PostListingsCount';
import GetModels from './GetModels';
import GetMakes from './GetMakes';

const ApiDocs: FC = () => (
  <Stack spacing="md">
    <H2 id="api-docs">API documentation</H2>
    <Accordion allowMultiple>
      <AccordionItem>
        <GetMakes />
      </AccordionItem>
      <AccordionItem>
        <GetModels />
      </AccordionItem>
      <AccordionItem>
        <PostListingsCount />
      </AccordionItem>
      <AccordionItem>
        <PostListingsSearch />
      </AccordionItem>
    </Accordion>
  </Stack>
);

export default ApiDocs;
