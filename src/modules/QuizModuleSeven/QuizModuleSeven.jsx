import { useState, useRef } from "react";
import QuizFirst from "../../components/QuizFirst/QuizFirst";
import "./quizModuleSeven.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { validateRequire } from "../../utilits/validation";

function QuizModuleSeven({ changeFormsValue, prevStep, activeForm }) {
  const [inputsValue, setInputsValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const inputName = useRef(null);
  const inputPhone = useRef(null);
  const inputEmail = useRef(null);

  const handleChange = (event) => {
    setInputsValue((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const validate = () => {
    validateRequire(inputsValue.name, inputName);
    validateRequire(inputsValue.phone, inputPhone);
    validateRequire(inputsValue.email, inputEmail);

    return (
      validateRequire(inputsValue.name, inputName) &&
      validateRequire(inputsValue.phone, inputPhone) &&
      validateRequire(inputsValue.email, inputEmail)
    );
  };
  const handleClick = (event) => {
    event.preventDefault();

    validate();
    changeFormsValue(inputsValue);
    activeForm(1);
  };
  return (
    <>
      <QuizFirst />
      <form action="#" method="Post" className="quiz__main-seven">
        <div className="quiz__questions">
          <div className="quiz__question">
            <h2 className="quiz__questionname">
              6. Оставьте Ваш номер WhatsApp и мы вышлем на него подходящие
              материалы
            </h2>
            <div className="quiz__answers">
              <div className="quiz__answer">
                <label htmlFor="ques6-1" className="custom-label">
                  Имя
                </label>
                <input
                  ref={inputName}
                  type="text"
                  id="ques6-1"
                  name="name"
                  className="custom-input"
                  onChange={handleChange}
                  placeholder="Иван"
                  value={inputsValue.name}
                />
              </div>
              <div className="quiz__answer">
                <label htmlFor="ques6-2" className="custom-label">
                  Ваш E-mail
                </label>
                <input
                  ref={inputEmail}
                  type="email"
                  id="ques6-2"
                  name="email"
                  className="custom-input"
                  onChange={handleChange}
                  placeholder="ivanov@gmail.com"
                  value={inputsValue.email}
                />
              </div>
              <div className="quiz__answer">
                <label htmlFor="ques6-3" className="custom-label">
                  Ваш номер телефона / WhatsApp
                </label>
                <input
                  ref={inputPhone}
                  type="phone"
                  id="ques6-3"
                  name="phone"
                  className="custom-input"
                  onChange={handleChange}
                  placeholder="+7 999 999-99-99"
                  value={inputsValue.phone}
                />
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
            Отправить
          </button>
        </div>
      </form>
    </>
  );
}

export default QuizModuleSeven;
