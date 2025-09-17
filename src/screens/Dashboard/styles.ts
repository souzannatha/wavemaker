import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  cover: {
    width: 400,
    height: 400,
  },
  titleContainer: {
    marginLeft: 16,
    marginTop: 66,
  },
  title: {
    color: colors.white,
    width: 256,
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.white,
    width: 108,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonExclamation: {
    width: 194,
    height: 40,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  textExclamation: {
    color: colors.white,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subtitle: {
    color: colors.white,
    width: 256,
  },
  coursesContainer: {
    backgroundColor: colors.grey500,
  },
  coursesList: {
    marginLeft: 16,
  },
  courseTitle: {
    color: colors.white,
    marginTop: 16,
    marginBottom: 8,
  },
  courseList: {
    flexDirection: 'row',
  },
});
