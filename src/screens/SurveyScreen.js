import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SimpleSurvey} from 'react-native-simple-survey';
import {COLORS} from '../res/ValidColors';

const GREEN = '#00537b'; //'rgba(141,196,63,1)';
const PURPLE = 'rgba(108, 48, 237, 1)';

const survey = [
  /* {
    questionType: 'TextInput',
    questionText:
      'Location of your house or the place from where you are using this app?',
    questionId: 'location',
    placeholderText: '',
  },*/
  //0
  {
    questionType: 'SelectionGroup',
    questionText:
      'Where is your home or location from which you are using CORO APP',
    questionId: 'location',
    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'China (mainland)',
        value: '2',
      },
      {
        optionText: 'Italy',
        value: '2',
      },
      {
        optionText: 'Iran',
        value: '2',
      },
      {
        optionText: 'South Korea',
        value: '2',
      },
      {
        optionText: 'France',
        value: '2',
      },
      {
        optionText: 'Spain',
        value: '2',
      },
      {
        optionText: 'Germany',
        value: '2',
      },
      {
        optionText: 'United States',
        value: '2',
      },
      {
        optionText: 'Diamond Princess',
        value: '2',
      },
      {
        optionText: 'Japan',
        value: '2',
      },
      {
        optionText: 'Switzerland',
        value: '2',
      },
      {
        optionText: 'Netherlands',
        value: '2',
      },
      {
        optionText: 'United Kingdom',
        value: '2',
      },
      {
        optionText: 'Sweden',
        value: '2',
      },
      {
        optionText: 'Norway',
        value: '2',
      },
      {
        optionText: 'Belgium',
        value: '2',
      },
      {
        optionText: 'Denmark',
        value: '2',
      },
      {
        optionText: 'Austria',
        value: '2',
      },
      {
        optionText: 'Singapore',
        value: '1',
      },
      {
        optionText: 'Malaysia',
        value: '1',
      },
      {
        optionText: 'Hong Kong',
        value: '1',
      },
      {
        optionText: 'Bahrain',
        value: '1',
      },
      {
        optionText: 'Australia',
        value: '1',
      },
      {
        optionText: 'Greece',
        value: '1',
      },
      {
        optionText: 'Canada',
        value: '1',
      },
      {
        optionText: 'Iceland',
        value: '1',
      },
      {
        optionText: 'India',
        value: '1',
      },
      {
        optionText: 'Pakistan',
        value: '2',
      },
      {
        optionText: 'Other countries',
        value: '0',
      },
    ],
  },
  //1
  {
    questionType: 'SelectionGroup',
    questionText: 'Gender                                         ',
    questionId: 'gender',
    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Male',
        value: '1',
      },
      {
        optionText: 'Female',
        value: '0',
      },
      {
        optionText: 'Others',
        value: '0',
      },
    ],
  },
  //2
  {
    questionType: 'NumericInput',
    questionText: 'Age                                        ',
    questionId: 'age',
    placeholderText: 'Ex: 42 Years',
  },
  //3
  {
    questionType: 'SelectionGroup',
    questionText: 'Race                                 ',
    questionId: 'race',
    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'White',
        value: '1',
      },
      {
        optionText: 'Black',
        value: '0',
      },
      {
        optionText: 'Chinese',
        value: '1',
      },
      {
        optionText: 'Others',
        value: '0',
      },
    ],
  },
  //4
  {
    questionType: 'SelectionGroup',
    questionText:
      'Have you traveled or are living in any of the COVID-19  the affected areas or countries in last 21 days?',
    questionId: 'travelledRecently',
    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'China (mainland)',
        value: '2',
      },
      {
        optionText: 'Italy',
        value: '2',
      },
      {
        optionText: 'Iran',
        value: '2',
      },
      {
        optionText: 'South Korea',
        value: '2',
      },
      {
        optionText: 'France',
        value: '2',
      },
      {
        optionText: 'Spain',
        value: '2',
      },
      {
        optionText: 'Germany',
        value: '2',
      },
      {
        optionText: 'United States',
        value: '2',
      },
      {
        optionText: 'Diamond Princess',
        value: '2',
      },
      {
        optionText: 'Japan',
        value: '2',
      },
      {
        optionText: 'Switzerland',
        value: '2',
      },
      {
        optionText: 'Netherlands',
        value: '2',
      },
      {
        optionText: 'United Kingdom',
        value: '2',
      },
      {
        optionText: 'Sweden',
        value: '2',
      },
      {
        optionText: 'Norway',
        value: '2',
      },
      {
        optionText: 'Belgium',
        value: '2',
      },
      {
        optionText: 'Denmark',
        value: '2',
      },
      {
        optionText: 'Austria',
        value: '2',
      },
      {
        optionText: 'Singapore',
        value: '1',
      },
      {
        optionText: 'Malaysia',
        value: '1',
      },
      {
        optionText: 'Hong Kong',
        value: '1',
      },
      {
        optionText: 'Bahrain',
        value: '1',
      },
      {
        optionText: 'Australia',
        value: '1',
      },
      {
        optionText: 'Greece',
        value: '1',
      },
      {
        optionText: 'Canada',
        value: '1',
      },
      {
        optionText: 'Iceland',
        value: '1',
      },
      {
        optionText: 'India',
        value: '1',
      },
      {
        optionText: 'Pakistan',
        value: '2',
      },
      {
        optionText: 'Other countries',
        value: '0',
      },
    ],
  },
  //5
  {
    questionType: 'SelectionGroup',
    questionText:
      'Have you had any close contact with a person known to have COVID-19 during the last 21 days?',
    questionId: 'closeContactIn21Days',
    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '1',
      },
      {
        optionText: 'No',
        value: '0',
      },
    ],
  },
  //6
  {
    questionType: 'SelectionGroup',
    questionText: 'Do you think you have fever?',
    questionId: 'fever',

    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '1',
      },
      {
        optionText: 'No',
        value: '0',
      },
    ],
  },
  //7
  {
    questionType: 'NumericInput',
    questionText: 'How long have you had your fever?',
    questionId: 'durationOfFever',
    followUpQuestion: true,
    placeholderText: 'Ex: 4 days',
  },
  //9
  {
    questionType: 'SelectionGroup',
    questionText: 'Do you have a cough?',
    questionId: 'cough',
    // followUpQuestion: true,
    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '1',
      },
      {
        optionText: 'No',
        value: '0',
      },
    ],
  },
  //10
  {
    questionType: 'NumericInput',
    questionText: 'How long have you had a cough?',
    questionId: 'durationOfCough',
    followUpQuestion: true,
    placeholderText: 'Ex: 4 days',
  },
  //11
  {
    questionType: 'SelectionGroup',
    questionText: 'Do you have shortness of breath?',
    questionId: 'breath',
    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '1',
      },
      {
        optionText: 'No',
        value: '0',
      },
    ],
  },
  //12
  {
    questionType: 'NumericInput',
    questionText: 'How long have you had shortness of breath?',
    questionId: 'durationOfBreath',
    followUpQuestion: true,
    placeholderText: 'Ex: 4 days',
  },
  //13
  {
    questionType: 'SelectionGroup',
    questionText: 'Do you have fatigue or muscle pain?',
    questionId: 'fatigue',
    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '1',
      },
      {
        optionText: 'No',
        value: '0',
      },
    ],
  },
  //14
  {
    questionType: 'NumericInput',
    questionText: 'How long have you had fatigue or muscle pain?',
    questionId: 'durationOfFatigue',
    followUpQuestion: true,
    placeholderText: 'Ex: 4 days',
  },

  {
    questionType: 'SelectionGroup',
    questionText: 'Are you coughing up phlegm or mucus?',
    questionId: 'suptum',

    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '1',
      },
      {
        optionText: 'No',
        value: '0',
      },
    ],
  },
  {
    questionType: 'NumericInput',
    questionText: 'How long have you been coghing up phlegm or mucus?',
    questionId: 'durationOfSuptum',
    placeholderText: 'Ex: 4 days',
    followUpQuestion: true,
  },
  {
    questionType: 'SelectionGroup',
    questionText: 'Do you have a headache?',
    questionId: 'headache',

    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '1',
      },
      {
        optionText: 'No',
        value: '0',
      },
    ],
  },
  {
    questionType: 'NumericInput',
    questionText: 'How long have you had a headache?',
    questionId: 'durationOfHeadache',
    followUpQuestion: true,
    placeholderText: 'Ex: 4 days',
  },
  {
    questionType: 'SelectionGroup',
    questionText: 'Do you or have you recently had diarrhea? ',
    questionId: 'diarrhea',

    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '1',
      },
      {
        optionText: 'No',
        value: '0',
      },
    ],
  },
  {
    questionType: 'NumericInput',
    questionText: 'How long have you, or did you, have diarrhea?',
    questionId: 'durationOfDiarrhea',
    followUpQuestion: true,
    placeholderText: 'Ex: 4 days',
  },
  {
    questionType: 'SelectionGroup',
    questionText:
      'Do  you have any diseases like asthma, hypertension, diabetes, Chronic obstructive lung disease and Coronary heart disease?',
    questionId: 'anyOtherDisease',

    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '1',
      },
      {
        optionText: 'No',
        value: '0',
      },
    ],
  },
  {
    questionType: 'SelectionGroup',
    questionText:
      'Do you have a decrease in energy when doing physical activity?',
    questionId: 'phyWork',

    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '0',
      },
      {
        optionText: 'No',
        value: '1',
      },
    ],
  },
  {
    questionType: 'SelectionGroup',
    questionText: 'Do you find it difficult to focus on daily tasks? ',
    questionId: 'focus',

    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '0',
      },
      {
        optionText: 'No',
        value: '1',
      },
    ],
  },
  {
    questionType: 'SelectionGroup',
    questionText: 'Have you had a loss or altered sense of smell? ',
    questionId: 'smell',

    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '1',
      },
      {
        optionText: 'No',
        value: '0',
      },
    ],
  },
  {
    questionType: 'SelectionGroup',
    questionText: 'Have you had a loss or altered sense of taste? ',
    questionId: 'focus',

    questionSettings: {
      allowDeselect: false,
      autoAdvance: true,
    },
    options: [
      {
        optionText: 'Yes',
        value: '1',
      },
      {
        optionText: 'No',
        value: '0',
      },
    ],
  },
  {
    questionType: 'Info',
    questionText:
      'Thanks for completing the Assessment! Tap on finish to see the results',
  },
];

