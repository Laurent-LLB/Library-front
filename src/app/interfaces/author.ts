import { Book } from './book';

export interface Author {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  livres: Book[];
  grade: string;
}
