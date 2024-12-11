import { useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';

import { useAppSelector } from '@/redux/hooks';
import {
  todosSelectors,
  remainingTodosSelector,
} from '@/redux/features/todos/todosSlice';

import Todo from '@/components/todos/TodoCard';
import ListEmpty from '@/components/general/ListEmpty';

import type { TodoCardProps } from '@/components/todos/types';

// Card height
const CARD_HEIGHT = 60;

const TodoList = () => {
  // Select all of the todos
  const todos = useAppSelector(todosSelectors.selectAll);

  // Select remaining todos
  const remainingTodos = useAppSelector(remainingTodosSelector);

  // Render todo card
  const renderTodoCardItem = useCallback(
    ({ item }: TodoCardProps) => <Todo item={item} cardHeight={CARD_HEIGHT} />,
    [],
  );

  return (
    <View style={styles.container}>
      {todos.length > 0 ? (
        <Text variant="titleLarge" style={styles.title}>
          Remaining Todos: {remainingTodos}
        </Text>
      ) : null}
      <FlatList
        data={todos}
        style={styles.listContainer}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={renderTodoCardItem}
        ListEmptyComponent={<ListEmpty />}
        getItemLayout={(data, index) => ({
          length: CARD_HEIGHT,
          offset: CARD_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
  },
  listContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  listContent: {
    flexGrow: 1,
    width: '80%',
    alignSelf: 'center',
    gap: 10,
    paddingVertical: 10,
  },
});
