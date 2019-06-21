import React, { PropTypes, Component } from 'react';
import { Text, View, Dimensions, Image, TextInput, TouchableOpacity, ImageBackground, StatusBar, Platform, Modal,BackHandler, I18nManager} from 'react-native';
import { Container, Content, Header, Body, Right, Left, Button} from 'native-base';
import Swiper from 'react-native-swiper';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import Images from '../../../Themes/Images';
// Screen Styles
import styles from './styles';

export default class WalkthroughDiscovery extends Component {

	constructor(props) {
		super(props);
		this.state = {
			modalVisible: true,
		};
	}

	componentWillMount() {
	  var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Walkthrough')
	   	return true;
	  });
	}

	toggleModal(visible) {
	  this.setState({ modalVisible: visible });
	}

	render() {
    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
        StatusBar.setBackgroundColor('#2d324f',true);
        StatusBar.setTranslucent(true);
    }

		const logoUri = "https://antiqueruby.aliansoftware.net//Images/walkthrough/logo_dialog_wt_twentyfour.png";
		const imageBG = "https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_back_wttwentyseven.png";

		var data = [
      {
        id: 1,
        title: "Welcome",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        title: "Welcome",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        title: "Welcome",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        title: "Welcome",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]

		return (
      <Container style={styles.container}>
				<Header style={styles.header}>
					<Left style={styles.left}>
						<TouchableOpacity  onPress={()=>this.props.navigation.navigate('Walkthrough')} style={styles.backArrow}>
							<Ionicons name={I18nManager.isRTL ? "ios-arrow-round-forward-outline" : "ios-arrow-round-back-outline"} size={30} color="#ffffff"/>
						</TouchableOpacity>
					</Left>
					<Body style={styles.body}>
						<Text style={styles.textHome}>Discovery</Text>
					</Body>
					<Right style={styles.right}>
						<TouchableOpacity onPress={()=> alert('search')}>
							<Ionicons name="ios-search" size={20} color="white"/>
						</TouchableOpacity>
					</Right>
				</Header>

				<ImageBackground style={styles.main} source={{uri:imageBG}}/>

				<Modal visible = {this.state.modalVisible} transparent={true} onRequestClose={() => null}>
					<View style={styles.modalStyle}>
						<View style={styles.popupBgImage}>
							<Image style={styles.shadowStyle} source={Images.bgtwentyseven}/>
							<Image style={styles.logoStyle} source={{uri:logoUri}}/>
							<Swiper
								ref='swiper'
 	             	showsButtons={false}
		            autoplay={true}
		            autoplayTimeout={2.5}
				        activeDot={<View style={styles.activeDot}/>}
				        dot={<View style={styles.dot} />}>
				        {
				           data.map((item, index) => {
				            return (
				             <View style={styles.slider} key={index}>
				                <Text style={styles.headertext}>{item.title}</Text>
				                <Text style={styles.desctext}>{item.description}</Text>
				             </View>
				            )
				          })
				        }
				      </Swiper>
							<View style={styles.socialButtons}>
								<Text style={styles.readyToGetStarted}>READY TO GET STARTED?</Text>

								<TouchableOpacity style={styles.lonInWithFbBg} onPress = {() => alert('LogIn with Facebook')}>
									<FontAwesome name="facebook" size={20} color="white"/>
									<Text style={styles.logInWithFbTwitterText}>Login with Facebook</Text>
								</TouchableOpacity>

								<TouchableOpacity style={styles.lonInWithTwitterBg} onPress = {() => alert('LogIn with Twitter')}>
									<FontAwesome name="twitter" size={20} color="white"/>
									<Text style={styles.logInWithFbTwitterText}>Login with Twitter</Text>
								</TouchableOpacity>
							</View>
						</View>
						<TouchableOpacity onPress={()=>this.setState({modalVisible: false})} style={styles.closeIconBg}>
							<FontAwesome name="close" size={15} color="white"/>
						</TouchableOpacity>
					</View>
				</Modal>

      </Container>
		);
	}
}
