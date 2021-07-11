import {
  FooterWrapper,
  StyledFooterButton,
} from "components/Footer/Footer.styles";

interface FooterProps {
  markAll(): void;
  filterAll(): void;
  filterActive(): void;
  filterCompleted(): void;
}

const Footer: React.FC<FooterProps> = ({
  markAll,
  filterAll,
  filterActive,
  filterCompleted,
}) => {
  return (
    <FooterWrapper>
      <StyledFooterButton onClick={() => markAll()}>
        Mark All Completed
      </StyledFooterButton>
      <div>
        <h2>Filter</h2>
        <StyledFooterButton onClick={() => filterAll()}>All</StyledFooterButton>
        <StyledFooterButton onClick={() => filterActive()}>
          Active
        </StyledFooterButton>
        <StyledFooterButton onClick={() => filterCompleted()}>
          Completed
        </StyledFooterButton>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
