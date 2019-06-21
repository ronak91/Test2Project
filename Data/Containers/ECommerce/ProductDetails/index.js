import React, { Component } from 'react';
import {
	Text,
	Image,
	TextInput,
	StatusBar,
	Platform,
	TouchableOpacity,
	BackHandler,
	ListView,
	ImageBackground,
	ScrollView,
	Picker,
	Modal,
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
import CheckBox from 'react-native-check-box';
// Screen Styles
import styles from './styles';
import { View } from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-material-dropdown';
import Swiper from 'react-native-swiper';
import Sidebar from 'react-native-sidebar';
import { Images } from '../../../Themes/';
import { Fonts, Metrics, Colors } from '../../../Themes/';
import { CachedImage } from 'react-native-cached-image';
var screenName = "";

export default class ProductDetails extends Component {
	constructor(props) {
		super(props);

		const ProductDetailImgOne =
			'https://antiqueruby.aliansoftware.net/Images/woocommerce/image_01.jpg';
		const ProductDetailImgTwo =
			'https://antiqueruby.aliansoftware.net/Images/woocommerce/image_02.jpg';
		const ProductDetailImgThree =
			'https://antiqueruby.aliansoftware.net/Images/woocommerce/image_03.jpg';
	  const ProductDetailImgFour =
			'https://antiqueruby.aliansoftware.net/Images/woocommerce/image_04.jpg';
		const ProductDetailImgFive =
			'https://antiqueruby.aliansoftware.net/Images/woocommerce/image_05.jpg';

		const ProductColorImgOne =
			'https://antiqueruby.aliansoftware.net/Images/woocommerce/sliderColorImgTwo.png';
		const ProductColorImgTwo =
			'https://antiqueruby.aliansoftware.net/Images/woocommerce/sliderColorImgThree.png';
		const ProductColorImgThree =
			'https://antiqueruby.aliansoftware.net/Images/woocommerce/sliderColorImgOne.png';

		const rowHasChanged = (r1, r2) => r1 !== r2;
		const ds = new ListView.DataSource({ rowHasChanged });

		const dataObjectsText = [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
			{ id: 4 },
			{ id: 5 },
		];

		if(this.props.navigation.state.params) {
		const navParams = this.props.navigation.state.params;
		screenName = navParams.name;
		}

		this.state = {
			dot_index: 0,
			selectedLots: '2',
			modalVisible: false,
			dots: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],

			data: [
				{ id: 0, productImage: { uri: ProductDetailImgOne } },
				{ id: 1, productImage: { uri: ProductDetailImgTwo } },
				{ id: 2, productImage: { uri: ProductDetailImgThree } },
				{ id: 3, productImage: { uri: ProductDetailImgFour } },
				{ id: 4, productImage: { uri: ProductDetailImgFive } },
			],

			productColor: [
				{ id: 1, productDetailColor: '#0947ba', isSelected: false },
				{ id: 2, productDetailColor: '#c4c9d7', isSelected: false },

			],

			size: [
				{ id: 1, value: 'XS', isSelected: false },
				{ id: 2, value: 'S', isSelected: false },
				{ id: 3, value: 'M', isSelected: false },
				{ id: 4, value: 'L', isSelected: false },
				{ id: 5, value: 'XL', isSelected: false },
				{ id: 6, value: 'XXL', isSelected: false },
			],

			selectedSocialShare: '2',
			index: 0,
			isColorViewOpen: false,
			isColorProductSelected: false,
			modalsizeVisible: false,
			selectedLots: '1',
			selectedSize: '1',
			isSizeViewOpen: false,
			isLiked: false,
			isLikeColor: "black",
			isLoading: true,
			dataSourceText: ds.cloneWithRows(dataObjectsText),
		};
	}

	componentWillMount() {
		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that._handleBackPress();
			return true;
		});
	}

	toggleModals(visible) {
		this.setState({ modalVisible: visible });
	}

	renderColorRow = () => {
		return alert('true'), <View style={styles.rowColorView} />;
	};

	_renderDot(rowData) {
		// console.warn('index:',this.state.index);
		return (
			<View style={styles.rowDot}>
				<View
					style={
						rowData.id == this.state.index
							? [styles.dot, { backgroundColor: '#0e1130' }]
							: [styles.dot, { backgroundColor: '#aeaeae' }]
					}
				/>
			</View>
		);
	}

	setModalVisible(visible) {
		this.setState({ modalsizeVisible: visible });
	}

	onLikeClick() {
		if(this.state.isLiked == false)
		{
			this.setState({ isLiked: true, isLikeColor: "red"});
		}
		else {
			this.setState({ isLiked: false, isLikeColor: "black"});
		}
	}

	onCheckBoxPress(id) {
		this.setState({
			selectedLots: id,
		});
	}

	onSizePress(id) {
		this.setState({
			selectedSize: id,
		});
	}

	onSocialPress(id) {
		this.setState({
			selectedSocialShare: id,
		});
	}

	_handleBackPress() {
		if(screenName == "ECommerceMenu") {
			this.props.navigation.navigate("ECommerceMenu");
		}
		else if (screenName == "ECommerceCategoryProduct") {
			this.props.navigation.navigate("ECommerceCategoryProduct");
		}
		else if (screenName == "ECommerceWishList") {
			this.props.navigation.navigate("ECommerceWishList");
		}
		else if (screenName == "ECommerceMyBag") {
			this.props.navigation.navigate("ECommerceMyBag");
		}
		else if (screenName == "ECommerceSale") {
			this.props.navigation.navigate("ECommerceSale");
		}
	}

	_handleProductDetailTabClick() {
    if (screenName == "ECommerceMenu") {
			AsyncStorage.multiSet([
        ["ArrivedForProductDetailsTab", "ECommerceMenu"]
      ]);
      this.props.navigation.navigate("ECommerceProductDetailsTab");
    } else if (screenName == "ECommerceCategoryProduct") {
			AsyncStorage.multiSet([
        ["ArrivedForProductDetailsTab", "ECommerceCategoryProduct"]
      ]);
      this.props.navigation.navigate("ECommerceProductDetailsTab");
    } else if (screenName == "ECommerceWishList") {
      // this.props.navigation.navigate(
      //   "ECommerceProductDetailsTab",
      //   {},
      //   {
      //     type: "Navigation/NAVIGATE",
      //     routeName: "ECommerceProductDetailsTab",
      //     params: { name: "ECommerceProductDetailsWishList" }
      //   }
      // );
      AsyncStorage.multiSet([
        ["ArrivedForProductDetailsTab", "ECommerceProductDetailsWishList"]
      ]);
      this.props.navigation.navigate("ECommerceProductDetailsTab");
    } else if (screenName == "ECommerceMyBag") {
      // this.props.navigation.navigate(
      //   "ECommerceProductDetailsTab",
      //   {},
      //   {
      //     type: "Navigation/NAVIGATE",
      //     routeName: "ECommerceProductDetailsTab",
      //     params: { name: "ECommerceProductDetailsMybag" }
      //   }
      // );
      AsyncStorage.multiSet([
        ["ArrivedForProductDetailsTab", "ECommerceProductDetailsMyBag"]
      ]);
      this.props.navigation.navigate("ECommerceProductDetailsTab");
    } else if (screenName == "ECommerceSale") {
      AsyncStorage.multiSet([
        ["ArrivedForProductDetailsTab", "ECommerceProductDetailsSales"]
      ]);
      this.props.navigation.navigate("ECommerceProductDetailsTab");
    }
  }

	_handleBagNavigation() {
    AsyncStorage.multiSet([["ArrivedFrom", "ECommerceProductDetails"]]);
    this.props.navigation.navigate("ECommerceMyBag");
  }

  _handleWishListNavigation() {
    AsyncStorage.multiSet([["ArrivedForWishList", "ECommerceProductDetails"]]);
    this.props.navigation.navigate("ECommerceWishList");
  }

	render() {
		StatusBar.setBarStyle('light-content', true);
		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#0e1130', true);
			StatusBar.setTranslucent(true);
		}
		var dot_index1 = 0;

		var shareDetails = [
			{
				id: 1,
				socialIcon: Images.facebookIcon,
				socialBtnColor: '#426ead',
				title: 'Facebook',
			},
			{
				id: 2,
				socialIcon: Images.twitterIcon,
				socialBtnColor: '#00a7ed',
				title: 'Twitter',
			},
			{
				id: 3,
				socialIcon: Images.googlePlusIcon,
				socialBtnColor: '#ec4e4e',
				title: 'Google+',
			},
			{
				id: 4,
				socialIcon: Images.bubbleIcon,
				socialBtnColor: '#5ec10e',
				title: 'Message',
			},
		];
		return (
			<Container style={styles.main}>
				<Header androidStatusBarColor={'#0e1130'} style={styles.header}>
					<Left style={styles.left}>
						<TouchableOpacity
							style={styles.backArrow}
							onPress={() =>
								this._handleBackPress()
							}>
							<FontAwesome
								name={I18nManager.isRTL ? 'angle-right' : 'angle-left'}
								size={35}
								color="white"
								style={{paddingRight: 20}}
							/>
						</TouchableOpacity>
					</Left>
					<Body style={styles.body}>
						<Text style={styles.textTitle}>Product Details</Text>
					</Body>
					<Right style={styles.right}>
						{screenName == "ECommerceWishList" ? null : (

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

            )}

            {screenName == "ECommerceMyBag" ? null : (
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
            )}
					</Right>
				</Header>

				<View>
					<View style={styles.shareDetailHeader}>
						<View style={styles.productTitlePriceBg}>
							<Text style={styles.shareDetailsTxt}>Sequin Dress Lola Skye</Text>
							<View style={styles.productPriceBg}>
								<Text
									style={[
										styles.shareDetailsTxt,
										{
											textDecorationLine: 'line-through',
											textDecorationStyle: 'solid',
										},
									]}>
									$200.00
								</Text>
								<Text style={styles.newPriceTxt}>$180.00</Text>
							</View>
						</View>
						<View style={styles.shareDetailsBg}>
							<TouchableOpacity
								style={{ justifyContent: 'center' }}
								onPress={() => this._handleBagNavigation()}>
								<Text style={[styles.shareDetailsTxt, { color: '#2d324f' }]}>
									Add to Bag
								</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.sliderBG}>
						<Swiper
							showsButtons={false}
							autoplay={false}
							horizontal={true}
							index={0}
							loop={false}
							onIndexChanged={index => this.setState({ dot_index: index })}
							dot={<View />}
							activeDot={<View />}>
							{this.state.data.map((item, key) => {
								return (
									<View style={styles.rowBg} key={key}>
										<CachedImage
											style={styles.productImage}
											source={item.productImage}
										/>
									</View>
								);
							})}
						</Swiper>
						<View style={styles.dotListBg}>
							{this.state.dots.map((item, value) => {
								return (
									<View style={styles.rowDot} key={value}>
										<View
											style={
												item.id - 1 == this.state.dot_index
													? [styles.dot, { backgroundColor: '#0e1130' }]
													: [styles.dot, { backgroundColor: '#aeaeae' }]
											}
										/>
									</View>
								);
							})}
						</View>

						<TouchableOpacity
							style={styles.heartBgblack}
							onPress={() => this.onLikeClick()}>
							<Image source={Images.roundLike} style={[styles.heartImg, {tintColor: this.state.isLikeColor}]} />
						</TouchableOpacity>

						<TouchableOpacity
							style={[styles.heartBgblack, { right: Metrics.WIDTH * 0.1 }]}
							onPress={() => {
								this.toggleModals(true);
							}}>
							<Image source={Images.roundShare} style={styles.heartImg} />
						</TouchableOpacity>

						<View
							style={
								this.state.isColorViewOpen == false
									? [
											styles.colorTxtBg,
											{
												marginRight: -(Metrics.WIDTH * 0.05),
												transform: [
													{ rotate: I18nManager.isRTL ? '90deg' : '270deg' },
												],
											},
									  ]
									: [
											styles.colorTxtBg,
											{
												marginRight: Metrics.WIDTH * 0.13,
												transform: [
													{ rotate: I18nManager.isRTL ? '90deg' : '270deg' },
												],
											},
									  ]
							}>
							<TouchableOpacity
								onPress={() =>
									this.setState({
										isColorViewOpen: !this.state.isColorViewOpen,
									})
								}>
								<Text style={styles.shareDetailsTxt}>Color</Text>
							</TouchableOpacity>
						</View>

						<View
							style={
								this.state.isSizeViewOpen == false
									? [
											styles.sizeTxtBg,
											{
												marginRight: -(Metrics.WIDTH * 0.05),
												transform: [
													{ rotate: I18nManager.isRTL ? '90deg' : '270deg' },
												],
											},
									  ]
									: [
											styles.sizeTxtBg,
											{
												marginRight: Metrics.WIDTH * 0.13,
												transform: [
													{ rotate: I18nManager.isRTL ? '90deg' : '270deg' },
												],
											},
									  ]
							}>
							<TouchableOpacity
								onPress={() =>
									this.setState({
										isSizeViewOpen: !this.state.isSizeViewOpen,
									})
								}>
								<Text style={styles.shareDetailsTxt}>Size</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.btnSec}>
							<TouchableOpacity
								style={[styles.btnBg, { backgroundColor: 'white' }]}
								onPress={() =>
									this._handleProductDetailTabClick()
								}>
								<Text style={[styles.btnText, { color: '#0691ce' }]}>
									View Details
								</Text>
							</TouchableOpacity>
							{/*<TouchableOpacity
								style={[styles.btnBg, { backgroundColor: '#0691ce' }]}
								onPress={() => alert('Add Item to Bag')}>
								<Text style={[styles.btnText, { color: '#fff' }]}>
									Add to Bag
								</Text>
							</TouchableOpacity>*/}
						</View>
					</View>

					<View
						style={
							this.state.isColorViewOpen == true ? styles.rowColorView : null
						}>
						<Content>
							{this.state.productColor.map((item, index) => {
								return (
									<View key={index}>
										<TouchableOpacity
											onPress={() => this.onCheckBoxPress(item.id)}
											style={styles.colorTouchable}>
											<View
												style={
													this.state.selectedLots == item.id
														? [
																styles.colorListBg,
																{
																	borderColor: '#ffc700',
																	backgroundColor: item.productDetailColor,
																},
														  ]
														: [
																styles.colorListBg,
																{
																	borderColor: 'transparent',
																	backgroundColor: item.productDetailColor,
																},
														  ]
												}
											/>
										</TouchableOpacity>
									</View>
								);
							})}
						</Content>
					</View>

					<View
						style={
							this.state.isSizeViewOpen == true ? styles.rowColorView : null
						}>
						<Content>
							{this.state.size.map((item, index) => {
								return (
									<View key={index}>
										<TouchableOpacity
											onPress={() => this.onCheckBoxPress(item.id)}
											style={styles.colorTouchable}>
											<View
												style={
													this.state.selectedLots == item.id
														? [
																styles.sizeList,
																{
																	borderColor: '#ffc700',
																	backgroundColor: '#ffffff',
																},
														  ]
														: [
																styles.sizeList,
																{
																	borderColor: '#b7b7b7',
																	backgroundColor: '#ffffff',
																},
														  ]
												}>
												<Text>{item.value}</Text>
											</View>
										</TouchableOpacity>
									</View>
								);
							})}
						</Content>
					</View>

					{/*<View style={{flexDirection: 'column', height: Metrics.HEIGHT, width: Metrics.WIDTH*80}}>*/}
					<Modal
						transparent={true}
						visible={this.state.modalsizeVisible}
						onRequestClose={() => {
							this.setModalVisible(!this.state.modalsizeVisible);
						}}>
						<View style={styles.modalViewShadowBg}>
							<View style={styles.modalBg}>
								<ScrollView
									horizontal={true}
									showsHorizontalScrollIndicator={false}
									style={{ marginRight: Metrics.WIDTH * 0.08 }}>
									{this.state.size.map((item, index) => {
										return (
											<View key={index}>
												<TouchableOpacity
													onPress={() => this.onSizePress(item.id)}>
													<View
														style={
															this.state.selectedSize == item.id
																? [styles.sizeList, { borderColor: '#ffc700' }]
																: [styles.sizeList, { borderColor: '#dfdfdf' }]
														}>
														<Text> {item.value} </Text>
													</View>
												</TouchableOpacity>
											</View>
										);
									})}
								</ScrollView>

								<TouchableOpacity
									style={{ justifyContent: 'center' }}
									onPress={() => {
										this.setModalVisible(!this.state.modalsizeVisible);
									}}>
									<Text style={styles.sizeBtnTxt}>Cancel</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
					{/*</View>*/}

					<View
						style={{
							flexDirection: 'column',
							height: Metrics.HEIGHT,
							width: Metrics.WIDTH,
						}}>
						<Modal
							transparent={true}
							visible={this.state.modalVisible}
							onRequestClose={() => {
								this.state.modalVisible(false);
							}}>
							<View style={styles.modalView}>
								<View style={styles.modal}>
									<View style={styles.modalHeader}>
										<TouchableOpacity
											onPress={() => {
												this.setState({ modalVisible: false });
											}}>
											<Text style={styles.cancelApplyTxt}>Cancel</Text>
										</TouchableOpacity>
										<Text style={styles.shareTxt}>Share</Text>
										<Text style={styles.cancelApplyTxt}>Apply</Text>
									</View>

									<View style={styles.modalBottomView}>
										{shareDetails.map((item, index) => {
											return (
												<View key={index}>
													<TouchableOpacity
														style={styles.modalRow}
														onPress={() => this.onSocialPress(item.id)}>
														<View
															style={{
																flexDirection: 'row',
																alignItems: 'center',
															}}>
															<View
																style={[
																	styles.socialBtnBg,
																	{ backgroundColor: item.socialBtnColor },
																]}>
																<Image
																	source={item.socialIcon}
																	style={
																		item.id == 1
																			? styles.facebookIcon
																			: styles.socialIcon
																	}
																/>
															</View>
															<Text
																style={[
																	styles.socialTxt,
																	{ color: item.socialBtnColor },
																]}>
																{item.title}
															</Text>
														</View>

														{this.state.selectedSocialShare == item.id ? (
															<MaterialIcons
																name="check"
																size={25}
																color={'#ffc700'}
															/>
														) : null}
													</TouchableOpacity>

													<View
														style={
															item.id == shareDetails.length
																? null
																: styles.modalDivider
														}
													/>
												</View>
											);
										})}
									</View>
								</View>
							</View>
						</Modal>
					</View>
				</View>
			</Container>
		);
	}
}
