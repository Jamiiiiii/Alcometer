import { Text, View, Button, TextInput, Switch, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import { darkstyle, lightstyle } from '../alkkomeeter/styles/style'


export default function BACCalculator() {
  const [weight, setWeight] = useState('');
  const [numBeers, setNumBeers] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [bac, setBAC] = useState(null);

  const [isOn, setIsOn] = useState(false);
  const myStyle = isOn ? darkstyle : lightstyle;


  const calculateBAC = () => {
    const litres = numBeers * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;

    let result;
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }

    if (result < 0) {
      Alert.alert('Value cant go below 0')
    } else {

      setBAC(result.toFixed(2));
    }


  }

  return (
    <ScrollView style={[myStyle.container]}>
      <View>
        <View style={[myStyle.switch]}>

          <Switch
            value={isOn}
            onValueChange={() => setIsOn(!isOn)}
          />
        </View>
        <Text style={myStyle.alco}>Alcometer</Text>
        <Text style={myStyle.weight}>Weight</Text>
        <TextInput
          style={myStyle.input}
          keyboardType="decimal-pad"
          onChangeText={(text) => setWeight(text)}
        />
        <Text style={myStyle.bottles}>Bottles</Text>
        <View style={myStyle.num}>
          <NumericInput onChange={(value) => setNumBeers(value)} />
        </View>
        <Text style={myStyle.hours}>Hours</Text>
        <View style={myStyle.num}>
          <NumericInput onChange={(value) => setTime(value)} />
        </View>
        <RadioButton.Group
          onValueChange={(newValue) => setGender(newValue)}
          value={gender}
        >
          <View style={myStyle.radio}>
            <RadioButton value="woman" />
            <Text>Female</Text>
          </View>
          <View style={myStyle.radio}>
            <RadioButton value="male" />
            <Text>Male</Text>
          </View>
        </RadioButton.Group>

        <View style={myStyle.button}>
          <Button
            title='Calculate BAC'
            onPress={calculateBAC} />
        </View>


        {bac && (
          <Text style={myStyle.print}>Your estimated BAC is {bac}</Text>
        )}
      </View>
    </ScrollView>
  );
}