export default class SurveyScreen extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: GREEN,
        height: 40,
        elevation: 5,
      },
      headerTintColor: '#fff',
      headerTitle: 'Coro AI Assessment System',
      headerTitleStyle: {
        flex: 1,
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {backgroundColor: PURPLE, answersSoFar: ''};
  }

  onSurveyFinished(answers) {
    /**
     *  By using the spread operator, array entries with no values, such as info questions, are removed.
     *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
     *  to the rest of your code, can be done.
     *
     *  Answers are returned in an array, of the form
     *  [
     *  {questionId: string, value: any},
     *  {questionId: string, value: any},
     *  ...
     *  ]
     *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
     *  to you.
     *
     *  As an example
     *  {
     *      questionId: "favoritePet",
     *      value: {
     *          optionText: "Dogs",
     *          value: "dog"
     *      }
     *  }
     *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a
     *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
     */

    const infoQuestionsRemoved = [...answers];

    // Convert from an array to a proper object. This won't work if you have duplicate questionIds
    const answersAsObj = {};
    for (const elem of infoQuestionsRemoved) {
      answersAsObj[elem.questionId] = elem.value;
    }

    this.props.navigation.navigate('SurveyCompleted', {
      surveyAnswers: answersAsObj,
    });
  }

  /**
   *  After each answer is submitted this function is called. Here you can take additional steps in response to the
   *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is
   *  is restricted (age, geo-fencing) from your app.
   */
  onAnswerSubmitted(answer) {
    this.setState({
      answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2),
    });
    switch (answer.questionId) {
      case 'favoriteColor': {
        if (COLORS.includes(answer.value.toLowerCase())) {
          this.setState({backgroundColor: answer.value.toLowerCase()});
        }
        break;
      }
      default:
        break;
    }
  }

  renderPreviousButton(onPress, enabled) {
    return (
      <View
        style={{flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10}}>
        <Button
          color={GREEN}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={GREEN}
          title={'Previous'}
        />
      </View>
    );
  }

  renderNextButton(onPress, enabled) {
    return (
      <View
        style={{flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10}}>
        <Button
          color={GREEN}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={GREEN}
          title={'Next'}
        />
      </View>
    );
  }

  renderFinishedButton(onPress, enabled) {
    return (
      <View
        style={{flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10}}>
        <Button
          title={'Finished'}
          onPress={onPress}
          disabled={!enabled}
          color={GREEN}
        />
      </View>
    );
  }

  renderButton(data, index, isSelected, onPress) {
    return (
      <View
        key={`selection_button_view_${index}`}
        style={{marginTop: 5, marginBottom: 5, justifyContent: 'flex-start'}}>
        <Button
          title={data.optionText}
          onPress={onPress}
          color={isSelected ? GREEN : PURPLE}
          style={isSelected ? {fontWeight: 'bold'} : {}}
          key={`button_${index}`}
        />
      </View>
    );
  }

  renderQuestionText(questionText) {
    return (
      <View style={{marginLeft: 10, marginRight: 10}}>
        <Text numLines={1} style={styles.questionText}>
          {questionText}
        </Text>
      </View>
    );
  }

  renderTextBox(onChange, value, placeholder, onBlur) {
    return (
      <View>
        <TextInput
          style={styles.textBox}
          onChangeText={text => onChange(text)}
          numberOfLines={1}
          underlineColorAndroid={'white'}
          placeholder={placeholder}
          placeholderTextColor={'rgba(184,184,184,1)'}
          value={value}
          multiline
          onBlur={onBlur}
          blurOnSubmit
          returnKeyType="done"
        />
      </View>
    );
  }

  renderNumericInput(onChange, value, placeholder, onBlur) {
    return (
      <TextInput
        style={styles.numericInput}
        onChangeText={text => {
          onChange(text);
        }}
        underlineColorAndroid={'white'}
        placeholderTextColor={'rgba(184,184,184,1)'}
        value={String(value)}
        placeholder={placeholder}
        keyboardType={'numeric'}
        onBlur={onBlur}
        maxLength={3}
      />
    );
  }

  renderInfoText(infoText) {
    return (
      <View style={{marginLeft: 10, marginRight: 10}}>
        <Text style={styles.infoText}>{infoText}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={[styles.background, {backgroundColor: '#fff'}]}>
        {/* <View style={styles.container}> */}
        <SimpleSurvey
          ref={s => {
            this.surveyRef = s;
          }}
          survey={survey}
          renderSelector={this.renderButton.bind(this)}
          containerStyle={styles.surveyContainer}
          selectionGroupContainerStyle={styles.selectionGroupContainer}
          navButtonContainerStyle={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
          renderPrevious={this.renderPreviousButton.bind(this)}
          renderNext={this.renderNextButton.bind(this)}
          renderFinished={this.renderFinishedButton.bind(this)}
          renderQuestionText={this.renderQuestionText}
          onSurveyFinished={answers => this.onSurveyFinished(answers)}
          onAnswerSubmitted={answer => this.onAnswerSubmitted(answer)}
          renderTextInput={this.renderTextBox}
          renderNumericInput={this.renderNumericInput}
          renderInfo={this.renderInfoText}
        />
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minWidth: '70%',
    marginTop: 7,
    maxWidth: '90%',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 30,
    elevation: 20,
    borderRadius: 10,
    flex: 1,
  },
  answersContainer: {
    width: '90%',
    maxHeight: '20%',
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    elevation: 20,
    borderRadius: 10,
  },
  surveyContainer: {
    width: 'auto',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignContent: 'center',
    padding: 5,
    flexGrow: 0,
    marginTop: 30,
    marginBottom: 200,
  },
  selectionGroupContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignContent: 'flex-end',
  },
  background: {
    flex: 1,
    minHeight: 800,
    maxHeight: 800,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  questionText: {
    marginBottom: 20,
    fontSize: 20,
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,

    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10,
  },
  numericInput: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10,
  },
  infoText: {
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 10,
  },
});
