import React from 'react';
import logo from '../../logo.svg';
import style from './index.module.scss';
import Button from "../ui/Button";
import Input from "../ui/Input/Input";
import {connect} from 'react-redux';
import {Workshop, } from '../../store/reducers/workshop.reducer';
import * as actions from '../../store/actions/workshop.actions';
import {GlobalState} from '../../store';
import Loader from "../ui/Loader/Loader";

interface AppProps{
   onInputChange:Function,
   workshop:Workshop,
   fetchData: typeof actions.fetchData
}

const App = (props:AppProps) => {
   const {inputFields, errors, exposure, facility, person, loading} = props.workshop;

   const onFormSubmit = (e:React.FormEvent):void=>{
      e.preventDefault();
      props.fetchData(inputFields.value)
      // props.fetchData('/api/person')
   };

   let disabled =false;
   if(!inputFields.value) disabled=true;
   if(inputFields.value && inputFields.value.length>10) disabled=true;

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
            <form onSubmit={onFormSubmit}>
               <Input
                  type='text'
                  value={inputFields.value}
                  name='value'
                  error={errors.value}
                  onInputChange={props.onInputChange}
               />
               <br/>
               <Button title='Submit' disabled={disabled}/>
            </form>
            {errors.server && <div>{errors.server}</div>}
            <Loader loading={loading} className={style.loader}/>
            {person && facility && exposure &&
            <div className={style.results}>
               <p>Person: val1:{person.val1} val2:{person.val2}</p>
               <p>Facility: val3:{facility.val3} val4:{facility.val4}</p>
               <p>Exposure: val5:{exposure.val5}</p>
               <p>Multiply val3 x val4 = {facility.val3 * facility.val4}</p>
            </div>
            }
         </div>
      </div>
   );
};

const mapStateToProps = ({workshop}:GlobalState) => ({workshop});

export default connect(mapStateToProps, actions)(App);
