import styled from 'styled-components';

const StyledExchangeButton = styled.div`
  position: absolute;
  bottom: 0;
  top: 80%;
  transform: translateY(-50%);
  .ex-btn{
    margin-top: 25px;
    min-width: 250px;
    min-height: 50px;
    border-radius: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { StyledExchangeButton };