import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native';

const GREEN = '#00537b';

const defaultAnswers = {
  favoriteColor: 'nothing',
  favoriteNumber: '0',
  favoritePet: 'nothing',
};
export default class SurveyCompletedScreen extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: GREEN,
        height: 40,
        elevation: 5,
      },
      headerTintColor: '#fff',
      headerTitle: 'Assessment Results',
      headerTitleStyle: {
        flex: 1,
      },
    };
  };

  render() {
    const answers = this.props.navigation.getParam(
      'surveyAnswers',
      defaultAnswers,
    );
    let totalScore = 0;
    let displayMsg = '';
    let displayMsgWorkplace = '';
    let arr = Object.keys(answers).map(k => answers[k]);
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        if (i === 2) {
          let val = arr[i] >= 50 ? 1 : 0;
          totalScore += parseInt(val);
        } else {
          let val = arr[i] >= 3 ? 1 : 0;
          totalScore += parseInt(val);
        }
      } else {
        totalScore += parseInt(arr[i].value);
      }
    }

    if (totalScore <= 6) {
      displayMsg =
        'You may or may not be healthy.  Please continue to monitor your health.';
      displayMsgWorkplace =
        'You are probably safe to be in the workplace.  Please monitor further for any new symptoms.';
    } else if (totalScore >= 7 && totalScore <= 15) {
      displayMsg =
        'Please contact a healthcare professional remotely via telehealth or phone call.  Please consider self quarantine measures in order to isolate from others.  ';
      displayMsgWorkplace =
        'Please contact a health care professional prior to returning to the workplace.';
    } else if (totalScore >= 16 && totalScore <= 20) {
      displayMsg =
        'Please contact a healthcare professional immediately via telehealth or phone call.  Please activate self quarantine measures in order to isolate from others.  ';
      displayMsgWorkplace =
        'Please contact a health care professional and discuss a timeline for returning to the workplace.  You should not return to the workplace until you have clearance from a healthcare professional.  ';
    } else {
      displayMsg =
        'CONTACT A HEALTHCARE PROFESSIONAL IMMEDIATELY.  Treatment and management must begin as soon as possible.  SELF ISOLATION IS MANDATORY!  Please note that it is likely that you are contagious and will spread to others you come in contact with.  ';
      displayMsgWorkplace =
        'YOU MUST NOT GO TO WORK.  Contact a healthcare professional immediately, and do not return to work until you have been treated.';
    }

    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <ScrollView style={{margin: 10}}>
            <Text
              style={{
                marginBottom: 20,
                marginTop: 50,
                fontSize: 20,
                color: '#000',
              }}>
              {displayMsg + '\n\n'}
              <Text
                style={{
                  color: '#00537b',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                {'For the workplace:'}{' '}
              </Text>
              {'\n\n' + displayMsgWorkplace}
            </Text>
          </ScrollView>
        </View>
        <View style={styles.button}>
          <Button
            color="#00537b"
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home', {})}
            title="Go back to Home"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    minWidth: '70%',
    maxWidth: '90%',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    // elevation: 20,
    borderRadius: 10,
    borderColor: '#00537b',
    borderWidth: 1,
    maxHeight: '80%',
  },
  questionText: {
    marginBottom: 20,
    marginTop: 50,
    fontSize: 35,
  },
  button: {
    textAlignVertical: 'bottom',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: -25,
    left: Dimensions.get('window').width / 10,
    marginBottom: 40,
    width: '80%',
  },
});
