import React, { Component } from "react";
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
  ScrollView,
  AsyncStorage,
  NetInfo,
  FlatList,
  Animated,
  RefreshControl,
} from "react-native";
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
  Spinner
} from "native-base";
import FlatButton from './FlatButton';
import Swiper from "react-native-swiper";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Dropdown from "../../../Components/Dropdown/dropdown/";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Globals from "../Globals";

// Screen Styles
import styles from "./styles";
import { Images, Metrics } from "../../../Themes/";

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });

const likedPosts = [];
const AllPosts = [];
const blogs = [];
const allLikedposts = [];
var rerloadlog = [];
var tempdata = [];
var tempData = [];
var trendingData = [];
var searchData = [];
var dataSourceObjects = [];
var NewData = [];
var listViewHeight = 0;
var scrollCountWidth = 0;
var pageData = [];
var pindex = 0;
var totalpages = 0;

function handleFirstConnectivityChange(isConnected) {
  NetInfo.isConnected.removeEventListener(
    "connectionChange",
    handleFirstConnectivityChange
  );
}

export default class Category extends Component {

  constructor(props) {
    super(props);

    this.page = 1

    this.state = {
      blogCount: [],
      latestBlog: [],
      filterdata: [],
      isLoading: true,
      donecategoryCall: false,
      internetConnection: false,
      isfiltering: false,
      page: 1,
      CatNAME: "",
      CatID: "",
      searchText: "",
      isSearching: false,
      trending: "",
      dot_index: 0,
      pageIndex: 0,
      paginationCount: 0,
      lastClickedDigit: 0,
      totalPageCount: 0,
      searchlist: false,
      dataSourceBlog: ds.cloneWithRows([]),
      datatrendingData: ds.cloneWithRows(blogs),
      dataSearchBlog: ds.cloneWithRows(blogs)
    };
  }

  _handleBack() {
    newArray1 = [];
    AsyncStorage.removeItem("SmsInboxList");
    AsyncStorage.multiSet([["SmsInboxList", JSON.stringify(blogs)]]);
    this.props.navigation.navigate("CategoryList");
  }

