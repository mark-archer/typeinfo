import { isNumber } from "util";
import { v4 } from 'uuid';

export const newid = v4().replace(/-/g, '');

//import { stringify, copy } from "./utils";

// export type ValidateFnType = (x:any) => any; // should throw an error if invalid
// export type MatchFnType = (x:any) => boolean;
// export type StringifyFnType = (x:any) => string;
// export type ParseFnType = (x:string) => any;
// export type CastFnType = (x:any) => any;

export type TypeInfo = {
  id:string
  name?:string
  // validate?:ValidateFnType
  // match?:MatchFnType
  // stringify?:StringifyFnType
}

// export function valueType() {
//   return {

//   }
// }

export const Num = {
  id: 'Num',
  name: 'Num',
  validate: (x:any) => {
    if(!isNumber(x)) throw 'Invalid Num';
    return x;
  },
  cast: (x:any) => Number(x),
  match: isNumber
}

export function typeInfo(): TypeInfo {
  return {
    id: newid
  }
}