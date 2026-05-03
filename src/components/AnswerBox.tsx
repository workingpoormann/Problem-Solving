import React from "react";

type Props = {
  question: string;
  answer: string;
};

export const AnswerBox = ({ question, answer }: Props) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="border p-3 flex rounded-md">
        <p className="whitespace-pre text-lg text-left text-gray-300">
          {question}
        </p>
      </div>

      <div className={`border p-3 rounded-md`} onClick={toggleVisibility}>
        {isVisible ? (
          <p className="whitespace-pre text-lg text-left text-gray-300">
            {answer}
          </p>
        ) : (
          <p className="text-gray-300 text-xl">Answer: Click to show</p>
        )}
      </div>
    </section>
  );
};
