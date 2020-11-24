import React, { useEffect, useState } from 'react'

// ICONS
import Icon from 'react-native-vector-icons/FontAwesome';

// STYLED COMPONENTS
import {
  ItemList,
  Modal,
  TitleModal,
  TextTitleModal,
  View
} from '../styles';

// SERVICES
import api from '../../../services/api';

// COMPONENTS
import Item from './Item';

export default function ModalFC(props) {

  const [orders, setOrders] = useState(new Map());

  async function loadOrders(){
    const response = await api.get(`search_all_order/${props.info.id}`);
    setOrders(response.data);
  }

  useEffect(()=>{
    if(props.info.id)
      loadOrders();
  }, [props.info])

  return (
    <Modal
      animationType="slide"
      visible={props.modal}>
      <TitleModal>
        <TextTitleModal>PEDIDO Nº {("000000" + props.info.id).slice(-6)}</TextTitleModal>
        <Icon name="times" size={24} color="#333" onPress={props.closeModal}/>
      </TitleModal>
        {
            orders?
              [...orders.keys()].map(id => (
                <View key={id}>
                  <Item order={orders[id]} />
                </View>
              ))
              :
              <ItemList>
                  <ActivityIndicator size='large' color="#333" />
              </ItemList>
          }
    </Modal>
  )
}
