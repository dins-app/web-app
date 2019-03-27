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
        <Label fontSize={24} color="#4a4a4a" fontWeight={600} gridArea="b">
          BUDGET
          <Select
            use="select"
            onChange={(e: any) => setState({ budget: e.target.value })}
            value={state.budget}
          >
            <option value="tester">Test</option>
            <option value="">Budget</option>
          </Select>
        </Label>
        <Label fontSize={24} color="#4a4a4a" fontWeight={600} gridArea="c">
          SKILL
          <Select
            use="select"
            onChange={(e: any) => setState({ skill: e.target.value })}
            value={state.skill}
          >
            <option value="">Skill level</option>
          </Select>
        </Label>

        <Label fontSize={24} color="#4a4a4a" fontWeight={600} gridArea="d">
          MAX COOK TIME
          <Select
            use="select"
            onChange={(e: any) => setState({ time: e.target.value })}
            value={state.time}
          >
            <option value="">hh:mm</option>
          </Select>
        </Label>
        <Label fontSize={24} color="#4a4a4a" fontWeight={600} gridArea="e">
          MEAL
          <Select
            use="select"
            onChange={(e: any) => setState({ meal: e.target.value })}
            value={state.meal}
          >
            <option value="">Meal type</option>
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
                value={state.cuisine}
              >
                <option value="">Type of food</option>
              </Select>
            </Label>
            <Label fontSize={24} color="#4a4a4a" fontWeight={600} gridArea="g">
              RESTRICTIONS
              <Select
                use="select"
                onChange={(e: any) =>
                  setState({ restrictions: e.target.value })
                }
                value={state.restrictions}
              >
                <option value="">Dietary needs</option>
              </Select>
            </Label>
          </>
        )}
        <Button
          width={204}
          height={58}
          borderRadius={12}
          backgroundColor="#295e70"
          fontSize={28}
          gridArea="i"
          justifySelf="end"
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
  fontWeight: 500;
  font-size: 34px
  border-radius: 12px;
  border: 1px solid #dcdcdc;
  margin-top: 13px;
`;
