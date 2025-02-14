import ExamCard from './ExamCard';
import { useEffect } from 'react';
import examCardDesc from './ExamCardDescrption';

function Exams() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="quiz-page">
      <h1>Welcome to the Quiz Zone</h1>
      <p>
        Get ready to challenge yourself with our exciting range of quizzes.
        Whether you're looking to test your general knowledge or level up
        through progressively tougher questions, we've got you covered. Dive in
        and see how high you can score! Choose from our Level-Based Quizzes.
      </p>
      <div className="exams-cont">
        {examCardDesc.map((exam, i) => (
          <ExamCard
            key={i}
            name={exam.name}
            image={exam.image}
            description={exam.desc}
            link={exam.link}
            
          />
        ))}
      </div>
    </div>
  );
}

export default Exams;
