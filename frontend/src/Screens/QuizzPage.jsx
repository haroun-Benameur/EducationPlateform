import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes } from "../redux/quizSlice";

const QuizPage = () => {
  const dispatch = useDispatch();
  const { quizzes, loading, error } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  if (loading) return <p>Loading quizzes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Available Quizzes</h2>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <h3>{quiz.title}</h3>
          <p>{quiz.description}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizPage;
