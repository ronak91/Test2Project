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
	I18nManager,
	ListView,
} from 'react-native';
import {
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
	Content,
} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dropdown from '../../../Components/Dropdown/dropdown/';

// Screen Styles
import styles from './styles';
import { Images, Metrics } from '../../../Themes/';

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });

const trackList = [
	{
		id: 0,
		trackMusicImg: Images.musicImgOne,
		trackTitle: "I'm not Afraid",
		trackSubTitle: 'Florian & Friends',
		trackTime: '3:28',
		is_popup_open: false,
		options: [
			{ id: 1, value: 'Play now' },
			{ id: 2, value: 'Add to queue' },
			{ id: 3, value: 'Song info' },
		],
	},
	{
		id: 1,
		trackMusicImg: Images.musicImgTwo,
		trackTitle: 'Soldier of Fortune',
		trackSubTitle: 'Fresh Start',
		trackTime: '4:12',
		is_popup_open: false,
		options: [
			{ id: 1, value: 'Play now' },
			{ id: 2, value: 'Add to queue' },
			{ id: 3, value: 'Song info' },
		],
	},
	{
		id: 2,
		trackMusicImg: Images.musicImgThree,
		trackTitle: 'There is no End',
		trackSubTitle: 'Fresh Start',
		trackTime: '4:12',
		is_popup_open: false,
		options: [
			{ id: 1, value: 'Play now' },
			{ id: 2, value: 'Add to queue' },
			{ id: 3, value: 'Song info' },
		],
	},
];

const trackListBottom = [
	{
		id: 0,
		trackMusicImg: Images.musicImgOne,
		trackTitle: "I'm not Afraid",
		trackSubTitle: 'Florian & Friends',
		trackTime: '3:28',
		is_popup_open: false,
		options: [
			{ id: 1, value: 'Play now' },
			{ id: 2, value: 'Add to queue' },
			{ id: 3, value: 'Song info' },
		],
	},
	{
		id: 1,
		trackMusicImg: Images.musicImgTwo,
		trackTitle: 'Soldier of Fortune',
		trackSubTitle: 'Fresh Start',
		trackTime: '4:12',
		is_popup_open: false,
		options: [
			{ id: 1, value: 'Play now' },
			{ id: 2, value: 'Add to queue' },
			{ id: 3, value: 'Song info' },
		],
	},
	{
		id: 2,
		trackMusicImg: Images.musicImgThree,
		trackTitle: 'There is no End',
		trackSubTitle: 'Fresh Start',
		trackTime: '4:12',
		is_popup_open: false,
		options: [
			{ id: 1, value: 'Play now' },
			{ id: 2, value: 'Add to queue' },
			{ id: 3, value: 'Song info' },
		],
	},
];

var lengthFirst,lengthSecond;

