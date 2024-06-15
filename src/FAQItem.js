import "./styles.css";
import { useState, useEffect } from "react";

const FAQItem = ({ faq, index }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setIsShow(true);
    }
  }, []);

  const handleClick = () => {
    setIsShow((show) => !show);
  };

  return (
    <div className="faq-box">
      <div className="ques">
        <button className={isShow && "arrow"} onClick={() => handleClick()}>
          >
        </button>
        <div className="ques-content">{faq.ques}</div>
      </div>
      {isShow && <div className="ans">{faq.answer}</div>}
    </div>
  );
};

export default FAQItem;
