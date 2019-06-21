import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StatusBar,
	Platform,
	TouchableOpacity,
	BackHandler,
	ListView,
	ImageBackground,
	ScrollView,
	Picker,
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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Dropdown } from 'react-native-material-dropdown';
import Dropdown from '../../../Components/Dropdown/dropdown/';
import { Images } from '../../../Themes/';
import { Fonts, Metrics, Colors } from '../../../Themes/';
import { CachedImage } from 'react-native-cached-image';
var screenName = "";

var ProductData = [];

const WishListItemOne =
	'https://antiqueruby.aliansoftware.net/Images/woocommerce/wishListItemOne.png';
const WishListItemTwo =
	'https://antiqueruby.aliansoftware.net/Images/woocommerce/image_01.jpg';

var data =  [
	{
		id: 1,
		isLike: true,
		productImage: { uri: WishListItemOne },
		productTitle: 'W-Faux Leather With Quilted Sleeve',
		price: '$30.00',
		size: [
			{ id: 1, value: 'M' },
			{ id: 2, value: 'L' },
			{ id: 3, value: 'X' },
			{ id: 4, value: 'XL' },
		],
		color: [
			{ id: 1, color: '#e70f08' },
			{ id: 2, color: '#c0c0c0' },
			{ id: 3, color: '#885d25' },
		],
		quantity: [
			{ id: 1, value: 1 },
			{ id: 2, value: 2 },
			{ id: 3, value: 3 },
			{ id: 4, value: 4 },
		],
		selectedColorId:1,
	},
	{
		id: 2,
		isLike: true,
		productImage: { uri: WishListItemTwo },
		productTitle: 'W-Faux Leather With Quilted Sleeve',
		price: '$40.00',
		size: [
			{ id: 1, value: 'M' },
			{ id: 2, value: 'L' },
			{ id: 3, value: 'X' },
			{ id: 4, value: 'XL' },
		],
		color: [
			{ id: 1, color: '#0947ba' },
			{ id: 2, color: '#c4c9d7' },
			{ id: 3, color: '#3CB371' },
			{ id: 4, color: '#885d25' },
		],
		quantity: [
			{ id: 1, value: 1 },
			{ id: 2, value: 2 },
			{ id: 3, value: 3 },
			{ id: 4, value: 4 },
		],
		selectedColorId:1,
	},
	{
		id: 3,
		isLike: true,
		productImage: { uri: WishListItemOne },
		productTitle: 'W-Faux Leather With Quilted Sleeve',
		price: '$30.00',
		size: [
			{ id: 1, value: 'M' },
			{ id: 2, value: 'L' },
			{ id: 3, value: 'X' },
			{ id: 4, value: 'XL' },
		],
		color: [
			{ id: 1, color: '#e70f08' },
			{ id: 2, color: '#c0c0c0' },
			{ id: 3, color: '#885d25' },
			{ id: 4, color: '#FFFF00' },
			{ id: 5, color: '#3CB371' },
			{ id: 6, color: '#885d25' },
		],
		quantity: [
			{ id: 1, value: 1 },
			{ id: 2, value: 2 },
			{ id: 3, value: 3 },
			{ id: 4, value: 4 },
		],
		selectedColorId:1,
	},
]

export default class MyBag extends Component {

	constructor(props) {
		super(props);

		if(this.props.navigation.state.params) {
		const navParams = this.props.navigation.state.params;
		screenName = navParams.name;
		}


		this.state = {
			screenArrivedFrom: "",
			typography: 'M',
			typography1: 1,
		};
		this.onChangeText = this.onChangeText.bind(this);
	}

	componentWillMount() {
		var that = this;

		AsyncStorage.multiGet(['ArrivedFrom']).then((data) => {

			this.setState({screenArrivedFrom: data[0][1]})

		});

		BackHandler.addEventListener('hardwareBackPress', function() {
			that._backPress();
			return true;
		});

		ProductData = data;
	}

	_handleProductDetailClick() {

    this.props.navigation.navigate("ECommerceProductDetails",{},
    {
      type: "Navigation/NAVIGATE",
      routeName: "ECommerceProductDetails",
      params: {name: "ECommerceMyBag"}
    })

  }

