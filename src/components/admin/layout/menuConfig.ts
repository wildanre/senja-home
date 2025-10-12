import { Home, Users, Mail } from 'lucide-react';
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: Home,
    path: '/admin/dashboard',
    description: 'Overview & Analytics'
  },
  {
    id: 'waitlist',
    name: 'Waitlist Data',
    icon: Users,
    path: '/admin/waitlist',
    description: 'Manage user data'
  },
  {
    id: 'email',
    name: 'Send Email',
    icon: Mail,
    path: '/admin/email',
    description: 'Email broadcast'
  }
];