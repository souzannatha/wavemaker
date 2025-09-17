import { Image, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { styles } from './styles';
import { Text } from '../Text/Text';

interface CourseCardProps {
  shop?: boolean;
}

export function CourseCardWithText({ shop = true }: CourseCardProps) {
  return (
    <TouchableOpacity>
      <Image
        style={styles.courseImage}
        source={require('../../../assets/images/course-with-text.png')}
        width={160}
        height={95}
      />
      {shop && (
        <Entypo style={styles.iconShop} name='shopping-cart' size={16} color={colors.yellow} />
      )}
      <Text style={styles.textCard} bold preset='paragraphSmall'>
        Nome do Curso Lorem Ipsum Dolor Sit Amet
      </Text>
    </TouchableOpacity>
  );
}
