import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, Dimensions} from 'react-native';

const GREEN = '#00537b'; //'rgba(141,196,63,1)';
const PURPLE = '#fff'; //rgba(108,48,237,1)';

export default class Home extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: GREEN,
        height: 45,
        elevation: 5,
      },
      headerTintColor: '#fff',
      headerTitle: 'Coro AI',
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
        <Text style={styles.Header}>Welcome to the CORO AI App!</Text>
        <View style={[styles.background, {backgroundColor: '#fff'}]}>
          <Text style={{fontSize: 18}}>
            This APP is designed to help slow the spread of infectious diseases
            such as Coronavirus (COVID19) via potential quarantine and
            recommended communication with healthcare professionals.
            {'\n\n'} The technology and algorithm is a collaboration between a
            group group of scientists, clinicians, biotech engineers, software
            developers, and AI data analysts. It will be useful for research and
            awareness regarding Coronavirus (COVID19). {'\n\n'}This APP is NOT
            designed to be a diagnostic.
          </Text>
        </View>
        <View style={styles.button1}>
          <Button
            color="#00537b"
            style={styles.button1}
            onPress={() => this.props.navigation.navigate('Safety', {})}
            title="Safety Tips"
          />
        </View>
        <View style={styles.button}>
          <Button
            color="#00537b"
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Survey', {})}
            title="My self Assessment">
            Take me In
          </Button>
        </View>
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
    textAlign: 'auto',
    //  textAlignVertical: 'center',
    margin: 10,
    marginTop: -10,
  },
  container: {
    //  minWidth: '100%',
    // maxWidth: '100%',
    // minHeight: '100%',
    alignItems: 'stretch',
    // justifyContent: 'center',
    // elevation: 20,
    borderRadius: 10,
    flex: 1,
    margin: 10,
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
  button1: {
    //textAlignVertical: 'bottom',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: Dimensions.get('window').width / 10,
    //  marginTop: 40,
    marginBottom: 85,
    width: '80%',
  },
});
