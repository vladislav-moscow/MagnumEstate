import { useState } from "react";
import QuizFirst from "../../components/QuizFirst/QuizFirst";
import "./quizModuleSix.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function QuizModuleSix({ changeFormsValue, nextStep }) {
  const [activeInputValue, setActiveInputValue] = useState([])
  const [inputsValue, setInputsValue] = useState({
    information: [],
  });
const active = []

  const handleChange = (event) => {
    setActiveInputValue(event.target.value)
    
    /*setActiveInputValue(...active)
    console.log(active)
    
    setInputsValue((prev) => {
      return {
        ...prev,

        information: active
      };
    })
    console.log(inputsValue)
    setInputsValue((prev) => {
      return {
        ...prev,

        [event.target.name]: event.target.value,
      };
    });*/
  };
  console.log(activeInputValue)

  const handleClick = (event) => {
    event.preventDefault();
    setInputsValue((prev) => {
      return {
        ...prev,
        [event.target.name]: active.forEach(el => {
          setActiveInputValue(el)
        })
      }
    })
    /*setActiveInputValue([...active])
    setInputsValue((prev) => {
      return {
        ...prev,

        information: active
      };
    })
    console.log(inputsValue)*/

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
            6. Какая информация вам нужна (несколько ответов):
            </h2>
            <div className="quiz__answers">
              <div className="quiz__answer checkbox">
                <input
                  type="checkbox"
                  id="ques6-1"
                  name="information"
                  value="Информация об инвестиционной  привлекательности Бали"
                  className="custom-radio"
                  onChange={handleChange}
                />
                <label htmlFor="ques6-1">Информация об инвестиционной  привлекательности Бали</label>
              </div>
              <div className="quiz__answer checkbox">
                <input
                  type="checkbox"
                  id="ques6-2"
                  name="information"
                  value="Информация о проекте"
                  className="custom-radio"
                  onChange={handleChange}
                />
                <label htmlFor="ques6-2">Информация о проекте</label>
              </div>
              <div className="quiz__answer checkbox">
                <input
                  type="checkbox"
                  id="ques6-3"
                  name="information"
                  value="Формирование доходности"
                  className="custom-radio"
                  onChange={handleChange}
                />
                <label htmlFor="ques6-3">Формирование доходности</label>
              </div>
              <div className="quiz__answer checkbox">
                <input
                  type="checkbox"
                  id="ques6-4"
                  name="information"
                  value="Управление: сервисы и стоимость"
                  className="custom-radio"
                  onChange={handleChange}
                />
                <label htmlFor="ques6-4">Управление: сервисы и стоимость</label>
              </div>
              <div className="quiz__answer checkbox">
                <input
                  type="checkbox"
                  id="ques6-5"
                  name="information"
                  value="Документы на компанию"
                  className="custom-radio"
                  onChange={handleChange}
                />
                <label htmlFor="ques6-5">Документы на компанию</label>
              </div>
              <div className="quiz__answer checkbox">
                <input
                  type="checkbox"
                  id="ques6-6"
                  name="information"
                  value="Процесс оформления недвижимости на Бали"
                  className="custom-radio"
                  onChange={handleChange}
                />
                <label htmlFor="ques6-6">Процесс оформления недвижимости на Бали</label>
              </div>
              <div className="quiz__answer checkbox">
                <input
                  type="checkbox"
                  id="ques6-7"
                  name="information"
                  value="Пример договора"
                  className="custom-radio"
                  onChange={handleChange}
                />
                <label htmlFor="ques6-7">Пример договора</label>
              </div>
              <div className="quiz__answer checkbox">
                <input
                  type="checkbox"
                  id="ques6-8"
                  name="information"
                  value="Хочу получить комплексную консультацию"
                  className="custom-radio"
                  onChange={handleChange}
                />
                <label htmlFor="ques6-8">Хочу получить комплексную консультацию</label>
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

export default QuizModuleSix;
