import {IconNames} from '@components';

import {AppTabBottomTabParamList} from './AppTab';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: IconNames;
  }
> = {
  HomeScreen: {
    label: 'Home',
    icon: 'home',
  },
  ProfileScreen: {
    label: 'Perfil',
    icon: 'profile',
  },
  SearchScreen: {
    label: 'Procurar',
    icon: 'magnifier',
  },
  BookmarkScreen: {
    label: 'Marcadores',
    icon: 'bookmark',
  },
  NewsScreen: {
    label: 'Noticias',
    icon: 'news',
  },
};
