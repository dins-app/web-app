import {
  styled,
  Grid,
  Heading,
  Label,
  Input,
  Button,
  Link
} from "reakit";

interface IProps {
  state: any;
  setState: any;
}

export default (props: IProps) => {
  const { state, setState } = props;
  return (
    <Card
      backgroundColor="#fff"
      boxShadow="0 1px 1px 0 rgba(0, 0, 0, 0.5)"
      borderRadius={26}
      width={800}
      height="min-content"
      showAdditional={state.showAdditional}
    >
      <Grid
        template={
          (state.showAdditional && `"a a" "b c" "d e" "f g" "h h" "i i"`) ||
          `"a a" "b c" "d e" "h h" "i i"`
        }
        gap={40}
        margin={40}
      >
        {/* Card Heading */}
        <Heading
          fontSize={50}
          fontWeight={500}
          marginBottom={0}
          color="#042347"
          gridArea="a"
        >
          Find recipes for your budget and skill level.
        </Heading>
        <Label fontSize={24} color="#4a4a4a" fontWeight={600} gridArea="d">
          BUDGET
          <Select
            use="select"
            onChange={(e: any) => setState({ budget: e.target.value })}
          >
            <option value="" disabled selected hidden>Budget</option>
            <option value="">Any budget</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
        </Label>
        <Label fontSize={24} color="#4a4a4a" fontWeight={600} gridArea="e">
          SKILL
          <Select
            use="select"
            onChange={(e: any) => setState({ skill: e.target.value })}
          >
            <option value="" disabled selected hidden>Skill level</option>
            <option value="">Any skill level</option>
            <option value="easy">Easy</option>
            <option value="mid">Mid</option>
            <option value="hard">Hard</option>
          </Select>
        </Label>
        <Label fontSize={24} color="#4a4a4a" fontWeight={600} gridArea="b">
          MEAL
          <Select
            use="select"
            onChange={(e: any) => setState({ meal: e.target.value })}
          >
            <option value="" disabled selected hidden>Meal type</option>
            <option value="">Any meal type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="dessert">Dessert</option>
            <option value="drink">Drink</option>
          </Select>
        </Label>
        <Label fontSize={24} color="#4a4a4a" fontWeight={600} gridArea="c">
          TIME
          <Select
            use="select"
            onChange={(e: any) => setState({ time: e.target.value })}
          >
            <option value="" disabled selected hidden>Max cook time</option>
            <option value="0.5">0.5 hours</option>
            <option value="1">1 hour</option>
            <option value="1.5">1.5 hours</option>
            <option value="2">2 hours</option>
            <option value="2.5">2.5 hours</option>
            <option value="3">3 hours</option>
            <option value="">more than 3 hours</option>
          </Select>
        </Label>
        <Link
          color="#266ab8"
          fontSize={24}
          fontWeight={600}
          gridArea="h"
          cursor="pointer"
          onClick={() => {state.showAdditional === false ? setState({showAdditional: true}) : setState({showAdditional: false})}
          }
        >
          {state.showAdditional && `-` || `+`} ADDITIONAL OPTIONS
        </Link>
        {state.showAdditional && (
          <>
            <Label fontSize={24} color="#4a4a4a" fontWeight={600} gridArea="f">
              CUISINE
              <Select
                use="select"
                onChange={(e: any) => setState({ cuisine: e.target.value })}
              >
                <option value="" disabled selected hidden>Type of food</option>
                <option value="">Any type of food</option>
                <option value="chinese">Chinese</option>
                <option value="indian">Indian</option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="american">American</option>
                <option value="thai">Thai</option>
              </Select>
            </Label>
            <Label fontSize={24} color="#4a4a4a" fontWeight={600} gridArea="g">
              RESTRICTIONS
              <Select
                use="select"
                onChange={(e: any) =>
                  setState({ restrictions: e.target.value })
                }
              >
                <option value="" disabled selected hidden>Dietary needs</option>
                <option value="">No restrictions</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="low_carb">Low carb</option>
                <option value="low_fat">Low fat</option>
                <option value="dairy_free">Dairy free</option>
                <option value="gluten_free">Gluten free</option>
              </Select>
            </Label>
          </>
        )}
        <Button
          width={204}
          height={68}
          borderRadius={12}
          backgroundColor="#295e70"
          fontSize={28}
          gridArea="i"
          justifySelf="end"
          onClick={() => console.log(state)}
        >
          Search
        </Button>
      </Grid>
    </Card>
  );
};

interface CardProps {
  showAdditional: boolean;
}

// Styled Components and Media Queries
const Card = styled(Grid)<CardProps>`
  @media (max-width: 768px) {
    width: unset !important;
    div {
      grid-template: ${props =>
        (props.showAdditional && `"a" "b" "c" "d" "e" "f" "g" "h" "i"`) ||
        `"a" "b" "c" "d" "e" "h" "i"`} !important;
    }
    button {
      justify-self: center !important;
    }
    justify-self: center;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 40px !important;
    }
  }
`;
const Select = styled(Input)`
  color: #a4a4a4;
  font-weight: 500;
  font-size: 34px
  border-radius: 12px;
  border: 1px solid #dcdcdc;
  margin-top: 13px;
`;
