import React from 'react';

//QuizCard Props

// QuizCard Component
function QuizCard() {
    function handleClick(e: any, isCorrect: boolean) {
        e.preventDefault();
        if (isCorrect) {
            alert(`Correct!`);
        } else {
            alert(`Incorrect`);
        }
    }

    return (
        <div className="max-w-sm mx-auto flex items-center justify-center p-6 bg-white rounded-lg shadow-xl m-6">
            <div className="text-black">
                <strong>Translate</strong>
                <p className="text-green-500 text-3xl font-bold">
                    ఇది నమూనా వచనం
                </p>
                <div className="buttons py-2">
                    <p>
                        <button className="bg-white-500 mb-2 hover:bg-green-400 hover:text-white text-green-500 font-bold py-2 px-4 rounded border border-green-400"
                            onClick={e => handleClick(e, false)}>Lorem ipsum dolor sit amet, consectetur adipiscing.</button>
                    </p>
                    <p>
                        <button className="bg-white-500 mb-2 hover:bg-green-400 hover:text-white text-green-500 font-bold py-2 px-4 rounded border border-green-400"
                            onClick={e => handleClick(e, true)}>Lorem ipsum dolor sit amet, consectetur adipiscing.</button>
                    </p>
                    <p>
                        <button className="bg-white-500 mb-2 hover:bg-green-400 hover:text-white text-green-500 font-bold py-2 px-4 rounded border border-green-400"
                            onClick={e => handleClick(e, false)}>Lorem ipsum dolor sit amet, consectetur adipiscing.</button>
                    </p>
                    <p>
                        <button className="bg-white-500 mb-2 hover:bg-green-400 hover:text-white text-green-500 font-bold py-2 px-4 rounded border border-green-400"
                            onClick={e => handleClick(e, false)}>Lorem ipsum dolor sit amet, consectetur adipiscing.</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuizCard;