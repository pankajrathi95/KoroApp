import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, Dimensions} from 'react-native';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

export default class Home extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: GREEN,
        height: 40,
        elevation: 5,
      },
      headerTintColor: '#fff',
      headerTitle: 'Koro App',
      headerTitleStyle: {
        flex: 1,
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {backgroundColor: PURPLE};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Header}>Welcome to the CORO App!</Text>
        <Text style={styles.content}>
          This App will help you in finding whether you are infected with corona
          virus or not. You would just need to anwer few questions and then at
          the end the App would give you if you are a potential COVID-19
          suffered patient or not.
        </Text>
        <Text style={styles.content}>
          Click on the below button to start the survey.
        </Text>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Survey', {})}
            title="Take me In">
            Take me In
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //  minWidth: '100%',
    // maxWidth: '100%',
    // minHeight: '100%',
    alignItems: 'stretch',
    // justifyContent: 'center',
    // elevation: 20,
    borderRadius: 10,
    flex: 1,
    // margin: 15,
    backgroundColor: PURPLE,
    //  minHeight: 800,
    // maxHeight: 800,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  content: {
    color: 'black',
    margin: 20,
    fontSize: 18,
  },
  Header: {
    fontSize: 25,
    textAlignVertical: 'top',
    marginBottom: 35,
    margin: 10,
  },
  button: {
    //textAlignVertical: 'bottom',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: Dimensions.get('window').width / 10,
    marginBottom: 40,
    width: '80%',
  },
});
