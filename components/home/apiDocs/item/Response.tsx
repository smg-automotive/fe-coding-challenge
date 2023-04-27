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

type Verb = 'GET' | 'POST';

type Response = {
  code: number;
  description: string;
  shape: object;
  note?: string;
};

type Props = {
  path: string;
  verb: Verb;
  query?: string;
  body?: object;
  responses: Response[];
};

const host = 'https://api.preprod.autoscout24.dev';

const Responses: FC<Props> = ({ path, verb, body, query, responses }) => (
  <Stack spacing="md">
    <Box textStyle="heading3">Responses</Box>
    <Box textStyle="heading4">Curl</Box>
    <Box
      as="code"
      bg="black"
      rounded="sm"
      color="white"
      p="sm"
      whiteSpace="pre"
    >
      curl -X &apos;{verb}&apos; \ <br />
      {'  '}&apos;{host}
      {path}
      {query}&apos; \ <br />
      {'  '}-H &apos;accept: */*&apos;
      {body && (
        <>
          <br />
          {'  '}-H &apos;Content-Type: application/json&apos; \
          <br />
          {'  '}-d &apos;{JSON.stringify(body, null, 2)}&apos;
        </>
      )}
    </Box>
    <Box textStyle="heading4">Request URL</Box>
    <Box as="code" bg="black" rounded="sm" color="white" p="sm">
      {host}
      {path}
      {query}
    </Box>
    <Box textStyle="heading4">Responses</Box>
    <TableContainer>
      <Table h="">
        <Thead>
          <Tr>
            <Th>Code</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {responses.map(({ code, description, shape, note }, index) => (
            <Tr key={`${code}-${index}`}>
              <Td>
                <Box h="full">{code}</Box>
              </Td>
              <Td>
                <Box p="md">{description}</Box>
                <Box
                  as="code"
                  bg="black"
                  rounded="sm"
                  color="white"
                  p="sm"
                  whiteSpace="pre"
                  display="block"
                >
                  {JSON.stringify(shape, null, 2)}
                </Box>
                {note && (
                  <Box textStyle="body-small" fontStyle="italic">
                    {note}
                  </Box>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  </Stack>
);

export default Responses;
