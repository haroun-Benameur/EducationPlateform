import React from 'react';
import lesson_unlocked from '../assets/images/lesson_unlocked.png'; // Image de la leçon
import background from '../assets/images/background.png'; // Image de fond
import { FaStar, FaLock } from 'react-icons/fa';

const lessons = [
  { id: 1, stars: 3, locked: false },
  { id: 2, stars: 3, locked: false },
  { id: 3, stars: 2, locked: true },
  { id: 4, stars: 2, locked: true },
  { id: 5, stars: 1, locked: true },
  { id: 6, stars: 1, locked: true },
];

const LessonCard = ({ stars, locked }) => {
  return (
    <div className="bg-[#5b3cc4] rounded-lg p-4 shadow-lg w-40 md:w-48 flex flex-col items-center">
      <h2 className="text-white text-sm font-bold">Lesson I</h2>
      <div className="flex mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={`text-${i < stars ? 'yellow-400' : 'gray-500'}`} />
        ))}
      </div>
      <div className="mt-3">
        {locked ? (
          <FaLock className="text-white text-3xl" />
        ) : (
          <img src={lesson_unlocked} alt="Lesson" className="w-20" />
        )}
      </div>
    </div>
  );
};

const LessonsPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-xl md:text-2xl font-bold text-purple-900 mb-6">Mathématique</h1>

      <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg grid grid-cols-2 sm:grid-cols-3 gap-4 mx-auto max-w-lg md:max-w-2xl">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} stars={lesson.stars} locked={lesson.locked} />
        ))}
      </div>
    </div>
  );
};

export default LessonsPage;