import { Address } from './address';
import { Loan } from './loan';

export interface Reader {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  motDePass: string;
  adresse: Address;
  emprunts: Loan[];
}
