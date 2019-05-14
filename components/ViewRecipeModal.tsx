import { styled, Grid, Heading, Paragraph, Image, List, Box, Group, Button } from 'reakit';
import { NextStatelessComponent } from 'next';
import React from 'react';

interface Props {
  overlay: any;
  name?: any;
  time?: any;
  price?: any;
}

const ViewRecipeModal: NextStatelessComponent<Props> = (props: Props): JSX.Element => (
  <>
    <CloseButton onClick={props.overlay.hide} />
    <Grid width="90vw" height="90vh" position="relative" padding="calc(1em + 20px)" overflowY="auto" zIndex="1">
      {/* TOP ROW */}
      <Grid
        templateColumns="1fr 1fr"
        gap={20}
        borderBottom="1.3px solid rgba(151, 151, 151, 0.8)"
        padding="10px 0 20px 0"
      >
        {/* Left Col */}
        <Grid height="min-content">
          <Heading use="h2" color="#4a4a4a" margin={0} fontSize={60} fontWeight={700}>
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
              made sure they were very dry. (Turned on the oven at 350.) I de-stemmed the kale and cut them into the
              size of the bigger U.S…
            </Paragraph>
          </Grid>
        </Grid>
        <Picture>
          <source srcSet={(props.hasOwnProperty('images') && props.images.webp) || ''} type="image/webp" />
          <source srcSet={(props.hasOwnProperty('images') && props.images.jpg) || ''} type="image/jpeg" />
          <Image src={(props.hasOwnProperty('images') && props.images.jpg) || ''} alt={props.name.toLowerCase()} />
        </Picture>
      </Grid>
      <Grid padding="20px 0" gap={20} borderBottom="1.3px solid rgba(151, 151, 151, 0.8)">
        <Heading use="h4" fontWeight={600} color="#4a4a4a" margin={0}>
          Ingredients (Serves 12)
        </Heading>
        <IngredientsList color="#4a4a4a" fontWeight={400} fontSize={20}>
          <li>12 large Tuscan kale leaves, rinsed, dried, cut lengthwise in half, center ribs and stems removed</li>
          <li>1 tablespoon olive oil</li>
          <li>A pinch of paprika</li>
        </IngredientsList>
      </Grid>
      <Grid padding="20px 0" gap={20} borderBottom="1.3px solid rgba(151, 151, 151, 0.8)">
        <Heading use="h4" fontWeight={600} color="#4a4a4a" margin={0}>
          Preparation
        </Heading>
        <Paragraph color="#4a4a4a" fontWeight={400} fontSize={20}>
          Preheat oven to 250°F. Toss kale with oil in large bowl. Sprinkle with salt and pepper. Arrange leaves in
          single layer on 2 large baking sheets. Bake until crisp, about 30 minutes for flat leaves and up to 33 minutes
          for wrinkled leaves. Transfer leaves to rack to cool.
        </Paragraph>
      </Grid>
      <Grid padding="20px 0" gap={20} borderBottom="1.3px solid rgba(151, 151, 151, 0.8)" margin="0 calc(-1em - 20px)">
        <Heading use="h4" fontWeight={600} color="#4a4a4a" margin="0 calc(1em + 14px)">
          Reviews
        </Heading>
        <Box margin="0 calc(1em + 20px)">
          <Paragraph color="#4a4a4a" fontWeight={600} fontSize={20} marginBottom={5}>
            Score: 3 out of 4 - HREVILLA FROM TAKOMA PARK, MD
          </Paragraph>
          <Paragraph color="#4a4a4a" fontWeight={400} fontSize={20}>
            Preheat oven to 250°F. Toss kale with oil in large bowl. Sprinkle with salt and pepper. Arrange leaves in
            single layer on 2 large baking sheets. Bake until crisp, about 30 minutes for flat leaves and up to 33
            minutes for wrinkled leaves. Transfer leaves to rack to cool.
          </Paragraph>
        </Box>
        <Box margin="0 calc(1em + 20px)">
          <Paragraph color="#4a4a4a" fontWeight={600} fontSize={20} marginBottom={5}>
            Score: 1 out of 4 - KATYAT FROM MARYLAND
          </Paragraph>
          <Paragraph color="#4a4a4a" fontWeight={400} fontSize={20}>
            Schmeh. Like salty desiccated garnish.
          </Paragraph>
        </Box>
      </Grid>
      <Grid padding="20px 0" templateColumns="1fr 1fr" margin={0}>
        <Button width="min-content">Add to My List</Button>
        <Button width="min-content" justifySelf="end">
          Print
        </Button>
      </Grid>
    </Grid>
  </>
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
  right: 14px;
  z-index: 100;
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
    width: calc(100% - 20px);
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    object-fit: none;
  }
  width: 100%;
  max-height: calc(50vh + 20px);
  margin: 30px 20px 0 20px;
  clip-path: inset(4px);
`;

const IngredientsList = styled(List)`
  li {
    list-style-type: initial;
    list-style-position: inside;
  }
`;