	_handleWishListNavigation() {
		AsyncStorage.multiSet([
			['ArrivedForWishList',"ECommerceMyBag"],
		]);
		this.props.navigation.navigate("ECommerceWishList");
	}

	onChangeText(text) {
		this.setState({ user_category_id: text });
	}

	onItemClick() {
		this.props.navigation.navigate('ECommerceCheckout');
	}

	_backPress() {

		if(this.state.screenArrivedFrom == "ECommerceMenu") {
			this.props.navigation.navigate('ECommerceMenu')
		}
		else if(this.state.screenArrivedFrom == "ECommerceMyInformation") {
			this.props.navigation.navigate('ECommerceMyInformation')
		}
		else if(this.state.screenArrivedFrom == "ECommerceOrderHistory"){
			this.props.navigation.navigate('ECommerceOrderHistory')
		}
		else if(this.state.screenArrivedFrom == "ECommerceMyAccount"){
			this.props.navigation.navigate('ECommerceMyAccount')
		}
		else if(this.state.screenArrivedFrom == "ECommerceCategoryProduct"){
			this.props.navigation.navigate('ECommerceCategoryProduct')
		}
		else if(this.state.screenArrivedFrom == "ECommerceSale"){
			this.props.navigation.navigate('ECommerceSale')
		}
		else if(this.state.screenArrivedFrom == "ECommerceWishList"){
			this.props.navigation.navigate('ECommerceWishList')
		}
		else if(this.state.screenArrivedFrom == "ECommerceLogin"){
			this.props.navigation.navigate('ECommerceLogin')
		}
		else if(this.state.screenArrivedFrom == "ECommerceCheckout"){
			this.props.navigation.navigate('ECommerceCheckout')
		}
		else if(this.state.screenArrivedFrom == "ECommerceProductDetails"){
			this.props.navigation.navigate('ECommerceProductDetails')
		}
		else if(this.state.screenArrivedFrom == "ECommerceProductDetailsTab"){
			this.props.navigation.navigate('ECommerceProductDetailsTab')
		}
		else {
			this.props.navigation.navigate('ECommerceMenu');
		}
	}



	onCheckBoxPressColor(productid, selectedColorId, colorid) {

	  var i;
	  for(i=0;i<ProductData.length;i++){
	    if(ProductData[i].id == productid){
	      ProductData[i].selectedColorId = colorid;
	    }
	  }

	  ProductData = ProductData;
	  this.setState({
	    ProductData: ProductData,
	  });

	}

	_handleLike(id,like) {

	    var i;
	    for(i=0;i<ProductData.length;i++){
	      if(ProductData[i].id == id){
	        if(like == true){
	            ProductData[i].isLike = false;
	        } else {
	            ProductData[i].isLike = true;
	        }
	      }
	    }


			ProductData = ProductData;
	    this.setState({
	      ProductData: ProductData,
	    });

	  }

	_renderDeleteItem(index) {
		var newData = ProductData.slice(); //copy array
		newData.splice((index), 1); //remove element
		for(var i = 0; i < newData.length; i++) {
				newData[i].index = i;
		}

		ProductData = newData;
		this.setState({
			ProductData: newData,
		});
	}

	render() {
		StatusBar.setBarStyle('light-content', true);
		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#0e1130', true);
			StatusBar.setTranslucent(true);
		}

