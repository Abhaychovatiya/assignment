import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Styles from './Styles';
import { COLORS } from '../../utils/colors';
import { FONTSIZES, SIZES } from '../../utils/sizes';
import CustomButton from '../../components/CustomButton';

const {
  container,
  searchcontainer,
  textinput,
  itemstyle,
  title,
} = Styles;

const DATA = [
  {
    id: '1',
    name: 'Milk',
  },
  {
    id: '2',
    name: 'Coffee',
  },
  {
    id: '3',
    name: 'Oranges',
  },
  {
    id: '4',
    name: 'Bread',
  },
  {
    id: '5',
    name: 'Mangoes',
  },
  {
    id: '6',
    name: 'Banana',
  },
  {
    id: '7',
    name: 'Butter',
  },
  {
    id: '8',
    name: 'Apple',
  },
];

const SearchScreen = () => {
  const [data, setData] = useState(DATA);

  const item = ({ item }) => {
    return (
      
      <View style={itemstyle}>
        <Text style={title}>- {item.name} </Text>
      </View>
    );
  };

  const searchName = (input) => {
    let array = data;
    let searchData = array.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setData(searchData);
  };

  return (
    <View style={container}>
      <View style={searchcontainer}>
        <TextInput
          style={textinput}
          label="Search Item"
          onChangeText={(input) => {
            if (input === '') {
              setData(DATA);
            } else {
              searchName(input);
            }
          }}
        />

        <CustomButton
          title='+'
          onPress={() => {
            let arr = [
              {
                id: DATA.length + 1,
                name: DATA[(Math.random() * 6 + 1).toFixed()].name,
              },
            ];
            setData([...data, ...arr]);
          }}
        />
      </View>
      <View
        style={{
          paddingTop: SIZES.sm + 5,
          borderBottomColor: COLORS.white,
          borderBottomWidth: SIZES.sm / 3,
        }}
      />
      
      <View style={{paddingBottom:60}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
