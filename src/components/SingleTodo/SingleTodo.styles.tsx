import styled from "styled-components";

const ShowModeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  &:last-child {
    border-bottom: none;
  }
  h2 {
    font-size: 18px;
    margin: 0 25px;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const EditModeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  input {
    width: 250px;
    padding: 2px 10px;
    border: none;
    border-radius: 10px;
    margin: 0 10px;
    background-color: #282c34;
    min-height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100px;
`;

const ImageWrapper = styled.div`
  width: 20px;
  margin-top: 4px;
  margin-left: 4px;
`;

const InputWrapper = styled.div``;

export {
  ShowModeWrapper,
  EditModeWrapper,
  MenuWrapper,
  ImageWrapper,
  InputWrapper,
};
