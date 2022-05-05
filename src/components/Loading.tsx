import { CircleNotch } from 'phosphor-react';
import React from 'react';

export function Loading() {
  return (
    <div className="w-5 h-5 flex justify-center items-center overflow-hidden">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
    </div>
  );
}
