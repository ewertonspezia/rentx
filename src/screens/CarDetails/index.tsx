import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
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
  About,
  Acessories,
  Footer
} from './styles';
import { Button } from '../../components/Button';

type Props = NativeStackScreenProps<any,'CarDetails'>;

export function CarDetails({navigation}:Props){

  function handleConfirmRental(){
    navigation.navigate('Schedulling')
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

          <About>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos
          </About>
        </Content>

        <Footer>
          <Button title='Escolher período do aluguel' onPress={handleConfirmRental}/>
        </Footer>
        
    </Container>
  )
}