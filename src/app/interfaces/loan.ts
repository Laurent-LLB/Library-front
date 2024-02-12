import { Reader } from './reader';

export interface Loan {
  id: number;
  dateEmprunt: Date;
  dateRetour: Date;
  lecteur: Reader;
  livre: string;
}
