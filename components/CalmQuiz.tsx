
import React, { useState } from 'react';

type AnswerCategory = 'nature' | 'abstract' | 'classical' | 'rhythm';

interface Question {
  question: string;
  answers: { label: string; category: AnswerCategory }[];
}

const questions: Question[] = [
  {
    question: "When you need to relax, you're drawn to...",
    answers: [
      { label: "\u{1F33F} Nature & landscapes", category: 'nature' },
      { label: "\u{1F3A8} Abstract colors & shapes", category: 'abstract' },
      { label: "\u{1F3DB}\uFE0F Classical masterpieces", category: 'classical' },
      { label: "\u{1F30A} Water & movement", category: 'rhythm' },
    ],
  },
  {
    question: "Your ideal calm moment is...",
    answers: [
      { label: "Morning stillness before the day begins", category: 'nature' },
      { label: "A slow evening wind-down", category: 'classical' },
      { label: "A midday mental reset", category: 'abstract' },
      { label: "Whenever I can steal 2 minutes", category: 'rhythm' },
    ],
  },
  {
    question: "What feeling do you crave most?",
    answers: [
      { label: "Deep peace & grounding", category: 'nature' },
      { label: "Creative inspiration", category: 'abstract' },
      { label: "Emotional release", category: 'classical' },
      { label: "Mental clarity & focus", category: 'rhythm' },
    ],
  },
  {
    question: "Your ideal screen experience...",
    answers: [
      { label: "Slowly changing scenes", category: 'nature' },
      { label: "Rich, vivid colors", category: 'abstract' },
      { label: "Gentle, minimal movement", category: 'classical' },
      { label: "Dramatic light & shadow", category: 'rhythm' },
    ],
  },
];

interface Result {
  title: string;
  description: string;
  theme: string;
}

const results: Record<AnswerCategory, Result> = {
  nature: {
    title: "Nature Soul",
    description: "Your calm lives in forests, seas, and open skies.",
    theme: "Nature Contemplation",
  },
  abstract: {
    title: "Abstract Dreamer",
    description: "Your mind finds freedom in color and form.",
    theme: "Abstract Flow",
  },
  classical: {
    title: "Classical Spirit",
    description: "You connect with timeless beauty.",
    theme: "Masterpiece Meditation",
  },
  rhythm: {
    title: "Rhythm Seeker",
    description: "You find peace in gentle motion.",
    theme: "Moving Stillness",
  },
};

const CalmQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AnswerCategory[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (category: AnswerCategory) => {
    const newAnswers = [...answers, category];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = (): Result => {
    const counts: Record<AnswerCategory, number> = {
      nature: 0,
      abstract: 0,
      classical: 0,
      rhythm: 0,
    };
    answers.forEach((a) => {
      counts[a]++;
    });
    const winner = (Object.keys(counts) as AnswerCategory[]).reduce((a, b) =>
      counts[a] >= counts[b] ? a : b
    );
    return results[winner];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const progress = showResult ? 4 : currentQuestion;

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What's Your Calm Style?
          </h2>
          <div className="w-16 h-1 bg-pink-500 mx-auto mb-4 rounded-full" />
          <p className="text-slate-300 text-lg">
            Answer 4 quick questions to discover your ideal art meditation theme.
          </p>
        </div>

        {/* Quiz panel */}
        <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 md:p-10">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-slate-400 mb-2">
              <span>{showResult ? 'Result' : `Question ${currentQuestion + 1} of 4`}</span>
              <span>{Math.round((progress / 4) * 100)}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-pink-400 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(progress / 4) * 100}%` }}
              />
            </div>
          </div>

          {!showResult ? (
            /* Question view */
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer.category)}
                    className="w-full text-left bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-pink-500/50 cursor-pointer transition-all text-slate-200 text-lg"
                  >
                    {answer.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result view */
            <div className="text-center">
              <div className="border border-pink-500/40 rounded-2xl p-8 mb-6 shadow-[0_0_30px_rgba(236,72,153,0.15)]">
                <p className="text-pink-400 text-sm uppercase tracking-widest mb-2">
                  Your calm style is
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {getResult().title}
                </h3>
                <p className="text-slate-300 text-lg mb-2">
                  {getResult().description}
                </p>
                <p className="text-pink-400 font-medium text-lg">
                  Theme: {getResult().theme}
                </p>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfgG_BwD4yemBWcypp-5hOxbBh2z-ZNBpa7HEr5KRpJ7Qu5Mg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 text-sm font-bold text-pink-400 rounded-full border-2 border-pink-500 hover:bg-pink-500/10 transition-all text-lg mb-4"
              >
                Join the Waiting List
              </a>

              <div>
                <button
                  onClick={resetQuiz}
                  className="text-slate-400 hover:text-pink-400 transition-colors text-sm underline underline-offset-4"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalmQuiz;
