import React, { useContext, useState, useEffect } from 'react';
import { ActivityIndicator } from "react-native";

// STYLED COMPONENTS
import {
  Container,
  Title,
  TextTitle,
  Subtitle,
  FeitaPraVoce,
  List,
  TitleList,
  TextTitleList,
  ItemList,
  TextItemList,
  Button,
  ButtonText,
  Modal,
  TitleModal,
  TextModal,
  TextTitleModal
} from './styles';

// ICONS
import Icon from 'react-native-vector-icons/FontAwesome';

// AUTH
import AuthContext from '../../contexts/auth';

// ASSETS
import feitapravoce from '../../assets/img/feitapravoce.png';

// SERVICES
import api from '../../services/api';

export default function Dashboard({navigation}) {
  const { signOut, user } = useContext(AuthContext);
  const [orders, setOrders] = useState(new Map());
  const [info, setInfo] = useState('');
  const [modal, setModal] = useState(false);

  async function loadOrders(){
    const response = await api.get(`app_os_user/${user.id}`);
    setOrders(response.data);
  }

  function handleInfo(e){
    setInfo(e);
    setModal(true);
  }

  function closeModal(){
    setInfo('');
    setModal(false);
  }

  useEffect(()=>{
    loadOrders();
  }, [])

    return (
      <Container>
        <FeitaPraVoce resizeMode="contain" source={feitapravoce} />
        <Title>
          <TextTitle><Icon name="user" size={18} color="#FFF" /></TextTitle>
          <TextTitle>Bem vindo(a), {user.nome}!</TextTitle>
        </Title>
        <Subtitle>
          Aqui você pode encontrar as situações dos seus pedidos de forma rápida
          e fácil.
        </Subtitle>
        <List>
          <TitleList>
            <TextTitleList>Nº do Pedido</TextTitleList>
            <TextTitleList>Situação</TextTitleList>
            <TextTitleList>Informações</TextTitleList>
          </TitleList>
          {
            orders?
              [...orders.keys()].map(id => (
                <ItemList key={id}>
                  <TextItemList>{("000000" + orders[id].id).slice(-6)}</TextItemList>
                  <TextItemList>{orders[id].situacao}</TextItemList>
                  <TextItemList onPress={() => handleInfo(orders[id])}>
                    <Icon name="info" size={18} color="#333" />
                  </TextItemList>
                </ItemList>
              ))
              :
              <ItemList>
                  <ActivityIndicator size='large' color="#333" />
              </ItemList>
          }
          <Modal
            animationType="slide"
            visible={modal}>
            <TitleModal>
              <TextTitleModal>PEDIDO Nº {("000000" + info.id).slice(-6)}</TextTitleModal>
              <Icon name="times" size={24} color="#333" onPress={closeModal}/>
            </TitleModal>
          </Modal>
        </List>
        <Button>
          <Icon name="phone" size={18} color="#FFF" />
          <ButtonText>FALE CONOSCO</ButtonText>
        </Button>
        <Button onPress={signOut}>
          <Icon name="sign-out" size={18} color="#FFF" />
          <ButtonText>SAIR</ButtonText>
        </Button>
      </Container>
    )
}
