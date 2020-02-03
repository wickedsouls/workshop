import {Action, Types} from '../types';

export interface Workshop {
   person: null | { val1: number, val2: number },
   facility: null | { val3: number, val4: number },
   exposure: null | { val5: number },
   inputFields: {value:string},
   errors: { value?: string, server?:string }
   loading:boolean
}

const initialState = {
   person: null,
   facility: null,
   exposure: null,
   inputValue: '',
   inputFields:{value:''},
   errors: {},
   loading:false
};

export const workShopReducer =
   (state: Workshop = initialState, action: Action): Workshop => {
      switch (action.type) {
         case Types.ON_INPUT_CHANGE:
            return {
               ...state,
               inputFields:{...state.inputFields, [action.name]:action.value},
               errors:{}
            };
         case Types.FETCHING_DATA :
            return {...state, loading:true};
         case Types.FETCHING_DATA_SUCCESS :
            return {
               ...state,
               person:action.person,
               exposure:action.exposure,
               facility:action.facility,
               loading:false,
            };
         case Types.FORM_ERROR :
            return {...state, errors:action.errors};
         default :
            return state
      }
   };