import {OnInputChangeAction, ErrorAction, FetchingDataSuccessAction, FetchingDataAction, } from './actions/workshop.actions';

export enum Types {
   FETCHING_DATA ='FETCHING_DATA',
   FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS',
   FORM_ERROR ='FORM_ERROR',
   ON_INPUT_CHANGE ='ON_INPUT_CHANGE'
}

export type Action =
   OnInputChangeAction | ErrorAction | FetchingDataSuccessAction | FetchingDataAction;