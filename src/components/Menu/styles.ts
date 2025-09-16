import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  menu: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.grey1000,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  image: {
    width: 155,
    height: 32,
  },
  perfil: {
    width: 32,
    height: 32,
  },
  hamburguer: {
    width: 24,
    height: 24,
  },
  menuIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});
