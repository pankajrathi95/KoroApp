import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';
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
      headerTitle: 'Survey Results',
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
    let arr = Object.keys(answers).map(k => answers[k]);
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        let val = arr[i] >= 50 ? 1 : 0;
        totalScore = totalScore + parseInt(val);
      } else {
        totalScore = totalScore + parseInt(arr[i].value);
      }
    }

    if (totalScore <= 6) {
      displayMsg = 'You are likely to be Normal!';
    } else if (totalScore > 7 && totalScore <= 15) {
      displayMsg =
        'You must report to your physcian or taken into account of Quarantine!';
    } else {
      displayMsg = 'You Must report to physcian and put under Quarantine!';
    }

    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.questionText}>{displayMsg}</Text>
          </ScrollView>
        </View>
        <View style={styles.button}>
          <Button
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
    backgroundColor: PURPLE,
  },
  container: {
    minWidth: '70%',
    maxWidth: '90%',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 20,
    borderRadius: 10,
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
