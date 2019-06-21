
import React, { Component } from 'react';
import { View,Text, Image, StatusBar, Platform, TouchableOpacity, BackHandler,ListView,ImageBackground,ScrollView,Picker, I18nManager, AsyncStorage} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body, Header} from 'native-base';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Dropdown } from 'react-native-material-dropdown';
import Dropdown from '../../../Components/Dropdown/dropdown/';
import { Fonts, Metrics, Colors, Images } from '../../../Themes/';
import { CachedImage } from 'react-native-cached-image';

var ProductData = [];

const WishListItemOne = "https://antiqueruby.aliansoftware.net/Images/woocommerce/wishListItemOne.png";
const WishListItemTwo = "https://antiqueruby.aliansoftware.net/Images/woocommerce/image_01.jpg";

var data = [
  {
    id: 1,
    isLike: true,
    productImage: {uri:WishListItemOne},
    productTitle: "W-Faux Leather With Quilted Sleeve",
    price: "$30.00",
    size: [
      {id: 1,value : "M"},
      {id: 2,value : "L"},
      {id: 3,value : "X"},
      {id: 4,value : "XL"},
      {id: 5,value : "XL"},
    ],
    color: [
      {id: 1,color: "#e70f08"},
      {id: 2,color: "#c0c0c0"},
      {id: 3,color: "#885d25"}
    ],
    selectedColorId:1,
  },
  {
    id: 2,
    isLike: true,
    productImage: {uri:WishListItemTwo},
    productTitle: "W-Faux Leather With Quilted Sleeve",
    price: "$40.00",
    size: [
      {id: 1,value : "M"},
      {id: 2,value : "L"},
      {id: 3,value : "X"},
      {id: 4,value : "XL"}
    ],
    color: [
      {id: 1,color: "#0947ba"},
      {id: 2,color: "#c4c9d7"},
      {id: 3,color: "#3CB371"},
      {id: 4,color: "#885d25"}
    ],
    selectedColorId:3,
  },
  {
    id: 3,
    isLike: true,
    productImage: {uri:WishListItemOne},
    productTitle: "W-Faux Leather With Quilted Sleeve",
    price: "$30.00",
    size: [
      {id: 1,value : "M"},
      {id: 2,value : "L"},
      {id: 3,value : "X"},
      {id: 4,value : "XL"}
    ],
    color: [
      {id: 1,color: "#e70f08"},
      {id: 2,color: "#c0c0c0"},
      {id: 3,color: "#885d25"},
      {id: 4,color: "#FFFF00"},
      {id: 5,color: "#3CB371"},
      {id: 6,color: "#885d25"}
    ],
    selectedColorId:4,
  }
]

export default class WishList extends Component {

  constructor(props) {
 		super(props);


 		this.state = {
      ArrivedForWishList: "",
      selectedSize: 'M',
      selectedLots: '1',
      isDroDownOpen: false,
      typography: 'M',
    }
    this.onChangeText = this.onChangeText.bind(this);
 	}

  componentWillMount() {
		var that = this;

    AsyncStorage.multiGet(['ArrivedForWishList']).then((data) => {

      this.setState({ArrivedForWishList: data[0][1]})

    });

    // BackHandler.addEventListener('hardwareBackPress', this.backPressed);

		BackHandler.addEventListener('hardwareBackPress', function() {
			that._backPress("fromHardwareBack");
      // that.props.navigation.goBack();
			return true;
		});

    ProductData = data;

	}

  // componentWillUnmount() {
  //     BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
  // }
  //
  // backPressed = () => {
  //   this.props.navigation.goBack();
  //   return true;
  // }

  onCheckBoxPressColor(productid, selectedColorId, colorid) {

    var i;
    for(i=0;i<ProductData.length;i++){
      if(ProductData[i].id == productid){
        ProductData[i].selectedColorId = colorid;
      }
    }

    ProductData = ProductData;
    this.setState({
      ProductData: ProductData,
    });

  }

  _handleLike(id,like) {

      var i;
      for(i=0;i<ProductData.length;i++){
        if(ProductData[i].id == id){
          if(like == true){
              ProductData[i].isLike = false;
          } else {
              ProductData[i].isLike = true;
          }
        }
      }

      this.setState({
        ProductData: ProductData,
      });
      ProductData = ProductData;

    }

