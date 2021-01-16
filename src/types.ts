import { Action as ReduxAction } from 'redux';

export interface Action<Type = string, Payload = any>
  extends ReduxAction<Type> {
  payload: Payload;
}
export interface HashMap<T = any> {
  [key: string]: T;
}
