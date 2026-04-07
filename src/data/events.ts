export interface Event {
  id: string | number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  type: string;
  category: string;
  tags: string[];
}

export const upcomingEvents: Event[] = [];

export const pastEvents = [
  {
    title: 'PixelMart Unified Headquarters Launch',
    date: '2026-01-10',
    description: 'Successfully deployed the PixelMart ERP and financial headquarters for Mr. Faustin Hagenimana, revolutionizing multi-branch retail management.',
    image: 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1775564616/pixelmartsold_yabygf.png',
    author: 'Theogene Iradukunda'
  },
  {
    title: 'SmartStock Ultimate BMS Release',
    date: '2026-02-15',
    description: 'The global release of the SmartStock Business Management System for Mr. Juldas, enabling real-time P&L analytics and branch synchronization.',
    image: 'https://res.cloudinary.com/dhjdtt7rj/image/upload/q_auto/f_auto/v1775564686/smartstock_tbgyi2.png',
    author: 'Theogene Iradukunda'
  },
];
