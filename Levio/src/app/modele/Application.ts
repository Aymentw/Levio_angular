import {JobOffer} from './JobOffer';
import {Folder} from './Folder';
import {Test} from './Test';
import {Interview} from './Interview';

class Ressource {
  id: number;
}

export class Application {
  id: number;
  date_app: Date;
  state: State;
  folder: Folder[];
  listTest: Test[];
  listInterview: Interview[];
  Description: string;
  jobOffer: JobOffer;
  ressource: Ressource;

}
enum State {
  notApplay, interview, testTech, interviewTech, testFr, accepted, applicationAccepted, refused
}
