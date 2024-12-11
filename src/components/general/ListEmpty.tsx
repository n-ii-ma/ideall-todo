import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleMedium">No todos available</Text>
    </View>
  );
};

export default ListEmpty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
