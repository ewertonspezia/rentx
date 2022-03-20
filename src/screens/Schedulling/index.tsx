import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';

import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

type Props = NativeStackScreenProps<any,'Schedulling'>;

export function Schedulling({navigation}:Props){
  const theme = useTheme();

  function handleConfirmRental(){
    navigation.navigate('SchedullingDetails')
  }

  return (
    <Container>
      <Header>
          <StatusBar 
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
          <BackButton 
            onPress={() => {}}
            color={theme.colors.shape}
          />

          <Title>
              Escolha uma {'\n'}
              data de início e {'\n'}
              fim do aluguel
          </Title>

          <RentalPeriod>
              <DateInfo>
                  <DateTitle>DE</DateTitle>
                  <DateValue selected={false}>
                    18/06/2021
                  </DateValue>
              </DateInfo>

              <ArrowSvg />

              <DateInfo>
                  <DateTitle>ATÉ</DateTitle>
                  <DateValue selected={false}>
                    19/06/2021
                  </DateValue>
              </DateInfo>
          </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleConfirmRental}/>
      </Footer>

    </Container>
  )
}