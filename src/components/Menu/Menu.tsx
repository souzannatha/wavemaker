import { View, Image } from 'react-native';
import { styles } from './styles';

export function Menu() {
  return (
    <View style={styles.menu}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/wavemaker-logo.png')}
        width={155}
        height={32}
      />
      <View style={styles.menuIconsContainer}>
        <Image
          style={styles.perfil}
          source={require('../../../assets/images/perfil.png')}
          width={32}
          height={32}
        />
        <Image
          style={styles.hamburguer}
          source={require('../../../assets/images/menu-hamburguer.png')}
          width={24}
          height={24}
        />
      </View>
    </View>
  );
}
