import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, BackHandler, I18nManager} from 'react-native';
import { Content,Container, Right, Header, Left, Body, Title, Input } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {  Images,Fonts, Metrics, Colors } from '../../../Themes/';

export default class AboutUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
    };
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("ECommerceMenu");
      return true;
    });
  }

  render(){
    StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
		 StatusBar.setBackgroundColor('#0e1130',true);
		 StatusBar.setTranslucent(true);
		}

    return(
      <Container style={styles.container}>
        <Header
          androidStatusBarColor={"#0e1130"}

          style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity style={styles.backArrow} onPress={()=> this.props.navigation.navigate('DrawerOpen')}>
                <Ionicons name="ios-menu" size={30} color="white"/>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.textTitle}>About Us</Text>
            </Body>
            <Right style={styles.right}>
            <TouchableOpacity style={styles.backArrow} onPress={()=> this.setState({ isSearch: !this.state.isSearch })}>
              <EvilIcons name="search" size={30} color="white"/>
            </TouchableOpacity>
            </Right>
        </Header>

        {
					(this.state.isSearch)
					?
					<View style={styles.searchViewBg} >
						<View style={styles.searchView}>
							<Ionicons
								name="ios-search"
								size={20}
								color="#8e8e93"
								style={{ marginLeft: 10 }}
							/>
							<Input
								style={styles.searchInput}
								placeholder="Search"
								placeholderTextColor="#8e8e93"
								underlineColorAndroid="transparent"
								autoCapitalize="none"
								keyboardType="default"
								selectionColor="#6d6d71"
							/>
							{/*<Text style={styles.searchText}>Search</Text>*/}
						</View>
					</View>
					:
					null
				}

        <Content>
          <View style={styles.mainView}>
            <Text style={styles.textRowQue}>
                      Temporibus autem quibusdam et aut officiis debitis aut
            </Text>
            <Text style={[styles.textRowAns, {marginTop: Metrics.HEIGHT * 0.015}]}>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </Text>

            <Text style={[styles.textRowAns, {marginTop: Metrics.HEIGHT * 0.015}]}>
                      Sed do eiusmod tempor incididunt ut labore
            </Text>

            <View style={[styles.stepView, {marginTop: Metrics.HEIGHT * 0.02}]}>
                <View style={styles.arrowView}>
                    <FontAwesome name="chevron-right" size={8} color="white"/>
                </View>
                <Text style={styles.textRowAns}>
                          Et harum quidem rerum facilis est etexpedita distinctio.
                </Text>
            </View>
            <View style={[styles.stepView, {marginTop: Metrics.HEIGHT * 0.020}]}>
                <View style={styles.arrowView}>
                    <FontAwesome name="chevron-right" size={8} color="white"/>
                </View>
                <Text style={styles.textRowAns}>
                          Nam libero tempore, cum soluta nobis esteligendi optio cumque nihil impedit quominus id quod maxime placeat facere
                </Text>
            </View>
            <View style={[styles.stepView, {marginTop: Metrics.HEIGHT * 0.020}]}>
                <View style={styles.arrowView}>
                    <FontAwesome name="chevron-right" size={8} color="white"/>
                </View>
                <Text style={styles.textRowAns}>
                          Neque porro quisquam
                </Text>
            </View>

            <Text style={[styles.textRowAns, {marginTop: Metrics.HEIGHT * 0.015}]}>
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </Text>

            <Text style={[styles.textRowAns, {marginTop: Metrics.HEIGHT * 0.015}]}>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </Text>

          </View>
        </Content>

      </Container>
    )
  }
}
