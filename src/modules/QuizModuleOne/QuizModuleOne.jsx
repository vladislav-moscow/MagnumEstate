import QuizFirst from "../../components/QuizFirst/QuizFirst";
import "./quizModuleOne.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function QuizModuleOne({nextStep}) {

  return (
    <>
      <QuizFirst />
      <form action="/" method="" className="quiz__main">
        <div className="quiz__questions">
          <div className="quiz__question">
            <h2 className="quiz__questionname">1. Вы были на Бали?</h2>
            <div className="quiz__answers">
              <div className="quiz__answer">
                <input type="radio" id="ques1-1" value="Да" />
                <label htmlFor="ques1-1">Да</label>
              </div>
              <div className="quiz__answer">
                <input type="radio" id="ques1-2" value="Нет" />
                <label htmlFor="ques1-2">Нет</label>
              </div>
            </div>
          </div>
        </div>
        <div className="quiz__btns flex">
          <button className="quiz__back flex">
            <ArrowBackIcon />
          </button>
          <button className="btn2 quiz__next" onClick={nextStep}>Далее</button>
        </div>
      </form>
    </>
  );
}

export default QuizModuleOne;
