import { Person } from './models';
import { Recommendation } from './models';

export const RECOMMENDATIONS: Recommendation[] =[
  {
    person: 'Emily',
    type: 'Restaurant',
    name: 'Hopdoddy',
    description: 'Tasty burger'
  },
  {
    person: 'Blake',
    type: 'Restaurant',
    name: 'Torchy tacos',
    description: 'Tasty tacos'
  }

]

export const PEOPLE: Person[] = [
  {
    id: 1,
    name: 'Emily',
    profile: 'This is emily',
  }, 
  
  {
    id: 2,
    name: 'Blake',
    profile: 'This is blake',
},
  {
    id: 3,
    name: 'Hunter',
    profile: 'This is Hunter',
  },
  {
    id: 4,
    name: 'Daniel',
    profile: 'This is Daniel',

  },
  {
    id: 5,
    name: 'Malorie',
    profile: 'This is Malorie',
    },
];