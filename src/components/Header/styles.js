import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #e0ffff;
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: #87cefa;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
