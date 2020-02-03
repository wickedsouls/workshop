import React from 'react';
import style from './index.module.scss';

interface InputProps {
   name: string;
   error?:string;
   onInputChange:Function;
   type:'number'|'text';
   value:string | number | undefined;
}

const Input = (props: InputProps): JSX.Element => {
   return (
      <div className={style.input_wrapper}>
         {props.error && <div className={style.error}>{props.error}</div>}
         <input
            onChange={(e)=>props.onInputChange(e)}
            name={props.name}
            type={props.type}
            value={props.value}
            className={style.input}
         />
      </div>
   );
};

export default Input;