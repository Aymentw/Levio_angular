import {Application} from './Application';

export class Interview {
  id: number;
  dateInterview: Date;
  typeInterview: TypeInterview;
  application: Application;

}
enum TypeInterview {
  interview, InterviewTech

}
