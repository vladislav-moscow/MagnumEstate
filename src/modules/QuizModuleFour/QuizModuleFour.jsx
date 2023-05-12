import { useState } from "react";
import QuizFirst from "../../components/QuizFirst/QuizFirst";
import "./quizModuleFour.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function QuizModuleFour({ changeFormsValue, nextStep }) {
  const [inputsValue, setInputsValue] = useState({
    type: "",
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
            4. Какой формат недвижимости более предпочтительный:
            </h2>
            <div className="quiz__answers">
              <div className="quiz__answer">
                <input
                  type="radio"
                  id="ques2-1"
                  name="type"
                  value="villa"
                  className="custom-radio"
                  onChange={handleChange}
                  checked={active === "villa" ? true : false}
                />
                <label htmlFor="ques2-1">Вилла</label>
              </div>
              <div className="quiz__answer">
                <input
                  type="radio"
                  id="ques2-2"
                  name="type"
                  value="apartments"
                  className="custom-radio"
                  onChange={handleChange}
                  checked={active === "apartments" ? true : false}
                />
                <label htmlFor="ques2-2">Апартаменты</label>
              </div>
            </div>
          </div>
        </div>
        <div className="quiz__btns flex">
          <button className="quiz__back flex">
            <ArrowBackIcon />
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

export default QuizModuleFour;
