import React, { useState, useEffect } from 'react'

// STYLED COMPONENTS
import {
  TitleList,
  TextListOrders
} from '../styles';

// SERVICES
import api from '../../../services/api';

export default function Item(props) {
  const [product, setProduct] = useState(new Map());

  async function loadProduct(){
    const response = await api.get(`search_product/${props.order.product_id}`);
    setProduct(response.data);
  }

  useEffect(()=>{
    if(props.order.product_id){
      loadProduct();
    }
  }, [props.order])

  return (
      <>
        {
          product &&
          <TitleList>
            <TextListOrders>
              {product.nome} { 
              Number(props.order.altura) !== 0 && Number(product.unidade) !== 3? 
              ` - ${Number(props.order.largura) * 100}cm x ${Number(props.order.altura) * 100}cm`
              :
              <>
                {
                  Number(product.unidade) === 3?
                  ` - ${Number(props.order.altura) * 100}cm x ${Number(product.largura)}cm`
                  :
                  null
                }
              </>
            }
            </TextListOrders>
            <TextListOrders>{props.order.quantidade}und.</TextListOrders>
          </TitleList>
        }
      </>
  )
}
