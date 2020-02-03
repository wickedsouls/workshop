import {Types} from '../types';
import React from 'react';
import {Dispatch} from 'redux';
import axios, {AxiosResponse} from 'axios';

interface Errors {
   value?: string,
   server?:string
}

export interface OnInputChangeAction {
   type: Types.ON_INPUT_CHANGE,
   name: string,
   value?: string | number
}

export interface ErrorAction {
   type:Types.FORM_ERROR,
   errors:Errors
}

export interface FetchingDataSuccessAction {
   type:Types.FETCHING_DATA_SUCCESS,
   person:{val1:number, val2:number},
   facility:{val3:number, val4:number},
   exposure:{val5:number},
}

export interface FetchingDataAction {
   type:Types.FETCHING_DATA
}

interface PersonData {
   val1:number,
   val2:number
}

const urls = {
   person:'/api/person',
   facility:'/api/facility',
   exposure:'/api/exposure'
};

export const fetchData = (input:string) => {
   const errors:Errors = {};
   if(!input) errors.value='Value is required';
   if(input && input.length>10) errors.value='Value is too long';
   if(Object.entries(errors).length>0){
      return {
         type:Types.FORM_ERROR,
         errors
      }
   }
   return async (dispatch:Dispatch) => {
      dispatch<FetchingDataAction>({
         type:Types.FETCHING_DATA
      });
      try{
         const {data:person}:AxiosResponse = await axios.get(`${urls.person}/${input}`);
         if(!person.hasOwnProperty('val1') ||!person.hasOwnProperty('val1')){
            throw new Error()
         }
         /**
          * we could dispatch action here to update person in case we need it before
          * facilities and exposure resolves
          */

         const [facility, exposure ]:AxiosResponse[] = await Promise.all([
            axios.get(`${urls.facility}/${person.val1}`),
            axios.get(`${urls.exposure}/${person.val2}`),
         ]);

         dispatch<FetchingDataSuccessAction>({
            type:Types.FETCHING_DATA_SUCCESS,
            person,
            facility:facility.data,
            exposure:exposure.data
         })

      }catch (e) {
         dispatch<ErrorAction>({
            type:Types.FORM_ERROR,
            errors:{server:'Unexpected server error'}
         })
      }
   }
};


export const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): OnInputChangeAction => {
   let {name, value} = e.target;
   return {
      type: Types.ON_INPUT_CHANGE,
      name,
      value
   }
};
