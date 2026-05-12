import React from 'react';

export const TrailDivider = () => (
  <div className="relative h-32 w-full overflow-hidden flex justify-center opacity-80">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed]/5 to-transparent" />
    <div className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#8b5cf6] to-transparent" />
  </div>
);
