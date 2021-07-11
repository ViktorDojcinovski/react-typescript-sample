import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10% auto;
  input {
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
  h2 {
    font-size: 18px;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  button {
    flex: 1 1 auto;
    padding: 20px 10px;
    border: none;
    margin: 10px;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    font-weight: bold;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-image: linear-gradient(
      to right,
      #f6d365 0%,
      #fda085 51%,
      #f6d365 100%
    );
    &:hover {
      background-position: right center;
    }
  }
`;

export { Wrapper };
