import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StatusBar,
	Platform,
	TouchableOpacity,
	BackHandler,
	I18nManager,
	AsyncStorage
} from 'react-native';
import {
	Container,
	Button,
	Right,
	Left,
	ListItem,
	Content,
	Body,
	Header,
} from 'native-base';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../../../Themes/';

export default class Notification extends Component {


	constructor(props) {
		super(props);
		this.state =
		{
			screenLink: ""
		};
	}

	componentWillMount() {
		var that = this;
		AsyncStorage.multiGet(["ArrivedForNotification"]).then(data => {
      this.setState({ screenLink: data[0][1] });
    });

    BackHandler.addEventListener("hardwareBackPress", function() {
      that._backPress();
      return true;
    });
	}


	_backPress() {
    const { screenLink } = this.state;

    if (screenLink == "ECommerceMenu") {
      this.props.navigation.navigate("ECommerceMenu");
    } else {
      this.props.navigation.navigate("ECommerceMyAccount");
    }
  }


	_handleLEFT(screenLink) {
    return (
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => this._backPress()}
      >
        <FontAwesome
          name={I18nManager.isRTL ? "angle-right" : "angle-left"}
          size={30}
          color="white"
					style={{paddingRight: 20}}
        />
      </TouchableOpacity>
    );
  }


	render() {
		const { screenLink } = this.state;

		StatusBar.setBarStyle('light-content', true);
		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#0e1130', true);
			StatusBar.setTranslucent(true);
		}

		var data = [
			{
				id: 1,
				name: 'Zalora Plus',
				time: '2 days ago',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			{
				id: 2,
				name: 'Calandra Herwig',
				time: '3 days ago',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
			{
				id: 3,
				name: 'Calandra Herwig',
				time: '4 days ago',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
		];

		return (
			<Container style={styles.main}>
				<Header androidStatusBarColor={'#0e1130'} style={styles.header}>
					<Left style={styles.left}>
					 {this._handleLEFT(screenLink)}
					</Left>
					<Body style={styles.body}>
						<Text style={styles.textTitle}>Notification</Text>
					</Body>
					<Right style={styles.right} transparent />
				</Header>

				<Content>
					{data.map((item, index) => {
						return (
							<View style={styles.rowBg} key={index}>
								<View style={styles.rowProfileNameTime}>
									<Image
										source={Images.notificationProfileIcon}
										style={styles.imageNotification}
									/>
									<View style={styles.rowNameTime}>
										<Text style={styles.nameTxt}>{item.name}</Text>
										<Text style={styles.timeTxt}>{item.time}</Text>
									</View>
								</View>
								<Text style={styles.descriptionTxt}>{item.description}</Text>
								<View style={styles.divider} />
							</View>
						);
					})}
				</Content>
			</Container>
		);
	}
}
