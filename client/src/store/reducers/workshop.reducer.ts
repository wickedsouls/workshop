export interface Workshop {
   person: null | { val1: string, val2: string },
   facility: null | { val3: string, val4: string },
   exposure: null | { val5: string },
   inputValue: string,
   errors: { value: string }
}

const initialState = {
   person: null,
   facility: null,
   exposure: {val5: '2'},
   inputValue: '',
   errors: {value: 'x'}
};

export const workShopReducer =
   (state: Workshop = initialState, action: any): Workshop => {
      switch (action.type) {

         default :
            return state
      }
   };