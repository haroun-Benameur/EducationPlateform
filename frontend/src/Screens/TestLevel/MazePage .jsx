import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMazes } from "../redux/quizSlice";

const MazePage = () => {
  const dispatch = useDispatch();
  const { mazes, loading, error } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(fetchMazes());
  }, [dispatch]);

  if (loading) return <p>Loading mazes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Mazes</h2>
      {mazes.map((maze) => (
        <div key={maze.id}>
          <p>Level: {maze.level}</p>
          <p>Difficulty: {maze.difficulty}</p>
        </div>
      ))}
    </div>
  );
};

export default MazePage;
