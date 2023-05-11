import QuizFirst from "../../components/QuizFirst/QuizFirst";
import "./quizModuleThree.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function QuizModuleThree({nextStep}) {

  return (
    <>
      <QuizFirst />
      <form action="/" method="" className="quiz__main">
        <div className="quiz__questions">
          <div className="quiz__question">
            <h2 className="quiz__questionname">3. Вы рассматриваете покупку с целью получения дохода?</h2>
            <div className="quiz__answers">
              <div className="quiz__answer">
                <input type="radio" id="ques3-1" value="Да, только для дохода" className="custom-radio"/>
                <label htmlFor="ques3-1">Да, только для дохода</label>
              </div>
              <div className="quiz__answer">
                <input type="radio" id="ques3-2" value="Для личного проживания" className="custom-radio"/>
                <label htmlFor="ques3-2">Для личного проживания</label>
              </div>
              <div className="quiz__answer">
                <input type="radio" id="ques3-3" value="С целью дохода, но планирую приезжать отдыхать" className="custom-radio"/>
                <label htmlFor="ques3-3">С целью дохода, но планирую приезжать отдыхать</label>
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

export default QuizModuleThree;
