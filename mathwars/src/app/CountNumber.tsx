import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RandomNumberThoth } from './RandomNumberThoth';
import './CountNumber.css';

const CountNumber: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [enemies, setEnemies] = useState<{ top: number; left: number }[]>([]);

  useEffect(() => {
    const initializeGame = async () => {
      try {
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
      } catch (error) {
        console.error('Error initializing game:', error);
      }
    };

    const onI18nInitialized = () => {
      initializeGame();
    };

    if (i18n.isInitialized) {
      initializeGame();
    } else {
      i18n.on('initialized', onI18nInitialized);
    }

    return () => {
      i18n.off('initialized', onI18nInitialized);
    };
  }, [i18n]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userAnswer = parseInt(inputValue, 10);
    if (userAnswer === number) {
      setMessage(t('correct'));
    } else {
      setMessage(t('incorrect'));
    }
  };

  return (
    <div className="count-number">
      {loading ? (
        <p>{t('loading')}</p>
      ) : (
        <div>
          <p>{t('question')}</p>
          <form onSubmit={handleSubmit}>
            <input type="number" value={inputValue} onChange={handleInputChange} />
            <button type="submit">{t('submit')}</button>
          </form>
          <p>{message}</p>
          <div className="enemies">
            {enemies.map((enemy, index) => (
              <div
                key={index}
                className="enemy"
                style={{ top: `${enemy.top}px`, left: `${enemy.left}px` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountNumber;