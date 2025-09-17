import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  courseImage: {
    width: 160,
    height: 89,
    borderRadius: 4,
    marginBottom: 8,
    marginRight: 8,
    position: 'relative',
  },
  iconShop: {
    position: 'absolute',
    bottom: 12,
    right: 12,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 160,
    marginBottom: 16,
  },
  barYellow: {
    width: 110,
    height: 2,
  },
  barGrey: {
    width: 50,
    height: 2,
    backgroundColor: 'grey',
  },
});
