import { Loading } from 'components/Loading';
import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface screenshotButtonProps {
  screenshot: string | null;
  onscreenshotTook: Dispatch<SetStateAction<string | null>>;
}

export function ScreeshotButton({ screenshot, onscreenshotTook }: screenshotButtonProps) {
  const [ísTakingscreenshot, setIsTakingscreenshot] = useState(false);

  async function handleTakeScreenchort() {
    setIsTakingscreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onscreenshotTook(base64image);

    setIsTakingscreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transtion-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
        onClick={() => onscreenshotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenchort}
      className="p-2 bg-zinc-800 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {ísTakingscreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
