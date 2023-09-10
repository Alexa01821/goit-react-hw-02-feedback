import { StatisticsList } from './StatisticsListStyled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li className="feedback-statistics-item">
        Good: <span className="feedback-statistics-count">{good}</span>
      </li>
      <li className="feedback-statistics-item">
        Neutral: <span className="feedback-statistics-count">{neutral}</span>
      </li>
      <li className="feedback-statistics-item">
        Bad: <span className="feedback-statistics-count">{bad}</span>
      </li>
      <li className="feedback-statistics-item">
        Total: <span className="feedback-statistics-count">{total}</span>
      </li>
      <li className="feedback-statistics-item">
        Positive feedback: {positivePercentage}
      </li>
    </StatisticsList>
  );
};
