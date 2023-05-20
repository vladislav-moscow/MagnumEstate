import { useState } from "react";
import QuizFirst from "../../components/QuizFirst/QuizFirst";
import "./quizModuleFive.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slider from "@mui/material/Slider";

function QuizModuleFive({ changeFormsValue, nextStep, prevStep }) {
  const [inputsValue, setInputsValue] = useState({
    budget: "",
  });

  const handleChange = (event) => {
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
              5. В рамках какого бюджета вы рассматриваете недвижимость?
            </h2>
            <div className="quiz__answers">
              <div className="quiz__uislider">
                <Slider
                  defaultValue={50000}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={50000}
                  max={1500000}
                  name="budget"
                  onChange={handleChange}
                />
                <div className="quiz__min">100 000$</div>
                <div className="quiz__max">1 500 000$</div>
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

export default QuizModuleFive;
