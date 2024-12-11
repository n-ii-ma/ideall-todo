import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';

import { useAppDispatch } from '@/redux/hooks';
import { todoAdded } from '@/redux/features/todos/todosSlice';

const AddTodo = () => {
  // Todo title
  const [title, setTitle] = useState('');

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  /** Callback to add a new todo */
  const handleAddTodo = () => {
    if (title) {
      dispatch(
        todoAdded({ id: nanoid(), title: title.trim(), completed: false }),
      );

      // Empty input and navigate to the `Todo List` screen
      setTitle('');
      navigation.navigate('TodoList');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Todo Title"
        value={title}
        mode="outlined"
        placeholder="Shopping, Cleaning, etc."
        onSubmitEditing={handleAddTodo}
        onChangeText={text => setTitle(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddTodo} style={styles.button}>
        Add Todo
      </Button>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
});
