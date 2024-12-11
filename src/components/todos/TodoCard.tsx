import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface, Text, Checkbox, IconButton } from 'react-native-paper';

import { useAppDispatch } from '@/redux/hooks';
import { todoToggled, todoRemoved } from '@/redux/features/todos/todosSlice';

import type { TodoCardProps } from './types';

const TodoCard = ({ item, cardHeight = 60 }: TodoCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <Surface
      style={[
        styles.surface,
        { height: cardHeight, opacity: item.completed ? 0.5 : 1 },
      ]}
      elevation={4}>
      <View style={styles.textContainer}>
        <Checkbox
          status={item.completed ? 'checked' : 'unchecked'}
          onPress={() => dispatch(todoToggled(item.id))}
        />
        <Text>{item.title}</Text>
      </View>
      <IconButton
        icon="delete"
        iconColor="red"
        onPress={() => dispatch(todoRemoved(item.id))}
      />
    </Surface>
  );
};

export default memo(TodoCard);

const styles = StyleSheet.create({
  surface: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 15,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
