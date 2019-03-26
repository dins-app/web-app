import React from "react";
import { Context } from "../components";
import { styled, Grid, Box, Image, Heading } from "reakit";
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
          height="120vh"
          width="calc(100vw - (100vw - 100%))"
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
              height="120vh"
              objectFit="stretch"
            />
          </Poster>
        </Box>
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
            width={180}
            margin="30px 0 70px 30px"
          />
        </Logo>
        {/* Card */}
        <Card
          backgroundColor="#fff"
          boxShadow="0 1px 1px 0 rgba(0, 0, 0, 0.5)"
          borderRadius={26}
          margin="0 3vw"
          width={700}
          height="70vh"
        >
          <Heading
            alignSelf="center"
            textAlign="center"
            fontWeight={500}
            fontSize={60}
          >
            {this.state.message}
          </Heading>
        </Card>
      </Grid>
    );
  }
}

// Styled Components and Media Queries
const Card = styled(Grid)`
  @media (max-width: 768px) {
    width: 92vw !important;
    justify-self: center;
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

const Poster = styled.picture`
  @media (max-width: 1024px) {
    img {
      object-fit: cover !important;
    }
  }
`;
