import { FeedbackListBtn } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackListBtn>
      {options.map((option, id) => {
        return (
          <li key={id} className="feedback-item">
            <button className="feedback-btn" onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </FeedbackListBtn>
  );
};
