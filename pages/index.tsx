import React from "react";
import { Context } from "../components";
import {
  styled,
  Grid,
  Flex,
  Image,
  Heading,
  Link,
  Box,
  Label,
  Input,
  Paragraph,
  Button
} from "reakit";
import { RouterProps } from "next/router";

// Props types
interface IProps {
  router: RouterProps;
}

// State types
interface IState {
  message?: string;
}

export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const initialState = {};
    this.state = initialState;
  }

  // needed for access to this.context
  static contextType = Context;

  async componentDidMount() {
    this.setState({ message: "Coming Soon!" });
  }

  render() {
    return (
      <Grid>
        {/* Poster Container */}
        <Box
          absolute
          backgroundColor="var(--posterBgColor)"
          height={1352}
          // width="calc(100vw - (100vw - 100%))"
          width={1920}
          zIndex={-90}
        >
          {/* Poster */}
          <Poster>
            <source
              srcSet={require("../static/img/poster.jpg?webp")}
              type="image/webp"
            />
            <source
              srcSet={require("../static/img/poster.jpg")}
              type="image/jpeg"
            />
            <Image
              src={require("../static/img/poster.jpg")}
              alt="poster"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </Poster>
        </Box>
        {/* Section 1 - Logo and Login Link */}
        <Grid templateColumns="1fr min-content" margin="49px 73px 37px 73px">
          {/* Logo */}
          <Logo>
            <source
              srcSet={require("../static/img/logo.png?webp")}
              type="image/webp"
            />
            <source
              srcSet={require("../static/img/logo.png")}
              type="image/jpeg"
            />
            <Image
              src={require("../static/img/logo.png")}
              alt="logo"
              width={230}
            />
          </Logo>
          {/* Login Link */}
          <Link color="#fff" fontSize={30} fontWeight={600} cursor="pointer">
            Login
          </Link>
        </Grid>
        {/* Section 2 - Card */}
        <Card
          backgroundColor="#fff"
          boxShadow="0 1px 1px 0 rgba(0, 0, 0, 0.5)"
          borderRadius={26}
          margin="63px 66px 368px 66px"
          width={834}
          height={824}
          templateRows="min-content min-content min-content min-content"
          gap={54}
        >
          {/* Card Heading */}
          <Heading
            fontSize={64}
            fontWeight={500}
            margin="54px 0 0 69px"
            color="#042347"
          >
            Find recipes for your budget and skill level.
          </Heading>
          {/* First Row */}
          <Grid margin="0 69px">
            <Grid templateColumns="1fr 1fr" gap={32}>
              <Label fontSize={24} color="#4a4a4a" fontWeight={600}>
                BUDGET
                <Input
                  use="select"
                  defaultValue="Budget"
                  color="#a4a4a4"
                  fontWeight={500}
                  fontSize={34}
                  borderRadius={12}
                  border="1px solid #dcdcdc"
                  marginTop={13}
                >
                  <option>Budget</option>
                </Input>
              </Label>
              <Label fontSize={24} color="#4a4a4a" fontWeight={600}>
                SKILL
                <Input
                  use="select"
                  defaultValue="Skill level"
                  color="#a4a4a4"
                  fontWeight={500}
                  fontSize={34}
                  borderRadius={12}
                  border="1px solid #dcdcdc"
                  marginTop={13}
                >
                  <option>Skill level</option>
                </Input>
              </Label>
            </Grid>
          </Grid>
          {/* Second Row */}
          <Grid margin="0 69px">
            <Grid templateColumns="1fr 1fr" gap={32}>
              <Label fontSize={24} color="#4a4a4a" fontWeight={600}>
                MAX COOK TIME
                <Input
                  use="select"
                  defaultValue="Budget"
                  color="#a4a4a4"
                  fontWeight={500}
                  fontSize={34}
                  borderRadius={12}
                  border="1px solid #dcdcdc"
                  marginTop={13}
                >
                  <option>hh:mm</option>
                </Input>
              </Label>
              <Label fontSize={24} color="#4a4a4a" fontWeight={600}>
                MEAL
                <Input
                  use="select"
                  defaultValue="Skill level"
                  color="#a4a4a4"
                  fontWeight={500}
                  fontSize={34}
                  borderRadius={12}
                  border="1px solid #dcdcdc"
                  marginTop={13}
                >
                  <option>Meal type</option>
                </Input>
              </Label>
            </Grid>
          </Grid>
          {/* Third Row */}
          <Grid margin="0 69px">
            <Paragraph color="#266ab8" fontSize={24} fontWeight={600}>
              + ADDITIONAL OPTIONS
            </Paragraph>
          </Grid>
          {/* Fourth Row */}
          <Grid margin="-27px 33px" justifyItems="end">
            <Button
              width={204}
              height={81}
              borderRadius={12}
              backgroundColor="#295e70"
              fontSize={28}
            >
              Search
            </Button>
          </Grid>
        </Card>
        {/* Section 3 - Call To Action */}
        <Heading fontSize={64} fontWeight={500} color="#042347" margin="0 94px">
          Check out some of our most popular recipes
        </Heading>
        {/* Section 4 - Recipe Preview Tiles */}
        <Grid templateColumns="1fr 1fr 1fr" gap={86} margin="100px 94px">
          <RecipePreviewTile>
            <RecipePreviewImage>
              <source
                srcSet={require("../static/img/kale.jpg?webp")}
                type="image/webp"
              />
              <source
                srcSet={require("../static/img/kale.jpg")}
                type="image/jpeg"
              />
              <Image
                src={require("../static/img/kale.jpg")}
                alt="kale"
                width={520}
                height={714}
                objectFit="contain"
              />
            </RecipePreviewImage>
            <RecipePreviewDifficultyFab variant="easy">
              EASY
            </RecipePreviewDifficultyFab>
            <RecipePreviewTitle>Tuscan Kale Chips</RecipePreviewTitle>
          </RecipePreviewTile>
          <RecipePreviewTile>
            <RecipePreviewImage>
              <source
                srcSet={require("../static/img/spaghetti.jpg?webp")}
                type="image/webp"
              />
              <source
                srcSet={require("../static/img/spaghetti.jpg")}
                type="image/jpeg"
              />
              <Image
                src={require("../static/img/spaghetti.jpg")}
                alt="spaghetti"
                width={520}
                height={714}
                objectFit="contain"
              />
            </RecipePreviewImage>
            <RecipePreviewDifficultyFab variant="mid">
              MID
            </RecipePreviewDifficultyFab>
            <RecipePreviewTitle>Tuscan Kale Chips</RecipePreviewTitle>
          </RecipePreviewTile>
          <RecipePreviewTile>
            <RecipePreviewImage>
              <source
                srcSet={require("../static/img/meatballs.jpg?webp")}
                type="image/webp"
              />
              <source
                srcSet={require("../static/img/meatballs.jpg")}
                type="image/jpeg"
              />
              <Image
                src={require("../static/img/meatballs.jpg")}
                alt="kale"
                width={520}
                height={714}
                objectFit="contain"
              />
            </RecipePreviewImage>
            <RecipePreviewDifficultyFab variant="hard">
              HARD
            </RecipePreviewDifficultyFab>
            <RecipePreviewTitle>Meatballs &amp; Broccoli</RecipePreviewTitle>
          </RecipePreviewTile>
        </Grid>
      </Grid>
    );
  }
}

