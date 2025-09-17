import { ImageBackground, TouchableOpacity, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { Menu } from '../../components/Menu/Menu';
import { Text } from '../../components/Text/Text';
import { AntDesign, Entypo } from '@expo/vector-icons';

export function Dashboard() {
  return (
    <ScrollView>
      <Menu />
      <ImageBackground
        style={styles.cover}
        source={require('../../../assets/images/women-cover.png')}
      >
        <View style={styles.titleContainer}>
          <Text bold preset='heading' style={styles.title}>
            Nome do Curso Lorem Ipsum br
          </Text>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <Entypo name='controller-play' size={20} color='black' />
              <Text bold>Assistir</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonExclamation}>
            <View style={styles.buttonContent}>
              <AntDesign name='exclamation-circle' size={20} color='white' />
              <Text bold style={styles.textExclamation}>
                Mais informações
              </Text>
            </View>
          </TouchableOpacity>
          <Text regular preset='paragraphSmall' style={styles.subtitle}>
            Descrição bem curtinha lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
