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
      <PageGrid padding={40}>
        <Box
          absolute
          top={0}
          left={0}
          backgroundColor="var(--posterBgColor)"
          height="200px"
          width="calc(100vw - (100vw - 100%))"
          zIndex={-90}
          className="poster_box"
        />
        <Grid width="100%" height="134px" template={`"a b"`} gap={10} className="logo_grid">
          {/* Logo */}
          <picture className="logo" gridArea="a" paddingBottom="37px">
            <source srcSet={require('../static/img/logo.png?webp')} type="image/webp" />
            <source srcSet={require('../static/img/logo.png')} type="image/jpeg" />
            <Image
              src={require('../static/img/logo.png')}
              alt="logo"
              width={200}
              onClick={(): void => this.props.router.push('/')}
            />
          </picture>
          {/* Login Link */}
          <Link
            gridArea="b"
            color="#fff"
            fontSize={24}
            fontWeight={600}
            cursor="pointer"
            justifySelf="end"
            alignItems="center"
            marginRight={40}
          >
            Login
          </Link>
        </Grid>
        <Flex flexWrap="wrap" alignItems="center" marginTop="40px" marginBottom="20px" className="button_container">
          <Button
            fontSize={30}
            backgroundColor="#245463"
            minWidth="min-content"
            margin="5px"
            paddingLeft={20}
            paddingRight={20}
            height={56}
            borderRadius={18}
          >
            Dinner
          </Button>
          <Button
            fontSize={30}
            backgroundColor="#245463"
            minWidth="min-content"
            margin="5px"
            paddingLeft={20}
            paddingRight={20}
            height={56}
            borderRadius={18}
          >
            Max 2.5 hours
          </Button>
          <Button
            fontSize={30}
            backgroundColor="#245463"
            minWidth="min-content"
            margin="5px"
            paddingLeft={20}
            paddingRight={20}
            height={56}
            borderRadius={18}
          >
            Low budget
          </Button>
          <Button
            fontSize={30}
            backgroundColor="#245463"
            minWidth="min-content"
            margin="5px"
            paddingLeft={20}
            paddingRight={20}
            height={56}
            borderRadius={18}
          >
            Easy Difficulty
          </Button>
          <Button
            fontSize={30}
            backgroundColor="white"
            color="#245463"
            minWidth="min-content"
            margin="5px"
            paddingLeft={20}
            paddingRight={20}
            height={56}
            borderRadius={18}
            border="2px solid #245463"
          >
            Cuisine
          </Button>
          <Button
            fontSize={30}
            backgroundColor="white"
            color="#245463"
            minWidth="min-content"
            margin="5px"
            paddingLeft={20}
            paddingRight={20}
            height={56}
            borderRadius={18}
            border="2px solid #245463"
          >
            Restrictions
          </Button>
        </Flex>
        <Box marginLeft="-40px" width="100vw" border="1px solid black" />
        <Heading
          fontSize={56}
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
    .logo_grid {
      grid-template: 'b' 'a' !important;
    }
    .logo_grid picture {
      justify-self: center;
    }
    .logo_grid a {
      justify-self: end;
    }
    .logo_grid b {
    }
    .poster_box {
      height: 240px !important;
    }
    .button_container {
      margin-top: 80px !important;
    }
  }

  .logo > img {
    :hover {
      cursor: pointer;
    }
  }
`;
