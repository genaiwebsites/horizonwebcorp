import React from 'react';

export const TrailDivider = () => (
  <div className="relative h-32 w-full overflow-hidden flex justify-center opacity-80">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
    <div className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
  </div>
);
