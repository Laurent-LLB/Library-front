import { Book } from './book';

export interface Domain {
  id: number;
  nom: string;
  description: string;
  livres: Book[];
}
