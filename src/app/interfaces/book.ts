import { Author } from './author';
import { Domain } from './domain';
import { Loan } from './loan';

export interface Book {
  id: number;
  titre: string;
  nombreDePage: number;
  domaineId: number;
  auteurId: number;
  auteur: Author;
  domaine: Domain;
  emprunts: Loan[];
}
