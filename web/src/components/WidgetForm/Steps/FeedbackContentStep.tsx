import { Loading } from 'components/Loading';
import { ArrowLeft } from 'phosphor-react';
import React, { FormEvent, useState } from 'react';
import { api } from 'service/api';

import { CloseButton } from '../../CloseButton';
import { FeedbackType, feedbackTypes } from '..';
import { ScreeshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackSent: () => void;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackSent,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const [screenshot, setscreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingLoading, setIsSendingLoading] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmit(e: FormEvent) {
    try {
      e.preventDefault();

      setIsSendingLoading(true);

      await api.post('/feedbacks', {
        type: feedbackType,
        comment,
        screenshot,
      });

      onFeedbackSent();
    } catch (error) {
      alert('Ocorreu um erro!');
    } finally {
      setIsSendingLoading(false);
    }
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zic-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <textarea
          placeholder="Conte com detalhes o que esstá acontecendo..."
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreeshotButton screenshot={screenshot} onscreenshotTook={setscreenshot} />

          <button
            disabled={!comment || isSendingLoading}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transtion-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-500"
          >
            {isSendingLoading ? <Loading /> : 'Enviar Feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}