  _backPress(backFrom) {
    const { ArrivedForWishList } = this.state;

    if (ArrivedForWishList == "ECommerceCategoryProduct") {
      this.props.navigation.navigate("ECommerceCategoryProduct");
    }
    else if (ArrivedForWishList == "ECommerceSale") {
      this.props.navigation.navigate("ECommerceSale");
    }
    else if (ArrivedForWishList == "ECommerceMyBag") {
      this.props.navigation.navigate("ECommerceMyBag");
    }
    else if (ArrivedForWishList == "ECommerceMenu") {
      if (backFrom == "fromHardwareBack") {
        this.props.navigation.navigate("ECommerceMenu");
      }
      if (backFrom == "fromLeftIcon") {
        this.props.navigation.navigate("DrawerOpen");
      }
    }
    else if (ArrivedForWishList == "ECommerceMyAccount") {
      this.props.navigation.navigate("ECommerceMyAccount");
    }
    else if (ArrivedForWishList == "ECommerceMyInformation") {
      this.props.navigation.navigate("ECommerceMyInformation");
    }
    else if (ArrivedForWishList == "ECommerceOrderHistory") {
      this.props.navigation.navigate("ECommerceOrderHistory");
    }
    else if (ArrivedForWishList == "ECommerceSale") {
      this.props.navigation.navigate("ECommerceSale");
    }
    else if (ArrivedForWishList == "ECommerceCheckout") {
      this.props.navigation.navigate("ECommerceCheckout");
    }
    else if (ArrivedForWishList == "ECommerceLogin") {
      this.props.navigation.navigate("ECommerceLogin");
    }
    else if (ArrivedForWishList == "ECommerceProductDetails") {
      this.props.navigation.navigate("ECommerceProductDetails");
    }
    else if (ArrivedForWishList == "ECommerceProductDetailsTab") {
      this.props.navigation.navigate("ECommerceProductDetailsTab");
    }
    else {
      this.props.navigation.navigate('ECommerceMenu');
    }
  }

  _handleProductDetailClick() {

    this.props.navigation.navigate("ECommerceProductDetails",{},
    {
      type: "Navigation/NAVIGATE",
      routeName: "ECommerceProductDetails",
      params: {name: "ECommerceWishList"}
    })

  }

  _handleBagNavigation() {
		AsyncStorage.multiSet([
			['ArrivedFrom',"ECommerceWishList"],
		]);
		this.props.navigation.navigate("ECommerceMyBag");
	}

  onChangeText(text) {
    this.setState({user_category_id: text});
  }

  onCheckBoxPress(id) {
   this.setState({
     selectedLots: id
   });
 }

  _handleDropDownClick(size){
    this.setState({selectedSize: size});
    this.setState({isDroDownOpen: !this.state.isDroDownOpen})
  }

  _openDropDown(id){
    this.onCheckBoxPress(id);
    this.setState({isDroDownOpen: !this.state.isDroDownOpen})
  }

