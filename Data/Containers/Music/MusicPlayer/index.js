import React, { Component } from "react";
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
  I18nManager
} from "react-native";
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
  Input
} from "native-base";
import { connect } from "react-redux";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Fonts, Metrics, Colors, Images } from "../../../Themes/";
import Video from "react-native-video";
import Slider from 'react-native-slider';

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPause: false,
      songState: "repeat",
      multiSliderPrice: [0, 2],
      muted: false,
      shuffle: false,
      sliding: false,
      currentTime: 0,
      songIndex: 0,
    };
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      if(that.state.isPause) {
          that.setState({isPause: !that.state.isPause})
      }

      that.props.navigation.navigate("Album");
      return true;
    });
  }

  stopMusic() {
    this.setState({isPause: !this.state.isPause})
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
    this.setState({
			isPause: !this.state.isPause ,
		});
		console.log("playsong==");
  }

  multiSliderValuesChange = values => {
    console.log("multislider=======");

    this.setState({ multiSliderPrice: values });
    console.log(this.state.multiSliderPrice[1]);
  };

  _handleSongState() {
    const { songState } = this.state;
    if (songState == "repeat") {
      this.setState({ songState: "repeatOnce" });
    } else if (songState == "repeatOnce") {
      this.setState({ songState: "repeatAll" });
    } else {
      this.setState({ songState: "repeat" });
    }
  }

  _handleNavigation() {
    if(this.state.isPause == true) {
      this.setState({isPause: !this.state.isPause});
    }
    this.props.navigation.navigate("RecommendedMusic");
  }

  render() {
    const { songState } = this.state;
    var that = this;
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    var song_state = "";
    if (songState == "repeatOnce") {
      song_state = "repeat-one";
    } else {
      song_state = "repeat";
    }

    if( this.state.songDuration !== undefined ){
      songPercentage = this.state.currentTime / this.state.songDuration;
    } else {
      songPercentage = 0;
    }

    return (
      <Container>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.75, y: 0.0 }}
          locations={[0.0, 1.0]}
          colors={["#0066ff", "#29cfff"]}
          style={styles.headerView}
        >
          <View style={{ width: Metrics.WIDTH * 0.22 }}>
            <View
              style={[
                styles.headerImage,
                { marginRight: Metrics.WIDTH * 0.04 }
              ]}
            >
              <Image source={Images.playerProfile} style={styles.headerImage} />
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
              alignItems: "center"
            }}
            onPress={() => this._handleNavigation()}
          >
            <SimpleLineIcons
              name="options-vertical"
              color={"white"}
              size={Fonts.moderateScale(18)}
            />
          </TouchableOpacity>
        </LinearGradient>
        <Image source={Images.playerDetail} style={styles.musicCoverImage} />
        <LinearGradient
          start={{ x: 0.0, y: 0.75 }}
          end={{ x: 0.75, y: 0.0 }}
          locations={[0.0, 1.0]}
          colors={["#0075ff", "#29cfff"]}
          style={styles.musicBar}
        >
          <Video
            ref="audio"
            source={{
              uri:
                "https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab"
            }}
            muted={true}
            resizeMode="cover"
            repeat={false}
            volume={this.state.muted ? 0 : 5.0}
            paused={!this.state.isPause}
            onLoad={ this.onLoad.bind(this) }
            onProgress={ this.setTime.bind(this) }
            onEnd={ this.onEnd.bind(this) }
          />

          <View style={styles.container}>
            <View style={styles.playerTop}>
              <View style={styles.repeateView}>
                <TouchableOpacity
                  style={styles.shuffleImg}
                  onPress={() => this._handleSongState()}
                >
                  <MaterialIcons
                    name={song_state}
                    color={songState == "repeat" ? "white" : "#0056ba"}
                    size={Fonts.moderateScale(22)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.songNameView}>
                <Text style={styles.playerTopTitle}>I’m not Afraid</Text>
                <Text style={styles.headerSubTitle}>Florian & Friends</Text>
              </View>
              <View style={styles.shuffleView}>
                <TouchableOpacity
                  style={styles.shuffleImg}
                  onPress={() =>
                    this.setState({ isShuffle: !this.state.isShuffle })
                  }
                >
                  <MaterialIcons
                    name="shuffle"
                    color={this.state.isShuffle ? "#0056ba" : "white"}
                    size={Fonts.moderateScale(22)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.bottomWithSeekbar}>
              <View style={styles.seekBar}>

                <Slider
                  onSlidingStart={ this.onSlidingStart.bind(this) }
                  onSlidingComplete={ this.onSlidingComplete.bind(this) }
                  onValueChange={ this.onSlidingChange.bind(this) }
                  minimumTrackTintColor='#fff'
                  style={ styles.slider }
                  trackStyle={ styles.sliderTrack }
                  thumbTintColor={"transparent"}
                  value={ songPercentage }
                  />
              </View>

              <View style={styles.musicTimeView}>
                <Text style={styles.playerTimeStart}>
                  { formattedTime(this.state.currentTime)  }
                </Text>
                <Text style={styles.playerTimeEnd}>{ formattedTime( this.state.songDuration) }</Text>
              </View>
            </View>

            <View style={styles.bottomControler}>
              <View style={[styles.playBtns, { marginTop: 6 }]}>
                <TouchableOpacity
                  style={{
                    alignItems: "center"
                  }}
                  onPress={() => alert("Previous")}
                >
                  <MaterialIcons
                    name="skip-previous"
                    color={"white"}
                    size={Fonts.moderateScale(28)}
                  />
                </TouchableOpacity>
              </View>
              <View style={[styles.playBtns, { marginTop: (Platform.OS == 'ios')? 0 : 3 }]}>
                {this.state.isPause ? (
                  <MaterialIcons
                    name="pause"
                    color={"white"}
                    size={(Platform.OS == 'ios') ? Fonts.moderateScale(38) : Fonts.moderateScale(40)}
                    onPress={this.togglePlay.bind(this)}
                  />
                ) : (
                  <MaterialIcons
                    name="play-arrow"
                    color={"white"}
                    size={(Platform.OS == 'ios') ? Fonts.moderateScale(38) : Fonts.moderateScale(40)}
                    onPress={this.togglePlay.bind(this)}
                  />
                )}

              </View>
              <View style={[styles.playBtns, { marginTop: 6 }]}>
                <TouchableOpacity
                  style={{
                    alignItems: "center"
                  }}
                  onPress={() => alert("Next")}
                >
                  <MaterialIcons
                    name="skip-next"
                    color={"white"}
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
