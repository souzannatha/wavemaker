import { Image, View } from 'react-native';
import { styles } from './styles';

export function Footer() {
  return (
    <View style={styles.footer}>
      <Image
        style={styles.img}
        width={116}
        height={24}
        source={require('../../../assets/images/wavemaker-logo.png')}
      />
      <Image
        style={styles.img}
        width={54}
        height={16}
        source={require('../../../assets/images/codie-logo.png')}
      />
    </View>
  );
}
