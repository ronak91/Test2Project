import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
  BackHandler,
  I18nManager,
  Modal,
  TextInput,
  Button,
  ImageBackground,
  ListView,
  AsyncStorage,
  Dimensions,
  Linking,
  WebView,
  WebBrowser,
  NetInfo,
  KeyboardAvoidingView
} from "react-native";
import {
  Content,
  Container,
  Right,
  Header,
  Left,
  Body,
  Title,
  Spinner
} from "native-base";
import PropTypes from "prop-types";

import HTML from "react-native-render-html";

import styles from "./styles";
import { Images, Fonts, Metrics, Colors } from "../../../Themes/";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FloatingLabelInput from "./FloatingLabelInput";
import Globals from '../Globals';

// const rowHasChanged = (r1, r2) => r1 !== r2;
// const ds1 = new ListView.DataSource({ rowHasChanged });

var content = "";

const tagsStyles = {
  p: {
    lineHeight: Metrics.HEIGHT * 0.03,
    fontFamily: Fonts.helveticaRegular,
    textAlign: "left",
    color: "#111111",
    fontSize: Fonts.moderateScale(14)
  },
  h2: {
    color: "#0e1130",
    fontFamily: Fonts.helveticaRegular,
    fontSize: Fonts.moderateScale(16),
    textAlign: "left",
    paddingTop: Metrics.HEIGHT * 0.02,
    paddingBottom: Metrics.HEIGHT * 0.02,
    lineHeight: Metrics.HEIGHT * 0.04
  }
};

function handleFirstConnectivityChange(isConnected) {
  NetInfo.isConnected.removeEventListener(
    "connectionChange",
    handleFirstConnectivityChange
  );
}

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });
const dataSourceObjects = [];
var likedPosts = [];
var allLikedposts = [];
var imageurl = "";
var main_url = "";

