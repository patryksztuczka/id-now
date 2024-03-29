import BookFilledIcon from '../assets/icons/BookFilledIcon';
import BookIcon from '../assets/icons/BookIcon';
import HistoryFilledIcon from '../assets/icons/HistoryFilledIcon';
import HistoryIcon from '../assets/icons/HistoryIcon';
import HomeFilledIcon from '../assets/icons/HomeFilledIcon';
import HomeIcon from '../assets/icons/HomeIcon';
import SettingsIcon from '../assets/icons/SettingIcon';
import SettingsFilledIcon from '../assets/icons/SettingsFilledIcon';
import { IDocument } from '../components/DocumentCard/DocumentCard.types';
import { INavigationOption } from '../components/NavigationButton/NavigationButton.types';
import { IReduxStatus } from '../types/IReduxStatus';

export const navigationRoutes = {
  home: '/home',
  welcome: '/welcome',
  login: '/login',
  signup: '/signup',
  camera: '/camera',
  summary: '/summary',
  history: '/history',
  tutorial: '/tutorial',
  settings: '/settings',
};

export const navigationBarOptions: INavigationOption[] = [
  {
    label: 'Strona główna',
    path: navigationRoutes.home,
    icon: HomeIcon,
    activeIcon: HomeFilledIcon,
  },
  {
    label: 'Historia',
    path: navigationRoutes.history,
    icon: HistoryIcon,
    activeIcon: HistoryFilledIcon,
  },
  {
    label: 'Samouczek',
    path: navigationRoutes.tutorial,
    icon: BookIcon,
    activeIcon: BookFilledIcon,
  },
  {
    label: 'Ustawienia',
    path: navigationRoutes.settings,
    icon: SettingsIcon,
    activeIcon: SettingsFilledIcon,
  },
];

export const polishId: IDocument = {
  id: 1,
  title: 'Dowód osobisty',
  subtitle: 'Wykonaj zdjęcie do polskiego dowodu osobistego.',
  // in milimeters
  requiredWidth: 35,
  requiredHeight: 45,
  // in megabytes
  maxFileSize: 2.5,
};

export const reduxStatus: IReduxStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
