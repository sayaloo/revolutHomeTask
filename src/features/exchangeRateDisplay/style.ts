import styled from 'styled-components';
import { Box } from 'grommet';

const StyledDisplay = styled(Box)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  .rate-display-wrp {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid #F2F2F2;
    border-radius: 35px;
    padding: 5px 13px;

    svg {
      stroke: #00739D;
      margin-right: 5px;
      width: 18px;
      height: 18px;
    }
  }

  .change-src-des {
    position: absolute;
    left: -180px;
    top: 50%;
    transform: translateY(-50%);

    button {
      transform: rotate(90deg);
      outline: none;
      border: 1px solid #F2F2F2;
      border-radius: 50px;
      background-color: white;
      padding: 6px 5px 2px 5px;
      cursor: pointer;
      transition: background-color 0.3s ease-in;
      &:hover{
        background-color: #00739D;
        transition: background-color 0.3s ease-out;
        svg{
          stroke: white;
          transition: stroke 0.3s ease-out;
        }
      }
      svg{
        stroke: #00739D;
        width: 18px;
        height: 18px;
        transition: stroke 0.3s ease-in;
      }
    }
  }
`;

export { StyledDisplay };