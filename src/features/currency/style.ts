import styled from 'styled-components';
import { Menu, TextInput } from 'grommet';

const StyledMenu = styled(Menu)`
  & > div {
    padding: 10px 0;
  }
`;

const StyledTextInput = styled(TextInput)`
  &:focus {
    box-shadow: none;
  }
`;

export { StyledMenu, StyledTextInput };
