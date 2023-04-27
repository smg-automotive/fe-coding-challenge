import { FC } from 'react';

import {
  H2,
  ListItem,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  UnorderedList,
} from '@smg-automotive/components';

const Glossary: FC = () => (
  <Stack spacing="md">
    <H2 id="glossary" mb="md">
      Glossary
    </H2>
    <TableContainer>
      <Table variant="striped">
        <Tbody>
          <Tr>
            <Td fontWeight="900" id="vehicle-category">
              Vehicle category
            </Td>
            <Td>is a type of the vehicle visible on the platform</Td>
            <Td fontStyle="italic">
              possible values:
              <UnorderedList>
                <ListItem>car</ListItem>
                <ListItem>utility</ListItem>
                <ListItem>motorcycle</ListItem>
                <ListItem>truck</ListItem>
                <ListItem>camper</ListItem>
                <ListItem>trailer</ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight="900" id="make">
              Make
            </Td>
            <Td>is a brand of the car</Td>
            <Td fontStyle="italic">e.g. Volkswagen</Td>
          </Tr>
          <Tr>
            <Td fontWeight="900" id="model">
              Model
            </Td>
            <Td>is a particular model of the car</Td>
            <Td fontStyle="italic">e.g. Golf</Td>
          </Tr>
          <Tr>
            <Td fontWeight="900" id="listing">
              Listing
            </Td>
            <Td>
              is an advertisement on the platform,
              <br />
              it holds information about the car (production year, engine size,
              <br />
              drive type, fuel type, amount of doors, options, mileage, etc.),
              <br /> as well as the information relevant for the ad itself (e.g.
              price)
            </Td>
            <Td />
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  </Stack>
);

export default Glossary;
