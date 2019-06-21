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
	FlatList,
	ImageBackground,
	ScrollView,
	Picker,
	I18nManager,
	Dimensions
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
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts, Metrics, Colors,Images } from '../../../Themes/';
import Icons from 'react-native-vector-icons/MaterialIcons';


export default class SelectStyle extends Component
{

  constructor(props){
    super(props);

    this.state = {
			selectedLots: [],
    };
  }


	componentWillMount(){
		var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('FirstScreen')
      return true;
    });

		this.setState({
			selectedLots: [4,6,10],
			maxFevouriteItem: 5, //allow maximum genres selection, you can change range from here
		});
	}


	onSelected(id) {
		let tmp = this.state.selectedLots;

    if (tmp.includes(id)) {
      tmp.splice(tmp.indexOf(id), 1);
    }
    else {
			if(tmp.length < this.state.maxFevouriteItem){
	      tmp.push(id);
	    }
			else {
				alert("You can choose only " + this.state.maxFevouriteItem + " styles!");
			}
		}

    this.setState({selectedLots: tmp});
  }


	_renderItem = ({ item }) => (
		<TouchableOpacity
			style={this.state.selectedLots.includes(item.id) ? [styles.txtBg,styles.selectedButton] : [styles.txtBg,{backgroundColor: "transparent"}]}
			onPress={() => this.onSelected(item.id)}>
			<Text
			style= {this.state.selectedLots.includes(item.id) ? [styles.musicname,{color: "#131e7e"}] : [styles.musicname,{color: "#fff"}]}> {item.musicname}
			</Text>
		</TouchableOpacity>
	);


  render(){
		var appData =
								[
									{
										id:1,
										musicname:"POP MUSIC",
									},
									{
										id:2,
										musicname:"BLUES ",
									},
									{
										id:3,
										musicname:"HIP HOP",
									},
									{
										id:4,
										musicname:"JAZZ",
									},
									{
										id:5,
										musicname:"ROCK & ROLL",
									},
									{
										id:6,
										musicname:"PUNK ROCK",
									},
									{
										id:7,
										musicname:"FOLK",
									},
									{
										id:8,
										musicname:"ALTERNATIVE ROCK",
									},
									{
										id:9,
										musicname:"DANCE",
									},
									{
										id:10,
										musicname:"HEAVY METAL",
									},
									{
										id:11,
										musicname:"REGGAE",
									},
									{
										id:12,
										musicname:"DISCO",
									},
									{
										id:13,
										musicname:"TECHNO",
									},
									{
										id:14,
										musicname:"INSTRUMENTAL",
									},
								];
    return(
      <LinearGradient
				start={{ x: 0.0, y: 0.75 }}
				end={{ x: 0.75, y: 0.0 }}
				locations={[0.0, 1.0]}
	      colors={['#010971', '#29cfff']}
				style={styles.gradientStyle}>

	      <Container>
					<View>
			      <TouchableOpacity style={styles.arrow} onPress={() => this.props.navigation.navigate('FirstScreen')}>
				      <Icons name="arrow-back" size={25} color="white" style={{ paddingRight: 10 }} />
				    </TouchableOpacity>

				    <View style={styles.header}>
				    	<Text style={styles.select}>Select your style</Text>
				    	<Text style={styles.choose}>Choose {this.state.maxFevouriteItem} favourite genres</Text>
			      </View>
					</View>

						<FlatList
							contentContainerStyle={styles.listContent}
							data={appData}
							keyExtractor={appData => appData.id}
							renderItem={this._renderItem}
						/>

					<View style={styles.nextview}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate("AlbumGallery")}>
						 	<Text style={styles.next}>NEXT</Text>
						</TouchableOpacity>
				  </View>

				</Container>
      </LinearGradient>
    );
  }
}
