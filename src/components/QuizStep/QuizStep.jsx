import "./quizStep.css";

function QuizStep({stepForm}) {
  return (
    <>
      <div className="quiz__numbers flex">
        <div className="quiz__inside flex">
          <span className="quiz__current">{stepForm}</span>
          <span className="quiz__sep">/</span>
          <span className="quiz__all">6</span>
        </div>
      </div>
    </>
  );
}

export default QuizStep;
