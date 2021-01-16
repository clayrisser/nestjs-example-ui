import { Action as ReduxAction } from 'redux';

export interface Action<Type = string, Payload = any>
  extends ReduxAction<Type> {
  payload: Payload;
}

export interface HashMap<T = any> {
  [key: string]: T;
}

// eslint-disable-next-line import/no-unresolved
export type { NextApiRequest, NextApiResponse } from 'next-auth/_utils';
