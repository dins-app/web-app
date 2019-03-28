import { styled, Image, Grid } from "reakit";

type Difficulty = "easy" | "mid" | "hard";

interface IDifficultyFabProps {
  difficulty: Difficulty
}

interface IProps extends IDifficultyFabProps {
  name: string
  images: any
}

export default (props: IProps) => (
  <Tile>
    <Picture>
      <source
        srcSet={props.hasOwnProperty("images") && props.images.webp || ""}
        type="image/webp"
      />
      <source srcSet={props.hasOwnProperty("images") && props.images.jpg || ""} type="image/jpeg" />
      <Image
        src={props.hasOwnProperty("images") && props.images.jpg || ""}
        alt={props.name.toLowerCase()}
        objectFit="contain"
      />
    </Picture>
    <DifficultyFab difficulty={props.difficulty}>{props.difficulty.toUpperCase()}</DifficultyFab>
    <Title><h2>{props.name}</h2></Title>
  </Tile>
);

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
const DifficultyFab = styled.div<IDifficultyFabProps>`
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
    props.difficulty &&
    ((props.difficulty === "easy" && `background-color: #a9bfc6;`) ||
      (props.difficulty === "mid" && `background-color: #698e9a;`) ||
      (props.difficulty === "hard" && `background-color: #295e70;`))}
`;
const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  h2 {
    position: relative;
    margin: 0 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 48px;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }
`;
