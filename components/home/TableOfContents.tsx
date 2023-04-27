import { FC } from 'react';
import { Box, Link, Stack } from '@smg-automotive/components';

const TableOfContents: FC = () => (
  <Box as={Stack} position="fixed" marginTop="7xl" spacing="md">
    <Link href="#glossary">
      <Box as="span" textStyle="heading2">
        Glossary
      </Box>
    </Link>
    <Link href="#description">
      <Box as="span" textStyle="heading2">
        Description
      </Box>
    </Link>
    <Link href="#requirements">
      <Box as="span" textStyle="heading2">
        Requirements
      </Box>
    </Link>
    <Link href="#api-docs">
      <Box as="span" textStyle="heading2">
        API docs
      </Box>
    </Link>
  </Box>
);

export default TableOfContents;
