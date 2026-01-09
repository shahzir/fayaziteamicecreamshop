import { MenuItem, TeamMember } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Vanilla',
    description: 'Smooth and creamy Madagascar vanilla bean.',
    price: 250,
    category: 'Flavor',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=400'
  },
  {
    id: 2,
    name: 'Rich Chocolate',
    description: 'Deep, dark Belgian chocolate goodness.',
    price: 280,
    category: 'Flavor',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400'
  },
  {
    id: 3,
    name: 'Fresh Strawberry',
    description: 'Loaded with real sun-ripened strawberries.',
    price: 260,
    category: 'Flavor',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=400'
  },
  {
    id: 4,
    name: 'Blueberry Bliss',
    description: 'Creamy delight infused with juicy wild blueberries and a swirl of sweetness.',
    price: 300,
    category: 'Flavor',
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=500'
  },
  {
    id: 5,
    name: 'Pistachio Perfection',
    description: 'Roasted pistachios blended into creamy milk.',
    price: 350,
    category: 'Flavor',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=400'
  },
  {
    id: 6,
    name: 'Waffle Cone',
    description: 'Freshly baked, crispy waffle cone.',
    price: 80,
    category: 'Cone',
    image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?q=80&w=400'
  },
  {
    id: 7,
    name: 'Family Pack (1 Litre)',
    description: 'Perfect for sharing with your loved ones.',
    price: 950,
    category: 'Family Pack',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=400'
  },
  {
    id: 8,
    name: 'Sundae Cup',
    description: 'A mix of flavors in a convenient cup.',
    price: 450,
    category: 'Cup',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Fayaz Ali',
    role: 'Owner',
    image: 'https://picsum.photos/seed/fayaz/200/200'
  },
  {
    name: 'Jameel',
    role: 'Manager',
    image: 'https://picsum.photos/seed/jameel/200/200'
  },
  {
    name: 'Abdul Rehman',
    role: 'Operations Supervisor / Sales Executive',
    image: 'https://picsum.photos/seed/abdul/200/200'
  }
];