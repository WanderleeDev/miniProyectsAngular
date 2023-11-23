import { IRegister } from "./IRegister.interface";

export interface IPersonalData {
  primaryData: IPrimaryData;
  registerData: IRegister;
  complementary: IComplementaryDta;
}

export interface IComplementaryDta {
  nickName: string;
  'backup-account': string;
  phone: string;
  sex: 'M' | 'F' | 'Other';
  nationality: string;
  direction: string;
  extraDta: string;
}
export interface IPrimaryData {
  img: string;
  name: string;
  subName: string;
  age: number;
}

//Dto
export type IPersonalDataDto = Partial<IPersonalData>
