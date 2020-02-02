import React from 'react';
import style from './index.module.scss';

interface ButtonProps {
   onClick?:()=>any;
   title:string;
}
const Button = ({title, onClick}:ButtonProps):JSX.Element => {
   return (
      <button onClick={onClick} className={style.button}>
         {title}
      </button>
   );
};

export default Button