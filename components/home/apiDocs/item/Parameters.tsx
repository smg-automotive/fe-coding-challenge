import { FC } from 'react';
import {
  Box,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@smg-automotive/components';

type Parameter = {
  name: string;
  parameterType: string;
  type: string;
  description: string;
  required?: boolean;
};

type Props = {
  parameters: Parameter[];
};

const Parameters: FC<Props> = ({ parameters }) => (
  <Stack spacing="md">
    <Box textStyle="heading3">Parameters</Box>
    {parameters.length > 0 ? (
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {parameters.map(
              (
                { name, parameterType, type, description, required = false },
                index
              ) => (
                <Tr key={`${name}-${index}`}>
                  <Td>
                    <Box textStyle="body-large" fontWeight="900">
                      {name}
                      {required && (
                        <Box as="sup" color="red.500">
                          * required
                        </Box>
                      )}
                    </Box>
                    <Box textStyle="body-small" fontWeight="700">
                      {type}
                    </Box>
                    <Box
                      textStyle="body-small"
                      fontWeight="700"
                      fontStyle="italic"
                      color="gray.500"
                    >
                      ({parameterType})
                    </Box>
                  </Td>
                  <Td>{description}</Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    ) : (
      <Box p="lg">No parameters</Box>
    )}
  </Stack>
);

export default Parameters;