  componentWillMount() {
    var that = this;
    this.setState({
      isLoading: true
    });

    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;


    AsyncStorage.multiGet(["LikedPostList", "CatID", "CatNAME","AllLikedPosts"]).then(data => {
      this.setState({
        CatID: data[1][1],
        CatNAME: data[2][1],
        blogCount: []
      });
      console.log(this.state.CatID);
      var myArray = JSON.parse(data[0][1]);
      var Alllike = JSON.parse(data[3][1]);

      console.log("getLikedPosts");
      console.log(data[0][1]);
      console.log(data[3][1]);
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

    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("CategoryList");
      return true;
    });
  }


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

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    setTimeout(() => {
      this._getPostList();
    }, 4000);
  }

  _getPostList() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    const config = {
      method: "GET"
    };

    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ isLoading: true });
        console.log(this.state.CatID);
        var categoryid = this.state.CatID.toString();
        console.log(categoryid);
        fetch(Globals.SITE_URL + "get_category_posts/?id="+categoryid+"&page="+this.state.page, config)  //"get_category_posts/?id="+categoryid,config)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            tempData = [];
            dataSourceObjects = [];
            tempLatestblog = [];
            trendingData = [];
            blogCount1 = [];
            var i;
            var categoryID = "";
            var isTrending = false;
            var trendingCount = 0;
            var posts_per_page = Globals.POSTS_PER_PAGE;
            var page_number = 0;

            if (responseJson.posts.length != 0) {
              console.log(responseJson.posts.length);

              for (i = 0; i < responseJson.posts.length; i++) {
                isTrending = false;

                try {
                  if (responseJson.posts[i].tags.length > 1) {
                    for (var j = 0;j < responseJson.posts[i].tags.length;j++) {
                      if (responseJson.posts[i].tags[j].title == "Trending") {
                        isTrending = true;
                      } else {
                        isTrending = false;
                      }
                    }
                  } else {
                    if (responseJson.posts[i].tags[0].title == "Trending") {
                      isTrending = true;
                    } else {
                      isTrending = false;
                    }
                  }
                  //set total pages
                  totalpages = responseJson.pages;

                } catch (error) {
                  isTrending = false;
                }

                try {
                  if (responseJson.posts[i].categories.length > 1) {
                    for (
                      var j = 0;
                      j < responseJson.posts[i].categories.length;
                      j++
                    ) {
                      if (
                        responseJson.posts[i].categories[j].id == categoryid
                      ) {
                        tempData.push({
                          id: responseJson.posts[i].id,
                          catID: responseJson.posts[i].categories[j].id,
                          catName: responseJson.posts[i].categories[j].title,
                          title: responseJson.posts[i].title,
                          isTrending: isTrending,
                          content: responseJson.posts[i].content,
                          excerpt: responseJson.posts[i].excerpt,
                          date: responseJson.posts[i].date,
                          img: responseJson.posts[i].thumbnail,
                          author: responseJson.posts[i].author.name,
                          bgColor: "#92dcff"
                        });
                      }
                    }
                  } else {
                    if (responseJson.posts[i].categories[0].id == categoryid) {
                      tempData.push({
                        id: responseJson.posts[i].id,
                        catID: responseJson.posts[i].categories[0].id,
                        catName: responseJson.posts[i].categories[0].title,
                        title: responseJson.posts[i].title,
                        isTrending: isTrending,
                        content: responseJson.posts[i].content,
                        excerpt: responseJson.posts[i].excerpt,
                        date: responseJson.posts[i].date,
                        img: responseJson.posts[i].thumbnail,
                        author: responseJson.posts[i].author.name,
                        bgColor: "#92dcff"
                      });
                    }
                  }
                } catch (error) {}
              }

              for (var j = 0; j < tempData.length; j++) {
                var isLiked = false;
                lasttitle = "";
                catName = "";

                var SampleText = tempData[j].title.toString();
                var resultArray = SampleText.split(" ");
                for (var i = 0; i < resultArray.length; i++) {
                  var NewText = "";
                  var changeText = resultArray[i].toString();
                  NewText = changeText.replace("&amp;", "&");
                  lasttitle = `${lasttitle} ${NewText}`;
                }

                // Change "&amp;" to "&" for Category Name
                var SampleText1 = tempData[j].catName.toString();
                var catArray1 = SampleText1.split(" ");
                for (var i = 0; i < catArray1.length; i++) {
                  var NewText1 = "";
                  var changeText1 = catArray1[i].toString();
                  NewText1 = changeText1.replace("&amp;", "&");
                  catName = `${catName} ${NewText1}`;
                }

                console.log(likedPosts);

                if (likedPosts.length != 0) {
                  for (var i = 0; i < likedPosts.length; i++) {
                    if (likedPosts[i].id == tempData[j].id) {
                      console.log(likedPosts[i].id);
                      console.log(tempData[j].id);
                      isLiked = true;
                    }
                  }
                } else {
                  isLiked: false;
                }

                if (j < Globals.LATEST_BLOG_COUNT) {
                  tempLatestblog.push({
                    index: j,
                    id: tempData[j].id,
                    catName: catName,
                    title: lasttitle,
                    excerpt: tempData[j].excerpt,
                    date: tempData[j].date
                  });
                }

                if (j < Globals.TRENDING_BLOG_COUNT) {
                  console.log(tempData[j].img);
                  if (tempData[j].isTrending == true) {
                    trendingData.push({
                      index: trendingCount,
                      id: tempData[j].id,
                      title: lasttitle,
                      catName: catName,
                      isTrending: tempData[j].isTrending,
                      excerpt: tempData[j].excerpt,
                      content: tempData[j].content,
                      date: tempData[j].date,
                      img: tempData[j].img,
                      author: tempData[j].author,
                      bgColor: "#92dcff"
                    });
                    trendingCount++;
                  }
                }

                dataSourceObjects.push({
                  index: j,
                  id: tempData[j].id,
                  title: lasttitle,
                  catName: catName,
                  excerpt: tempData[j].excerpt,
                  content: tempData[j].content,
                  date: tempData[j].date,
                  img: tempData[j].img,
                  author: tempData[j].author,
                  bgColor: "#92dcff",
                  isLiked: isLiked
                });
              }
            }

            rerloadlog = dataSourceObjects;
            latestBlog = tempLatestblog;

            this.setState({
              totalPageCount: blogCount1.length,
              blogCount: blogCount1,
              latestBlog: tempLatestblog,
              datatrendingData: ds.cloneWithRows(trendingData),
              dataSourceBlog: ds.cloneWithRows(dataSourceObjects),
              doneApiCall: true,
              internetConnection: true,
              isLoading: false,
              isFiltering: false,
              filterFinish: true,
            });

          })
          .catch(error => {
            this.setState({
              internetConnection: false,
              isLoading: false,
            });
            console.error(error);
          });
      } else {
        this.setState({
          isLoading: false,
          internetConnection: false,
        });
        //alert("please check your Internet");
      }
    });
  }

  _getFilterList() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    const config = {
      method: "GET"
    };

    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({
          isLoading: true,
          dataSearchBlog: ds.cloneWithRows([]),
        });
        //console.log(this.state.CatID);
        var categoryid = this.state.CatID.toString();
        console.log(categoryid);
        fetch(Globals.SITE_URL+"get_search_results/?search="+this.state.searchText,config)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
          //  console.log(responseJson.posts.length);
            searchData = [];
            NewData = [];
            var categoryID = "";

            console.log(this.state.CatNAME);
            console.log(this.state.CatID);

            if(responseJson.status == "error"){
                NewData = [];
            }
            else{

            //  catID: responseJson.posts[i].categories[0].id,
            for (var i = 0; i < responseJson.posts.length; i++)
            {
                  try {
                    if (responseJson.posts[i].categories.length > 1) {
                      for (var j = 0;j < responseJson.posts[i].categories.length;j++) {
                            if (responseJson.posts[i].categories[j].id == this.state.CatID) {
                                // searchData.push({
                                //     id: responseJson.posts[i].id,
                                //     title: responseJson.posts[i].title,
                                //     content: responseJson.posts[i].content,
                                //     excerpt: responseJson.posts[i].excerpt,
                                //     date: responseJson.posts[i].date,
                                //     img: responseJson.posts[i].thumbnail,
                                //     author: responseJson.posts[i].author.name,
                                //     bgColor: "#92dcff"
                                //   });
                                console.log(this.state.CatID);
                                console.log("id : " +responseJson.posts[i].categories[j].id);
                        }
                      }
                    } else {
                      if (responseJson.posts[i].categories[0].id == this.state.CatID) {
                                // searchData.push({
                                //   id: responseJson.posts[i].id,
                                //   title: responseJson.posts[i].title,
                                //   content: responseJson.posts[i].content,
                                //   excerpt: responseJson.posts[i].excerpt,
                                //   date: responseJson.posts[i].date,
                                //   img: responseJson.posts[i].thumbnail,
                                //   author: responseJson.posts[i].author.name,
                                //   bgColor: "#92dcff"
                                // });
                                console.log(this.state.CatID);
                                console.log("id : " +responseJson.posts[i].categories[0].id);
                        }
                    }
                  } catch (error) {}
                }

              console.log(searchData);
              NewData = [];

              for (var j = 0; j < searchData.length; j++) {
                var isLiked = false;
                lasttitle = "";

                      var SampleText = tempData[j].title.toString();
                      resultArray = SampleText.split(" ");
                      for (var i = 0; i < resultArray.length; i++) {
                        var NewText = "";
                        var changeText = resultArray[i].toString();
                        NewText = changeText.replace("&amp;", "&");
                        lasttitle = `${lasttitle} ${NewText}`;
                      }

                      if (likedPosts.length != 0) {
                        for (var i = 0; i < likedPosts.length; i++) {
                          if (likedPosts[i].id == tempData[j].id) {
                            console.log(likedPosts[i].id);
                            console.log(tempData[j].id);
                            isLiked = true;
                          }
                        }
                      } else {
                        isLiked: false;
                      }

                      NewData.push({
                        index: j,
                        id: tempData[j].id,
                        title: lasttitle,
                        excerpt: tempData[j].excerpt,
                        content: tempData[j].content,
                        date: tempData[j].date,
                        img: tempData[j].img,
                        author: tempData[j].author,
                        bgColor: "#92dcff",
                        isLiked: isLiked
                      });
              }

              this.setState({
                filterdata: NewData,
              });
            }

            console.log(NewData);

            this.setState({
              isSearching: true,
              doneApiCall: true,
              internetConnection: true,
              dataSearchBlog: ds.cloneWithRows(NewData),
              searchlist: true,
              isLoading: false
            });

            if(this.state.searchText == ""){
              this.setState({
                isSearching: false,
              });
            }
            else{
              this.setState({
              dataSearchBlog: ds.cloneWithRows(NewData),
              });
            }

            if (NewData.length == 0) {
              this.setState({
                searchlist: false
              });
            }

          })
          .catch(error => {
            this.setState({
              isLoading: false
            });
            console.error(error);
          });
      } else {
        this.setState({
          isLoading: false,
          internetConnection: true
        });
        //alert("please check your Internet");
      }
    });
  }

  // ** Data filter on text change start **  //
  onChangeText = newText => {
    // insert your logic here
    console.log("Entered Text : " + newText);

    tempdata = [];
    var interval = 0;
    this.setState({
      filterdata: [],
      dataSearchBlog: ds.cloneWithRows([]),
      searchText: newText,
      isLoading: true
    });

    if (newText == "") {

          this.setState({
            doneApiCall: true,
            internetConnection: true,
            dataSourceBlog: ds.cloneWithRows(dataSourceObjects),
            isSearching: false,
            isLoading:false,
          });

    } else {

      //  If User want filter data from api
       this.setState({
         isSearching: true,
       });


      this._getFilterList();

    }

  };
  // ** Data filter on text change **  //

  reload = () => {
    this.state.page += 1
    console.log("Re Fetching Posts");
    this.setState({isfiltering: true});
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    const config = {
      method: "GET"
    };

    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        console.log(this.state.CatID);
        var categoryid = this.state.CatID.toString();
        console.log(categoryid);
        console.log("Page Number :"+ this.state.page);
        fetch(Globals.SITE_URL + "get_category_posts/?id="+categoryid+"&page="+this.state.page, config)  //"get_category_posts/?id="+categoryid,config)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            var tempData1 = [];
            var dataSourceObjects1 = [];

            var i;
            var categoryID = "";
            var isTrending = false;
            var trendingCount = 0;
            var posts_per_page = Globals.POSTS_PER_PAGE;
            var page_number = 0;

            if (responseJson.posts.length != 0) {
              console.log(responseJson.posts.length);

              for (i = 0; i < responseJson.posts.length; i++) {
                isTrending = false;

                try {
                  if (responseJson.posts[i].tags.length > 1) {
                    for (var j = 0;j < responseJson.posts[i].tags.length;j++) {
                      if (responseJson.posts[i].tags[j].title == "Trending") {
                        isTrending = true;
                      } else {
                        isTrending = false;
                      }
                    }
                  } else {
                    if (responseJson.posts[i].tags[0].title == "Trending") {
                      isTrending = true;
                    } else {
                      isTrending = false;
                    }
                  }
                } catch (error) {
                  isTrending = false;
                }

                try {
                  if (responseJson.posts[i].categories.length > 1) {
                    for (
                      var j = 0;
                      j < responseJson.posts[i].categories.length;
                      j++
                    ) {
                      if (
                        responseJson.posts[i].categories[j].id == categoryid
                      ) {
                        tempData1.push({
                          id: responseJson.posts[i].id,
                          catID: responseJson.posts[i].categories[j].id,
                          catName: responseJson.posts[i].categories[j].title,
                          title: responseJson.posts[i].title,
                          isTrending: isTrending,
                          content: responseJson.posts[i].content,
                          excerpt: responseJson.posts[i].excerpt,
                          date: responseJson.posts[i].date,
                          img: responseJson.posts[i].thumbnail,
                          author: responseJson.posts[i].author.name,
                          bgColor: "#92dcff"
                        });
                        console.log(responseJson.posts[i].thumbnail);
                      }
                    }
                  } else {
                    if (responseJson.posts[i].categories[0].id == categoryid) {
                        tempData1.push({
                          id: responseJson.posts[i].id,
                          catID: responseJson.posts[i].categories[0].id,
                          catName: responseJson.posts[i].categories[0].title,
                          title: responseJson.posts[i].title,
                          isTrending: isTrending,
                          content: responseJson.posts[i].content,
                          excerpt: responseJson.posts[i].excerpt,
                          date: responseJson.posts[i].date,
                          img: responseJson.posts[i].thumbnail,
                          author: responseJson.posts[i].author.name,
                          bgColor: "#92dcff"
                        });
                    }
                  }
                } catch (error) {}
              }

              for (var j = 0; j < tempData1.length; j++) {
                var isLiked = false;
                lasttitle = "";
                catName = "";

                var SampleText = tempData1[j].title.toString();
                var resultArray = SampleText.split(" ");
                for (var i = 0; i < resultArray.length; i++) {
                  var NewText = "";
                  var changeText = resultArray[i].toString();
                  NewText = changeText.replace("&amp;", "&");
                  lasttitle = `${lasttitle} ${NewText}`;
                }

                // Change "&amp;" to "&" for Category Name
                var SampleText1 = tempData1[j].catName.toString();
                var catArray1 = SampleText1.split(" ");
                for (var i = 0; i < catArray1.length; i++) {
                  var NewText1 = "";
                  var changeText1 = catArray1[i].toString();
                  NewText1 = changeText1.replace("&amp;", "&");
                  catName = `${catName} ${NewText1}`;
                }

                if (likedPosts.length != 0) {
                  for (var i = 0; i < likedPosts.length; i++) {
                    if (likedPosts[i].id == tempData1[j].id) {
                      console.log(likedPosts[i].id);
                      console.log(tempData1[j].id);
                      isLiked = true;
                    }
                  }
                } else {
                  isLiked: false;
                }

                dataSourceObjects1.push({
                  index: j,
                  id: tempData1[j].id,
                  title: lasttitle,
                  catName: catName,
                  excerpt: tempData1[j].excerpt,
                  content: tempData1[j].content,
                  date: tempData1[j].date,
                  img: tempData1[j].img,
                  author: tempData1[j].author,
                  bgColor: "#92dcff",
                  isLiked: isLiked
                });
              }

              console.log(dataSourceObjects1);

              var length = dataSourceObjects.length;

              console.log(length);
              for(var k=0;k<dataSourceObjects1.length;k++){
                dataSourceObjects.push({
                  index: length,
                  id: dataSourceObjects1[k].id,
                  title: lasttitle,
                  catName: dataSourceObjects1[k].catName,
                  excerpt: dataSourceObjects1[k].excerpt,
                  content: dataSourceObjects1[k].content,
                  date: dataSourceObjects1[k].date,
                  img: dataSourceObjects1[k].img,
                  author: dataSourceObjects1[k].author,
                  bgColor: "#92dcff",
                  isLiked: isLiked
                })
                length++;
              }

              console.log(dataSourceObjects);

              this.setState({
                internetConnection: true,
                isfiltering: false,
                isSearching: false,
                isLoading: false,
                dataSourceBlog: ds.cloneWithRows(dataSourceObjects),
              });

    }
    }).catch(error => {
      this.setState({
        internetConnection: false,
        isLoading: false,
      });
      console.error(error);
    });
} else {
  this.setState({
    isLoading: false,
    internetConnection: false,
  });
  //alert("please check your Internet");
}
});
}

  _renderRow(rowData) {
    return (
      <View
        style={
          rowData.id == rerloadlog.length - 1
            ? styles.rowTrendingLast
            : styles.rowTrending
        }>
        {rowData.img == undefined ? (
          <TouchableOpacity onPress={() => this._handleNavigation(rowData.id)}>
            <Image
              source={Images.No_image_found}
              style={styles.trendingListImg}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => this._handleNavigation(rowData.id)}>
            <Image
              source={{ uri: rowData.img }}
              style={styles.trendingListImg}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => this._handleNavigation(rowData.id)}>
          <Text numberOfLines={2} style={styles.trendingDescription}>
            {rowData.title}
          </Text>
        </TouchableOpacity>
        <Text style={styles.trendingDate}>
          {" "}
          {this._dateConvert(rowData.date)}{" "}
        </Text>
      </View>
    );
  }

  onContentSize(contentWidth, contentHeight) {
    listViewHeight = contentHeight;
  }

  onContentCountSize(contentWidth, contentHeight) {
    scrollCountWidth = contentWidth;
  }

  _handleNavigation(post_id) {
    var postID = post_id.toString();
    AsyncStorage.multiSet([["postID", postID], ["arriveFrom", "category"]]);
    this.props.navigation.navigate("CategoryDetail");
  }

  renderHeader = () => {
    return (
      null
    )
  }


