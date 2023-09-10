import styled from 'styled-components';

export const FeedbackListBtn = styled.ul`
  display: flex;
  justify-content: space-between;
  .feedback-item {
    width: 150px;
    height: 40px;
    .feedback-btn {
      width: 100%;
      height: 100%;
      font-size: 28px;
      line-height: 1.25;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: capitalize;
      color: var(--color-navy-blue);
      background-color: var(--color-modal);
      border: var(--border);
      border-radius: 20px;
    }
  }
`;
