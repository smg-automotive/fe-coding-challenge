import Image from 'next/image';
import type { NextPage } from 'next';

import { Grid, GridItem, H1, Stack } from '@smg-automotive/components';

import TableOfContents from 'components/home/TableOfContents';
import Requirements from 'components/home/Requirements';
import Glossary from 'components/home/Glossary';
import Figure from 'components/home/Figure';
import Disclaimer from 'components/home/Disclaimer';
import Description from 'components/home/Description';
import ApiDocs from 'components/home/apiDocs';

const Home: NextPage = () => {
  return (
    <Grid
      gap="md"
      templateAreas={`
        "toc header header"
        "toc glossary glossary"
        "toc description description"
        "toc figure1 figure2"
        "toc figure3 figure4"
        "toc disclaimer disclaimer"
        "toc requirements requirements"
        "toc apis apis"
      `}
      templateColumns="200px 1fr 1fr"
    >
      <GridItem area="header">
        <Stack alignItems="center">
          <Image
            src="/smg-automotive.png"
            alt="smg automotive logo"
            width={100}
            height={100}
          />
          <H1>👋 SMG Automotive frontend coding challenge</H1>
        </Stack>
      </GridItem>
      <GridItem area="toc">
        <TableOfContents />
      </GridItem>
      <GridItem area="glossary">
        <Glossary />
      </GridItem>
      <GridItem area="description">
        <Description />
      </GridItem>
      <GridItem area="figure1">
        <Figure index={1} caption="empty state" src="/figures/empty.png" />
      </GridItem>
      <GridItem area="figure2">
        <Figure index={2} caption="make select" src="/figures/makeSelect.png" />
      </GridItem>
      <GridItem area="figure3">
        <Figure
          index={3}
          caption="model select"
          src="/figures/modelSelect.png"
        />
      </GridItem>
      <GridItem area="figure4">
        <Figure index={4} caption="listings count" src="/figures/count.png" />
      </GridItem>
      <GridItem area="disclaimer">
        <Disclaimer />
      </GridItem>
      <GridItem area="requirements">
        <Requirements />
      </GridItem>
      <GridItem area="apis">
        <ApiDocs />
      </GridItem>
    </Grid>
  );
};

export default Home;
