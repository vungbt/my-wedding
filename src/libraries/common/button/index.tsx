import clsx from 'clsx';
import React, { forwardRef, Ref } from 'react';

type ButtonProps = {
  label: string;
  className?: string;
};

const Button = forwardRef(function ButtonBase(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const { className, label, ...reset } = props;

  return (
    <button
      ref={ref}
      {...reset}
      className={clsx(
        'btn border border-solid border-white py-2 px-3 relative text-white min-w-28',
        className
      )}
    >
      <span className="btn__h-lines"></span>
      <span className="btn__v-lines"></span>
      {label}
    </button>
  );
});

export default Button;
