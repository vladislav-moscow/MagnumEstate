import QuizFirst from "../../components/QuizFirst/QuizFirst";
import "./quizModuleTwo.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function QuizModuleTwo({nextStep}) {

  return (
    <>
      <QuizFirst />
      <form action="/" method="" className="quiz__main">
        <div className="quiz__questions">
          <div className="quiz__question">
            <h2 className="quiz__questionname">2. У вас уже есть опыт инвестирования в зарубежную недвижимость?</h2>
            <div className="quiz__answers">
              <div className="quiz__answer">
                <input type="radio" id="ques2-1" value="Да" className="custom-radio"/>
                <label htmlFor="ques2-1">Да</label>
              </div>
              <div className="quiz__answer">
                <input type="radio" id="ques2-2" value="Нет" className="custom-radio"/>
                <label htmlFor="ques2-2">Нет</label>
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

export default QuizModuleTwo;
