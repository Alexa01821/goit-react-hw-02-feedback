import styled from 'styled-components';

export const StatisticsList = styled.ul`
  width: 300px;
  margin: 0 auto;
  .feedback-statistics-item {
    font-size: 20px;
    line-height: 1.28;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: var(--color-navy-blue);
    .feedback-statistics-count {
      color: var(--color-iris);
    }
  }
`;
