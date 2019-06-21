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
  ImageBackground
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
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Fonts, Metrics, Colors, Images } from '../../../Themes/';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Video from "react-native-video";
import Slider from 'react-native-slider';


var MusicData = [
	{
		id: 1,
		musicImg: Images.musicImgOne,
		musicTitle: "I'm not Afraid",
		musicType: "Florian & Friends",
		musicTime: "3.28",
    is_popup_open: false,
    options: [
      { id: 1, value: "Play now" },
      { id: 2, value: "Add to queue" },
      { id: 3, value: "Song info" }
    ]
	},
	{
		id: 2,
		musicImg: Images.musicImgTwo,
		musicTitle: "Soldier of Fortune",
		musicType: "Fresh Start",
		musicTime: "4.12",
    is_popup_open: false,
    options: [
      { id: 1, value: "Play now" },
      { id: 2, value: "Add to queue" },
      { id: 3, value: "Song info" }
    ]
	},
	{
		id: 3,
		musicImg: Images.musicImgThree,
		musicTitle: "There is no end",
		musicType: "Fresh Start",
		musicTime: "4:12",
    is_popup_open: false,
    options: [
      { id: 1, value: "Play now" },
      { id: 2, value: "Add to queue" },
      { id: 3, value: "Song info" }
    ]
	},
	{
		id: 4,
		musicImg: Images.musicImgOne,
		musicTitle: "Im not Afraid",
		musicType: "Florian & Friends",
		musicTime: "3.28",
    is_popup_open: false,
    options: [
      { id: 1, value: "Play now" },
      { id: 2, value: "Add to queue" },
      { id: 3, value: "Song info" }
    ]
	},
	{
		id: 5,
		musicImg: Images.musicImgTwo,
		musicTitle: "Soldier of Fortune",
		musicType: "Fresh Start",
		musicTime: "4.12",
    is_popup_open: false,
    options: [
      { id: 1, value: "Play now" },
      { id: 2, value: "Add to queue" },
      { id: 3, value: "Song info" }
    ]
	},
	{
		id: 6,
		musicImg: Images.musicImgThree,
		musicTitle: "There is no end",
		musicType: "Fresh Start",
		musicTime: "4:12",
    is_popup_open: false,
    options: [
      { id: 1, value: "Play now" },
      { id: 2, value: "Add to queue" },
      { id: 3, value: "Song info" }
    ]
	},
];

var lengthFirst='';

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });


export default class RecommendedMusic extends React.Component {
  constructor(props) {
    super(props);


		this.state = {
			isLoading: true,
			isPause: true,
			dataSource: ds.cloneWithRows(MusicData),
			sliderOneValue: [0],
			multiSliderPrice: [0, 2],
			songIndex: 0,
			sliding: false,
      currentTime: 0,
		};
  }

  sliderOneValuesChange = (values) => {
    let newValues = [0];
    newValues[0] = values[0];
    this.setState({
      sliderOneValue: newValues,

    });
  }

	setTime(params){
    if( !this.state.sliding ){
      this.setState({ currentTime: params.currentTime });
    }
  }

  onLoad(params){
    this.setState({ songDuration: params.duration });
  }

  onSlidingStart(){
    this.setState({ sliding: true });
  }

  onSlidingChange(value){
    let newPosition = value * this.state.songDuration;
    this.setState({ currentTime: newPosition });
  }

  onSlidingComplete(){
    this.refs.audio.seek( this.state.currentTime );
    this.setState({ sliding: false });
  }

	onEnd(){
    this.setState({ isPause: false });
  }

	togglePlay() {
    this.setState({ isPause: !this.state.isPause });
    var isPause = this.state.isPause;
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener('hardwareBackPress', function() {
			if(that.state.isPause) {
					that.setState({isPause: !that.state.isPause})
			}
      that.props.navigation.navigate('Album')
      return true;
    });

		lengthFirst = MusicData[MusicData.length - 1];
  }

	//for bottom list view
	_handleDropDownBottom(id) {
		var temp = MusicData;
		var i;

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

		MusicData = temp;
		this.setState({
			dataSource: ds.cloneWithRows(MusicData),
		});
	}