renderItem = ({ item, index }) => {
  //_renderRowBlog(rowData) {
    return (
      <View>
        {item.index % 2 === 0 ? (
          <TouchableOpacity
            style={[styles.evenOddBlogBg, { backgroundColor: "#92dcff" }]}
            onPress={() => this._handleNavigation(item.id)}
          >
            <ImageBackground
              source={item.img == undefined ?Images.No_image_found:{ uri: item.img }}
              style={styles.evenOddImgBg}
            >
              {item.isLiked == true ? (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(item.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.02 }]}
                >
                  <Image
                    style={styles.likeBtn}
                    source={Images.heart_selected}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(item.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.02 }]}
                >
                  <Image
                    style={styles.likeBtn}
                    source={Images.heart_unselected}
                  />
                </TouchableOpacity>
              )}
            </ImageBackground>

            <View style={styles.evenReadMoreBg}>
              <View>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(item.id)}
                >
                  <Text numberOfLines={2} style={styles.titleReadMoreTxt}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.dateReadMoreTxt}>
                  {this._dateConvert(item.date)}
                </Text>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(item.id)}
                >
                  <Text numberOfLines={3} style={styles.descriptionReadMoreTxt}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.readMoreTxtBg}
                  onPress={() => this._handleNavigation(item.id)}>
                  <Text style={styles.readMoreTxt}>Read More</Text>
                  {I18nManager.isRTL ? (
                    <Image
                      source={Images.readMoreLeftArrow}
                      style={styles.readMoreArrow}
                    />
                  ) : (
                    <Image
                      source={Images.readMoreArrow}
                      style={styles.readMoreArrow}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {/* Author Name
              <Text numberOfLines={1} style={styles.titleAuthorNameTxt1}>
                {"Auther Name : "}{item.author}
              </Text>
              */}
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.evenOddBlogBg, { backgroundColor: "#baff88" }]}
            onPress={() => this._handleNavigation(item.id)}
          >
            <View style={styles.oddReadMoreBg}>
              <View>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(item.id)}
                >
                  <Text numberOfLines={2} style={styles.titleReadMoreTxt}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.dateReadMoreTxt}>
                  {this._dateConvert(item.date)}
                </Text>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(item.id)}
                >
                  <Text numberOfLines={3} style={styles.descriptionReadMoreTxt}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.readMoreTxtBg}
                  onPress={() => this._handleNavigation(item.id)}
                >
                  <Text style={styles.readMoreTxt}>Read More</Text>
                  {I18nManager.isRTL ? (
                    <Image
                      source={Images.readMoreLeftArrow}
                      style={styles.readMoreArrow}
                    />
                  ) : (
                    <Image
                      source={Images.readMoreArrow}
                      style={styles.readMoreArrow}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {/* Author Name
                <Text numberOfLines={1} style={styles.titleAuthorNameTxt}>
                  {"Auther Name : "}{item.author}
                </Text>
                */}
            </View>
            <ImageBackground
              source={item.img == undefined ?Images.No_image_found:{ uri: item.img }}
              style={styles.evenOddImgBg}>
              {item.isLiked == true ? (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(item.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.39 }]}
                >
                  <Image
                    style={styles.likeBtn}
                    source={Images.heart_selected}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(item.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.39 }]}
                >
                  <Image
                    style={styles.likeBtn}
                    source={Images.heart_unselected}
                  />
                </TouchableOpacity>
              )}
            </ImageBackground>
          </TouchableOpacity>
        )}
      </View>
    );
  }

