import React from 'react';
import style from './index.module.scss';

interface LoaderProps {
   loading:boolean,
   className?:string
}

const Loader = (props:LoaderProps) => {
  if(props.loading){
    return (
      <div className={`${style.lds_ripple} ${props.className}`}>
        <div/>
        <div/>
      </div>
    )
  }else{
    return null
  }
};

export default Loader;