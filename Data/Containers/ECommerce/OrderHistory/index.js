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

export default class OrderHistory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					OrderID: '#101238646',
					Date: '08/05/2015',
					Product: 'W-Faux Leather With Quilted Sleeve',
					Price: '$160.00',
					Status: 'Complete',
				},
				{
					id: 2,
					OrderID: '#101897696',
					Date: '08/05/2016',
					Product: 'Customized Amato Racing Leather Jacket with Artwork',
					Price: '$180.00',
					Status: 'Cancel',
				},
				{
					id: 3,
					OrderID: '#201345690',
					Date: '11/04/2017',
					Product: 'Fashionable Denim & Leather Jacket',
					Price: '$120.00',
					Status: 'Complete',
				},
			],
		};
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
			['ArrivedFrom',"ECommerceOrderHistory"],
		]);
		this.props.navigation.navigate("ECommerceMyBag");
	}

	_handleWishListNavigation() {
		AsyncStorage.multiSet([
			['ArrivedForWishList',"ECommerceOrderHistory"],
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
						<Text style={styles.textTitle}>Order</Text>
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
								size={18}
								style={styles.bagIcon}
							/>
							<View style={styles.alertBg}>
								<Text style={styles.alertTxt}>3</Text>
							</View>
						</TouchableOpacity>
					</Right>
				</Header>

				<Content style={styles.content}>
					{this.state.data.map((item, index) => {
						return (
							<View
								style={
									item.id === 1
										? [styles.rowBg, { marginTop: Metrics.WIDTH * 0.05 }]
										: styles.rowBg
								}
								key={index}>
								<View style={styles.rowField}>
									<Text style={styles.fieldLabelTxt}>Order ID</Text>
									<Text style={styles.fieldDescriptionTxt}>{item.OrderID}</Text>
								</View>
								<View style={styles.rowListDivider} />

								<View style={styles.rowField}>
									<Text style={styles.fieldLabelTxt}>Date</Text>
									<Text style={styles.fieldDescriptionTxt}>{item.Date}</Text>
								</View>
								<View style={styles.rowListDivider} />

								<View style={styles.rowField}>
									<Text style={styles.fieldLabelTxt}>Product</Text>
									<Text numberOfLines={1} style={styles.fieldDescriptionTxt}>
										{item.Product}
									</Text>
								</View>
								<View style={styles.rowListDivider} />

								<View style={styles.rowField}>
									<Text style={styles.fieldLabelTxt}>Price</Text>
									<Text style={styles.fieldDescriptionTxt}>{item.Price}</Text>
								</View>
								<View style={styles.rowListDivider} />

								<View style={styles.rowField}>
									<Text style={styles.fieldLabelTxt}>Status</Text>
									<Text
										style={
											item.Status == 'Complete'
												? [styles.fieldDescriptionTxt, { color: '#ffc700' }]
												: [styles.fieldDescriptionTxt, { color: '#ff0000' }]
										}>
										{item.Status}
									</Text>
								</View>
							</View>
						);
					})}
				</Content>
			</Container>
		);
	}
}
