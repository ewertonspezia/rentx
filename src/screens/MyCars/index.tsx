import { useNavigation } from "@react-navigation/core";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { Car } from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import { AntDesign } from '@expo/vector-icons';

import { 
    Container,
    Header,
    Title,
    Subtitle,
    Content,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,
    CarWrapper,
    CarFooter,
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate
} from "./styles";
import { Load } from "../../components/Load";

interface CarProps {
    car: CarDTO;
    id: string;
    user_id: string;
    startDate: string;
    endDate: string;
}

// type Props = NativeStackScreenProps<any,'MyCars'>;

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars()
  },[]);

  const theme = useTheme()

  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
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
            onPress={handleBack}
            color={theme.colors.shape}
          />

          <Title>
              Escolha uma {'\n'}
              data de início e {'\n'}
              fim do aluguel
          </Title>
          <Subtitle>

          </Subtitle>
      </Header>

      { loading ? <Load /> :  
        <Content>
            <Appointments>
              <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
              <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
            </Appointments>

            <FlatList 
              data={cars}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CarWrapper>
                  <Car data={item.car} />
                  <CarFooter>
                    <CarFooterTitle>Período</CarFooterTitle>
                    <CarFooterPeriod>
                      <CarFooterDate>{item.startDate}</CarFooterDate>
                      <AntDesign 
                        name="arrowright"
                        size={20}
                        color={theme.colors.title}
                        style={{ marginHorizontal: 10 }}
                      />
                      <CarFooterDate>{item.endDate}</CarFooterDate>
                    </CarFooterPeriod>
                  </CarFooter>
                </CarWrapper>
              )}
            />

        </Content>
      }
    </Container>
  )
}
