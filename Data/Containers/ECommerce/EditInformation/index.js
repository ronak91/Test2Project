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
import FloatingLabelInput from '../FloatingLabelInput';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class EditInformation extends Component {
  constructor(props) {
		super(props);
		this.state = {
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
			that.props.navigation.navigate('ECommerceMyInformation');
			return true;
		});
	}

  onChangePasswordClick() {
		this.props.navigation.navigate('ECommerceChangePassword');
	}

	onBackClick() {
		this.props.navigation.navigate('ECommerceMyInformation');
	}

  render() {
    StatusBar.setBarStyle('light-content', true);
		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#0e1130', true);
			StatusBar.setTranslucent(true);
		}

    return(
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
						<Text style={styles.textTitle}>Edit Information</Text>
					</Body>
					<Right style={styles.right}>

					</Right>
				</Header>

				<View style={styles.mainView}>
          <Content>
  					<View style={styles.floatingView}>
  						<FloatingLabelInput
  							label="First Name"
  							value="Hoang"
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
  							value="Thai"
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
  							value="hong8x.pts@gmail.com"
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
  								value="16/04/1988"
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
									value={"Male"}
  							/>
  						</View>


  					</View>
  				</Content>
					<View style={styles.editInfoMainView}>
						<View style={styles.editDivider} />
						<View style={{flexDirection: 'row', }}>

							<TouchableOpacity
								style={styles.editInfoView}
								onPress={() => alert('Update Information')}>
								<Text style={styles.editInfoText}>Update</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={styles.editInfoView}
								onPress={this.onBackClick.bind(this)}>
								<Text style={styles.editInfoText}>Cancel</Text>
							</TouchableOpacity>
						</View>

					</View>
				</View>
			</Container>
    )
  }
}
