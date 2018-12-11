import {Application} from './Application';

class Skill {
  id: number;

}

export class JobOffer {
  id: number;
  mission: string;
  required_profile: string;
  beginning: Date;
  experience: string;
  function: string;
  nbPoste: number;
  listSkills: Skill[];
  listApplicant: Application[];
}
