import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ question, onClickDelete, onChangeUpdate }) {

  const questionList = question.map((q) => {
    return <QuestionItem key={q.id} question={q} onClickDelete={onClickDelete} onChangeUpdate={onChangeUpdate} />;
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
