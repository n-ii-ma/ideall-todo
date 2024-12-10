import { StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { BottomNavigation, TouchableRipple } from 'react-native-paper';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const TabBar = ({
  navigation,
  state,
  descriptors,
  insets,
}: BottomTabBarProps) => {
  return (
    <BottomNavigation.Bar
      style={styles.bar}
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      renderTouchable={({ key, ...props }) => (
        <TouchableRipple key={key} {...props} />
      )}
      renderIcon={({ route, focused, color }) => {
        const { options } = descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({ focused, color, size: 24 });
        }

        return null;
      }}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : typeof options.title === 'string'
            ? options.title
            : route.name;

        return label;
      }}
    />
  );
};

export default TabBar;

const styles = StyleSheet.create({
  bar: {
    borderTopWidth: 0.5,
    borderTopColor: 'lightgray',
  },
});
