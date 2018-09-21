import { Person, Recommendation } from './models';

export const PEOPLE: Person[] = [
  {
    id: 1,
    name: 'Emily',
    profile: 'This is emily',
    recommendations: {
      restaurants: [{
        name: 'Hopdoddy',
        description: 'Tasty burger'
      }],
      events: [{
        name: 'Startup social'
      }]
    }
  },
  {
    id: 2,
    name: 'Blake',
    profile: 'This is blake',
    recommendations: {
      restaurants: [{
        name: 'Torchy tacos',
        description: 'Tasty tacos'
      }],
      events: []
    }
  },
  {
    id: 3,
    name: 'Hunter',
    profile: 'This is Hunter',
    recommendations: {
      restaurants: [{
        name: 'Torchy tacos',
        description: 'Tasty tacos'
      }],
      events: []
    }
  },
  {
    id: 4,
    name: 'Daniel',
    profile: 'This is Daniel',
    recommendations: {
      restaurants: [{
        name: 'Torchy tacos',
        description: 'Tasty tacos'
      }],
      events: []
    }
  },
  {
    id: 5,
    name: 'Malorie',
    profile: 'This is Malorie',
    recommendations: {
      restaurants: [{
        name: 'Torchy tacos',
        description: 'Tasty tacos'
      }],
      events: []
    }
  },
];