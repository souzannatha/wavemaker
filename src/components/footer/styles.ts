import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    height: 32,
    backgroundColor: colors.grey1000,
  },
  img: {
    width: 54,
    height: 16,
  },
});
