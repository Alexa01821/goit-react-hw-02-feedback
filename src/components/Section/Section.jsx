import { SectionContainer } from './SectionStyled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <h2 className="feedback-section-title">{title}</h2>
      {children}
    </SectionContainer>
  );
};
