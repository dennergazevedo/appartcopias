import styled from 'styled-components/native';
import { motion } from "framer-motion";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #00B2E3;
  color: #FFF;
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

export const Background = styled.Image`
  flex: 1;
  position: absolute;
  top: 0;
  right: 0;
  height: 120%;
  width: 120%;
`;

export const Logomarca = styled.Image`
  width: 100px;
  height: 87.01px;
  margin-top: 150px;
  margin-bottom: 50px;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  background-color: #FFF;
  color: #333;
  border-radius: 5px;
  box-shadow: 1px 1px 10px #3335;
  padding: 0px 0px 0px 20px;
  font-size: 16px;
  margin-top: 30px;
  border: ${props => props.reject? '2px solid #E54': 'none'};
`;

export const Button = styled.TouchableOpacity`
  padding: 15px;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 20px;
  background-color: #333;
  border-radius: 3px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 150px;
`;

export const Text = styled.Text`
  color: #FFF;
  font-size: 14px;
  flex-direction: row;
  align-items: center;
`;

export const TextBold = styled.Text`
  color: #FFF;
  font-size: 14px;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
`;