import { useState, useRef } from "react";
import "./consultation.css";

export default function Consultation() {
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

  const handleClick = (event) => {
    event.preventDefault();
    console.log(inputsValue);
  };
  return (
    <>
      <section className="consultation">
        <div className="wrapper">
          <div className="consultation__box">
            <div className="consultation__left">
              <div className="consultation__left-content">
                <div className="consultation__left-top">
                  <p className="consultation__left-text">
                    Хотите выгодно инвестировать деньги, <br />
                    <span>но не понимаете специфику рынка?</span>
                  </p>
                  <p className="consultation__left-small">
                    Оставьте заявку, и мы <br /> проконсультируем вас по всем
                    <br />
                    интересующим вопросам.
                  </p>
                </div>
                <div className="consultation__left-bottom">
                  <form action="#" method="POST">
                    <div className="quiz__answer">
                      <label htmlFor="ques6-1" className="consultation__label">
                        Имя
                      </label>
                      <input
                        ref={inputName}
                        type="text"
                        id="ques6-1"
                        name="name"
                        className="consultation__input"
                        onChange={handleChange}
                        placeholder="Иван"
                        value={inputsValue.name}
                      />
                    </div>
                    <div className="quiz__answer">
                      <label htmlFor="ques6-2" className="consultation__label">
                        Ваш E-mail
                      </label>
                      <input
                        ref={inputEmail}
                        type="email"
                        id="ques6-2"
                        name="email"
                        className="consultation__input"
                        onChange={handleChange}
                        placeholder="ivanov@gmail.com"
                        value={inputsValue.email}
                      />
                    </div>
                    <div className="quiz__answer">
                      <label htmlFor="ques6-3" className="consultation__label">
                        Ваш номер телефона / WhatsApp
                      </label>
                      <input
                        ref={inputPhone}
                        type="phone"
                        id="ques6-3"
                        name="phone"
                        className="consultation__input"
                        onChange={handleChange}
                        placeholder="+7 999 999-99-99"
                        value={inputsValue.phone}
                      />
                    </div>

                    <button
                      className="btn2 concultation__btn"
                      onClick={handleClick}
                      type="submit"
                    >
                      Получить консультацию
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="consultation__right">
              <div className="consultation__right-content">
                <h2 className="consultation__right-title">
                  ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ
                </h2>
                <p className="consultation__right-text">
                  от ведущих экспертов компании c многолетним опытом <br />{" "}
                  работы на индонезийском рынке.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
