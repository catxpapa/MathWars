import React, { useState, useEffect } from 'react';
import { RandomNumberThoth } from './RandomNumberThoth';
import './CountNumber.css';

const CountNumber: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [enemies, setEnemies] = useState<{ top: number; left: number }[]>([]);

  useEffect(() => {
    const thoth = new RandomNumberThoth('Math', 'Random Numbers', 1, 10, 5);
    const question = thoth.generateQuestion([1, 10]); // Pass array [min, max]
    setNumber(question.correctAnswer);

    const newEnemies = [];
    const enemySize = 30; // Size of the enemy element
    const sceneWidth = window.innerWidth;
    const sceneHeight = window.innerHeight / 2;

    for (let i = 0; i < question.correctAnswer; i++) {
      let top, left;
      let collision;
      do {
        collision = false;
        top = Math.random() * (sceneHeight - enemySize);
        left = Math.random() * (sceneWidth - enemySize);

        // Check for collisions with existing enemies
        for (const enemy of newEnemies) {
          const dx = enemy.left - left;
          const dy = enemy.top - top;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < enemySize) {
            collision = true;
            break;
          }
        }
      } while (collision);

      newEnemies.push({ top, left });
    }

    setEnemies(newEnemies);
    setLoading(false);
  }, []);

  const handleSubmit = () => {
    if (parseInt(inputValue) === number) {
      setMessage('Success');
      setEnemies([]);
    } else {
      setMessage('Failure');
      document.getElementById('scene')?.classList.add('shake');
      setTimeout(() => {
        document.getElementById('scene')?.classList.remove('shake');
      }, 500);
    }
  };

  return (
    <div className="count-number-game">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div id="scene" className="scene">
            {enemies.map((enemy, index) => (
              <div
                key={index}
                className="enemy"
                style={{ top: `${enemy.top}px`, left: `${enemy.left}px` }}
              ></div>
            ))}
          </div>
          <div className="question">
            <p>Count the number of enemies:</p>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            {message && <div className="message">{message}</div>}
          </div>
        </>
      )}
    </div>
  );
};

export default CountNumber;