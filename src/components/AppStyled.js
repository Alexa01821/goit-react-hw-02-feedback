import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--color-navy-blue-modal);
  border: var(--border);
  border-radius: 20px;
  .title {
    font-size: 36px;
    line-height: 1.11;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: var(--color-navy-blue);
    margin-bottom: 12px;
  }
  .feedback-sectionBtns {
    margin-bottom: 20px;
    .feedback-sectionBtns-title {
      font-size: 16px;
      line-height: 1.25;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: capitalize;
      color: var(--color-navy-blue);
      margin-bottom: 16px;
    }
  }
`;
