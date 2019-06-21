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
	AsyncStorage,
	TextInput,
	Animated,
	I18nManager,
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
import { Fonts, Metrics, Colors } from '../../../Themes/';
import Globals from '../Globals';
import FloatingLabelInput from '../FloatingLabelInput';
import DatePicker from 'react-native-datepicker';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.onChangeText = this.onChangeText.bind(this);
		this.state = {
			date1: '',
			date: '',
			segment: 1,
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			emailRegister: '',
			birthday: '',
			gender: 'null',
			passwordRegister: '',
			confirmPassword: '',
			isLoading: false,
			data: [
				{
					value: 'Female',
				},
				{
					value: 'Male',
				},
			],
		};
	}

	componentWillMount() {
		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('ECommerceMenu');
			return true;
		});
	}

	handleTextChange = newText => this.setState({ value1: newText });

	_scrollToInput(reactNode: any) {
		// Add a 'scroll' ref to your ScrollView
		this.scroll.scrollToFocusedInput(reactNode);
	}

	onChangeText(text) {
		this.setState({ gender: text });
		// console.warn(this.state.gender);
	}

	renderGender = () => {
		return (
			<View>
				<Dropdown label="Favorite Fruit" data={this.state.data} />
			</View>
		);
	};

	_handleBagNavigation() {
		AsyncStorage.multiSet([
			['ArrivedFrom',"ECommerceLogin"],
		]);
		this.props.navigation.navigate("ECommerceMyBag");
	}

	_handleWishListNavigation() {
		AsyncStorage.multiSet([
			['ArrivedForWishList',"ECommerceLogin"],
		]);
		this.props.navigation.navigate("ECommerceWishList");
	}

	_renderFooter = () => {
		const { segment } = this.state;
		// Login
		if (segment === 1) {
			return (
				<TouchableOpacity
					style={styles.facebookBtnBg}
					onPress={() => alert('Facebook Login')}>
					<FontAwesome name="facebook" size={20} color="white" />
					<Text style={styles.loginWithFacebookTxt}>Login with Facebook</Text>
				</TouchableOpacity>
			);
		}

		// Sign Up
		if (segment === 2) {
			return (
				<TouchableOpacity
					style={styles.facebookBtnBg}
					onPress={() => alert('SignUp With Facebook')}>
					<FontAwesome name="facebook" size={20} color="white" />
					<Text style={styles.loginWithFacebookTxt}>Sign Up with Facebook</Text>
				</TouchableOpacity>
			);
		}
	};

	_renderActiveComponent = () => {
		const { segment } = this.state;

		// Login
		if (segment === 1) {
			return (
				<View>
					<View style={styles.floatingView}>
						<FloatingLabelInput
							label="Email"
							value={this.state.email}
							keyboardType="email-address"
							returnKeyType="done"
							maxLength={40}
							selectionColor={'#959595'}
							autoCapitalize="none"
							onChangeText={email => this.setState({ email })}
						/>

					<View style={{ height: 10, color: "#e1e1e1"}} />

						<FloatingLabelInput
							label="Password"
							value={this.state.password}
							keyboardType="default"
							returnKeyType="done"
							secureTextEntry={true}
							selectionColor={'#959595'}
							maxLength={15}
							autoCapitalize="none"
							onChangeText={password => this.setState({ password })}
						/>
					</View>

					<TouchableOpacity
						onPress={() =>
							this.props.navigation.navigate('ECommerceForgotPassword')
						}
						style={styles.forgotPasswordBg}>
						<Text style={styles.forgotPasswordTxt}>Forgot Password?</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => this.props.navigation.navigate("ECommerceMenu")}
						style={[styles.loginBg, { marginTop: Metrics.HEIGHT * 0.08 }]}>
						<Text style={styles.activeTab}>Login</Text>
					</TouchableOpacity>
				</View>
			);
		}

		// SignUp
		if (segment === 2) {
			return (
				<Content>
					<View style={styles.floatingView}>
						<FloatingLabelInput
							label="First Name"
							value={this.state.firstName}
							keyboardType="default"
							returnKeyType="done"
							maxLength={20}
							selectionColor={'#959595'}
							autoCapitalize="none"
							onChangeText={firstName => this.setState({ firstName })}
						/>

						<View style={{ height: 10 }} />

						<FloatingLabelInput
							label="Last Name"
							value={this.state.lastName}
							keyboardType="default"
							returnKeyType="done"
							maxLength={20}
							selectionColor={'#959595'}
							autoCapitalize="none"
							onChangeText={lastName => this.setState({ lastName })}
						/>

						<View style={{ height: 10 }} />

						<FloatingLabelInput
							label="Email"
							value={this.state.emailRegister}
							keyboardType="email-address"
							returnKeyType="done"
							maxLength={40}
							selectionColor={'#959595'}
							autoCapitalize="none"
							onChangeText={emailRegister => this.setState({ emailRegister })}
						/>

						<View style={{ height: 10 }} />

						<TouchableOpacity
							onPress={() => {
								this.refs.datepicker.onPressDate();
							}}>
							<FloatingLabelInput
								label="Birthday"
								value={this.state.birthday}
								keyboardType="default"
								returnKeyType="done"
								selectionColor={'#959595'}
								maxLength={10}
								onPress={() => {
									this.refs.datepicker.onPressDate();
								}}
								autoCapitalize="none"
							/>
						</TouchableOpacity>

						<DatePicker
							ref="datepicker"
							style={{ width: 0, height: 0 }}
							customStyles={{
								dateIcon: {
									width: 0,
									height: 0,
								},
								dateInput: {
									borderWidth: 0,
								},
							}}
							date={this.state.birthday}
							mode="date"
							format="YYYY-MM-DD"
							maxDate={new Date()}
							hideText={true}
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							onDateChange={birthday => {
								this.setState({ birthday: birthday });
							}}
						/>

						<View style={{ width: Metrics.WIDTH * 0.94, alignSelf: 'center' }}>
							<Dropdown
								label="Gender"
								data={this.state.data}
								textColor={'#959595'}
								onChangeText={this.onChangeText}
							/>
						</View>

						<FloatingLabelInput
							label="Password"
							value={this.state.passwordRegister}
							keyboardType="default"
							returnKeyType="done"
							maxLength={15}
							selectionColor={'#959595'}
							autoCapitalize="none"
							secureTextEntry={true}
							onChangeText={passwordRegister =>
								this.setState({ passwordRegister })
							}
						/>

						<View style={{ height: 10 }} />

						<FloatingLabelInput
							label="Confirm Password"
							value={this.state.confirmPassword}
							keyboardType="default"
							returnKeyType="done"
							maxLength={15}
							selectionColor={'#959595'}
							autoCapitalize="none"
							secureTextEntry={true}
							onChangeText={confirmPassword =>
								this.setState({ confirmPassword })
							}
						/>

						<TouchableOpacity
							onPress={() => alert('SignUp')}
							style={[
								styles.loginBg,
								{
									marginTop: Metrics.HEIGHT * 0.07,
									marginBottom: Metrics.WIDTH * 0.02,
								},
							]}>
							<Text style={styles.activeTab}>Sign Up</Text>
						</TouchableOpacity>
					</View>
				</Content>
			);
		}
	};

	render() {
		var that = this;
		let BG_Image = {
			uri:
				'https://antiqueruby.aliansoftware.net/Images/signin/ic_back01_sone.png',
		};
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
							onPress={() => that.props.navigation.navigate('ECommerceMenu')}>
							<FontAwesome
								name={I18nManager.isRTL ? 'angle-right' : 'angle-left'}
								size={30}
								color="white"
								style={{paddingRight: 20}}
							/>
						</TouchableOpacity>
					</Left>
					<Body style={styles.body}>
						{this.state.segment === 1 ? (
							<Text style={styles.textTitle}>Login</Text>
						) : (
							<Text style={styles.textTitle}>Sign Up</Text>
						)}
					</Body>
					<Right style={styles.right}>
						{this.state.segment === 1 ? (
							<View style={{ flexDirection: 'row' }}>
								<TouchableOpacity style={styles.heartBg} onPress={() => alert('Please Login First')}>
									<FontAwesome name="heart" size={8} style={styles.heartIcon} />
								</TouchableOpacity>
								<TouchableOpacity onPress={() => alert('Please Login First')}>
								<SimpleLineIcons
									name="handbag"
									size={18}
									style={styles.bagIcon}
								/>
								</TouchableOpacity>
							</View>
						) : (
							<View style={{ flexDirection: 'row' }}>
								<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => alert('Please Login First')}>
									<View style={styles.heartBg}>
										<FontAwesome
											name="heart"
											size={8}
											style={styles.heartIcon}
										/>
									</View>
									<View style={styles.alertBg}>
										<Text style={styles.alertTxt}>1</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => alert('Please Login First')}>
									<SimpleLineIcons
										name="handbag"
										size={18}
										style={styles.bagIcon}
									/>
									<View style={styles.alertBg}>
										<Text style={styles.alertTxt}>3</Text>
									</View>
								</TouchableOpacity>
							</View>
						)}
					</Right>
				</Header>
				<KeyboardAwareScrollView>
					<View style={styles.contentOne}>
						<Segment style={styles.segmentTabSecOne}>
							<Button
								first
								style={
									this.state.segment === 1
										? [
												styles.segmentSelectedTabOne,
												{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5, borderTopRightRadius: 0, borderBottomRightRadius: 0 },
										  ]
										: styles.segmentTabOne
								}
								active={this.state.segment === 1 ? true : false}
								onPress={() => this.setState({ segment: 1 })}>
								<Text
									style={
										this.state.segment === 1
											? styles.activeTabOne
											: styles.normalTabOne
									}>
									Login
								</Text>
							</Button>

							<Button
								last
								style={
									this.state.segment === 1
										? styles.segmentTabOne
										: [
												styles.segmentSelectedTabOne,
												{ borderTopRightRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
										  ]
								}
								active={this.state.segment === 2 ? true : false}
								onPress={() => this.setState({ segment: 2 })}>
								<Text
									style={
										this.state.segment === 2
											? styles.activeTabOne
											: styles.normalTabOne
									}>
									Sign Up
								</Text>
							</Button>
						</Segment>

						<View
							style={[styles.divider, { marginTop: Metrics.HEIGHT * 0.02 }]}
						/>

						{this._renderActiveComponent()}
					</View>

					{/*<View style={styles.content}>
					<Segment style={styles.segmentTabSec}>

							<Button
								first
								style={(this.state.segment === 1) ? [styles.segmentSelectedTab,{borderTopLeftRadius: 5, borderBottomLeftRadius: 5,}] : styles.segmentTab}
								active={(this.state.segment === 1) ? true : false}
								onPress={() => this.setState({segment: 1})}>
								<Text style={this.state.segment === 1 ? styles.activeTab : styles.normalTab}>
									Login
								</Text>
							</Button>

							<View style={styles.segmentBorder}></View>

							<Button
								last
								style={(this.state.segment === 1) ? styles.segmentTab : [styles.segmentSelectedTab,{borderTopRightRadius: 5, borderBottomRightRadius: 5}]}
								active={(this.state.segment === 2) ? true : false}
								onPress={() => this.setState({segment: 2})}>
								<Text style={this.state.segment === 2 ? styles.activeTab : styles.normalTab}>
									Sign Up
								</Text>
							</Button>
					</Segment>

					<View style={[styles.divider,{marginTop: Metrics.HEIGHT * 0.02}]}></View>

						{this._renderActiveComponent()}

				</View>*/}
				</KeyboardAwareScrollView>

				<View style={styles.divider} />

				<View style={styles.bottomView}>{this._renderFooter()}</View>
			</Container>
		);
	}
}
