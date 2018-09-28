import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bars = [
      { id: 11, name: 'Daniel' type: 'Bar' place: 'Mean Eyed Cat' description: 'test' },
      { id: 12, name: 'Hunter' type: 'Bar' place: 'Cover 3' description: 'test' },
      { id: 13, name: 'Blake' type: 'Bar' place: 'Elephant Room' description: 'test' },
      { id: 14, name: 'Emily' type: 'Bar' place: 'Elephant Room' description: 'test' },
      { id: 15, name: 'Malorie' type: 'Bar' place: 'Elephant Room' description: 'test' },
      { id: 16, name: 'Tony' type: 'Bar' place: 'Elephant Room' description: 'test' },
      { id: 17, name: 'Antonio' type: 'Bar' place: 'Elephant Room' description: 'test' },
      { id: 18, name: 'Kerry' type: 'Bar' place: 'Mean Eyed Cat' description: 'test' },
      { id: 19, name: 'Cole' type: 'Bar' place: 'Elephant Room' description: 'test' },
      { id: 20, name: 'Ihab' type: 'Bar' place: 'Elephant Room' description: 'test' },
    ];
    const restaurant = [
      { id: 11, name: 'Daniel' type: 'Restaurant' place: 'The Park' description: 'test' },
      { id: 12, name: 'Hunter' type: 'Restaurant' place: 'The Park' description: 'test' },
      { id: 13, name: 'Blake' type: 'Restaurant' place: 'The Park' description: 'test' },
      { id: 14, name: 'Emily' type: 'Restaurant' place: 'The Park' description: 'test' },
      { id: 15, name: 'Malorie' type: 'Restaurant' place: 'The Park' description: 'test' },
      { id: 16, name: 'Tony' type: 'Restaurant' place: 'The Park' description: 'test' },
      { id: 17, name: 'Antonio' type: 'Restaurant' place: 'The Park' description: 'test' },
      { id: 18, name: 'Kerry' type: 'Restaurant' place: 'The Park' description: 'test' },
      { id: 19, name: 'Cole' type: 'Restaurant' place: 'The Park' description: 'test' },
      { id: 20, name: 'Ihab' type: 'Restaurant' place: 'The Park' description: 'test' },
    ];
    const events = [
      { id: 11, name: 'Daniel' type: 'Events' place: 'SXSW' description: 'test' },
      { id: 12, name: 'Hunter' type: 'Events' place: 'SXSW' description: 'test' },
      { id: 13, name: 'Blake' type: 'Events' place: 'SXSW' description: 'test' },
      { id: 14, name: 'Emily' type: 'Events' place: 'SXSW' description: 'test' },
      { id: 15, name: 'Malorie' type: 'Events' place: 'SXSW' description: 'test' },
      { id: 16, name: 'Tony' type: 'Events' place: 'SXSW' description: 'test' },
      { id: 17, name: 'Antonio' type: 'Events' place: 'SXSW' description: 'test' },
      { id: 18, name: 'Kerry' type: 'Events' place: 'SXSW' description: 'test' },
      { id: 19, name: 'Cole' type: 'Events' place: 'SXSW' description: 'test' },
      { id: 20, name: 'Ihab' type: 'Events' place: 'SXSW' description: 'test' },
    ];
    return { bars, restaurant, events };
  }
}
