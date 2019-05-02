import { styled, Grid, Heading, Paragraph, Image } from 'reakit';
import { NextStatelessComponent } from 'next';
import React from 'react';

interface Props {
  overlay: any;
}

const ViewRecipeModal: NextStatelessComponent<Props> = (props: Props): JSX.Element => (
  <Grid width="90vw" height="90vh" position="relative">
    <CloseButton onClick={props.overlay.hide} />
    {/* TOP ROW */}
    <Grid margin={20} templateColumns="1fr 1fr" gap={20}>
      {/* Left Col */}
      <Grid height="min-content">
        <Heading use="h2" color="#042347" margin={0} fontSize={60} fontWeight={700}>
          {props.name}
        </Heading>
        <Heading use="h3" color="#727272" fontSize={22} marginTop={5} marginBottom={20} fontWeight={700}>
          {`EASY DINNER \u00B7 `}
          COOK TIME:{' '}
          {(isNaN(Number(props.time)) && `n/a`) ||
            ((Number(props.time) == 1 && `${props.time} HOUR`) || `${props.time} HOURS`)}
          {props.price && ` \u00B7 $${props.price}/PERSON`}
        </Heading>
        {/* Reviews Preview */}
        <Grid>
          <Heading use="h4" fontWeight={600} color="#4a4a4a" margin={0}>
            Top Review:
          </Heading>
          <Paragraph color="#4a4a4a" fontWeight={300} fontSize={20}>
            I found out the secret to making these right. First, I had wilted lacinato kale in the fridge that I made
            stiff by cutting the stems and letting them sit in water overnight, like flowers. Then, I washed them and
            made sure they were very dry. (Turned on the oven at 350.) I de-stemmed the kale and cut them into the size
            of the bigger U.S…
          </Paragraph>
        </Grid>
      </Grid>
      <Picture>
        <source srcSet={(props.hasOwnProperty('images') && props.images.webp) || ''} type="image/webp" />
        <source srcSet={(props.hasOwnProperty('images') && props.images.jpg) || ''} type="image/jpeg" />
        <Image src={(props.hasOwnProperty('images') && props.images.jpg) || ''} alt={props.name.toLowerCase()} />
      </Picture>
    </Grid>
  </Grid>
);

export default ViewRecipeModal;

// Styled Components and Media Queries
const CloseButton = styled.div`
  :before {
    content: 'x';
  }
  :hover {
    background: rgba(234, 234, 234, 0.4);
  }
  position: absolute;
  right: 0;
  border-radius: 6px;
  font-size: 32px;
  font-weight: 900;
  color: #444;
  padding: 0 8px;
  line-height: 1;
  height: 35px;
`;

const Picture = styled.picture`
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
  width: 100%;
  max-height: calc(50vh + 20px);
  margin: 30px 20px 0 20px;
  clip-path: inset(4px);
`;
