import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	StatusBar,
	TouchableOpacity,
	Platform,
	BackHandler,
	I18nManager,
	AsyncStorage
} from 'react-native';
import {
	Content,
	Container,
	Right,
	Header,
	Left,
	Body,
	Title,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';
import { Images, Fonts, Metrics, Colors } from '../../../Themes/';

export default class MyInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onChangePasswordClick() {
		this.props.navigation.navigate('ECommerceChangePassword');
	}

	onBackClick() {
		this.props.navigation.navigate('ECommerceMyAccount');
	}

	componentWillMount() {
		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('ECommerceMyAccount');
			return true;
		});
	}

	_handleBagNavigation() {
		AsyncStorage.multiSet([
			['ArrivedFrom',"ECommerceMyInformation"],
		]);
		this.props.navigation.navigate("ECommerceMyBag");
	}

	_handleWishListNavigation() {
		AsyncStorage.multiSet([
			['ArrivedForWishList',"ECommerceMyInformation"],
		]);
		this.props.navigation.navigate("ECommerceWishList");
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
								size={30}
								color="white"
								style={{paddingRight: 20}}
							/>
						</TouchableOpacity>
					</Left>
					<Body style={styles.body}>
						<Text style={styles.textTitle}>My Information</Text>
					</Body>
					<Right style={styles.right}>
						<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._handleWishListNavigation()}>
							<View style={styles.heartBg}>
								<FontAwesome name="heart" size={8} style={styles.heartIcon} />
							</View>
							<View style={styles.alertBg}>
								<Text style={styles.alertTxt}>1</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._handleBagNavigation()}>
							<SimpleLineIcons
								name="handbag"
								size={20}
								style={styles.bagIcon}
							/>
							<View style={styles.alertBg}>
								<Text style={styles.alertTxt}>3</Text>
							</View>
						</TouchableOpacity>
					</Right>
				</Header>

				<View style={styles.mainView}>
					<View style={styles.mainRow}>
						<Text style={styles.labelText}>First Name</Text>
						<Text style={[styles.infoText, { color: '#0e1130' }]}>Hoang</Text>
					</View>

					<View style={styles.dividerHorizontal} />

					<View style={styles.mainRow}>
						<Text style={styles.labelText}>Last Name</Text>
						<Text style={[styles.infoText, { color: '#0e1130' }]}>Thai</Text>
					</View>

					<View style={styles.dividerHorizontal} />

					<View style={styles.mainRow}>
						<Text style={styles.labelText}>Email</Text>
						<Text style={[styles.infoText, { color: '#e1e1e1' }]}>
							hong8x.pts@gmail.com
						</Text>
					</View>

					<View style={styles.dividerHorizontal} />

					<View style={styles.mainRow}>
						<Text style={styles.labelText}>Birthday</Text>
						<Text style={[styles.infoText, { color: '#0e1130' }]}>
							16/04/1988
						</Text>
					</View>

					<View style={styles.dividerHorizontal} />

					<View style={styles.mainRow}>
						<Text style={styles.labelText}>Gender</Text>
						<Text style={[styles.infoText, { color: '#0e1130' }]}>Male</Text>
					</View>

					<View style={styles.dividerHorizontal} />

					<TouchableOpacity
						style={styles.changePasswordView}
						onPress={this.onChangePasswordClick.bind(this)}>
						<Text
							style={[
								styles.infoText,
								{ color: '#ffc700', textDecorationLine: 'underline' },
							]}>
							Change Password
						</Text>
					</TouchableOpacity>

					<View style={styles.editInfoMainView}>
						<View style={styles.editDivider} />
						<TouchableOpacity
							style={styles.editInfoView}
							onPress={() => this.props.navigation.navigate("ECommerceEditInformation")}>
							<Text style={styles.editInfoText}>Edit Information</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Container>
		);
	}
}
