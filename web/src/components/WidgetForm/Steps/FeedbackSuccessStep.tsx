import { CloseButton } from 'components/CloseButton';
import React from 'react';

import successSvg from '../../../assets/success.svg';

interface IFeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: IFeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successSvg} alt="imagem de sucesso" />

        <span className="text-xl mt-2">Agradecemos o feddback!</span>

        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-trasparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transtion-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
