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
	Input
} from 'native-base';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dropdown from '../../../Components/Dropdown/dropdown/';
import { Fonts, Metrics, Colors, Images } from '../../../Themes/';
import { CachedImage } from 'react-native-cached-image';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class PrivacyPolicy extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isSearch: false,
		};
	}

	componentWillMount() {
		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('ECommerceMenu');
			return true;
		});
	}

	render() {
		return (
			<View style={styles.main}>
				<Header androidStatusBarColor={'#0e1130'} style={styles.header}>
					<Left style={styles.left}>
						<TouchableOpacity
							style={styles.backArrow}
							onPress={() => this.props.navigation.navigate('DrawerOpen')}>
							<Ionicons name="ios-menu" size={30} color="white" />
						</TouchableOpacity>
					</Left>
					<Body style={styles.body}>
						<Text style={styles.textTitle}>Privacy Policy</Text>
					</Body>
					<Right style={styles.right}>
						<TouchableOpacity
							style={styles.heartBg}
							onPress={() => this.setState({ isSearch: !this.state.isSearch })}>
							<EvilIcons name="search" size={30} style={styles.heartIcon} />
						</TouchableOpacity>
					</Right>
				</Header>

				{
					(this.state.isSearch)
					?
					<View style={styles.searchViewBg} >
						<View style={styles.searchView}>
							<Ionicons
								name="ios-search"
								size={20}
								color="#8e8e93"
								style={{ marginLeft: 10 }}
							/>
							<Input
								style={styles.searchInput}
								placeholder="Search"
								placeholderTextColor="#8e8e93"
								underlineColorAndroid="transparent"
								autoCapitalize="none"
								keyboardType="default"
								selectionColor="#6d6d71"
							/>
							{/*<Text style={styles.searchText}>Search</Text>*/}
						</View>
					</View>
					:
					null
				}

				<ScrollView>
					<View style={styles.txt}>
						<Text style={styles.title}>
							Loren ipsum dolor sit amet,consectetur adipiscing elit
						</Text>
						<View
							style={{
								paddingRight: Metrics.WIDTH * 0.05,
								paddingLeft: Metrics.WIDTH * 0.05,
							}}>
							<Text style={styles.qus}>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudan-tium,totam rem aperiam,eaque ipsa
								quae ab illo inventore veritatis et quia architecto beatae vitae
								dicta sunt explicabo. Nemo enim ipsam vo-luptatem quia voluptas
								sit aspernatur aut odit aut fugit,sed quia consequuntur magni
								dolores eos qui ratione voluptatem est,qui dolorem ipsum quia
								dolor sit amet,consectetur,adipisci velit,sed quia non numquam
								eius modi tempor incidunt ut lalbore et dolor magnam aliquam
								quaerat vo-luptatem.
							</Text>
						</View>
					</View>
					<View style={styles.firstQueView}>
						<Text
							style={[styles.title, { paddingRight: Metrics.HEIGHT * 0.02 }]}>
							Excepteur sint occaecat cupidatat non proi -dent
						</Text>
						<Text style={[styles.qus, { paddingLeft: Metrics.WIDTH * 0.05 }]}>
							Sed do eiusmod tempor incididunt ut laborc
						</Text>

						<View style={{ flexDirection: 'row' }}>
							<View style={styles.arrowView}>
								<FontAwesome name="chevron-right" size={10} color="white" />
							</View>
							<Text style={[styles.qus, { paddingTop: Metrics.HEIGHT * 0.02 }]}>
								Ut enim ad minim veniam
							</Text>
						</View>

						<View style={{ flexDirection: 'row' }}>
							<View style={styles.arrowView}>
								<FontAwesome name="chevron-right" size={10} color="white" />
							</View>
							<Text style={[styles.qus, { paddingTop: Metrics.HEIGHT * 0.02 }]}>
								sunt in cuipa qui officia doscrunt mollit
							</Text>
						</View>

						<View style={{ flexDirection: 'row' }}>
							<View style={styles.arrowView}>
								<FontAwesome name="chevron-right" size={10} color="white" />
							</View>
							<Text style={[styles.qus, { paddingTop: Metrics.HEIGHT * 0.02 }]}>
								Neque porro quisquam
							</Text>
						</View>

						<Text
							style={[
								styles.title,
								{
									paddingRight: Metrics.HEIGHT * 0.02,
									paddingTop: Metrics.HEIGHT * 0.03,
								},
							]}>
							Quis autem vel eum iure reprehenderit.qui in ea voluptate velit
							esse quam nihil molest?
						</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}
