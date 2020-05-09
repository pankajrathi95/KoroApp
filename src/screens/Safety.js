import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  ScrollView,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import {COLORS} from '../res/ValidColors';

const GREEN = '#00537b'; //'rgba(141,196,63,1)';
const PURPLE = 'rgba(108, 48, 237, 1)';

export default class SafetyScreen extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: GREEN,
        height: 40,
        elevation: 5,
      },
      headerTintColor: '#ffffff',
      headerTitle: 'Safety Tips',
      headerTitleStyle: {
        flex: 1,
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {backgroundColor: PURPLE, answersSoFar: ''};
  }

  render() {
    return (
      <View style={[styles.background, {backgroundColor: '#fff'}]}>
        <ScrollView>
          <FlatList
            data={[
              {key: '• Stay home '},
              {key: '• Avoid meetings of more than five people.'},
              {
                key:
                  '• Maintain a public distance of about 1.6 meters from others.',
              },
              {
                key:
                  '• Wash your hands frequently with soap and water for at least 30 seconds, particularly after being in a public place, or after blowing your nose, coughing or sneezing. If soap and water are not willingly accessible, use a hand sanitizer (70% alcohol).',
              },
              {
                key:
                  '• Avoid touching your eyes, nose or mouth with dirty hands.',
              },
              {key: '• Avoid close contact with people who are sick.'},
              {
                key:
                  '• Stay home if you are sick, excluding to get medical care.',
              },
              {
                key:
                  '• Cover your nose and mouth with a tissue while coughing or sneezing; throw used tissues in the garbage. If a tissue isn’t available, cough or sneeze into your elbow, not your hands.',
              },
              {
                key:
                  '• Clean and disinfect regularly touched surfaces daily. This includes tables, computers, phones, doorknobs, handles, light switches, desks, keyboards, sinks, toilets etc.',
              },
              {
                key:
                  '• If surfaces are dirty, clean them by using detergent or soap and water prior to disinfection.',
              },
              {
                key:
                  '• Wear a facemask if you are sick. You should wear a facemask when you are around other people and even before you enter a healthcare provider’s office.',
              },
              {
                key:
                  '• According to the CDC, COVID-19 symptoms are fever, shortness of breath and a cough. Symptoms might be appeared 2-17 days after exposure. Call your doctor for health checkup advice if you think you have been exposed to COVID-19 and showing symptoms. ',
              },
              {
                key:
                  '• According to the CDC, older adults and serious chronic medical conditions like heart disease, diabetes and lung disease subjects are at higher risk of getting very sick from this virus. ',
              },
              {
                key:
                  '• Stay home as much as you can and avoid crowds as much as possible as well as never hide the disease. Take everyday precautions to keep space between yourself and others.',
              },
            ]}
            renderItem={({item}) => (
              <Text style={{fontSize: 18}}>{item.key}</Text>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // minHeight: 800,
    //maxHeight: 800,
    //justifyContent: 'space-evenly',
    //alignItems: 'center',
    //  textAlignVertical: 'center',
    margin: 15,
    marginTop: 20,
  },
});
