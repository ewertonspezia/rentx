import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';
import { StatusBar, useWindowDimensions } from 'react-native';
import { ConfirmButton } from '../../components/ConfirmButton';

type Props = NativeStackScreenProps<any,'SchedullingComplete'>;

export function SchedullingComplete({navigation}:Props){
  const { width } = useWindowDimensions();

  function handleConfirm(){
    navigation.navigate('Home')
  }

  return (
    <Container>
        <LogoSvg width={width} />

        <Content>
            <StatusBar 
              barStyle="light-content"
              translucent
              backgroundColor="transparent"
            />
            <DoneSvg width={80} height={80} />
            <Title>Carro alugado!</Title>
            <Message>
                Agora você só precisa ir {'\n'}
                até a concessionária da RENTX {'\n'}
                pegar o seu automóvel.
            </Message>
        </Content>

        <Footer>
            <ConfirmButton title='OK' onPress={handleConfirm}/>
        </Footer>

    </Container>
  )
}