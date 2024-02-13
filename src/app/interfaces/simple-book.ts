import { Domain } from './domain';

export interface SimpleBook {
  id: number;
  titre: string;
  nombreDePage: number;
  domaine: Domain;
}
