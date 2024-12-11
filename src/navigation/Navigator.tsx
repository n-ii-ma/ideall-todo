import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TabBar from './TabBar';
import TodoList from '@/screens/todos/TodoList';
import AddTodo from '@/screens/todos/AddTodo';

// Bottom tabs
export const BottomTabNavigator = createBottomTabNavigator({
  tabBar: ({ navigation, state, descriptors, insets }) => (
    <TabBar
      navigation={navigation}
      state={state}
      descriptors={descriptors}
      insets={insets}
    />
  ),
  screens: {
    TodoList: {
      screen: TodoList,
      options: {
        headerShown: false,
        tabBarLabel: 'Todo List',
        tabBarIcon: ({ color, size }) => (
          <Icon name="checklist" size={size} color={color} />
        ),
      },
    },
    TodoInput: {
      screen: AddTodo,
      options: {
        headerShown: false,
        tabBarLabel: 'Add Todo',
        tabBarIcon: ({ color, size }) => (
          <Icon name="playlist-add" size={size} color={color} />
        ),
      },
    },
  },
});

// Create a navigation component
const Navigation = createStaticNavigation(BottomTabNavigator);

export default Navigation;