export default class CategoryDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleTxt: "",
      postID: "",
      userName: "",
      userEmail: "",
      userComment: "",
      id: "",
      content: "",
      title: "",
      commentCount: "",
      arriveFrom: "",
      commentData: [],
      url: "",
      authorName: "",
      isImage : false,
      isLoading: false,
      doneApiCall: false,
      internetConnection: false,
      // dataSource1: ds1.cloneWithRows(dataSourceObjects),
      dataSource: ds.cloneWithRows(dataSourceObjects)
    };
  }

  componentWillMount() {
    var that = this;
    this.setState({ isLoading: true });

    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );
    // const { navigation } = this.props;
    // const post_id = this.props.navigation.state.params.postID.toString();
    // const arriveFrom = this.props.navigation.state.params.arriveFrom.toString();
    // console.log(post_id);
    // this.setState({
    //    postID: post_id,
    //    arriveFrom: arriveFrom,
    // });

    AsyncStorage.multiGet(["LikedPostList","AllLikedPosts"]).then(data => {

      var myArray = JSON.parse(data[0][1]);
      var Alllike = JSON.parse(data[1][1]);

      console.log("getLikedPosts");
      console.log(data[0][1]);
      console.log(data[1][1]);
      var temp = [];

      for (var i = 0; i < myArray.length; i++) {
        temp.push({
          id: myArray[i].id
        });
      }
      likedPosts = temp;

      var templike = [];
      for (var i = 0; i < Alllike.length; i++) {
            templike.push({
              index: i,
              id: Alllike[i].id,
              title: Alllike[i].title,
              excerpt: Alllike[i].excerpt,
              content: Alllike[i].content,
              date: Alllike[i].date,
              img: Alllike[i].img,
              author: Alllike[i].author,
              bgColor: Alllike[i].bgColor,
              isLiked: Alllike[i].isLiked
            });
      }
      allLikedposts = templike;

    });


    AsyncStorage.multiGet(["postID", "CatNAME","arriveFrom"]).then(data => {
      this.setState({
        postID: data[0][1],
        titleTxt: data[1][1],
        arriveFrom: data[2][1],
      });
      console.log("categorydetail::::");
      console.log(data[2][1]);
      console.log(this.state.arriveFrom);
    });

    BackHandler.addEventListener("hardwareBackPress", this.backPressed);

    setTimeout(() => {
      this._getPostDetails();
    }, 2000);
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    if(this.state.arriveFrom == "category"){
        this.props.navigation.navigate("Category")
    }
    if(this.state.arriveFrom == "favorite"){
        this.props.navigation.navigate("Favorite")
    }
    if(this.state.arriveFrom == "search"){
        this.props.navigation.navigate("Search")
    }
    if(this.state.arriveFrom == "categoryList"){
        this.props.navigation.navigate("CategoryList")
    }
    return true;
  };

  // Time Calculation
  _dateConvert = receivedTimeStamp => {
    // Date Formate "2018-07-17T21:00:17"
    var timeAgo = " ";
    var timeMonth = " ";
    const TimeStamp = receivedTimeStamp.split(" ")[0];
    const Year = TimeStamp.split("-")[0];
    const Month = TimeStamp.split("-")[1];
    const Day = TimeStamp.split("-")[2];
    if (Month == "01" || Month == "1") {
      timeMonth = "January";
    } else if (Month == "02" || Month == "2") {
      timeMonth = "February";
    } else if (Month == "03" || Month == "3") {
      timeMonth = "March";
    } else if (Month == "04" || Month == "4") {
      timeMonth = "April";
    } else if (Month == "05" || Month == "5") {
      timeMonth = "May";
    } else if (Month == "06" || Month == "6") {
      timeMonth = "June";
    } else if (Month == "07" || Month == "7") {
      timeMonth = "July";
    } else if (Month == "08" || Month == "8") {
      timeMonth = "August";
    } else if (Month == "09" || Month == "9") {
      timeMonth = "September";
    } else if (Month == "10") {
      timeMonth = "October";
    } else if (Month == "11") {
      timeMonth = "November";
    } else if (Month == "12") {
      timeMonth = "December";
    }
    timeAgo = Day + " " + timeMonth; //+ " " + Year;  '// uncomment it if you want to add year
    //  console.log(timeAgo);
    return timeAgo;
  };
  // Time Calculation

  _getPostDetails() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        const config = {
          method: "GET"
        };
        fetch(Globals.SITE_URL+"get_post/?id=" +this.state.postID,config)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);

            var tempData = [];
            dataSourceObjects = [];
            var catName = "";
            var img = "";
            var isLiked = false;
            var postId = this.state.postID;

            if (likedPosts.length != 0) {
              for (var i = 0; i < likedPosts.length; i++) {
                if (likedPosts[i].id == postId) {
                  this.setState({ isLiked : true, });
                }
              }
            } else {
                  this.setState({ isLiked : false, });
            }


              try{
                img = responseJson.post.comments[i].author.url;
              } catch(error){
                img = "";
              }

              for (var i = 0; i < responseJson.post.comments.length; i++) {
                tempData.push({
                  Cid: responseJson.post.comments[i].id,
                  img: img,
                  name: responseJson.post.comments[i].name,
                  date: responseJson.post.comments[i].date,
                  comment: responseJson.post.comments[i].content,
                });
             }

             console.log(tempData);

             if(tempData.length != 0){
               for (var i = 0; i < tempData.length; i++){
                 dataSourceObjects.push({
                   id: i,
                   Cid: tempData[i].Cid,
                   img: tempData[i].img,
                   name: tempData[i].name,
                   date: tempData[i].date,
                   comment: tempData[i].comment,
                 });
               }
             }



            try{
              var comment_counts = responseJson.post.comment_count.toString();
              imageurl = responseJson.post.thumbnail_images.full.url.toString();
              console.log(" "+imageurl);
              this.setState({ isImage : true, });
            }
            catch (error) {
              console.log("No Image");
              imageurl = "";
              this.setState({ isImage : false, });
            }

            try{
              //catName = responseJson.post.categories[0].title.toString();
              // Change "&amp;" to "&" for Category Name
              var SampleText1 = responseJson.post.categories[0].title.toString();
              var catArray1 = SampleText1.split(" ");
              for (var i = 0; i < catArray1.length; i++) {
                var NewText1 = "";
                var changeText1 = catArray1[i].toString();
                NewText1 = changeText1.replace("&amp;", "&");
                catName = `${catName} ${NewText1}`;
              }
            }
            catch (error) {
              catName = "";
            }

            this.setState({
              id: responseJson.post.id,
              content: responseJson.post.content,
              title: responseJson.post.title,
              authorName: responseJson.post.author.name,
              titleTxt: catName,
              commentCount: comment_counts,
              url: imageurl,
              dataSource: ds.cloneWithRows(dataSourceObjects),
              doneApiCall: true,
              internetConnection: true,
              isLoading: false,
            });

            console.log(Content);
          })
          .catch(error => {
            console.error(error);
            this.setState({
              internetConnection: false,
              isLoading: false,
            });
          });
      } else {
        //alert("please check your Internet");
        this.setState({
          internetConnection: false,
          isLoading: false,
        });
      }
    });
  }


  _postComment(){
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        const config = {
          method: "GET"
        };
        fetch(Globals.SITE_URL+"submit_comment/?post_id="+this.state.postID+"&name="+this.state.userName+"&email="+this.state.userEmail+"&content="+this.state.userComment,config)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);

            try{
              if(responseJson.status == "ok"){
                this.setState({
                  userName: "",
                  userEmail: "",
                  userComment: "",
                });

                this._getPostDetails();
              }
            } catch(error) {
                alert("Something went wrong");
            }

          })
          .catch(error => {
            console.error(error);
            this.setState({
              internetConnection: false,
              isLoading: false,
            });
          });
      } else {
        //alert("please check your Internet");
        this.setState({
          internetConnection: false,
          isLoading: false,
        });
      }
    });
  }


  _backNavigation() {
    console.log("_backNavigation");
    console.log(this.state.arriveFrom);
    if(this.state.arriveFrom == "category"){
        this.props.navigation.navigate("Category")
    }
    if(this.state.arriveFrom == "favorite"){
        this.props.navigation.navigate("Favorite")
    }
    if(this.state.arriveFrom == "search"){
        this.props.navigation.navigate("Search")
    }
    if(this.state.arriveFrom == "categoryList"){
        this.props.navigation.navigate("CategoryList")
    }
    return true;
  }

  onLikeClick(listId) {
    var temp = [];
    var temp1 = [];
    var templikePosts = [];
    var templikePosts1 = [];
    temp = likedPosts;
    temp1 = likedPosts;
    templikePosts = allLikedposts;
    templikePosts1 = allLikedposts;
    var ismatch = false;

      if (temp.length != 0) {
        ismatch = false;

        for (var t = 0; t < temp.length; t++) {
          if (temp[t].id == listId) {
            console.log("ID Removed");
            var toRemove = listId;
            console.log(toRemove);
            var index = temp1.indexOf(toRemove);
            temp1.splice(t, 1);
            ismatch = true;
            break;
          }
        }

        for (var o = 0; o < templikePosts.length; o++) {
          if (templikePosts[o].id == listId) {
            console.log("ID Removed");
            var toRemove = listId;
            console.log(toRemove);
            var index = templikePosts1.indexOf(toRemove);
            templikePosts1.splice(t, 1);
            break;
          }
        }

        if (ismatch == false) {
          console.log("ID Added");
          temp1.push({
            id: listId
          });
          for (var k = 0; k < dataSourceObjects.length; k++) {
                 if (dataSourceObjects[k].id == listId) {
                        templikePosts1.push({
                          index: k,
                          id: dataSourceObjects[k].id,
                          title: dataSourceObjects[k].title,
                          excerpt: dataSourceObjects[k].excerpt,
                          content: dataSourceObjects[k].content,
                          date: dataSourceObjects[k].date,
                          img: dataSourceObjects[k].img,
                          author: dataSourceObjects[k].author,
                          bgColor: dataSourceObjects[k].bgColor,
                          isLiked: dataSourceObjects[k].isLiked
                        });
                 }
             }
        }
      } else {
        console.log("ID Added");
        temp1.push({
          id: listId
        });
        for (var k = 0; k < dataSourceObjects.length; k++) {
               if (dataSourceObjects[k].id == listId) {
                      templikePosts1.push({
                        index: k,
                        id: dataSourceObjects[k].id,
                        title: dataSourceObjects[k].title,
                        excerpt: dataSourceObjects[k].excerpt,
                        content: dataSourceObjects[k].content,
                        date: dataSourceObjects[k].date,
                        img: dataSourceObjects[k].img,
                        author: dataSourceObjects[k].author,
                        bgColor: dataSourceObjects[k].bgColor,
                        isLiked: dataSourceObjects[k].isLiked
                      });
               }
           }
      }

      console.log(temp1);
      var Like = false;
      for (var i = 0; i < temp1.length; i++) {
        if (temp1[i].id == listId) {
            Like = true;
        }
        else {
          Like = false;
        }
      }

     this.setState({
       isLiked :Like,
     });

     AsyncStorage.multiSet([["LikedPostList", JSON.stringify(temp1)]]);
     AsyncStorage.multiSet([["AllLikedPosts", JSON.stringify(templikePosts1)]]);
  }

  _renderRow(rowData) {
    return (
      <View style={styles.listdecview}>
        <View style={styles.prouser}>
          {/*
          <Text
            style={[
              styles.descc,
              {
                paddingLeft: Metrics.HEIGHT * 0.04,
                paddingTop: Metrics.HEIGHT * 0.07,
                paddingRight: Metrics.HEIGHT * 0.04,
              }
            ]}
          >
          </Text>
          */}
          <View style={[
            styles.descc,
            {
              paddingLeft: Metrics.HEIGHT * 0.04,
              paddingTop: Metrics.HEIGHT * 0.07,
              paddingRight: Metrics.HEIGHT * 0.04,
            }
          ]}>
          <HTML html={rowData.comment} tagsStyles={tagsStyles} />
          </View>
          <View style={styles.namedateview}>
            <Text
              style={[
                styles.name,
                {
                  width: Metrics.WIDTH * 0.45,
                  textAlign: "left"
                }
              ]}
            >
              {rowData.name}
            </Text>
            <Text
              style={[
                styles.name,
                {
                  width: Metrics.WIDTH * 0.39,
                  textAlign: "right",
                  marginRight: Metrics.WIDTH * 0.02,
                }
              ]}>
                { this._dateConvert(rowData.date) }
            </Text>
          </View>
        </View>

        {
          (rowData.img == "")?
          <Image source={Images.img_user} style={styles.img} />
          :
          <Image source={{uri: rowData.img}} style={styles.img} />
        }

      </View>
    );
  }

  render() {
    var that = this;
    return (
      <Content>
        <View style={styles.mainview}>
          <StatusBar hidden={true} />

          {this.state.isLoading ? (
            <View style={styles.imageOverlay}>
              <Spinner color="black" />
            </View>
          ) : this.state.internetConnection == true ? (
            <View>
              {this.state.doneApiCall == true ? (
                <View styles={{ height: Metrics.HEIGHT,width: Metrics.WIDTH}}>
                  {
                    (this.state.isImage)?
                    <ImageBackground
                     source={{ uri: this.state.url }}
                     imageStyle={{ resizeMode: "cover" }}
                     style={styles.backk}>
                         <Header
                           androidStatusBarColor={"transparent"}
                           style={styles.header}>
                           <Left style={styles.left}>
                             <TouchableOpacity
                               style={styles.backArrow}
                               onPress={() =>  this._backNavigation()}>
                               {/*
                               <Ionicons
                                 name={
                                   I18nManager.isRTL
                                     ? "ios-arrow-forward"
                                     : "ios-arrow-back"
                                 }
                                 size={35}
                                 color="white"
                                 style={{ paddingRight: 10 }}
                               />*/}
                               <Image style={styles.backBtn} source={Images.back_blogdetail}/>
                             </TouchableOpacity>
                           </Left>

                           <Body style={styles.body} />

                           <Right style={styles.right}>
                               {this.state.isLiked == true ? (
                                 <TouchableOpacity
                                   onPress={() => this.onLikeClick(this.state.postID)}
                                   style={styles.heart}
                                 >
                                   <Image style={styles.likeBtn} source={Images.heart_selected}/>
                                 </TouchableOpacity>
                               ) : (
                                 <TouchableOpacity
                                   onPress={() => this.onLikeClick(this.state.postID)}
                                   style={styles.heart}
                                 >
                                   <Image style={styles.likeBtn} source={Images.heart_unselected}/>
                                 </TouchableOpacity>
                               )}
                           </Right>
                         </Header>
                    </ImageBackground>
                    :
                    <ImageBackground
                     source={Images.No_image_found}
                     imageStyle={{ resizeMode: "cover" }}
                     style={styles.backk}>
                         <Header
                           androidStatusBarColor={"#0e1130"}
                           style={styles.header}>

                           <Left style={styles.left}>
                           <TouchableOpacity
                             style={styles.backArrow}
                             onPress={() =>  this._backNavigation()}>
                             {/*
                             <Ionicons
                               name={
                                 I18nManager.isRTL
                                   ? "ios-arrow-forward"
                                   : "ios-arrow-back"
                               }
                               size={35}
                               color="white"
                               style={{ paddingRight: 10 }}
                             />*/}
                             <Image style={styles.backBtn} source={Images.back_blogdetail}/>
                           </TouchableOpacity>
                           </Left>
                           <Body style={styles.body} />
                           <Right style={styles.right}>
                               {this.state.isLiked == true ? (
                                 <TouchableOpacity
                                   onPress={() => this.onLikeClick(this.state.postID)}
                                   style={styles.heart}
                                 >
                                   <Image style={styles.likeBtn} source={Images.heart_selected}/>
                                 </TouchableOpacity>
                               ) : (
                                 <TouchableOpacity
                                   onPress={() => this.onLikeClick(this.state.postID)}
                                   style={styles.heart}
                                 >
                                   <Image style={styles.likeBtn} source={Images.heart_unselected}/>
                                 </TouchableOpacity>
                               )}
                           </Right>
                         </Header>
                    </ImageBackground>
                  }

                    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                        <View style={styles.maincontent}>
                          <Text style={styles.fashion}>{this.state.titleTxt}</Text>

                          <Text style={styles.desc}>{this.state.title}</Text>
                          <View style={styles.likeview}>
                            <Text style={styles.fashion}>{this.state.authorName}</Text>
                          </View>

                          <View style={styles.listview}>
                            <HTML html={this.state.content} tagsStyles={tagsStyles} />
                          </View>
                        </View>

                        <View style={styles.commentvieww}>
                          {/*<View
                         style={{
                           backgroundColor: "red",
                           justifyContent: I18nManager.isRTL ? "flex-end" : "flex-start",
                           alignItems: I18nManager.isRTL ? "flex-end" : "flex-start"
                         }}
                       >*/}
                          <Text style={styles.comment}>Comments ({this.state.commentCount})</Text>
                          {/*</View>*/}

                          <ListView
                            contentContainerStyle={styles.listview}
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow.bind(this)}
                            enableEmptySections={true}
                            pageSize={4}/>
                        </View>

                        <Text style={styles.comment}>Leave a reply</Text>

                        <View style={styles.floatingView}>
                          <FloatingLabelInput
                            label="Name"
                            value={this.state.userName}
                            keyboardType="default"
                            returnKeyType="next"
                            maxLength={30}
                            selectionColor={"#959595"}
                            autoCapitalize="none"
                            onChangeText={userName => this.setState({ userName })}
                          />

                          <View style={{ height: 10 }} />

                          <FloatingLabelInput
                            value={this.state.userEmail}
                            label="Email Address"
                            keyboardType="default"
                            returnKeyType="next"
                            maxLength={30}
                            selectionColor={"#959595"}
                            autoCapitalize="none"
                            onChangeText={userEmail => this.setState({ userEmail })}
                          />

                          <View style={{ height: 10 }} />

                          <FloatingLabelInput
                            value={this.state.userComment}
                            label="Comment"
                            keyboardType="default"
                            returnKeyType="done"
                            maxLength={90}
                            selectionColor={"#959595"}
                            autoCapitalize="none"
                            onChangeText={userComment => this.setState({ userComment })}
                          />
                        </View>

                        <TouchableOpacity style={styles.sendmsg} onPress={() => this._postComment()}>
                          <Text>Send Message</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                  </View>
              ) : null}
            </View>

          ) : (
            <View
              style={{
                height: Metrics.HEIGHT,
                width: Metrics.WIDTH,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent"
              }}
            >
              <Text style={styles.noInternetText}>No Internet Connection</Text>
              <TouchableOpacity
                style={{ marginTop: Metrics.HEIGHT * 0.03 }}
                onPress={() => this._getPostDetails()}>

                <Text style={styles.ReloadText}>Reload</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Content>
    );
  }
}
