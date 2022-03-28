import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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
import { useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Params { 
  car: CarDTO;
}

type Props = NativeStackScreenProps<any,'CarDetails'>;

export function CarDetails({navigation}:Props){
  const route = useRoute()
  const { car } = route.params as Params;

  function handleConfirmRental(){
    navigation.navigate('Schedulling', {car})
  }

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
        <Header>
          <BackButton onPress={handleBack}/>
        </Header>

        <CarImages>
          <ImageSlider 
              imageUrl={car.photos} 
          />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
            </Description>

            <Rent>
              <Period>{car.rent.period}</Period>
              <Price>R$ {car.rent.price}</Price>
            </Rent>
          </Details>

          <Acessories>
            {
              car.accessories.map(accessory => (
                <Accessory 
                  key={accessory.type}
                  name={accessory.name}
                  icon={getAccessoryIcon(accessory.type)} 
                />
              ))
            }
          </Acessories>

          <About>
            {car.about}
          </About>
        </Content>

        <Footer>
          <Button title='Escolher período do aluguel' onPress={handleConfirmRental}/>
        </Footer>
        
    </Container>
  )
}