	_renderMusicRow(rowData) {
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
          onPress={() => this.props.navigation.navigate("MusicPlayer")}>
          <View style={styles.listTrackInfoImg}>
            <Image
              source={rowData.musicImg}
              style={styles.listTrackImage}
            />
            <View style={styles.listInfo}>
              <Text style={styles.listTitleTxt}>{rowData.musicTitle}</Text>
              <View style={styles.listSubTitleBg}>
                <Text style={styles.listSubTitleTxt}>
                  {rowData.musicType}, {rowData.musicTime}
                </Text>
              </View>
            </View>
          </View>
					<TouchableOpacity
						onPress={() => this._handleDropDownBottom(rowData.id)}>
            <Ionicons
              name="md-more"
              size={28}
              color="#e3e3e3"
              style={{ paddingHorizontal: 10, paddingVertical: 5}}
            />
          </TouchableOpacity>
        </TouchableOpacity>
			</TouchableOpacity>
    );
	}

	multiSliderValuesChange = (values) => {
		console.log("multislider=======");

		this.setState({multiSliderPrice: values,});
		console.log(this.state.multiSliderPrice[1]);

	}

	toggleIcon() {
			this.setState({isPause: !this.state.isPause})
	}

	backHandle(screenName) {
		if(this.state.isPause) {
				this.setState({isPause: !this.state.isPause})
		}

		this.props.navigation.navigate(screenName)
	}

	backHandleMusic() {
		if(this.state.isPause) {
				this.setState({isPause: !this.state.isPause})
		}
		this.props.navigation.navigate("MusicPlayer")
	}

  render() {
    var that = this;
    StatusBar.setBarStyle('light-content', true);

		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent', true);
			StatusBar.setTranslucent(true);
		}

		if( this.state.songDuration !== undefined ){
      songPercentage = this.state.currentTime / this.state.songDuration;
    } else {
      songPercentage = 0;
    }

    return(
      <Container style={styles.container}>
        <LinearGradient
            colors={['#0066ff', '#29cfff']}
						start={{ x: 0.0, y: 0.25 }}
						end={{ x: 0.75, y: 0.0 }}
						locations={[0.0, 1.0]}
            style={styles.headerGradiant}>
          <Header androidStatusBarColor={'transparent'} style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => this.backHandle("Album")}>
                <MaterialIcons
                  name= {'arrow-back'}
                  size= {24}
                  color= "white"
									style= {{ paddingRight: 10 }}
                />
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={[styles.textTitle, {fontSize: Fonts.moderateScale(14), marginBottom: 2}]}>Im not Afraid</Text>
              <Text style={[styles.textTitle, {fontSize: Fonts.moderateScale(12), marginTop: 1.5}]}>Florian & Friends</Text>
            </Body>
            <Right style={styles.right}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => alert("Share")}>
                <MaterialIcons
                  name= {'share'}
                  size= {24}
                  color= "white"
                />
              </TouchableOpacity>
            </Right>
          </Header>
        </LinearGradient>

        <View style={styles.mainView}>
					<TouchableOpacity onPress={() => this.backHandleMusic()}>
	          <ImageBackground style={styles.musicImg} source={Images.musicBg}>

							<Video
		            ref="audio"
		            source={{
		              uri:
		                "https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab"
		            }}
		            muted={true}
		            resizeMode="cover"
		            repeat={false}
		            volume={this.state.muted ? 0 : 1.0}
		            paused={!this.state.isPause}
								onLoad={ this.onLoad.bind(this) }
								onProgress={ this.setTime.bind(this) }
								onEnd={ this.onEnd.bind(this) }
		          />

	            <View style={styles.musicSliderView}>

								<TouchableOpacity style={{width: Metrics.WIDTH * 0.18}}>
									{this.state.isPause ? (
										<MaterialIcons
											name="pause"
											color={"white"}
											size={Fonts.moderateScale(40)}
											onPress={this.togglePlay.bind(this)}
										/>
									) : (
										<MaterialIcons
											name="play-arrow"
											color={"white"}
											size={Fonts.moderateScale(40)}
											onPress={this.togglePlay.bind(this)}
										/>
									)}
								</TouchableOpacity>

								<View style={{ width: Metrics.WIDTH * 0.6,  justifyContent: 'center',}}>

									<Slider
										onSlidingStart={ this.onSlidingStart.bind(this) }
										onSlidingComplete={ this.onSlidingComplete.bind(this) }
										onValueChange={ this.onSlidingChange.bind(this) }
										minimumTrackTintColor='#fff'
										style={ styles.slider }
										trackStyle={ styles.trackStyle }
										thumbTintColor="transparent"
										value={ songPercentage }
										/>

								</View>

								<View style={{width: Metrics.WIDTH * 0.2, paddingLeft: Metrics.WIDTH * 0.08}}>
								<Text style={styles.musicTimeTxt}>{ formattedTime( this.state.songDuration) }</Text>
								</View>
	            </View>
	          </ImageBackground>
					</TouchableOpacity>

          <View style={styles.detailsView}>

            <View style={{flexDirection: 'row'}}>
              <Image source={Images.musicProfile} style={styles.profileImg}/>
              <View style={styles.detailsTxtView}>
                <Text style={[styles.detailsTxt, {fontSize: Fonts.moderateScale(14),color: "#272727"}]}>Paulina Fuchs</Text>
                <Text style={[styles.detailsTxt, {fontSize: Fonts.moderateScale(12), color: "#808080"}]}>12 min ago</Text>
              </View>
							<TouchableOpacity onPress={() => alert("More")} style={{alignSelf: 'center'}}>
	              <MaterialIcons
	                name={'more-vert'}
	                size={30}
	                color="#e3e3e3"
	              />
						</TouchableOpacity>
            </View>
          </View>

					<Text style={styles.recommendedTxt}>Recommended to you</Text>
					<View style={styles.shadowView} />
					<ListView
						contentContainerStyle={styles.listContent}
						dataSource={this.state.dataSource}
						renderRow={this._renderMusicRow.bind(this)}
						renderSeparator={this._renderSeparator}
						enableEmptySections
						pageSize={4}
					/>
        </View>
      </Container>
    );
  }
}

function withLeadingZero(amount){
  if (amount < 10 ){
    return `0${ amount }`;
  } else {
    return `${ amount }`;
  }
}

function formattedTime( timeInSeconds ){
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds - minutes * 60;

  if( isNaN(minutes) || isNaN(seconds) ){
    return "";
  } else {
    return(`${ withLeadingZero( minutes ) }:${ withLeadingZero( seconds.toFixed(0) ) }`);
  }
}
