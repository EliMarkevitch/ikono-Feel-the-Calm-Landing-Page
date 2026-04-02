
import React, { useState } from 'react';

type AnswerCategory = 'nature' | 'water' | 'moonlight' | 'tenderness' | 'reflection' | 'masterpieces';

interface Question {
  question: string;
  answers: { label: string; category: AnswerCategory }[];
}

const questions: Question[] = [
  {
    question: "When you need to relax, you're drawn to...",
    answers: [
      { label: "Forests, fields, and open skies", category: 'nature' },
      { label: "Oceans, rivers, and rain", category: 'water' },
      { label: "Starlit skies and quiet darkness", category: 'moonlight' },
      { label: "Warmth, closeness, and gentle beauty", category: 'tenderness' },
      { label: "Stillness and silence", category: 'reflection' },
      { label: "Timeless paintings by the great masters", category: 'masterpieces' },
    ],
  },
  {
    question: "Your ideal calm moment is...",
    answers: [
      { label: "Walking through a garden at dawn", category: 'nature' },
      { label: "Listening to waves or flowing water", category: 'water' },
      { label: "Sitting quietly under the night sky", category: 'moonlight' },
      { label: "A warm embrace or a gentle melody", category: 'tenderness' },
      { label: "A pause — just breathing, just being", category: 'reflection' },
      { label: "Standing in front of a painting that moves you", category: 'masterpieces' },
    ],
  },
  {
    question: "What feeling do you crave most?",
    answers: [
      { label: "Grounding and connection to the earth", category: 'nature' },
      { label: "Flow and letting go", category: 'water' },
      { label: "Mystery and wonder", category: 'moonlight' },
      { label: "Softness and emotional warmth", category: 'tenderness' },
      { label: "Clarity and inner stillness", category: 'reflection' },
      { label: "Awe and timeless beauty", category: 'masterpieces' },
    ],
  },
  {
    question: "Your ideal screen experience...",
    answers: [
      { label: "Slowly changing landscapes and trees", category: 'nature' },
      { label: "Gentle ripples, tides, and flowing motion", category: 'water' },
      { label: "Deep shadows, soft glows, and moonlit scenes", category: 'moonlight' },
      { label: "Intimate close-ups with warm, soft light", category: 'tenderness' },
      { label: "Minimal movement, maximum presence", category: 'reflection' },
      { label: "Slow journeys through iconic artworks", category: 'masterpieces' },
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
    description: "Your calm lives in forests, meadows, and open skies. The earth grounds you.",
    theme: "Nature",
  },
  water: {
    title: "Water Spirit",
    description: "You find peace in the rhythm of waves, the flow of rivers, the sound of rain.",
    theme: "Water",
  },
  moonlight: {
    title: "Moonlight Dreamer",
    description: "The quiet of the night sky speaks to you. Mystery and stillness are your refuge.",
    theme: "Moonlight",
  },
  tenderness: {
    title: "Gentle Heart",
    description: "You seek warmth, softness, and beauty that touches the soul.",
    theme: "Tenderness",
  },
  reflection: {
    title: "Still Mirror",
    description: "You crave pause. In silence and stillness, you find yourself.",
    theme: "Reflection",
  },
  masterpieces: {
    title: "Art Devotee",
    description: "Timeless beauty moves you. Klimt, Vermeer, Monet — the masters calm your mind.",
    theme: "Masterpieces",
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
      water: 0,
      moonlight: 0,
      tenderness: 0,
      reflection: 0,
      masterpieces: 0,
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
        <div className="bg-slate-900/40 border-2 border-pink-500/60 rounded-2xl p-8 md:p-10">
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

              <div className="flex flex-wrap gap-4 justify-center mb-4">
                <a
                  href="#apple-store-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity transform hover:scale-[1.02]"
                >
                  <img
                    src="https://raw.githubusercontent.com/EliMarkevitch/images/main/APPLE_Badge_white.svg"
                    alt="Download on the App Store"
                    style={{ height: '44px', width: 'auto' }}
                  />
                </a>
                <a
                  href="#google-play-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity transform hover:scale-[1.02]"
                >
                  <img
                    src="https://raw.githubusercontent.com/EliMarkevitch/images/main/GooglePlay_Badge_Web_color_English%20(Black%20to%20White).png"
                    alt="Get it on Google Play"
                    style={{ height: '44px', width: 'auto' }}
                  />
                </a>
              </div>

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
