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
  NetInfo
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
var rerloadlog = [];
var tempdata = [];
var trendingData = [];
var searchData = [];
var dataSourceObjects = [];
var listViewHeight = 0;
var scrollCountWidth = 0;
var blogCount1 = [];
var n = 0;
var l = Globals.POSTS_PER_PAGE;
var pageData = [];
var pindex = 0;

function handleFirstConnectivityChange(isConnected) {
  NetInfo.isConnected.removeEventListener(
    "connectionChange",
    handleFirstConnectivityChange
  );
}

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogCount: [],
      latestBlog: [],
      filterdata: [],
      isLoading: true,
      donecategoryCall: false,
      internetConnection: false,
      CatNAME: "",
      CatID: "",
      searchText: "",
      isSearching: false,
      trending: "",
      dot_index: 0,
      pageIndex: 0,
      paginationCount: 0,
      max_page: 0,
      min_page: 0,
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
    // const cat_id = navigation.getParam('CatID', 'NO-ID');
    // const cat_name = navigation.getParam('CatNAME', ' ');
    // const cat_id = this.props.navigation.state.params.CatID.toString();
    // const cat_name = this.props.navigation.state.params.CatNAME.toString();

    // console.log(cat_id);
    //
    // this.setState({
    //   CatID: cat_id,
    //   CatNAME: cat_name,
    // });

    // AsyncStorage.multiGet(["LikedPostList", "CatID", "CatNAME"]).then(data => {
    //   this.setState({
    //     CatID: data[1][1],
    //     CatNAME: data[2][1]
    //   });
    //   console.log(this.state.CatID);
    // });

    AsyncStorage.multiGet(["LikedPostList", "CatID", "CatNAME"]).then(data => {
      this.setState({
        CatID: data[1][1],
        CatNAME: data[2][1],
        blogCount: []
      });
      console.log(this.state.CatID);
      var myArray = JSON.parse(data[0][1]);
      console.log("getLikedPosts");
      console.log(data[0][1]);
      var temp = [];

      for (var i = 0; i < myArray.length; i++) {
        temp.push({
          id: myArray[i].id
        });
      }
      likedPosts = temp;
    });

    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("CategoryList");
      return true;
    });
  }

  componentWillUnmount() {
    n = 0;
    l = Globals.POSTS_PER_PAGE;
    pindex = 0;
    pageData = [];
    this.setState({ blogCount: [] });
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
        fetch(Globals.SITE_URL + "get_posts/", config) //"get_category_posts/?id="+categoryid,config)
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
                    for (
                      var j = 0;
                      j < responseJson.posts[i].tags.length;
                      j++
                    ) {
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
                  pageNumber: page_number,
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
            }

            console.log("pindex::" + pindex);

            for (
              var m = 0;
              m < dataSourceObjects.length;
              m = m + Globals.POSTS_PER_PAGE
            ) {
              for (var p = n; p < l; p++) {
                if (p < dataSourceObjects.length) {
                  pageData.push({
                    index: p,
                    pageNumber: pindex,
                    id: dataSourceObjects[p].id,
                    title: dataSourceObjects[p].title,
                    excerpt: dataSourceObjects[p].excerpt,
                    content: dataSourceObjects[p].content,
                    date: dataSourceObjects[p].date,
                    img: dataSourceObjects[p].img,
                    author: dataSourceObjects[p].author,
                    bgColor: dataSourceObjects[p].bgColor,
                    isLiked: dataSourceObjects[p].isLiked
                  });
                }
              }
              n = p;
              l = l + Globals.POSTS_PER_PAGE;
              blogCount1.push({
                id: pindex
              });
              pindex = pindex + 1;
            }

            var tempPagination = [];

            for (var k = 0; k < pageData.length; k++) {
              if (pageData[k].pageNumber == 0) {
                tempPagination.push({
                  index: k,
                  pageNumber: pageData[k].pageNumber,
                  id: pageData[k].id,
                  title: pageData[k].title,
                  excerpt: pageData[k].excerpt,
                  content: pageData[k].content,
                  date: pageData[k].date,
                  img: pageData[k].img,
                  author: pageData[k].author,
                  bgColor: pageData[k].bgColor,
                  isLiked: pageData[k].isLiked
                });
              }
            }

            console.log("page plus blog count==");
            console.log(pageData);
            console.log(blogCount1);
            console.log("page plus blog count end==");

            rerloadlog = dataSourceObjects;
            latestBlog = tempLatestblog;

            this.setState({
              totalPageCount: blogCount1.length,
              blogCount: blogCount1,
              min_page: 0,
              max_page: Globals.PAGE_LIMIT+1,
              latestBlog: tempLatestblog,
              datatrendingData: ds.cloneWithRows(trendingData),
              dataSourceBlog: ds.cloneWithRows(tempPagination),
              doneApiCall: true,
              internetConnection: true,
              isLoading: false
            });
          })
          .catch(error => {
            this.setState({
              internetConnection: false,
              isLoading: false
            });
            console.error(error);
          });
      } else {
        this.setState({
          isLoading: false,
          internetConnection: false
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

    for (var i = 0; i < dataSourceObjects.length; i++) {
      var ismatch = false;

      //lowercase the typed text
      var searchtext = this.state.searchText.toLowerCase();

      //check into title
      var SampleText0 = dataSourceObjects[i].title.toString();
      var string1 = SampleText0.toLowerCase();
      if (SampleText0.toLowerCase().indexOf(newText.toLowerCase()) != -1) {
        ismatch = true;
        console.log("'" + newText.toLowerCase() + "' => present in TITLE");
      }

      //check into all content
      var SampleText1 = dataSourceObjects[i].content.toString();
      var string2 = SampleText1.toLowerCase();
      if (ismatch != true) {
        if (SampleText1.toLowerCase().indexOf(newText.toLowerCase()) != -1) {
          ismatch = true;
          console.log("'" + newText.toLowerCase() + "' => present in CONTENT");
        }
      }

      //check author author
      var SampleText = dataSourceObjects[i].author.toString();
      var string2 = SampleText.toLowerCase();
      if (ismatch != true) {
        if (SampleText.toLowerCase().indexOf(newText.toLowerCase()) != -1) {
          ismatch = true;
          console.log("'" + newText.toLowerCase() + "' => present in AUTHOR");
        }
      }

      if (ismatch) {
        tempdata.push({
          index: interval,
          id: dataSourceObjects[i].id,
          title: dataSourceObjects[i].title,
          excerpt: dataSourceObjects[i].excerpt,
          content: dataSourceObjects[i].content,
          date: dataSourceObjects[i].date,
          img: dataSourceObjects[i].img,
          author: dataSourceObjects[i].author,
          isLiked: dataSourceObjects[i].isLiked
        });
        interval++;
      }
    }

    this.setState({
      filterdata: tempdata
      //  dataSearchBlog: ds.cloneWithRows(tempdata),
    });
    console.log("Main Array :" + dataSourceObjects.length);
    console.log("Result Array" + tempdata.length);

    if (newText == "") {
      this.setState({
        searchText: newText,
        isSearching: false,
        isLoading: false,
        dataSourceBlog: ds.cloneWithRows(dataSourceObjects),
        dataSearchBlog: ds.cloneWithRows([])
      });
    } else {
      this.setState({
        isSearching: true,
        doneApiCall: true,
        internetConnection: true,
        searchlist: true,
        dataSearchBlog: ds.cloneWithRows(tempdata),
        isLoading: false
      });

      if (tempdata.length == 0) {
        this.setState({
          searchlist: false
        });
      }
    }
  };
  // ** Data filter on text change **  //

  _renderRow(rowData) {
    return (
      <View
        style={
          rowData.id == rerloadlog.length - 1
            ? styles.rowTrendingLast
            : styles.rowTrending
        }
      >
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

  _renderRowBlog(rowData) {
    return (
      <View>
        {rowData.index % 2 === 0 ? (
          <TouchableOpacity
            style={[styles.evenOddBlogBg, { backgroundColor: "#92dcff" }]}
            onPress={() => this._handleNavigation(rowData.id)}
          >
            <ImageBackground
              source={{ uri: rowData.img }}
              style={styles.evenOddImgBg}
            >
              {rowData.isLiked == true ? (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.02 }]}
                >
                  <Image
                    style={styles.likeBtn}
                    source={Images.heart_selected}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
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
              source={{ uri: rowData.img }}
              style={styles.evenOddImgBg}
            >
              {rowData.isLiked == true ? (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.39 }]}
                >
                  <Image
                    style={styles.likeBtn}
                    source={Images.heart_selected}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
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

  swipeRight() {
    console.log("swipeRight");

    if (
      0 <= this.state.paginationCount &&
      this.state.paginationCount < this.state.totalPageCount - 1
    ) {
      this.refs.swiper.scrollBy(1);

      if (this.state.paginationCount == this.state.blogCount.length - 1) {
        this.setState({
          paginationCount: 0,
          lastClickedDigit: 0
        });
      } else {

        if(this.state.paginationCount >= this.state.blogCount.length-Globals.PAGE_LIMIT){
          this.setState({
            paginationCount: this.state.paginationCount + 1,
            lastClickedDigit: this.state.paginationCount + 1,
            min_page: this.state.min_page,
            max_page: this.state.max_page,
          });
        }
        else{
          this.setState({
            paginationCount: this.state.paginationCount + 1,
            lastClickedDigit: this.state.paginationCount + 1,
            min_page: this.state.min_page + 1,
            max_page: this.state.max_page + 1,
          });
        }

        console.log("max right"+this.state.max_page);
        console.log("min right"+this.state.min_page);

      }

      console.log(this.state.paginationCount);
    }
  }

  swipeLeft() {
    console.log("swipeLeft==");
    if (
      0 < this.state.paginationCount &&
      this.state.paginationCount < this.state.totalPageCount
    ) {
      this.refs.swiper.scrollBy(-1);

      if (this.state.paginationCount == 0) {
        this.setState({
          paginationCount: this.state.blogCount.length - 1,
          lastClickedDigit: this.state.blogCount.length - 1,
        });
      } else {

        if(this.state.paginationCount <= Globals.PAGE_LIMIT){
          this.setState({
            paginationCount: this.state.paginationCount - 1,
            lastClickedDigit: this.state.paginationCount - 1,
            max_page: this.state.max_page,
            min_page: this.state.min_page,
          });
        }else{
          this.setState({
            paginationCount: this.state.paginationCount - 1,
            lastClickedDigit: this.state.paginationCount - 1,
            max_page: this.state.max_page-1,
            min_page: this.state.min_page-1,
          });
        }
        console.log("max left"+this.state.max_page);
        console.log("min left"+this.state.min_page);
      }
      console.log(this.state.paginationCount);
    }
  }

  onCountPress(index) {
    console.log("onCountPress==");
    console.log(index);

    var currentClickedDigit = index;
    this.setState({
      lastClickedDigit: currentClickedDigit,
      paginationCount: currentClickedDigit
    });

    var diff = currentClickedDigit - this.state.lastClickedDigit;
    this.refs.swiper.scrollBy(diff);

    console.log("onCountPressPaginationCount==");
    console.log(this.state.paginationCount);
  }

  renderPageData(index) {
    const {
      paginationCount,
      pageIndex,
      currPageCount,
      totalCount
    } = this.state;

    console.log("Render Page Data");

    var tempPagination = [];

    // this.setState({
    //   dataSourceBlog: ds.cloneWithRows([])
    // });

    for (var k = 0; k < pageData.length; k++) {
      if (pageData[k].pageNumber == index) {
        tempPagination.push({
          index: k,
          pageNumber: pageData[k].pageNumber,
          id: pageData[k].id,
          title: pageData[k].title,
          excerpt: pageData[k].excerpt,
          content: pageData[k].content,
          date: pageData[k].date,
          img: pageData[k].img,
          author: pageData[k].author,
          bgColor: pageData[k].bgColor,
          isLiked: pageData[k].isLiked
        });
      }
    }

    this.setState({
      pageIndex: index,
      currPageCount: paginationCount,
      dataSourceBlog: ds.cloneWithRows(tempPagination)
    });
  }

  render() {
    // console.log("dataSourceblog==");
    // console.log(" " + this.state.dataSourceBlog.getRowCount());
    const { blogCount, navigation } = this.state;
    // const cat_id = this.props.navigation.state.params.CatID.toString();
    // const cat_name = this.props.navigation.state.params.CatNAME.toString();

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
                                  }
                                >
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
                        <Swiper
                          style={{ height: listViewHeight }}
                          ref="swiper"
                          showsButtons={false}
                          autoplay={false}
                          horizontal={true}
                          loop={true}
                          dot={<View />}
                          activeDot={<View />}
                          index={0}
                          scrollEnabled={false}
                          onIndexChanged={index => this.renderPageData(index)}>

                          {blogCount.map((itemBlog, key) => {
                            return (
                              <View
                                style={{
                                  width: Metrics.WIDTH,
                                  height: listViewHeight,
                                  backgroundColor: "white"
                                }}
                                key={key}
                              >
                                <ListView
                                  dataSource={this.state.dataSourceBlog}
                                  renderRow={this._renderRowBlog.bind(this)}
                                  onContentSizeChange={this.onContentSize}
                                  scrollEnabled={false}
                                  enableEmptySections
                                  pageSize={4}
                                />
                              </View>
                            );
                          })}
                        </Swiper>
                        <View style={styles.footerStyle}>
                          <TouchableOpacity
                            onPress={() =>
                              I18nManager.isRTL
                                ? this.swipeRight()
                                : this.swipeLeft()
                            }
                            style={styles.paginationArrowBg}
                          >
                            <Image
                              source={Images.paginationLeftArrow}
                              style={styles.paginationArrow}
                            />
                          </TouchableOpacity>

                          <View style={styles.paginationCountBg}>
                            {blogCount.map((itemCount, index) => {
                              return (
                                <TouchableOpacity
                                  key={index}
                                  onPress={() =>
                                    this.onCountPress(itemCount.id)
                                  }
                                >
                                { itemCount.id +1 < this.state.max_page && this.state.min_page < itemCount.id +1 ?
                                    <Text
                                      style={
                                        itemCount.id == this.state.paginationCount
                                          ? [
                                              styles.paginationCountTxt,
                                              { color: "#ffc700" }
                                            ]
                                          : [
                                              styles.paginationCountTxt,
                                              { color: "black" }
                                            ]
                                      }>

                                      { itemCount.id + 1}

                                    </Text>
                                  :null}
                                </TouchableOpacity>
                              );
                            })}
                          </View>

                          <TouchableOpacity
                            onPress={() =>
                              I18nManager.isRTL
                                ? this.swipeLeft()
                                : this.swipeRight()
                            }
                            style={styles.paginationArrowBg}
                          >
                            <Image
                              source={Images.paginationRightArrow}
                              style={styles.paginationArrow}
                            />
                          </TouchableOpacity>
                        </View>
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
                            }}
                          >
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
                  onPress={() => this._getPostList()}
                >
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
    var tempPagination = [];
    temp = likedPosts;
    temp1 = likedPosts;
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

      if (ismatch == false) {
        console.log("ID Added");
        temp1.push({
          id: listId
        });
      }
    } else {
      console.log("ID Added");
      temp1.push({
        id: listId
      });
    }

    console.log(temp1);

    for (var i = 0; i < pageData.length; i++) {
      if (pageData[i].id == listId) {
        if (pageData[i].isLiked) {
          pageData[i].isLiked = false;
        } else {
          pageData[i].isLiked = true;
        }
      }
    }

    console.log(dataSourceObjects);
    console.log(this.state.pageIndex);

    for (var k = 0; k < pageData.length; k++) {
      if (pageData[k].pageNumber == this.state.pageIndex) {
        tempPagination.push({
          index: k,
          pageNumber: pageData[k].pageNumber,
          id: pageData[k].id,
          title: pageData[k].title,
          excerpt: pageData[k].excerpt,
          content: pageData[k].content,
          date: pageData[k].date,
          img: pageData[k].img,
          author: pageData[k].author,
          bgColor: pageData[k].bgColor,
          isLiked: pageData[k].isLiked
        });
      }
    }

    console.log(tempPagination);

    this.setState({
      dataSourceBlog: ds.cloneWithRows(tempPagination)
    });
    AsyncStorage.multiSet([["LikedPostList", JSON.stringify(temp1)]]);
    //}
  }
}
