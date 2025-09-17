import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../styles/colors';

interface CourseCardProps {
  showBar?: boolean;
  shop?: boolean;
}

export function CourseCard({ showBar = true, shop = true }: CourseCardProps) {
  return (
    <TouchableOpacity>
      <Image
        style={styles.courseImage}
        source={require('../../../assets/images/course.png')}
        width={160}
        height={89}
      />
      {shop && (
        <Entypo style={styles.iconShop} name='shopping-cart' size={16} color={colors.yellow} />
      )}
      {showBar && (
        <View style={styles.bar}>
          <LinearGradient
            style={styles.barYellow}
            colors={['#F1C94F', '#D6982C', '#F1C94F', '#D2901C']}
          ></LinearGradient>
          <View style={styles.barGrey} />
        </View>
      )}
    </TouchableOpacity>
  );
}
