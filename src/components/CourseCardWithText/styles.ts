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
    bottom: 50,
    right: 12,
  },
  textCard: {
    color: colors.white,
    width: 160,
  },
});