// Styled Components and Media Queries
const Poster = styled.picture`
  @media (max-width: 1024px) {
    img {
      object-fit: cover !important;
    }
  }
`;
const Logo = styled.picture`
  @media (max-width: 768px) {
    justify-self: center;
    img {
      margin: 30px 0 !important;
    }
  }
`;
const Card = styled(Grid)`
  @media (max-width: 768px) {
    width: 92vw !important;
    justify-self: center;
  }
`;
const RecipePreviewTile = styled(Grid)`
  position: relative;
  width: 520px;
  height: 714px;
`;
const RecipePreviewImage = styled.picture`
  position: absolute;
  z-index: -1;
`;

interface RecipePreviewDifficultyFabProps {
  variant?: string;
}
const RecipePreviewDifficultyFab = styled.div<RecipePreviewDifficultyFabProps>`
  position: absolute;
  right: 0;
  width: 83px;
  height: 83px;
  border-radius: 50%;
  border: 7px solid white;
  line-height: 3.6;
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin-top: -41px;
  margin-right: -41px;
  ${props =>
    props.variant &&
    ((props.variant === "easy" && `background-color: #a9bfc6;`) ||
      (props.variant === "mid" && `background-color: #698e9a;`) ||
      (props.variant === "hard" && `background-color: #295e70;`))}
`;
const RecipePreviewTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  align-self: center;
`;
