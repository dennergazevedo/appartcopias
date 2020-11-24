import React from 'react'

// ASSETS
import logo from '../../assets/img/logo.png';
import feitapravoce from '../../assets/img/feitapravoce.png';
import background from '../../assets/img/background.png';

// ICONS
import Icon from 'react-native-vector-icons/FontAwesome';

// STYLED COMPONENTS
import {
  Container,
  FeitaPraVoce,
  Logomarca,
  Background,
  Title,
  TextTitleBold,
  TextTitle,
  Button,
  TextButton,
  ButtonBack,
  TextButtonBack
} from './styles';

import { Linking } from 'react-native';

export default function Social({navigation}) {

  function handleSite () {
    Linking.canOpenURL('facebook.com/art.copias').then(supported => {
      if (supported) {
        Linking.openURL('https://www.artcopias.com.br');
      } else {
        console.log("Erro");
      }
    });
  }

  function handleFace () {
    Linking.canOpenURL('https://facebook.com/art.copias').then(supported => {
      if (supported) {
        Linking.openURL('https://facebook.com/art.copias');
      } else {
        console.log("Erro");
      }
    });
  }

  function handleInsta () {
    Linking.canOpenURL('https://www.instagram.com/artcopiasjm').then(supported => {
      if (supported) {
        Linking.openURL('https://www.instagram.com/artcopiasjm');
      } else {
        console.log("Erro");
      }
    });
  }

  function handleWhatsapp () {
    Linking.canOpenURL('https://api.whatsapp.com/send?phone=5531989620800').then(supported => {
      if (supported) {
        Linking.openURL('https://api.whatsapp.com/send?phone=5531989620800');
      } else {
        console.log("Erro");
      }
    });
  }

    return (
      <Container>
        <FeitaPraVoce resizeMode="contain" source={feitapravoce} />
        <Background source={background} />
        <Logomarca source={logo} />
        <Title>
          <TextTitleBold>Bem vindo(a) à sua gráfica digital!</TextTitleBold>
          <TextTitle>Por onde gostaria de falar com a gente?</TextTitle>
        </Title>
        <Button onPress={handleWhatsapp}>
          <Icon name="whatsapp" size={18} color="#FFF" />
          <TextButton>+55 (31)9 8962-0800</TextButton>
        </Button>
        <Button onPress={handleFace}>
          <Icon name="facebook-square" size={18} color="#FFF" />
          <TextButton>@art.copias</TextButton>
        </Button>
        <Button onPress={handleInsta}>
          <Icon name="instagram" size={18} color="#FFF" />
          <TextButton>@artcopiasjm</TextButton>
        </Button>
        <Button onPress={handleSite}>
          <Icon name="globe" size={18} color="#FFF" />
          <TextButton>www.artcopias.com.br</TextButton>
        </Button>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="#333" />
          <TextButtonBack>Voltar</TextButtonBack>
        </ButtonBack>
      </Container>
    )
}
