import {createStackNavigator, createAppContainer} from 'react-navigation';
import SurveyCompletedScreen from './src/screens/SurveyCompleteScreen';
import SurveyScreen from './src/screens/SurveyScreen';

const stackNav = createStackNavigator({
  Survey: {
    screen1: SurveyScreen,
  },
  SurveyCompleted: {
    screen1: SurveyCompletedScreen,
  },
});

const AppContainer = createAppContainer(stackNav);

export default AppContainer;
