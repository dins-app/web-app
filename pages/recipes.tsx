import React, { ReactElement } from 'react';
import { RouterProps } from 'next/router';
import { styled, Grid, Image, Link } from 'reakit';

interface Props {
  router: RouterProps;
}

export default class Recipes extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
  }

  public render(): ReactElement {
    return (
      <PageGrid gap={50}>
        <Grid backgroundColor="#65C4E5" template={`"a b"`} padding={50} gap={10} className="logo_grid">
          {/* Logo */}
          <picture className="logo" style={{ gridArea: 'a' }}>
            <source srcSet={require('../static/img/logo.png?webp')} type="image/webp" />
            <source srcSet={require('../static/img/logo.png')} type="image/jpeg" />
            <Image src={require('../static/img/logo.png')} alt="logo" width={200} />
          </picture>
          {/* Login Link */}
          <Link color="#fff" fontSize={24} fontWeight={600} cursor="pointer" gridArea="b" justifySelf="end">
            Login
          </Link>
        </Grid>
      </PageGrid>
    );
  }
}

const PageGrid = styled(Grid)`
  @media (max-width: 1024px) {
    .poster img {
      object-fit: cover !important;
    }
    .cta_text {
      font-size: 50px !important;
    }
  }
  @media (max-width: 768px) {
    .logo_grid {
      grid-template: 'b' 'a' !important;
      .logo {
        justify-self: center;
      }
    }
    .poster_box {
      height: ${(props: State): string => (props.showAdditional && `1760px`) || `1480px`} !important;
    }
  }
  @media (max-width: 425px) {
    padding: 15px !important;
    .logo_grid {
      margin: 10px !important;
    }
    .poster_box {
      height: ${(props: State): string => (props.showAdditional && `1760px`) || `1480px`} !important;
    }
    .cta_text {
      font-size: 40px !important;
      text-align: center;
    }
    .recipe_preview_grid {
      grid-template-columns: unset !important;
      h2 {
        font-size: 30px !important;
      }
    }
  }
`;
