import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, []);

  function handleUpdate(newItem) {
    setQuestion([...questions, newItem]);
  }

  function handleDeleteItem(deletedItem) {
    const updatedData = questions.filter((q) => q.id !== deletedItem.id);
    setQuestion(updatedData);
  }

  function handleUpdateAnswer(item) {
    const updatedData = questions.map((q) => {
      if (q.id === item.id) {
        return item;
      } else {
        return q;
      }
    });
    setQuestion(updatedData);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onClickUpdate={handleUpdate} />
      ) : (
        <QuestionList
          question={questions}
          onClickDelete={handleDeleteItem}
          onChangeUpdate={handleUpdateAnswer}
        />
      )}
    </main>
  );
}

export default App;
