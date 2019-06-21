import React, { Component } from 'react';
import {
	View,
	ListView,
	Image,
	StatusBar,
	TouchableOpacity,
	AsyncStorage,
	Linking,
	BackHandler,
	Alert,
	Platform,
	I18nManager,
} from 'react-native';
import {
	Spinner,
	Button,
	Text,
	Container,
	Card,
	CardItem,
	Body,
	Content,
	Header,
	Title,
	Left,
	Icon,
	Right,
	Input,
} from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Fonts, Metrics, Colors, Images } from '../../../Themes/';

class MusicThree extends React.Component {

	// state = {
  //   sliderOneValue: [0],
	// 	multiSliderPrice: [0, 2]
  // };

  // sliderOneValuesChange = (values) => {
  //   let newValues = [0];
  //   newValues[0] = values[0];
  //   this.setState({
  //     sliderOneValue: newValues,
  //   });
  // }

	constructor(props) {
		super(props);
		this.state = {
			multiSliderPrice: [0, 2],
      // sliderOneValue: newValues,
			isPause: false,
    };
	}

	componentWillMount() {
		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('FirstScreen');
			return true;
		});
    // let newValues = [0,2];
		// this.setState({
		// 	multiSliderPrice: [0, 2],
    //   sliderOneValue: newValues,
		// 	isPause: false,
    // });

	}

	multiSliderValuesChange = (values) => {
		console.log("multislider=======");

		this.setState({multiSliderPrice: values,});
console.log(this.state.multiSliderPrice[1]);

	}

	toggelIcon() {
			this.setState({isPause: !this.state.isPause})
	}

	render() {
		var that = this;
		StatusBar.setBarStyle('light-content', true);

		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent', true);
			StatusBar.setTranslucent(true);
		}
		return (
			<Container>
				<LinearGradient
					start={{ x: 0.0, y: 0.25 }}
					end={{ x: 0.75, y: 0.0 }}
					locations={[0.0, 1.0]}
					colors={['#0066ff', '#29cfff']}
					style={styles.headerView}>
					<View style={{ width: Metrics.WIDTH * 0.22 }}>
						<View
							style={[
								styles.headerImage,
								{ marginRight: Metrics.WIDTH * 0.04 },
							]}>
							<Image
								source={Images.ic_image_wtfifteen}
								style={styles.headerImage}
							/>
						</View>
					</View>
					<View style={{ width: Metrics.WIDTH * 0.65 }}>
						<Text style={styles.headerTitle}>I’m not Afraid</Text>
						<Text style={styles.headerSubTitle}>Florian & Friends, 3:28</Text>
					</View>
					<TouchableOpacity
						style={{
							width: Metrics.WIDTH * 0.05,
							paddingVertical: Metrics.HEIGHT * 0.005,
							alignItems: 'center',
						}}
						onPress={() => alert('Menu')}>
						<SimpleLineIcons
							name="options-vertical"
							color={'white'}
							size={Fonts.moderateScale(18)}
						/>
					</TouchableOpacity>
				</LinearGradient>
				<Image
					source={Images.ic_image_wtfifteen}
					style={styles.musicCoverImage}
				/>
				<LinearGradient
					start={{ x: 0.0, y: 0.75 }}
					end={{ x: 0.75, y: 0.0 }}
					locations={[0.0, 1.0]}
					colors={['#0075ff', '#29cfff']}
					style={styles.musicBar}>
					<View style={styles.container}>

						 <View  style={styles.playerTop}>
								<View style={{ width: Metrics.WIDTH * 0.20,alignItems: 'center', paddingLeft: Metrics.WIDTH * 0.02}}>
											<TouchableOpacity
												style={{
													width: Metrics.WIDTH * 0.05,
													paddingVertical: Metrics.HEIGHT * 0.005,
													alignItems: 'center',
												}}
												onPress={() => alert('Menu')}>
												<MaterialIcons
													name="repeat"
													color={'white'}
													size={Fonts.moderateScale(22)}
												/>
											</TouchableOpacity>
								</View>
								<View style={{ width: Metrics.WIDTH * 0.60,alignItems: 'center', }}>
									<Text style={styles.playerTopTitle}>I’m not Afraid</Text>
									<Text style={styles.headerSubTitle}>Florian & Friends</Text>
								</View>
								<View style={{ width: Metrics.WIDTH * 0.20,alignItems: 'center', paddingRight: Metrics.WIDTH * 0.04}}>
											<TouchableOpacity
												style={{
													width: Metrics.WIDTH * 0.05,
													paddingVertical: Metrics.HEIGHT * 0.005,
													alignItems: 'center',
												}}
												onPress={() => alert('Menu')}>
												<MaterialIcons
													name="shuffle"
													color={'white'}
													size={Fonts.moderateScale(22)}
												/>
											</TouchableOpacity>
								</View>
							</View>

							<View style={styles.bottomWithSeekbar}>
		            <View style={styles.seekBar}>

									<MultiSlider
									values={this.state.multiSliderPrice}
									allowOverlap
                  snapped
									onValuesChange={this.multiSliderValuesChange}
		              selectedStyle={{backgroundColor: '#fff',height: Metrics.WIDTH * 0.008}}
		              unselectedStyle={{backgroundColor: '#0004',height: Metrics.WIDTH * 0.008}}
									containerStyle={styles.containerStyle}
	                trackStyle={styles.trackStyle}
									markerStyle={{backgroundColor:"transparent"}}/>
		            </View>

								<View style={{ flexDirection: 'row',height:Metrics.WIDTH * 0.05,width:  Metrics.WIDTH * 0.8,justifyContent:"space-between" }}>
									<Text style={styles.playerTimeStart}>{this.state.multiSliderPrice[1]}:0</Text>
									<Text style={styles.playerTimeEnd}>10:00</Text>
								</View>
							</View>

							<View style={styles.bottomControler}>
									<View style={{ width: Metrics.WIDTH * 0.16,alignItems: 'center' }}>
										<TouchableOpacity
											style={{
												alignItems: 'center',
											}}
											onPress={() => alert('Previous')}>
											<MaterialIcons
												name="skip-previous"
												color={'white'}
												size={Fonts.moderateScale(28)}
											/>
										</TouchableOpacity>
									</View>
									<View style={{ width: Metrics.WIDTH * 0.16,alignItems: 'center',}}>
												<TouchableOpacity
													style={{
														alignItems: 'center',
													}}
													onPress={() => this.toggelIcon()}>

													{
														(this.state.isPause) ?
														<MaterialIcons
															name="pause"
															color={'white'}
															size={Fonts.moderateScale(40)}
														/>
														:
														<MaterialIcons
															name="play-arrow"
															color={'white'}
															size={Fonts.moderateScale(40)}
														/>
													}


												</TouchableOpacity>
									</View>
									<View style={{ width: Metrics.WIDTH * 0.16,alignItems: 'center'}}>
												<TouchableOpacity
													style={{
														alignItems: 'center',
													}}
													onPress={() => alert('Next')}>
													<MaterialIcons
														name="skip-next"
														color={'white'}
														size={Fonts.moderateScale(28)}
													/>
												</TouchableOpacity>
									</View>
							</View>
					</View>

				</LinearGradient>
			</Container>
		);
	}
}

export default MusicThree;