		return (
			<Container style={styles.main}>
				<Header androidStatusBarColor={'#0e1130'} style={styles.header}>
					<Left style={styles.left}>
						<TouchableOpacity
							style={styles.backArrow}
							onPress={() => this._backPress()}>
							<FontAwesome
								name={I18nManager.isRTL ? 'angle-right' : 'angle-left'}
								size={30}
								color="white"
								style={{paddingRight: 20}}
							/>
						</TouchableOpacity>
					</Left>
					<Body style={styles.body}>
						<Text style={styles.textTitle}>Bag</Text>
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
							<View style={{ flexDirection: 'row' }}>
								<SimpleLineIcons
									name="handbag"
									size={Fonts.moderateScale(18)}
									style={styles.bagIcon}
								/>
								<View style={styles.alertBg}>
									<Text style={styles.alertTxt}>3</Text>
								</View>
							</View>
						</View>
					</Right>
				</Header>

				<Content>
					{ProductData.map((item, index) => {
						return (
							<View style={styles.row} key={index}>
								<TouchableOpacity style={styles.rowBg} onPress={() => this._handleProductDetailClick()}>
									<CachedImage
										source={item.productImage}
										style={styles.productImage}>
										{
		                  (item.isLike == true) ?
		                   <TouchableOpacity onPress = {() => this._handleLike(item.id,item.isLike)}>
		                       <FontAwesome name="heart" size={18} color={'red'} style={styles.heartListIcon} />
		                   </TouchableOpacity> :
		                   <TouchableOpacity onPress = {() => this._handleLike(item.id,item.isLike)}>
		                     <FontAwesome name="heart" size={18} color={'#cecece'} style={styles.heartListIcon} />
		                   </TouchableOpacity>
		                }
									</CachedImage>

									<View style={styles.productDetailBg}>
										<Text style={styles.productTitleTxt}>
											{item.productTitle}
										</Text>

										<View
											style={[
												styles.detailFieldRow,
												{
													paddingTop: Metrics.WIDTH * 0.01,
													paddingBottom: Metrics.WIDTH * 0.01,
												},
											]}>
											<Text style={styles.priceTxt}>{item.price}</Text>
											<TouchableOpacity
												style={styles.closeIconBg}
												onPress={() => alert("Close")}>
												<FontAwesome
													name="close"
													size={12}
													style={styles.closeImg}
												/>
											</TouchableOpacity>
										</View>

										<View
											style={[
												styles.detailFieldRow,
												{ marginTop: Metrics.WIDTH * 0.03 },
											]}>
											<Text style={styles.productTitleTxt}>Size</Text>
											<View>
												<Dropdown
													data={item.size}
													ref="catInput"
													value={this.state.typography}
													onChangeText={this.onChangeText}
													labelHeight={0}
													containerStyle={styles.dropstyle}
													baseColor="rgba(0, 0, 0, .00)"
													dropdownPosition={1}
												/>
											</View>
										</View>

										<View
											style={[
												styles.detailFieldRow,
												{ marginTop: Metrics.WIDTH * 0.015 },
											]}>
											<Text style={styles.productTitleTxt}>Color</Text>
											<View style={styles.listColorBg}>
											<ScrollView
													horizontal={true}
													showsHorizontalScrollIndicator={false}
													>
													{
														item.color.map((itemColor, index) => {
															return (
																<View key={index}>
																		<TouchableOpacity
																			onPress={() => this.onCheckBoxPressColor(item.id, item.selectedColorId, itemColor.id)}
																			style={
																				item.selectedColorId == itemColor.id
																				?
																				[
																					styles.colorViewer,
																					{
																						backgroundColor: itemColor.color,
																						marginRight: Metrics.WIDTH * 0.02,
																						borderColor: '#ffc700',
																					}
																				]
																				:
																				[
																					styles.colorViewer,
																					{
																						backgroundColor: itemColor.color,
																						marginRight: Metrics.WIDTH * 0.02,
																						borderColor: 'transparent',
																					}
																					]
																				}/>
																</View>
															)
														})
													}
											</ScrollView>
											</View>
										</View>

										<View
											style={[
												styles.detailFieldRow,
												{
													marginTop: Metrics.WIDTH * 0.03,
													marginBottom: Metrics.WIDTH * 0.15,
												},
											]}>
											<Text style={styles.productTitleTxt}>Quantity</Text>
											<View>
												<Dropdown
													data={item.quantity}
													ref="catInput1"
													value={this.state.typography1}
													onChangeText={this.onChangeText}
													labelHeight={0}
													containerStyle={styles.dropstyle}
													baseColor="rgba(0, 0, 0, .00)"
													dropdownPosition={1}
												/>
											</View>
										</View>
									</View>
								</TouchableOpacity>

								<View
									style={
										item.id === ProductData.length ? null : styles.divider
									}
								/>
							</View>
						);
					})}
				</Content>

				<View style={styles.divider} />

				<View style={styles.bottomView}>
					<TouchableOpacity
						style={styles.footerBtnBg}
						onPress={this.onItemClick.bind(this)}>
						<Text style={styles.footerBtnTxt}>CheckOut</Text>
					</TouchableOpacity>
				</View>
			</Container>
		);
	}

}
