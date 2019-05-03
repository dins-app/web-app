import { styled, Image, Grid, Heading, Overlay, Portal, Backdrop } from 'reakit';
import { NextStatelessComponent } from 'next';
import { ViewRecipeModal } from './';
import React from 'react';

type Difficulty = 'easy' | 'mid' | 'hard';

interface DifficultyFabProps {
  difficulty: Difficulty;
}

interface Props extends DifficultyFabProps {
  name: string;
  images: any;
  time: string | number;
  price: string | number;
}

const RecipePreviewTile: NextStatelessComponent<Props> = (props: Props): JSX.Element => (
  <Overlay.Container>
    {(overlay: any): JSX.Element => (
      <>
        <Tile onClick={overlay.show}>
          <Picture>
            <source srcSet={(props.hasOwnProperty('images') && props.images.webp) || ''} type="image/webp" />
            <source srcSet={(props.hasOwnProperty('images') && props.images.jpg) || ''} type="image/jpeg" />
            <Image
              src={(props.hasOwnProperty('images') && props.images.jpg) || ''}
              alt={props.name.toLowerCase()}
              objectFit="contain"
            />
          </Picture>
          <DifficultyFab difficulty={props.difficulty}>{props.difficulty.toUpperCase()}</DifficultyFab>
          <Heading use="h3" color="#727272" fontSize={18} fontWeight={700}>
            COOK TIME:{' '}
            {(isNaN(Number(props.time)) && `n/a`) ||
              ((Number(props.time) == 1 && `${props.time} HOUR`) || `${props.time} HOURS`)}
            {props.price && ` \u00B7 $${props.price}/PERSON`}
          </Heading>
          <Heading use="h2" color="#4a4a4a" marginTop={0} fontSize={34} fontWeight={700}>
            {props.name}
          </Heading>
        </Tile>
        <Backdrop use={[Portal, Overlay.Hide]} {...overlay} />
        <Overlay use={Portal} {...overlay} padding={0} display="relative">
          <ViewRecipeModal overlay={overlay} {...props} />
        </Overlay>
      </>
    )}
  </Overlay.Container>
);

export default RecipePreviewTile;

// Styled Components and Media Queries
const Tile = styled(Grid)`
  position: relative;
  margin: 40px;
  :hover {
    cursor: pointer;
    h2 {
      text-decoration: underline;
    }
  }
`;
const Picture = styled.picture`
  z-index: -1;
  img {
    width: 100%;
  }
`;
const DifficultyFab = styled.div<DifficultyFabProps>`
  position: absolute;
  z-index: 1;
  right: 0;
  width: 63px;
  height: 63px;
  border-radius: 50%;
  border: 5px solid white;
  line-height: 3.6;
  text-align: center;
  font-size: 19px;
  color: #fff;
  margin-top: -31px;
  margin-right: -31px;
  ${(props: Props): string =>
    props.difficulty &&
    ((props.difficulty === 'easy' && `background-color: #a9bfc6;`) ||
      (props.difficulty === 'mid' && `background-color: #698e9a;`) ||
      (props.difficulty === 'hard' && `background-color: #295e70;`))}
`;
