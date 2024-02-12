import { Reader } from './reader';

export interface Address {
  id: number;
  appartement: string;
  rue: string;
  ville: string;
  codePostal: string;
  pays: string;
  lecteurs: Reader[];
}
