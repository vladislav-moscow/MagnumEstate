import { useState } from "react";
import QuizFirst from "../../components/QuizFirst/QuizFirst";
import "./quizModuleTwo.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function QuizModuleTwo({ changeFormsValue, nextStep, prevStep }) {
  const [inputsValue, setInputsValue] = useState({
    investing: "",
  });
  const [active, setActive] = useState("");

  const handleChange = (event) => {
    setActive(event.target.value);
    setInputsValue((prev) => {
      return {
        ...prev,

        [event.target.name]: event.target.value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    nextStep();
    changeFormsValue(inputsValue);
  };
  return (
    <>
      <QuizFirst />
      <form action="#" method="Post" className="quiz__main">
        <div className="quiz__questions">
          <div className="quiz__question">
            <h2 className="quiz__questionname">
              2. У вас уже есть опыт инвестирования в зарубежную недвижимость?
            </h2>
            <div className="quiz__answers">
              <div className="quiz__answer">
                <input
                  type="radio"
                  id="ques2-1"
                  name="investing"
                  value="yes"
                  className="custom-radio"
                  onChange={handleChange}
                  checked={active === "yes" ? true : false}
                />
                <label htmlFor="ques2-1">Да</label>
              </div>
              <div className="quiz__answer">
                <input
                  type="radio"
                  id="ques2-2"
                  name="investing"
                  value="no"
                  className="custom-radio"
                  onChange={handleChange}
                  checked={active === "no" ? true : false}
                />
                <label htmlFor="ques2-2">Нет</label>
              </div>
            </div>
          </div>
        </div>
        <div className="quiz__btns flex">
          <button className="quiz__back flex">
            <ArrowBackIcon onClick={prevStep} />
          </button>
          <button
            className="btn2 quiz__next"
            onClick={handleClick}
            type="submit"
          >
            Далее
          </button>
        </div>
      </form>
    </>
  );
}

export default QuizModuleTwo;
