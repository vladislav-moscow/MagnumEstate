import { useState } from "react";
import QuizFirst from "../../components/QuizFirst/QuizFirst";
import "./quizModuleThree.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function QuizModuleThree({ changeFormsValue, nextStep, prevStep }) {
  const [inputsValue, setInputsValue] = useState({
    purpose: "",
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
              3. Вы рассматриваете покупку с целью получения дохода?
            </h2>
            <div className="quiz__answers">
              <div className="quiz__answer">
                <input
                  type="radio"
                  id="ques3-1"
                  name="purpose"
                  value="Да, только для дохода"
                  className="custom-radio"
                  onChange={handleChange}
                  checked={active === "Да, только для дохода" ? true : false}
                />
                <label htmlFor="ques3-1">Да, только для дохода</label>
              </div>
              <div className="quiz__answer">
                <input
                  type="radio"
                  id="ques3-2"
                  name="purpose"
                  value="Для личного проживания"
                  className="custom-radio"
                  onChange={handleChange}
                  checked={active === "Для личного проживания" ? true : false}
                />
                <label htmlFor="ques3-2">Для личного проживания</label>
              </div>
              <div className="quiz__answer">
                <input
                  type="radio"
                  id="ques3-3"
                  name="purpose"
                  value="С целью дохода, но планирую приезжать отдыхать"
                  className="custom-radio"
                  onChange={handleChange}
                  checked={
                    active === "С целью дохода, но планирую приезжать отдыхать"
                      ? true
                      : false
                  }
                />
                <label htmlFor="ques3-3">
                  С целью дохода, но планирую приезжать отдыхать
                </label>
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

export default QuizModuleThree;
