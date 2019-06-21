import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	StatusBar,
	TouchableOpacity,
	Platform,
	ImageBackground,
	BackHandler,
	ScrollView,
	ListView,
	I18nManager,
	AsyncStorage
} from 'react-native';
import {
	Content,
	Container,
	Button,
	Icon,
	Right,
	Item,
	Input,
	Header,
	Left,
	Body,
	Title,
	Segment,
	Label,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { Fonts, Metrics, Colors, Images } from '../../../Themes/';

export default class MyAccount extends Component {
	constructor(props) {
		super(props);

		const rowHasChanged = (r1, r2) => r1 !== r2;
		const ds = new ListView.DataSource({ rowHasChanged });

		const dataObjects = [
			{
				id: 1,
				title: 'Details',
				itemImg: Images.ic_details,
			},
			{
				id: 2,
				title: 'Order',
				itemImg: Images.ic_order,
			},
			{
				id: 3,
				title: 'Address',
				itemImg: Images.ic_address,
			},
			{
				id: 4,
				title: 'Notification',
				notification: '3',
				itemImg: Images.ic_notification,
			},
			{
				id: 5,
				title: 'Get Reward',
				itemImg: Images.ic_get_reward,
			},
			{
				id: 6,
				title: 'Logout',
				itemImg: Images.ic_logout,
			},
		];

		this.state = {
			dataSource: ds.cloneWithRows(dataObjects),
		};
	}

	componentWillMount() {
		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('ECommerceMenu');
			return true;
		});
	}

	_handleNotificationBack() {
		AsyncStorage.multiSet([["ArrivedForNotification", "ECommerceMyAccount"]]);
    this.props.navigation.navigate("ECommerceNotification");
	}

	alertItemName = rowData => {
		var name = rowData.title;

		if (name === 'Details') {
			this.props.navigation.navigate('ECommerceMyInformation');
		} else if (name === 'Order') {
			this.props.navigation.navigate('ECommerceOrderHistory');
		} else if (name === 'Address') {
			this.props.navigation.navigate('ECommerceAddress');
		} else if (name === 'Notification') {
			this._handleNotificationBack();
		} else if (name === 'Get Reward') {
			this.props.navigation.navigate('ECommerceInviteFriends');
		} else if (name === 'Logout') {
			this.props.navigation.navigate('ECommerceLogin');
		}
	};

	_handleBagNavigation() {
		AsyncStorage.multiSet([
			['ArrivedFrom',"ECommerceMyAccount"],
		]);
		this.props.navigation.navigate("ECommerceMyBag");
	}

	_handleWishListNavigation() {
		AsyncStorage.multiSet([
			['ArrivedForWishList',"ECommerceMyAccount"],
		]);
		this.props.navigation.navigate("ECommerceWishList");
	}

	_renderItem(rowData) {
		return (
			<TouchableOpacity
				style={styles.rowMain}
				onPress={() => this.alertItemName(rowData)}>
				<View style={styles.imageContainer}>
					<Image source={rowData.itemImg} style={styles.itemImgStyle} />
					{rowData.notification ? (
						<View style={styles.notificationCircle}>
							<Text style={styles.notification}>3</Text>
						</View>
					) : null}
				</View>
				<Text style={styles.itemText}>{rowData.title}</Text>
			</TouchableOpacity>
		);
	}

	onBackClick() {
		this.props.navigation.navigate('ECommerceMenu');
	}

	render() {
		StatusBar.setBarStyle('light-content', true);

		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#0e1130', true);
			StatusBar.setTranslucent(true);
		}

		return (
			<Container style={styles.container}>
				<Header androidStatusBarColor={'#0e1130'} style={styles.header}>
					<Left style={styles.left}>
						<TouchableOpacity
							style={styles.backArrow}
							onPress={this.onBackClick.bind(this)}>
							<FontAwesome
								name={I18nManager.isRTL ? 'angle-right' : 'angle-left'}
								size={Fonts.moderateScale(30)}
								color="white"
								style={{paddingRight: 20}}
							/>
						</TouchableOpacity>
					</Left>
					<Body style={styles.body}>
						<Text style={styles.textTitle}>MyAccount</Text>
					</Body>
					<Right style={styles.right}>
						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._handleWishListNavigation()}>
								<View style={styles.heartBg}>
									<FontAwesome
										name="heart"
										size={Fonts.moderateScale(8)}
										style={styles.heartIcon}
									/>
								</View>
								<View style={styles.alertBg}>
									<Text style={styles.alertTxt}>1</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._handleBagNavigation()}>
								<SimpleLineIcons
									name="handbag"
									size={Fonts.moderateScale(18)}
									style={styles.bagIcon}
								/>
								<View style={styles.alertBg}>
									<Text style={styles.alertTxt}>3</Text>
								</View>
							</TouchableOpacity>
						</View>
					</Right>
				</Header>
				<View>
					<ListView
						contentContainerStyle={styles.content}
						dataSource={this.state.dataSource}
						renderRow={this._renderItem.bind(this)}
						enableEmptySections
						scrollEnabled={false}
						pageSize={4}
					/>
				</View>
			</Container>
		);
	}
}
