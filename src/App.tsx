import React, { useState } from 'react';
import QuizCard from './components/QuizCard';


function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="flex flex-col h-screen items-center justify-center text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800">
        <p className="text-3xl text-green-500 font-bold p-6">
          Telugu Quiz
        </p>
        {quizStarted &&
          <>
            <QuizCard />
            <button
              className="bg-green-500 hover:bg-green-400 text-white fond-bold py-2 px-4 rounded"
              onClick={() => setQuizStarted(false)}
            >
              End Quiz
            </button>
          </>
        }
        {!quizStarted &&
          <button
            className="bg-green-500 hover:bg-green-400 text-white fond-bold py-2 px-4 rounded"
            onClick={() => setQuizStarted(true)}
          >
            Start Quiz
          </button>
        }
    </div>
  );
}

export default App;
