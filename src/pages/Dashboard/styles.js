import styled from 'styled-components/native';
import { motion } from "framer-motion";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: #00B2E3;
  color: #FFF;
`;

export const Title = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: flex-start;
`;

export const TextTitle = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
  margin-left: 10px;
`;

export const Subtitle = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: #FFF;
  text-align: center;
`;

export const FeitaPraVoce = styled.Image`
  flex: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  width: 250px;
  height: 376.46px;
`;

export const List = styled.ScrollView`
  flex: 1;
  margin-top: 20px;
  width: 100%;
`;

export const TitleList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #333;
  padding: 10px;
`;

export const View = styled.View``;

export const ItemList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #FFF;
  padding: 10px;
  margin-top: 3px;
`;

export const TextTitleList = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #FFF;
  width: 80px;
  text-align: center;
`;

export const TextListOrders = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #FFF;
  margin:3px;
  text-align: center;
`;

export const TextItemList = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #333;
  width: 80px;
  margin:3px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  padding: 15px;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 20px;
  min-width: 250px;
  justify-content: center;
  align-items: center;
  background-color: #333;
  border-radius: 3px;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
  margin-left: 20px;
`;

export const Modal = styled.Modal`
  padding: 30px;
  justify-content: center;
  align-items: flex-start;
`;

export const TitleModal = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TextModal = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const TextTitleModal = styled.Text`
  font-size: 12px;
  color: #00B2E3;
  font-weight: bold;
`;