export default class Album extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			typography: 'Play now',
			dataSource: ds.cloneWithRows(trackList),
			dataSourceBottom: ds.cloneWithRows(trackListBottom),
		};
		this.onChangeText = this.onChangeText.bind(this);
	}

	componentWillMount() {
		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Music_AlbumGallary');
			return true;
		});

		lengthFirst = trackList[trackList.length - 1];
    lengthSecond =  trackListBottom[trackListBottom.length - 1];

	}

	onChangeText(text) {
		this.setState({ user_category_id: text });
	}

	//for upper list view
	_handleDropDown(id) {
		var temp = trackList;
		var temp1 = trackListBottom;
		var i,j;

		for (j = 0; j < trackListBottom.length; j++) {
			temp1[j].is_popup_open = false;
		}

		for (i = 0; i < temp.length; i++) {
			if (temp[i].id == id) {
				if (temp[i].is_popup_open == true) {
					temp[i].is_popup_open = false;
				} else {
					temp[i].is_popup_open = true;
				}
			} else {
				temp[i].is_popup_open = false;
			}
		}


		trackList = temp;
		trackListBottom = temp1;
		this.setState({
			dataSource: ds.cloneWithRows(trackList),
			dataSourceBottom: ds.cloneWithRows(trackListBottom),
		});
	}

	//for bottom list view
	_handleDropDownBottom(id) {
		var temp = trackListBottom;
		var temp1 = trackList;
		var i,j;

		for (j = 0; j < trackList.length; j++) {
			temp1[j].is_popup_open = false;
		}

		for (i = 0; i < temp.length; i++) {
			if (temp[i].id == id) {
				if (temp[i].is_popup_open == true) {
					temp[i].is_popup_open = false;
				} else {
					temp[i].is_popup_open = true;
				}
			} else {
				temp[i].is_popup_open = false;
			}
		}

		trackListBottom = temp;
		trackList = temp1;
		this.setState({
			dataSource: ds.cloneWithRows(trackList),
			dataSourceBottom: ds.cloneWithRows(trackListBottom),
		});
	}

	//for upper list view
	_renderRow(rowData) {
		return (
			<TouchableOpacity>
				{rowData.is_popup_open.toString() == 'true' ? (
					<View style={[styles.listDropDown, (rowData.id==lengthFirst.id)? {right: Metrics.HEIGHT * 0.05,bottom: Metrics.HEIGHT * 0.005,} : {right: Metrics.HEIGHT * 0.05,top: Metrics.HEIGHT * 0.005,}]}>
						{rowData.options.map((itemOpt, index) => {
							return (
								<TouchableOpacity
									onPress={() => alert(itemOpt.value)}
									key={index}>
									<Text style={styles.dropDownTxt}>{itemOpt.value}</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				) : null}
				<TouchableOpacity
					style={styles.listTrackRow}
					onPress={() => this.props.navigation.navigate('MusicPlayer')}>
					<View style={styles.listTrackInfoImg}>
						<Image
							source={rowData.trackMusicImg}
							style={styles.listTrackImage}
						/>
						<View style={styles.listInfo}>
							<Text style={styles.listTitleTxt}>{rowData.trackTitle}</Text>
							<View style={styles.listSubTitleBg}>
								<Text style={styles.listSubTitleTxt}>
									{rowData.trackSubTitle}
								</Text>
								<Text style={styles.listSubTitleTxt}>, </Text>
								<Text style={styles.listSubTitleTxt}>{rowData.trackTime}</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity onPress={() => this._handleDropDown(rowData.id)}>
						<Ionicons
							name="md-more"
							size={28}
							color="#e3e3e3"
							style={{ paddingHorizontal: 10, paddingVertical: 5 }}
						/>
					</TouchableOpacity>
			{/*		<Dropdown
						data={rowData.options}
						ref="dropdown"
						value={this.state.typography}
						onChangeText={this.onChangeText}
						labelHeight={0}
						containerStyle={styles.dropstyle}
						baseColor="rgba(0, 0, 0, .00)"
						dropdownPosition={1}
					/> */}
				</TouchableOpacity>
			</TouchableOpacity>
		);
	}

	//for bottom list view
	_renderRowBottom(rowData) {
		return (
			<TouchableOpacity>
				{rowData.is_popup_open.toString() == 'true' ? (
					<View style={[styles.listDropDown, (rowData.id==lengthFirst.id)? {right: Metrics.HEIGHT * 0.05,bottom: Metrics.HEIGHT * 0.005,} : {right: Metrics.HEIGHT * 0.05,top: Metrics.HEIGHT * 0.005,}]}>
						{rowData.options.map((itemOpt, index) => {
							return (
								<TouchableOpacity
									onPress={() => alert(itemOpt.value)}
									key={index}>
									<Text style={styles.dropDownTxt}>{itemOpt.value}</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				) : null}
				<TouchableOpacity
					style={styles.listTrackRow}
					onPress={() => this.props.navigation.navigate('MusicPlayer')}>
					<View style={styles.listTrackInfoImg}>
						<Image
							source={rowData.trackMusicImg}
							style={styles.listTrackImage}
						/>
						<View style={styles.listInfo}>
							<Text style={styles.listTitleTxt}>{rowData.trackTitle}</Text>
							<View style={styles.listSubTitleBg}>
								<Text style={styles.listSubTitleTxt}>
									{rowData.trackSubTitle}
								</Text>
								<Text style={styles.listSubTitleTxt}>, </Text>
								<Text style={styles.listSubTitleTxt}>{rowData.trackTime}</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity
						onPress={() => this._handleDropDownBottom(rowData.id)}>
						<Ionicons
							name="md-more"
							size={28}
							color="#e3e3e3"
							style={{ paddingHorizontal: 10, paddingVertical: 5 }}
						/>
					</TouchableOpacity>
				</TouchableOpacity>
			</TouchableOpacity>
		);
	}

	render() {
		StatusBar.setBarStyle('light-content', true);
		var that = this;

		return (
			<View style={styles.mainView}>
				<ImageBackground style={styles.bgImage} source={Images.albumBg}>
					<Header androidStatusBarColor={'transparent'} style={styles.header}>
						<Left style={styles.left}>
							<TouchableOpacity
								style={styles.backArrow}
								onPress={() => this.props.navigation.navigate('AlbumGallery')}>
								<MaterialIcons
									name={'arrow-back'}
									size={24}
									color="white"
									style={{ paddingRight: 10 }}
								/>
							</TouchableOpacity>
						</Left>

						<Right style={styles.right}>
							<TouchableOpacity
								style={styles.backArrow}
								onPress={() => alert('More')}>
								<MaterialIcons name={'more-vert'} size={30} color="white" />
							</TouchableOpacity>
						</Right>
					</Header>
				</ImageBackground>
				<TouchableOpacity
					style={styles.playIconBg}
					onPress={() => this.props.navigation.navigate('RecommendedMusic')}>
					<Entypo
						name="controller-play"
						size={30}
						color="white"
						style={styles.playIcon}
					/>
				</TouchableOpacity>
				<View style={styles.listProfileBg}>
					<Text style={styles.txtName}>Florian Herrmann</Text>
					<Text style={styles.txtMusicHistory}>4 Albums, 26 Tracks</Text>
					<View style={styles.divider} />
					<Content style={styles.listBg}>
						<View style={styles.listHeader}>
							<Text style={styles.populatTrackTxt}>Popular Tracks</Text>
							<TouchableOpacity onPress={() => alert('View More')}>
								<Text style={styles.viewMoreTxt}>VIEW MORE</Text>
							</TouchableOpacity>
						</View>
						<ListView
							contentContainerStyle={styles.listContent}
							dataSource={this.state.dataSource}
							renderRow={this._renderRow.bind(this)}
							enableEmptySections
							pageSize={4}
						/>
						<View style={styles.listHeader}>
							<Text style={styles.populatTrackTxt}>Alumbs</Text>
							<TouchableOpacity onPress={() => alert('View More')}>
								<Text style={styles.viewMoreTxt}>VIEW MORE</Text>
							</TouchableOpacity>
						</View>
						<ListView
							contentContainerStyle={styles.listContent}
							dataSource={this.state.dataSourceBottom}
							renderRow={this._renderRowBottom.bind(this)}
							enableEmptySections
							pageSize={4}
						/>
					</Content>
				</View>
			</View>
		);
	}
}
