import clsx from 'clsx';
import React, { forwardRef, Ref } from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: string;
  className?: string;
  btnStyle?: 'default' | 'secondary';
};

const Button = forwardRef(function ButtonBase(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const { className, label, btnStyle = 'default', type = 'button', ...reset } = props;

  return (
    <button
      ref={ref}
      {...reset}
      type={type}
      className={clsx(
        'btn border border-solid py-2 px-3 relative min-w-28',
        {
          'text-white border-white': btnStyle === 'default',
          'text-secondary border-secondary': btnStyle === 'secondary'
        },
        className
      )}
    >
      <span
        className={clsx('btn__h-lines', {
          'btn__h-lines-default': btnStyle === 'default',
          'btn__h-lines-secondary': btnStyle === 'secondary'
        })}
      ></span>
      <span
        className={clsx('btn__v-lines', {
          'btn__v-lines-default': btnStyle === 'default',
          'btn__v-lines-secondary': btnStyle === 'secondary'
        })}
      ></span>
      {label}
    </button>
  );
});

export default Button;
