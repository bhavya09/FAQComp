import FAQItem from "./FAQItem";

const FAQComp = () => {
  const faqs = [
    {
      ques: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      ques: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      ques: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];

  return (
    <div>
      {faqs.map((item, index) => {
        return <FAQItem faq={item} index={index} />;
      })}
    </div>
  );
};

export default FAQComp;
