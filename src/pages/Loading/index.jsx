import React, { useEffect, useContext } from 'react'
import { ActivityIndicator } from "react-native";

// ASSETS
import logo from '../../assets/img/logo.png';
import feitapravoce from '../../assets/img/feitapravoce.png';
import background from '../../assets/img/background.png';

// STYLED COMPONENTS
import {
  Container,
  FeitaPraVoce,
  Logomarca,
  Background
} from './styles';

import AuthContext from '../../contexts/auth';

export default function Loading({navigation}) {
  const { signed } = useContext(AuthContext);

  const navHome = () => navigation.navigate('Homepage');
  const navDash = () => navigation.navigate('Dashboard');

  function handleNav(){
    signed? navDash() : navHome();
  }
  
  useEffect(()=>{
    setTimeout(function(){
      handleNav();
    }, 3000)
  }, [])

    return (
      <Container>
        <FeitaPraVoce resizeMode="contain" source={feitapravoce} />
        <Background source={background} />
        <Logomarca source={logo} />
        <ActivityIndicator size='large' color="#FFF" />
      </Container>
    )
}
