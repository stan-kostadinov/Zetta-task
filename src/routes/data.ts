export interface IGamesData {
    title: string;
    description: string;
    favorites?: boolean;
    popular?: boolean;
    new?: boolean;
    developer: string;
  }
  
  export const gamesData: IGamesData[] = [{
    title: 'Title 1',
    description: 'Description 1',
    developer: '1x2 Network',
    popular: true,
  }, {
    title: 'Title 2',
    description: 'Description 2',
    developer: '2by2 Games'
  }, {
    title: 'Title 3',
    description: 'Description 3',
    developer: '1x2 Network',
  }, {
    title: 'Title 4',
    description: 'Description 4',
    developer: 'Apollo Games',
    favorites: true,
  }, {
    title: 'Title 5',
    description: 'Description 5',
    developer: '1x2 Network',
    popular: true,
    new: true,
  }, {
    title: 'Title 6',
    description: 'Description 6',
    developer: 'Apollo Games'
  }, {
    title: 'Title 7',
    description: 'Description 7',
    developer: 'Aspect Games'
  }, {
    title: 'Title 8',
    description: 'Description 8',
    developer: 'XPG Games',
    new: true,
  }, {
    title: 'Title 9',
    description: 'Description 9',
    developer: 'XPG Games',
    new: true,
  }, {
    title: 'Title 10',
    description: 'Description 10',
    developer: 'XPG Games',
    new: true,
  }, {
    title: 'Title 11',
    description: 'Description 11',
    developer: 'XPG Games',
    new: true,
  }, {
    title: 'Title 12',
    description: 'Description 12',
    developer: 'XPG Games',
    new: true,
  }]