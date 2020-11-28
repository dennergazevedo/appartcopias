import React, { createContext, useState, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext(null);
export default AuthContext;

// SERVICES
import api from '../services/api';

export const AuthProvider = ({ children }) =>{

  const Toast = ( { visible }) => {
    if (visible){
      ToastAndroid.showWithGravityAndOffset(
        'Usuário não encontrado',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return null;
    }
  }
  const [user, setUser] = useState(null);

  useEffect(()=>{
    async function loadStorageData(){
      const storageUser = await AsyncStorage.getItem('@artcopias:user');
      if(storageUser) setUser(JSON.parse(storageUser));
    }
    loadStorageData();
  }, [])

  async function signIn(document){
    try{
      const text = document.replace(/[/]/g, '----');
      const response = await api.get(`app_user/${text}`);
      setUser(response.data);
      await AsyncStorage.setItem('@artcopias:user', JSON.stringify(response.data))
    }catch(err){
      setUser('Não encontrado');
      Toast({visible: true});
      signOut();
    }
  }

  async function signOut(){
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}