_renderRowBlog(rowData) {
    return (
      <View>
        {rowData.index % 2 === 0 ? (
          <TouchableOpacity
            style={[styles.evenOddBlogBg, { backgroundColor: "#92dcff" }]}
            onPress={() => this._handleNavigation(rowData.id)}
          >
            <ImageBackground
              source={rowData.img == undefined ?Images.No_image_found:{ uri: rowData.img }}
              style={styles.evenOddImgBg}
            >
              {rowData.isLiked == true ? (
                <TouchableOpacity
                  onPress={() => this.onSearchLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.02 }]}
                >
                  <Image
                    style={styles.likeBtn}
                    source={Images.heart_selected}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.onSearchLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.02 }]}
                >
                  <Image
                    style={styles.likeBtn}
                    source={Images.heart_unselected}
                  />
                </TouchableOpacity>
              )}
            </ImageBackground>

            <View style={styles.evenReadMoreBg}>
              <View>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(rowData.id)}
                >
                  <Text numberOfLines={2} style={styles.titleReadMoreTxt}>
                    {rowData.title}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.dateReadMoreTxt}>
                  {this._dateConvert(rowData.date)}
                </Text>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(rowData.id)}
                >
                  <Text numberOfLines={3} style={styles.descriptionReadMoreTxt}>
                    {rowData.title}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.readMoreTxtBg}
                  onPress={() => this._handleNavigation(rowData.id)}>
                  <Text style={styles.readMoreTxt}>Read More</Text>
                  {I18nManager.isRTL ? (
                    <Image
                      source={Images.readMoreLeftArrow}
                      style={styles.readMoreArrow}
                    />
                  ) : (
                    <Image
                      source={Images.readMoreArrow}
                      style={styles.readMoreArrow}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {/* Author Name
              <Text numberOfLines={1} style={styles.titleAuthorNameTxt1}>
                {"Auther Name : "}{rowData.author}
              </Text>
              */}
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.evenOddBlogBg, { backgroundColor: "#baff88" }]}
            onPress={() => this._handleNavigation(rowData.id)}
          >
            <View style={styles.oddReadMoreBg}>
              <View>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(rowData.id)}
                >
                  <Text numberOfLines={2} style={styles.titleReadMoreTxt}>
                    {rowData.title}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.dateReadMoreTxt}>
                  {this._dateConvert(rowData.date)}
                </Text>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(rowData.id)}
                >
                  <Text numberOfLines={3} style={styles.descriptionReadMoreTxt}>
                    {rowData.title}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.readMoreTxtBg}
                  onPress={() => this._handleNavigation(rowData.id)}
                >
                  <Text style={styles.readMoreTxt}>Read More</Text>
                  {I18nManager.isRTL ? (
                    <Image
                      source={Images.readMoreLeftArrow}
                      style={styles.readMoreArrow}
                    />
                  ) : (
                    <Image
                      source={Images.readMoreArrow}
                      style={styles.readMoreArrow}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {/* Author Name
                <Text numberOfLines={1} style={styles.titleAuthorNameTxt}>
                  {"Auther Name : "}{rowData.author}
                </Text>
                */}
            </View>
            <ImageBackground
              source={rowData.img == undefined ?Images.No_image_found:{ uri: rowData.img }}
              style={styles.evenOddImgBg}>
              {rowData.isLiked == true ? (
                <TouchableOpacity
                  onPress={() => this.onSearchLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.39 }]}
                >
                  <Image
                    style={styles.likeBtn}
                    source={Images.heart_selected}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.onSearchLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.39 }]}
                >
                  <Image
                    style={styles.likeBtn}
                    source={Images.heart_unselected}
                  />
                </TouchableOpacity>
              )}
            </ImageBackground>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  render() {
    const { blogCount, navigation } = this.state;

    StatusBar.setBarStyle("light-content", true);
    var that = this;

    return (
      <View style={styles.mainView}>
        <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this._handleBack()}
            >
              <Ionicons
                name={
                  I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"
                }
                size={35}
                color="white"
                style={{ paddingRight: 10 }}
              />
            </TouchableOpacity>
          </Left>

          <Body style={styles.body}>
            <Text style={styles.textTitle}>{this.state.CatNAME}</Text>
          </Body>

          <Right style={styles.right} transparent />
        </Header>

        <Content>
          <View style={styles.searchViewBg}>
            <View style={styles.searchBg}>
              <Input
                style={styles.searchInput}
                placeholder="Search for News"
                placeholderTextColor="#555567"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                selectionColor="#6d6d71"
                onChangeText={this.onChangeText}
                value={this.state.searchText}
                ref={comp => {
                  this.textInputRef = comp;
                }}
              />
              <EvilIcons name={"search"} size={24} color="#8e8e93" />
            </View>
            <View style={styles.searchYellowBlog} />
          </View>

          <View>
            {this.state.isLoading ? (
              <View style={styles.imageOverlay}>
                <Spinner color="black" />
              </View>
            ) : this.state.internetConnection == true ? (
              <View>
                {this.state.doneApiCall == true ? (
                  <View>
                    {this.state.isSearching != true ? (
                      <View>
                        {this.state.dataSourceBlog.length != 0 ? (
                          <View>
                            <View>
                              {Globals.SHOW_TRENDING_BLOG ? (
                                <View>
                                  {trendingData.length != 0 ? (
                                    <View>
                                      <Text style={styles.trendingTxt}>
                                        Trending
                                      </Text>
                                      <View style={styles.listTrending}>
                                        <ListView
                                          dataSource={
                                            this.state.datatrendingData
                                          }
                                          renderRow={this._renderRow.bind(this)}
                                          pageSize={4}
                                          horizontal={true}
                                          showsHorizontalScrollIndicator={false}
                                        />
                                      </View>
                                    </View>
                                  ) : null}
                                </View>
                              ) : null}
                            </View>

                            <Text style={styles.latestBlogTxt}>
                              Latest Blogs
                            </Text>
                            <View style={styles.sliderBG}>
                              <View style={styles.dotListBg}>
                                {this.state.latestBlog.map((item, value) => {
                                  return (
                                    <View style={styles.rowDot} key={value}>
                                      <View
                                        style={
                                          item.index == this.state.dot_index
                                            ? [
                                                styles.dot,
                                                { backgroundColor: "white" }
                                              ]
                                            : [
                                                styles.dot,
                                                {
                                                  backgroundColor:
                                                    "transparent",
                                                  borderWidth: 0.5,
                                                  borderColor: "white"
                                                }
                                              ]
                                        }
                                      />
                                    </View>
                                  );
                                })}
                              </View>
                              <View style={styles.rowLatestBlogBg}>
                                <Swiper
                                  showsButtons={false}
                                  autoplay={true}
                                  horizontal={true}
                                  loop={true}
                                  dot={<View />}
                                  activeDot={<View />}
                                  onIndexChanged={index =>
                                    this.setState({ dot_index: index })
                                  }>
                                  {this.state.latestBlog.map((item, key) => {
                                    return (
                                      <View
                                        style={styles.rowlatestBlog}
                                        key={key}
                                      >
                                        <Text
                                          style={styles.latestBlogTitleDateTxt}
                                        >
                                          {item.catName}
                                        </Text>
                                        <Text style={styles.latestBlogDescTxt}>
                                          {item.title}
                                        </Text>
                                        <Text
                                          style={styles.latestBlogTitleDateTxt1}
                                        >
                                          {this._dateConvert(item.date)}
                                        </Text>
                                      </View>
                                    );
                                  })}
                                </Swiper>
                              </View>
                            </View>
                          </View>
                        ) : null}
                      </View>
                    ) : null}
                    <Text style={styles.blogTxt}>Blogs</Text>
                    {this.state.isSearching != true ? (
                      <View>
                        <FlatList
                            data={dataSourceObjects}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => `categoryList-${item.id} || ${index}`}
                            ListEmptyComponent={
                              <View style={{justifyContent:"center"}}>
                                <Text style={{alignSelf:"center",}}>
                                    No Data Found.
                                </Text>
                              </View>
                            }
                            ref={ref => (this.flatList = ref)}
                            onContentSizeChange={() =>
                              this.flatList.scrollToEnd({ animated: true })
                            }
                            onLayout={() =>
                              this.flatList.scrollToEnd({ animated: true })
                            }
                          />
                          {
                            (totalpages<=this.state.page)?
                              null
                              :
                              <TouchableOpacity style={styles.more} onPress={() => this.reload()} >
                                <Text
                                  name="arrow-down"
                                  style={styles.moreTxt}>
                                Load More
                                </Text>
                              </TouchableOpacity>
                          }
                          {
                            (this.state.isfiltering)?
                              <View style={styles.imageOverlayLoadMore}>
                                <Spinner color="black" />
                              </View>
                            :
                            null
                          }
                      </View>
                    ) : (
                      <View>
                        {this.state.searchlist == true ? (
                          <ListView
                            ref="listView"
                            dataSource={this.state.dataSearchBlog}
                            renderRow={this._renderRowBlog.bind(this)}
                            onContentSizeChange={this.onContentSize}
                            scrollEnabled={false}
                            enableEmptySections
                            pageSize={4}
                          />
                        ) : (
                          <View
                            style={{
                              height: Metrics.HEIGHT * 0.25,
                              width: Metrics.WIDTH,
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "transparent"
                            }}>
                            <Text style={styles.noInternetText}>
                              No Data Found
                            </Text>
                          </View>
                        )}
                      </View>
                    )}
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
                }}>
                <Text style={styles.noInternetText}>
                  No Internet Connection
                </Text>
                <TouchableOpacity
                  style={{ marginTop: Metrics.HEIGHT * 0.03 }}
                  onPress={() => this._getPostList()}>
                  <Text style={styles.ReloadText}>Reload</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </Content>
      </View>
    );
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

      console.log(templikePosts1);

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
    console.log(templikePosts1);


    for (var i = 0; i < dataSourceObjects.length; i++) {
      if (dataSourceObjects[i].id == listId) {
        if (dataSourceObjects[i].isLiked) {
          dataSourceObjects[i].isLiked = false;
        } else {
          dataSourceObjects[i].isLiked = true;
        }
      }
    }
    console.log(dataSourceObjects);
    this.setState({
      dataSourceBlog: ds.cloneWithRows(dataSourceObjects)
    });


    AsyncStorage.multiSet([["AllLikedPosts", JSON.stringify(templikePosts1)]]);
    AsyncStorage.multiSet([["LikedPostList", JSON.stringify(temp1)]]);
    //}
  }

  onSearchLikeClick(listId) {
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
        for (var k = 0; k < NewData.length; k++) {
               if (dataSourceObjects[k].id == listId) {
                      templikePosts1.push({
                        index: k,
                        id: NewData[k].id,
                        title: NewData[k].title,
                        excerpt: NewData[k].excerpt,
                        content: NewData[k].content,
                        date: NewData[k].date,
                        img: NewData[k].img,
                        author: NewData[k].author,
                        bgColor: NewData[k].bgColor,
                        isLiked: NewData[k].isLiked
                      });
               }
           }
       }
    } else {
      console.log("ID Added");
      temp1.push({
        id: listId
      });

      console.log(templikePosts1);

      for (var k = 0; k < NewData.length; k++) {
             if (NewData[k].id == listId) {
                    templikePosts1.push({
                      index: k,
                      id: NewData[k].id,
                      title: NewData[k].title,
                      excerpt: NewData[k].excerpt,
                      content: NewData[k].content,
                      date: NewData[k].date,
                      img: NewData[k].img,
                      author: NewData[k].author,
                      bgColor: NewData[k].bgColor,
                      isLiked: NewData[k].isLiked
                    });
             }
         }
    }

    console.log(temp1);
    console.log(templikePosts1);


    for (var i = 0; i < NewData.length; i++) {
      if (NewData[i].id == listId) {
        if (NewData[i].isLiked) {
          NewData[i].isLiked = false;
        } else {
          NewData[i].isLiked = true;
        }
      }
    }
    console.log(dataSourceObjects);
    this.setState({
      dataSearchBlog: ds.cloneWithRows(NewData)
    });


    AsyncStorage.multiSet([["AllLikedPosts", JSON.stringify(templikePosts1)]]);
    AsyncStorage.multiSet([["LikedPostList", JSON.stringify(temp1)]]);
    //}
  }

}
