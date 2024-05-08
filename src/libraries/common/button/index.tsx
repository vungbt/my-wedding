import React from 'react';

type ButtonProps = {
  title: string;
};

export default function Button({ title }: ButtonProps) {
  return (
    <button className="btn border border-solid border-white py-2 px-3 relative text-white min-w-28">
      <span className="btn__h-lines"></span>
      <span className="btn__v-lines"></span>
      {title}
    </button>
  );
}
