import React from 'react';
import style from './index.module.scss';

interface ButtonProps {
   onClick?: () => any;
   title: string;
   disabled?: boolean
}

const Button = (props: ButtonProps): JSX.Element => {
   const disabled = props.disabled ? style.disabled : '';

   return (
      <button
         onClick={props.onClick}
         className={`${style.button} ${disabled}`}
      >
         {props.title}
      </button>
   );
};

export default Button