import { useState } from "react";
import QuizFirst from "../../components/QuizFirst/QuizFirst";
import "./quizModuleOne.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function QuizModuleOne({changeFormsValue, nextStep }) {
  const [inputsValue, setInputsValue]= useState({
    visited:"",
  });
  const [active, setActive]= useState("");
  
  const handleChange = (event) => {
    setActive(event.target.value)
    setInputsValue(prev => {
      return  {...prev,
        
      [event.target.name]: event.target.value
     } 
  })
  }

  const handleClick = (event) => {
    event.preventDefault()
    console.log(inputsValue)
    nextStep()
  };
  return (
    <>
      <QuizFirst />
      <form action="#" method="GET" className="quiz__main">
        <div className="quiz__questions">
          <div className="quiz__question">
            <h2 className="quiz__questionname">1. Вы были на Бали?</h2>
            <div className="quiz__answers">
              <div className="quiz__answer">
                <input
                  type="radio"
                  name="visited"
                  id="ques1-1"
                  value="yes"
                  className="custom-radio"
                  onChange={handleChange}
                  checked={active === "yes" ? true : false}
                />
                <label htmlFor="ques1-1">Да</label>
              </div>
              <div className="quiz__answer">
                <input
                  type="radio"
                  id="ques1-2"
                  name="visited"
                  value="no"
                  className="custom-radio"
                  onChange={handleChange}
                  checked={active === "no" ? true : false}
                />
                <label htmlFor="ques1-2">Нет</label>
              </div>
            </div>
          </div>
        </div>
        <div className="quiz__btns flex">
          <button className="quiz__back flex">
            <ArrowBackIcon />
          </button>
          <button className="btn2 quiz__next" onClick={handleClick}>
            Далее
          </button>
        </div>
      </form>
    </>
  );
}

export default QuizModuleOne;
