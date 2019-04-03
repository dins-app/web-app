import { styled, Image, Grid, Heading } from 'reakit';
import { NextStatelessComponent } from 'next';
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

const RecipePreviewTile: NextStatelessComponent<Props> = (props: Props): any => (
  <Tile>
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
    <Heading use="h3" color="#727272" fontSize={22}>
      COOK TIME:{' '}
      {(isNaN(Number(props.time)) && `n/a`) ||
        ((Number(props.time) == 1 && `${props.time} HOUR`) || `${props.time} HOURS`)}
      {props.price && ` \u00B7 $${props.price}/PERSON`}
    </Heading>
    <Heading use="h2" color="#4a4a4a" marginTop={0} fontSize={40}>
      {props.name}
    </Heading>
  </Tile>
);

export default RecipePreviewTile;

// Styled Components and Media Queries
const Tile = styled(Grid)`
  position: relative;
  margin: 40px;
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
    props.difficulty &&
    ((props.difficulty === 'easy' && `background-color: #a9bfc6;`) ||
      (props.difficulty === 'mid' && `background-color: #698e9a;`) ||
      (props.difficulty === 'hard' && `background-color: #295e70;`))}
`;
// const Title = styled.div`
//   position: absolute;
//   background-color: rgba(0, 0, 0, 0.2);
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   h2 {
//     position: relative;
//     margin: 0 10px;
//     top: 50%;
//     transform: translateY(-50%);
//     font-size: 48px;
//     font-weight: 600;
//     color: #fff;
//     text-align: center;
//   }
// `;
