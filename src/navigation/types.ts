import { BottomTabNavigator } from './Navigator';

import type { StaticParamList } from '@react-navigation/native';

type BottomTabParamList = StaticParamList<typeof BottomTabNavigator>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabParamList {}
  }
}