  _handleLEFT(ArrivedForWishList) {
    if (ArrivedForWishList == "ECommerceMenu") {
      return (
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
        >
          <Ionicons name="ios-menu" size={30} color="white" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => this._backPress("fromLeftIcon")}
        >
          <FontAwesome
            name={I18nManager.isRTL ? "angle-right" : "angle-left"}
            size={35}
            color="white"
            style={{paddingRight: 20}}
          />
        </TouchableOpacity>
      );
    }
  }


  render(){
    const { ArrivedForWishList } = this.state;

		StatusBar.setBarStyle("light-content", true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#0e1130',true);
			StatusBar.setTranslucent(true);
		}

    return(
      <Container style={styles.main}>

      <Header
        androidStatusBarColor={"#0e1130"}
        style={styles.header}>
          <Left style={styles.left}>
            {this._handleLEFT(ArrivedForWishList)}
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>Wish List</Text>
          </Body>
          <Right style={styles.right}>
            <View style={{ flexDirection: 'row' }}>
							<View style={{ flexDirection: 'row' }}>
								<View style={styles.heartBg}>
									<FontAwesome
										name="heart"
										size={Fonts.moderateScale(8)}
										style={styles.heartIcon}
									/>
								</View>
								<View style={styles.alertBg}>
									<Text style={styles.alertTxt}>1</Text>
								</View>
							</View>
							<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this._handleBagNavigation()}>
								<SimpleLineIcons
									name="handbag"
									size={Fonts.moderateScale(18)}
									style={styles.bagIcon}
								/>
								<View style={styles.alertBg}>
									<Text style={styles.alertTxt}>3</Text>
								</View>
							</TouchableOpacity>
						</View>
          </Right>
      </Header>

      <Content>
      {
        ProductData.map((item, index) => {
          return(
            <View style={styles.row} key={index}>
              <TouchableOpacity style={styles.rowBg} onPress={() => this._handleProductDetailClick()}>
                <CachedImage source={item.productImage} style={styles.productImage}>
                {
                  (item.isLike == true) ?
                   <TouchableOpacity onPress = {() => this._handleLike(item.id,item.isLike)}>
                       <FontAwesome name="heart" size={18} color={'red'} style={styles.heartListIcon} />
                   </TouchableOpacity> :
                   <TouchableOpacity onPress = {() => this._handleLike(item.id,item.isLike)}>
                     <FontAwesome name="heart" size={18} color={'#cecece'} style={styles.heartListIcon} />
                   </TouchableOpacity>
                }
                </CachedImage>

                <View style={styles.productDetailBg}>

                  <Text style={styles.productTitleTxt}>{item.productTitle}</Text>

                  <View style={[styles.detailFieldRow,{paddingTop: Metrics.WIDTH * 0.01,paddingBottom: Metrics.WIDTH * 0.01}]}>
                    <Text style={styles.priceTxt}>{item.price}</Text>
                    <TouchableOpacity style={styles.closeIconBg} onPress={() => alert('close')}>
                      <FontAwesome name="close" size={12} style={styles.closeImg}/>
                    </TouchableOpacity>
                  </View>

                  <View style={[styles.detailFieldRow,{marginTop: Metrics.WIDTH * 0.07}]}>
                    <Text style={styles.productTitleTxt}>Size</Text>

                    <View>
                      <Dropdown
                        data={item.size}
                        ref='catInput'
                        value={this.state.typography}
                        onChangeText={this.onChangeText}
                        labelHeight={0}
                        containerStyle={styles.dropstyle}
                        baseColor='rgba(0, 0, 0, .00)'
                        dropdownPosition={1}
                        />
                    </View>
                  </View>

                  <View style={[styles.detailFieldRow,{marginTop: Metrics.WIDTH * 0.03, marginBottom: Metrics.HEIGHT * 0.015}]}>
                    <Text style={styles.productTitleTxt}>Color</Text>
                    <View style={styles.listColorBg}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >
                        {
                          item.color.map((itemColor, index) => {
                            return (
                              <View key={index}>
                                  <TouchableOpacity
                                    onPress={() => this.onCheckBoxPressColor(item.id, item.selectedColorId, itemColor.id)}
                                    style={
                                      item.selectedColorId == itemColor.id
                                      ?
                                      [
                                        styles.colorViewer,
                                        {
                                          backgroundColor: itemColor.color,
                                          marginRight: Metrics.WIDTH * 0.02,
                                          borderColor: '#ffc700',
                                        }
                                      ]
                                      :
                                      [
                                        styles.colorViewer,
                                        {
                                          backgroundColor: itemColor.color,
                                          marginRight: Metrics.WIDTH * 0.02,
                                          borderColor: 'transparent',
                                        }
                                        ]
                                      }/>
                              </View>
                            )
                          })
                        }
                    </ScrollView>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.rowAddtoBagBtn} onPress={() => this._handleBagNavigation()}>
                    <Text style={styles.footerBtnTxt}>Add to Bag</Text>
                  </TouchableOpacity>

                </View>
                {
                  (this.state.selectedLots == item.id) ?
                  <View>
                  {
                    (this.state.isDroDownOpen == true) ?
                    <View style={styles.listDropDown}>
                    {
                      item.size.map((itemSize,index)=> {
                        return(
                          <TouchableOpacity onPress={() => this._handleDropDownClick(itemSize.value)} key={index}>
                            <Text>{itemSize.value}</Text>
                          </TouchableOpacity>
                        )
                      })
                    }
                    </View> : null
                  }
                  </View>  : null
                }

              </TouchableOpacity>
              <View style={(item.id === ProductData.length) ? null : styles.listDivider}>
              </View>
            </View>
          )
        })
      }
      </Content>


      <View style={styles.divider}>
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.footerBtnBg} onPress={() => this._handleBagNavigation()}>
          <Text style={styles.footerBtnTxt}>Add all to Bag</Text>
        </TouchableOpacity>
      </View>

      </Container>
    );
  }

}
