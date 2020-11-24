import React, { useState, useContext, useEffect } from 'react'
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
  Background,
  Input,
  Button,
  ButtonText
} from './styles';

// AUTH
import AuthContext from '../../contexts/auth';

export default function Homepage({navigation}) {
  const { signed, user, signIn } = useContext(AuthContext);
  const [document, setDocument] = useState('');
  const [reject, setReject] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleOrders(){
    try{
      setLoading(true);
      setReject(false);
      signIn(document);
    }catch(err){
      setReject(true);
      setLoading(false);
    }
  }
  useEffect(()=>{
    console.log(signed);
    console.log(user);
  }, [user])

    return (
      <Container>
        <FeitaPraVoce resizeMode="contain" source={feitapravoce} />
        <Background source={background} />
        <Logomarca source={logo} />
        {
          !loading?
          <>
            <Input placeholder="Digite seu CPF" reject={reject} value={document} onChangeText={text => setDocument(text)}/>
            <Button onPress={handleOrders}>
              <ButtonText>MEUS PEDIDOS</ButtonText>
            </Button>
          </>
          :
          <ActivityIndicator size='large' color="#FFF" />
        }
      </Container>
    )
}
