import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';

const propTypes = {
  name: PropTypes.string,
  sceneStyle: ViewPropTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red', 
  },
});

class TabView extends React.Component {
  state = { hideNavBar: false }

  toggleNavBar = () => {
    this.setState({ hideNavBar: !this.state.hideNavBar }, () =>
      Actions.refresh({ hideNavBar: this.state.hideNavBar })
    );
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Text>Tab title:{this.props.title} name:{this.props.name}</Text>
        <Text>Tab data:{this.props.data}</Text>
        {this.props.name === 'tab_1_1' &&
        <TouchableOpacity onPress={() => Actions.tab_1_2()}><Text>next screen for tab1_1</Text></TouchableOpacity>
        }
        {this.props.name === 'tab_2_1' &&
        <TouchableOpacity onPress={() => Actions.tab_2_2()}><Text>next screen for tab2_1</Text></TouchableOpacity>
        }
        <TouchableOpacity onPress={Actions.pop}><Text>Back</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { Actions.tab_1(); }}><Text>Switch to tab1</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { Actions.tab_2(); }}><Text>Switch to tab2</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { Actions.tab_3(); }}><Text>Switch to tab3</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { Actions.tab_4(); }}><Text>Switch to tab4</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { Actions.tab_5({ data: 'test!' }); }}><Text>Switch to tab5 with data</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { Actions.echo(); }}><Text>push clone scene (EchoView)</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { this.toggleNavBar(); }}><Text>Toggle NavBar</Text></TouchableOpacity>
      </View>
    );
  }
}
TabView.propTypes = propTypes;

export default TabView;
