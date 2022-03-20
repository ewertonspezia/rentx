import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any,'SchedullingDetails'>;

export function SchedullingDetails({navigation}:Props){
  const theme = useTheme();

  function handleConfirmRental(){
    navigation.navigate('SchedullingComplete')
  }

  return (
    <Container>
        <Header>
          <BackButton 
              onPress={() => {}}
          />
        </Header>

        <CarImages>
          <ImageSlider 
              imageUrl={['https://www.downloadclipart.net/large/audi-rs5-red-png.png']} 
          />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>Audi</Brand>
              <Name>RS 5</Name>
            </Description>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 120</Price>
            </Rent>
          </Details>

          <Acessories>
            <Accessory name="300Km/h" icon={speedSvg} />
            <Accessory name="3.2s" icon={accelerationSvg} />
            <Accessory name="800 HP" icon={forceSvg} />
            <Accessory name="Gasolina" icon={gasolineSvg} />
            <Accessory name="Auto" icon={exchangeSvg} />
            <Accessory name="2 pessoas" icon={peopleSvg} />
          </Acessories>

          <RentalPeriod>
            <CalendarIcon>
              <Feather 
                name="calendar"
                size={RFValue(24)}
                color={theme.colors.shape}
              />
            </CalendarIcon>

            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>

            <Feather 
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>
          </RentalPeriod>

          <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>R$ 360 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 1.500</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>

        </Content>

        <Footer>
          <Button title='Alugar agora' color={theme.colors.success} onPress={handleConfirmRental}/>
        </Footer>
        
    </Container>
  )
}