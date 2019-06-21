import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, BackHandler, I18nManager} from 'react-native';
import { Content,Container, Right, Header, Left, Body, Title, Input } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {  Images,Fonts, Metrics, Colors } from '../../../Themes/';

export default class FAQ extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedLots: '1',
      data: [
        {
          id: 1,
          ItemName: 'General Enquiries',
        },
        {
          id: 2,
          ItemName: 'Shipping & Delivery',
        },
        {
          id: 3,
          ItemName: 'Express Shipping',
        },
        {
          id: 4,
          ItemName: 'Order Tracking',
        },
        {
          id: 5,
          ItemName: 'Returns & Refunds',
        },
        {
          id: 6,
          ItemName: 'Warranty & Repairs',
        },
        {
          id: 7,
          ItemName: 'Exchanges',
        },
        {
          id: 8,
          ItemName: 'Vouchers & Discounts',
        },
        {
          id: 9,
          ItemName: 'My Wallets',
        },
        {
          id: 10,
          ItemName: 'Size Guide',
        },
        {
          id: 11,
          ItemName: 'Get Rewards',
        },
        {
          id: 12,
          ItemName: 'Customer Service',
        }
      ]
    };
  }

  onCheckFAQ(id) {
    this.setState({
      selectedLots: id,
      isSearch: false,
    });
    if(id == 1)
    {
      this.props.navigation.navigate('ECommerceFAQGeneralEnquiry');
    }
  }

  componentWillMount() {
		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('ECommerceMenu');
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
              <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
                <Ionicons name="ios-menu" size={30} color="white"/>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.textTitle}>FAQ</Text>
            </Body>
            <Right style={styles.right}>
            <TouchableOpacity style={styles.backArrow} onPress={() => this.setState({ isSearch: !this.state.isSearch })}>
              <EvilIcons name="search" size={30} color="white"/>
            </TouchableOpacity>
            </Right>
        </Header>

        {
					(this.state.isSearch)
					?
          <View>
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
          <View style={[styles.faqDivider, {backgroundColor: "black"}]} />
          </View>
					:
					null
				}

        <Content>
        {
          this.state.data.map((item, index) => {
            return(
              <TouchableOpacity key={index} onPress={()=>this.onCheckFAQ(item.id)}>
              {
                (this.state.selectedLots == item.id)
                ?
                <View>
                <View style={[styles.rowMain, {backgroundColor: '#e9e9e9'}]}>
                  <Text style={styles.rowText}>{item.ItemName}</Text>
                  <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={25} color="#cccccc" />
                </View>
                <View style={styles.faqDivider} />
                </View>
                :
                <View>
                <View style={[styles.rowMain, {backgroundColor: '#ffffff'}]}>
                  <Text style={styles.rowText}>{item.ItemName}</Text>
                  <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={25} color="#cccccc" />
                </View>
                <View style={styles.faqDivider} />
                </View>
              }

              </TouchableOpacity>
            )
          })
        }
        </Content>


      </Container>
    )
  }
}
