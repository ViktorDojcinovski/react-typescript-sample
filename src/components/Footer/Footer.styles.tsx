import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 360px;
  h2 {
    color: white;
    font-size: 18px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const StyledFooterButton = styled.button`
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
`;

StyledFooterButton.displayName = "button";

export { FooterWrapper, StyledFooterButton };
