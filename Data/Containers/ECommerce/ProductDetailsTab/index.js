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
  ScrollView,
  I18nManager,
  AsyncStorage
} from "react-native";
import {
  Content,
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
  Segment,
  Label
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { Dropdown } from "react-native-material-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Rating, AirbnbRating } from "react-native-ratings";
import styles from "./styles";
import { Fonts, Metrics, Colors, Images } from "../../../Themes/";
import FloatingLabelInput from "../FloatingLabelInput";
import { CachedImage } from "react-native-cached-image";

var screenName = "";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    if (this.props.navigation.state.params) {
      const navParams = this.props.navigation.state.params;
      screenName = navParams.name;
    }

    this.state = {
      segment: 1,
      favoriteNotification: 1,
      cartNotification: 3,
      name: "",
      email: "",
      title: "",
      comment: "",
      rating: 0,
      ArrivedForProductDetailsTab: ""
    };
  }

  componentWillMount() {
    var that = this;

    AsyncStorage.multiGet(["ArrivedForProductDetailsTab"]).then(data => {
      this.setState({ ArrivedForProductDetailsTab: data[0][1] });

      console.log("PRODUCTDETAILTAB==");
      console.log(data[0][1]);
    });

    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("ECommerceProductDetails");
      return true;
    });
  }

  _scrollToInput(reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.scrollToFocusedInput(reactNode);
  }

  _renderActiveComponent = () => {
    const { segment } = this.state;

    const ProductOne =
      "https://antiqueruby.aliansoftware.net/Images/woocommerce/product_one.png";
    const ProductTwo =
      "https://antiqueruby.aliansoftware.net/Images/woocommerce/product_two.png";
    const ProductThree =
      "https://antiqueruby.aliansoftware.net/Images/woocommerce/product_three.png";
    const ProductFour =
      "https://antiqueruby.aliansoftware.net/Images/woocommerce/product_four.png";

    var data = [
      {
        from: "WAREHOUSE",
        product_name: "Sequin Dress Lola Skye",
        prise: "210.00",
        discount_prise: "160.00",
        brand_name: "ZALORA",
        free_delivery: "Delivery above $40* Free",
        return_timing: "30 Days Return Free",
        cash_delivery: "Cash On Delivery",
        description:
          "Go bare and get that sun-kissed glow when you put on this pleated dress from WAREHOUSE. Its minimalist cami-style top with striped skirt makes a flirty statement to your outfit.",
        dress_description: [
          "Viscose",
          "Open neckline",
          "Sleeveless",
          "Cross-back spaghetti straps",
          "Pleated skirt"
        ],
        related_Products: [
          { image: { uri: ProductOne } },
          { image: { uri: ProductTwo } },
          { image: { uri: ProductThree } },
          { image: { uri: ProductFour } },
          { image: { uri: ProductOne } },
          { image: { uri: ProductTwo } }
        ]
      }
    ];

    // Details
    if (segment === 1) {
      return (
        <Content style={styles.detailContainer}>
          {data.map((item, index) => {
            return (
              <View key={index}>
                <View style={styles.productDetail}>
                  <Text style={styles.textStyleBold}>{item.from}</Text>
                  <Text style={styles.textStyle}>{item.product_name}</Text>
                  <View style={styles.row}>
                    <Text style={styles.textStylePrise}>${item.prise} </Text>
                    <Text style={styles.discountPrise}>
                      {" "}
                      ${item.discount_prise}
                    </Text>
                  </View>
                </View>

                <View style={styles.contentSpace}>
                  <View style={styles.row}>
                    <Text style={styles.textStyle}>By </Text>
                    <Text style={[styles.textStyleBrand, styles.textStyle]}>
                      {item.brand_name}
                    </Text>
                  </View>
                  <Text style={styles.textStyle}>{item.free_delivery}</Text>
                  <Text style={styles.textStyle}>{item.return_timing}</Text>
                  <Text style={styles.textStyle}>{item.cash_delivery}</Text>
                </View>

                <View style={styles.contentSpace}>
                  <Text style={styles.textStyle}>{item.description}</Text>
                </View>

                <View style={styles.contentSpace}>
                  {item.dress_description.map((item, index) => {
                    return (
                      <View key={index}>
                        <Text style={styles.textStyle}>- {item}</Text>
                      </View>
                    );
                  })}
                </View>

                <View style={[styles.divider, styles.contentSpace]} />
                <Text
                  style={[
                    styles.textStyle,
                    { marginTop: Metrics.HEIGHT * 0.015 }
                  ]}
                >
                  Related Products
                </Text>
                <ScrollView
                  horizontal={true}
                  style={styles.contentSpace}
                  showsHorizontalScrollIndicator={false}
                >
                  {item.related_Products.map((item, index) => {
                    return (
                      <View key={index}>
                        <CachedImage
                          source={item.image}
                          style={styles.productImage}
                        />
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            );
          })}
        </Content>
      );
    }

    // Reviews
    if (segment === 2) {
      return (
        <View style={styles.reviewContainer}>
          <View style={styles.reviewDivider} />
          <Content>
            <View style={styles.ratingStyle}>
              <Rating
                imageSize={Fonts.moderateScale(24)}
                fractions={1}
                startingValue={0}
                onFinishRating={rating => this.setState({ rating })}
              />

              <Text
                style={[styles.textStyle, { marginTop: Metrics.HEIGHT * 0.02 }]}
              >
                {this.state.rating == 0
                  ? "( No review yet )"
                  : "Review is: " + this.state.rating}
              </Text>
            </View>

            {/*<Item floatingLabel style={styles.item}>
							<Label><Text style={styles.textLabel}>Name</Text></Label>
							<Input  placeholderTextColor={"#959595"} selectionColor={"#959595"} style={styles.inputemail}/>
						</Item>
						<Item floatingLabel style={styles.item}>
							<Label><Text style={styles.textLabel}>Email Address</Text></Label>
							<Input  placeholderTextColor={"#959595"} selectionColor={"#959595"} style={styles.inputemail}/>
						</Item>
						<Item floatingLabel style={styles.item}>
							<Label><Text style={styles.textLabel}>Title</Text></Label>
							<Input  placeholderTextColor={"#959595"} selectionColor={"#959595"} style={styles.inputemail}/>
						</Item>
						<Item floatingLabel style={styles.item}>
							<Label><Text style={styles.textLabel}>Comment</Text></Label>
							<Input  placeholderTextColor={"#959595"} selectionColor={"#959595"} style={styles.inputemail}/>
						</Item>*/}

            <View style={styles.floatingView}>
              <FloatingLabelInput
                label="Name"
                value={this.state.name}
                keyboardType="default"
                returnKeyType="done"
                maxLength={20}
                selectionColor={"#959595"}
                autoCapitalize="none"
              />

              <View style={{ height: 10 }} />

              <FloatingLabelInput
                label="Email Address"
                value={this.state.email}
                keyboardType="email-address"
                returnKeyType="done"
                maxLength={40}
                selectionColor={"#959595"}
                autoCapitalize="none"
              />

              <View style={{ height: 10 }} />

              <FloatingLabelInput
                label="Title"
                value={this.state.title}
                keyboardType="default"
                returnKeyType="done"
                maxLength={30}
                selectionColor={"#959595"}
                autoCapitalize="none"
              />

              <View style={{ height: 10 }} />

              <FloatingLabelInput
                label="Comment"
                value={this.state.comment}
                keyboardType="default"
                returnKeyType="done"
                selectionColor={"#959595"}
                autoCapitalize="none"
              />
            </View>

            {/*<Item style={styles.item}>
							<Input
								placeholder='Email Address'
								placeholderTextColor={Colors.lightGray}
								selectionColor={Colors.lightGray}
								style={styles.inputStyle}
								onChangeText={(email)=>this.setState({email})}/>
						</Item>
						<Item style={styles.item}>
							<Input
								placeholder='Title'
								placeholderTextColor={Colors.lightGray}
								selectionColor={Colors.lightGray}
								style={styles.inputStyle}
								onChangeText={(title)=>this.setState({title})}/>
						</Item>
						<Item style={styles.item}>
							<Input
								placeholder='Comment'
								placeholderTextColor={Colors.lightGray}
								selectionColor={Colors.lightGray}
								style={styles.inputStyle}
								onChangeText={(comment)=>this.setState({comment})}/>
						</Item>*/}
          </Content>
          <View style={styles.bottomView}>
            <TouchableOpacity
              onPress={() => alert("Submit your review")}
              style={styles.submitBg}
            >
              <Text style={styles.activeTab}>Submit your review</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  _handleBagNavigation() {
    AsyncStorage.multiSet([["ArrivedFrom", "ECommerceProductDetailsTab"]]);
    this.props.navigation.navigate("ECommerceMyBag");
  }

  _handleWishListNavigation() {
    AsyncStorage.multiSet([
      ["ArrivedForWishList", "ECommerceProductDetailsTab"]
    ]);
    this.props.navigation.navigate("ECommerceWishList");
  }

  render() {
    const { ArrivedForProductDetailsTab } = this.state;

    let BG_Image = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/ic_back01_sone.png"
    };
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#0e1130", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() =>
                this.props.navigation.navigate("ECommerceProductDetails")
              }
            >
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={Fonts.moderateScale(30)}
                color="white"
                style={{paddingRight: 20}}
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>Product Details</Text>
          </Body>
          <Right style={styles.right}>
            {ArrivedForProductDetailsTab ==
            "ECommerceProductDetailsWishList" ? null : (
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => this._handleWishListNavigation()}
              >
                <View style={styles.heartBg}>
                  <FontAwesome
                    name="heart"
                    size={Fonts.moderateScale(8)}
                    style={styles.heartIcon}
                  />
                </View>
                {this.state.favoriteNotification != 0 ? (
                  <View style={styles.alertBg}>
                    <Text style={styles.alertTxt}>1</Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            )}
            {ArrivedForProductDetailsTab ==
            "ECommerceProductDetailsMyBag" ? null : (
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => this._handleBagNavigation()}
              >
                <SimpleLineIcons
                  name="handbag"
                  size={Fonts.moderateScale(18)}
                  style={styles.bagIcon}
                />
                {this.state.cartNotification != 0 ? (
                  <View style={styles.alertBg}>
                    <Text style={styles.alertTxt}>3</Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            )}
          </Right>
        </Header>
        <KeyboardAwareScrollView>
          <View style={styles.content}>
            <Segment style={styles.segmentTabSec}>
              <Button
                first
                style={
                  this.state.segment === 1
                    ? [
                        styles.segmentSelectedTab,
                        { borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }
                      ]
                    : styles.segmentTab
                }
                active={this.state.segment === 1 ? true : false}
                onPress={() => this.setState({ segment: 1 })}
              >
                <Text
                  style={
                    this.state.segment === 1
                      ? styles.activeTab
                      : styles.normalTab
                  }
                >
                  Details
                </Text>
              </Button>

              <Button
                last
                style={
                  this.state.segment === 1
                    ? styles.segmentTab
                    : [
                        styles.segmentSelectedTab,
                        { borderTopRightRadius: 5, borderBottomRightRadius: 5 }
                      ]
                }
                active={this.state.segment === 2 ? true : false}
                onPress={() => this.setState({ segment: 2 })}
              >
                <Text
                  style={
                    this.state.segment === 2
                      ? styles.activeTab
                      : styles.normalTab
                  }
                >
                  Reviews
                </Text>
              </Button>
            </Segment>

            {this._renderActiveComponent()}
          </View>
        </KeyboardAwareScrollView>
      </Container>
    );
  }
}
