import {Types} from '../types';
import React from 'react';

export interface OnInputChangeAction {
   type: Types.ON_INPUT_CHANGE,
   name: string,
   value?: string | number
}

export const fetchData = () => {

};

export const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): OnInputChangeAction => {
   let {name, value} = e.target;
   return {
      type:Types.ON_INPUT_CHANGE,
      name,
      value
   }
};
