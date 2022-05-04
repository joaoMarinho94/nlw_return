import React, { useState } from 'react';

import bugSvg from '../assets/bug.svg';
import ideaSvg from '../assets/idea.svg';
import thoughtSvg from '../assets/thought.svg';
import { CloseButton } from './CloseButton';

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugSvg,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaSvg,
      alt: 'Imagem de uma lampada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtSvg,
      alt: 'Imagem de um balão',
    },
  },
};

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>

        <CloseButton />
      </header>

      {feedbackType && <p>hello word</p>}

      {!feedbackType && (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setFeedbackType(key as FeedbackType)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          ))}
        </div>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ❤ pela{' '}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
