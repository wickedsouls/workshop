import React from 'react';
import logo from '../../logo.svg';
import style from './index.module.scss';
import Button from "../ui/Button";
import Input from "../ui/Input/Input";
import {connect} from 'react-redux';
import {Workshop, } from '../../store/reducers/workshop.reducer';
import * as actions from '../../store/actions/workshop.actions';

interface AppProps extends Workshop{
   fetchData:Function,
   onInputChange:Function
}

const App = (props:AppProps) => {
   const onFormSubmit = (e:React.FormEvent):void=>{
      e.preventDefault();
      props.fetchData('/api/person')
   };
   console.log(props)
   return (
      <div className={style.app}>
         <header className={style.header}>
            <img src={logo} className={style.logo} alt="logo"/>
            <h1 className={style.title}>Welcome to React workshop</h1>
         </header>
         <div className={style.content}>
            <p className={style.desc}>
               Enter value and submit to get the results (max 10 symbols)
            </p>
            <button onClick={()=>console.log(props)}>click</button>
            <form onSubmit={onFormSubmit}>
               <Input
                  type='number'
                  value={props.inputValue}
                  name='value'
                  error={props.errors.value}
                  onInputChange={props.onInputChange}
               />
               <Button title='Submit'/>
            </form>
         </div>
      </div>
   );
};

const mapStateToProps = (state:Workshop) => {
   return {
      person:state.person,
      facility:state.facility,
      exposure:state.exposure,
      errors:state.errors,
      inputValue:state.inputValue
   }
};

export default connect(mapStateToProps, actions)(App);
