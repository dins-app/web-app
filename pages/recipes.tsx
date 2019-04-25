import React from 'react';
import { RouterProps } from 'next/router';
import { styled, Button, Box, Flex, Grid, Image, Link, Heading } from 'reakit';
import { RecipePreviewTile } from '../components';

interface Props {
  router: RouterProps;
}

export default class Recipes extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <PageGrid gap={10} style={{ width: '100%' }}>
        <Grid backgroundColor="var(--posterBgColor)" template={`"a b"`} gap={10} className="logo_grid">
          {/* Logo */}
          <picture className="logo" style={{ gridArea: 'a', marginTop: 40, marginLeft: 40, marginBottom: 37 }}>
            <source srcSet={require('../static/img/logo.png?webp')} type="image/webp" />
            <source srcSet={require('../static/img/logo.png')} type="image/jpeg" />
            <Image src={require('../static/img/logo.png')} alt="logo" width={200} />
          </picture>
          {/* Login Link */}
          <Link
            color="#fff"
            fontSize={24}
            fontWeight={600}
            cursor="pointer"
            gridArea="b"
            justifySelf="end"
            marginRight={40}
          >
            Login
          </Link>
        </Grid>
        <Flex flexWrap="wrap" alignItems="center" margin="15px">
          <Button
            style={{
              backgroundColor: '#245463',
              fontSize: 30,
              minWidth: 'min-content',
              margin: '5px',
              paddingLeft: 20,
              paddingRight: 20,
              height: 56,
              borderRadius: 18,
            }}
          >
            Dinner
          </Button>
          <Button
            style={{
              backgroundColor: '#245463',
              fontSize: 30,
              minWidth: 'min-content',
              margin: '5px',
              paddingLeft: 20,
              paddingRight: 20,
              height: 56,
              borderRadius: 18,
            }}
          >
            Max 2.5 hours
          </Button>
          <Button
            style={{
              backgroundColor: '#245463',
              fontSize: 30,
              minWidth: 'min-content',
              margin: '5px',
              paddingLeft: 20,
              paddingRight: 20,
              height: 56,
              borderRadius: 18,
            }}
          >
            Low budget
          </Button>
          <Button
            style={{
              fontSize: 30,
              backgroundColor: '#245463',
              minWidth: 'min-content',
              margin: '5px',
              paddingLeft: 20,
              paddingRight: 20,
              height: 56,
              borderRadius: 18,
            }}
          >
            Easy Difficulty
          </Button>
          <Button
            style={{
              fontSize: 30,
              backgroundColor: 'white',
              minWidth: 'min-content',
              margin: '5px',
              paddingLeft: 20,
              paddingRight: 20,
              height: 56,
              borderRadius: 18,
            }}
          >
            Cuisine
          </Button>
          <Button
            style={{
              fontSize: 30,
              borderColor: '#245463 !important',
              backgroundColor: 'white',
              minWidth: 'min-content',
              margin: '5px',
              paddingLeft: 20,
              paddingRight: 20,
              height: 56,
              borderRadius: 18,
            }}
          >
            Restrictions
          </Button>
        </Flex>
        <Box width="100%" border="1px solid black" />
        <Heading
          fontSize={64}
          fontWeight={500}
          color="#042347"
          margin={0}
          marginTop={106}
          paddingLeft={40}
          paddingRight={40}
          className="cta_text optional_fader"
        >
          Dinner recipes for you
        </Heading>

        <Grid templateColumns="repeat(auto-fit, minmax(350px, 1fr))" style={{ marginLeft: 40, marginRight: 40 }}>
          <RecipePreviewTile
            name="Tuscan Kale Chips"
            time="1"
            price="8"
            difficulty="easy"
            images={{
              webp: require('../static/img/kale.jpg?webp'),
              jpg: require('../static/img/kale.jpg'),
            }}
          />
          <RecipePreviewTile
            name="Spicy Pork Noodles"
            time="2"
            price="6"
            difficulty="mid"
            images={{
              webp: require('../static/img/spaghetti.jpg?webp'),
              jpg: require('../static/img/spaghetti.jpg'),
            }}
          />
          <RecipePreviewTile
            name="Meatballs &amp; Brocolli"
            time="2.5"
            price="8"
            difficulty="hard"
            images={{
              webp: require('../static/img/meatballs.jpg?webp'),
              jpg: require('../static/img/meatballs.jpg'),
            }}
          />
          <RecipePreviewTile
            name="Tuscan Kale Chips"
            time="1"
            price="8"
            difficulty="easy"
            images={{
              webp: require('../static/img/kale.jpg?webp'),
              jpg: require('../static/img/kale.jpg'),
            }}
          />
          <RecipePreviewTile
            name="Spicy Pork Noodles"
            time="2"
            price="6"
            difficulty="mid"
            images={{
              webp: require('../static/img/spaghetti.jpg?webp'),
              jpg: require('../static/img/spaghetti.jpg'),
            }}
          />
          <RecipePreviewTile
            name="Meatballs &amp; Brocolli"
            time="2.5"
            price="8"
            difficulty="hard"
            images={{
              webp: require('../static/img/meatballs.jpg?webp'),
              jpg: require('../static/img/meatballs.jpg'),
            }}
          />
        </Grid>
      </PageGrid>
    );
  }
}

const PageGrid = styled(Grid)`
  @media (max-width: 768px) {
  }
`;
