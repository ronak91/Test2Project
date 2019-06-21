 import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
  BackHandler,
  ScrollView,
  I18nManager,
  TextInput,
  Modal,
  AsyncStorage
} from "react-native";
import {
  Content,
  Container,
  Right,
  Header,
  Left,
  Body,
  Title
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import { Images, Fonts, Metrics, Colors } from "../../../Themes/";
import { CachedImage } from "react-native-cached-image";
import FloatingLabelInput from '../FloatingLabelInput';

export default class CheckOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStep: 1,
      selectedLots: "1",
      data: [
        {
          id: 1,
          OrderID: "#101238646",
          Date: "08/05/2015",
          Product: "W-Faux Leather With Quilted Sleeve",
          Price: "$160.00",
          Status: "Complete"
        },
        {
          id: 2,
          OrderID: "#101897696",
          Date: "08/05/2016",
          Product: "Customized Amato Racing Leather Jacket with Artwork",
          Price: "$180.00",
          Status: "Cancel"
        },
        {
          id: 3,
          OrderID: "#201345690",
          Date: "11/04/2017",
          Product: "Fashionable Denim & Leather Jacket",
          Price: "$120.00",
          Status: "Complete"
        }
      ],

      paymentMethod: [
        {
          id: 0,
          paymentMethodImage: Images.payPal,
          paymentMethodTitle: "Paypal",
          isOpen: false
        },
        {
          id: 1,
          paymentMethodImage: Images.visaCard,
          paymentMethodTitle: "Visa",
          isOpen: false
        },
        {
          id: 2,
          paymentMethodImage: Images.masterCard,
          paymentMethodTitle: "Master Card",
          isOpen: false
        },
        {
          id: 3,
          paymentMethodImage: Images.discover,
          paymentMethodTitle: "Discover",
          isOpen: false
        }
      ],

      editInfoModelVisible: false,
    };
  }

  componentWillMount() {
		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('ECommerceMyBag');
			return true;
		});
	}

  toggleEditInfoModal(visible) {
    this.setState({ editInfoModelVisible: visible });
  }

  _handleEditInfomationModal() {
    this.setState({ editInfoModelVisible: false });
    this.toggleEditInfoModal(true);
  }

  onCheckBoxPress(id, isOpen) {
    console.log("==PAYMENT_METHOD11==");
    console.log(this.state.paymentMethod);

    this.setState({
      selectedLots: id
    });

    var temp = [];

    temp = this.state.paymentMethod.slice(); //copy array

    for (var i = 0; i < temp.length; i++) {
      if (id == i) {
        console.log("==PAYMENT_ID==");
        console.log(id);
        if (temp[i].isOpen == false) {
          temp[i].isOpen = true;
        } else {
          temp[i].isOpen = false;
        }
      } else {
        temp[i].isOpen = false;
      }
    }

    console.log("==PAYMENT_METHOD==");
    console.log(this.state.paymentMethod);

    this.setState({ paymentMethod: temp });
  }

  _renderSubHeader = () => {
    const { selectedStep } = this.state;

    if (selectedStep === 1) {
      return <Text style={styles.subHeaderTitle}>BILLING INFORMATION</Text>;
    }

    if (selectedStep === 2) {
      return <Text style={styles.subHeaderTitle}>PAYMENT METHOD</Text>;
    }

    if (selectedStep === 3) {
      return <Text style={styles.subHeaderTitle}>YOUR ORDER</Text>;
    }
  };

  _renderSelectStep = () => {
    const { selectedStep } = this.state;

    if (selectedStep === 1) {
      return (
        <View style={[styles.stepBg, { marginBottom: Metrics.HEIGHT * 0.04 }]}>
          <View style={[styles.stepCountBg, { backgroundColor: "#ffc700" }]}>
            <Text style={styles.stepCountTxt}>1</Text>
          </View>
          <View style={[styles.stepDistance, { backgroundColor: "#798c9c" }]} />
          <View style={[styles.stepCountBg, { backgroundColor: "#798c9c" }]}>
            <Text style={styles.stepCountTxt}>2</Text>
          </View>
          <View style={[styles.stepDistance, { backgroundColor: "#798c9c" }]} />
          <View style={[styles.stepCountBg, { backgroundColor: "#798c9c" }]}>
            <Text style={styles.stepCountTxt}>3</Text>
          </View>
        </View>
      );
    }

    if (selectedStep === 2) {
      return (
        <View style={[styles.stepBg, { marginBottom: Metrics.HEIGHT * 0.04 }]}>
          <View style={[styles.stepCountBg, { backgroundColor: "#ffc700" }]}>
            <Text style={styles.stepCountTxt}>1</Text>
          </View>
          <View style={[styles.stepDistance, { backgroundColor: "#ffc700" }]} />
          <View style={[styles.stepCountBg, { backgroundColor: "#ffc700" }]}>
            <Text style={styles.stepCountTxt}>2</Text>
          </View>
          <View style={[styles.stepDistance, { backgroundColor: "#798c9c" }]} />
          <View style={[styles.stepCountBg, { backgroundColor: "#798c9c" }]}>
            <Text style={styles.stepCountTxt}>3</Text>
          </View>
        </View>
      );
    }

    if (selectedStep === 3) {
      return (
        <View style={[styles.stepBg, { marginBottom: Metrics.HEIGHT * 0.03 }]}>
          <View style={[styles.stepCountBg, { backgroundColor: "#ffc700" }]}>
            <Text style={styles.stepCountTxt}>1</Text>
          </View>
          <View style={[styles.stepDistance, { backgroundColor: "#ffc700" }]} />
          <View style={[styles.stepCountBg, { backgroundColor: "#ffc700" }]}>
            <Text style={styles.stepCountTxt}>2</Text>
          </View>
          <View style={[styles.stepDistance, { backgroundColor: "#ffc700" }]} />
          <View style={[styles.stepCountBg, { backgroundColor: "#ffc700" }]}>
            <Text style={styles.stepCountTxt}>3</Text>
          </View>
        </View>
      );
    }
  };

  _renderActiveComponent = () => {
    const { selectedStep } = this.state;

    const ProductImgOne =
      "https://antiqueruby.aliansoftware.net/Images/woocommerce/productOrderOne.png";
    const ProductImgTwo =
      "https://antiqueruby.aliansoftware.net/Images/woocommerce/productOrderTwo.png";

    var productOrderList = [
      {
        id: 1,
        productTile: "W-Faux Leather With Quailtes Sleeves",
        productPrice: "$130.00",
        size: "M",
        quantity: "2",
        color: "#212025",
        productImage: { uri: ProductImgOne }
      },
      {
        id: 2,
        productTile: "W-Faux Leather With Quailtes Sleeves",
        productPrice: "$160.00",
        size: "XL",
        quantity: "2",
        color: "#212025",
        productImage: { uri: ProductImgTwo }
      }
    ];

    if (selectedStep === 1) {
      return (
        <ScrollView style={styles.contentBillingInformationBg}>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.filedRow}>
              <Text style={styles.filedLabel}>First Name</Text>
              <Text style={styles.fieldInfoTxt}>Hoang</Text>
            </View>
            <View style={styles.fieldDivider} />
          </View>

          <View style={{ flexDirection: "column" }}>
            <View style={styles.filedRow}>
              <Text style={styles.filedLabel}>Last Name</Text>
              <Text style={styles.fieldInfoTxt}>Thai</Text>
            </View>
            <View style={styles.fieldDivider} />
          </View>

          <View style={{ flexDirection: "column" }}>
            <View style={styles.filedRow}>
              <Text style={styles.filedLabel}>Phone</Text>
              <Text style={styles.fieldInfoTxt}>09070570017</Text>
            </View>
            <View style={styles.fieldDivider} />
          </View>

          <View style={{ flexDirection: "column" }}>
            <View style={styles.filedRow}>
              <Text style={styles.filedLabel}>Email</Text>
              <Text style={styles.fieldInfoTxt}>hoang8x.pts@gmail.com</Text>
            </View>
            <View style={styles.fieldDivider} />
          </View>

          <View style={{ flexDirection: "column" }}>
            <View style={styles.filedRow}>
              <Text style={styles.filedLabel}>Address</Text>
              <Text style={styles.fieldInfoTxt}>Ton Duc Thang, Da Nang</Text>
            </View>
            <View style={styles.fieldDivider} />
          </View>

          <View style={{ flexDirection: "column" }}>
            <View style={styles.filedRow}>
              <Text style={styles.filedLabel}>Postcode</Text>
              <Text style={styles.fieldInfoTxt}>123456</Text>
            </View>
            <View style={styles.fieldDivider} />
          </View>

          <TouchableOpacity onPress={() => this.toggleEditInfoModal(true)}>
            <Text style={styles.editInfoTxt}>Edit Information</Text>
          </TouchableOpacity>


            <View style={styles.modalOpenView}>
              <Modal transparent = {true}
                 visible = {this.state.editInfoModelVisible}
                 onRequestClose = {() => { this.state.editInfoModelVisible(false) } }>

                 <View style={styles.modalView}>

                   <View style = {styles.modal}>

                      <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => {this.setState({ editInfoModelVisible: false })}}>
                          <Text style={styles.cancelApplyTxt}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={styles.shareTxt}>Sort</Text>
                        <TouchableOpacity onPress={() => {this.setState({ editInfoModelVisible: false })}}>
                          <Text style={styles.cancelApplyTxt}>Apply</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={{padding: 15}}>

                        <FloatingLabelInput
            							label="First Name"
            							value={"Hoang"}
            							keyboardType="default"
            							returnKeyType="done"
            							maxLength={20}
            							selectionColor={'#959595'}
            							autoCapitalize="none"
            						/>

            						<View style={{ height: 10 }} />

            						<FloatingLabelInput
            							label="Last Name"
            							value={"TouchableOpacity"}
            							keyboardType="default"
            							returnKeyType="done"
            							maxLength={20}
            							selectionColor={'#959595'}
            							autoCapitalize="none"
            						/>

            						<View style={{ height: 10 }} />

                        <FloatingLabelInput
                          label="Phone"
                          value={"09070570017"}
                          keyboardType="phone-pad"
                          returnKeyType="done"
                          maxLength={11}
                          selectionColor={'#959595'}
                          autoCapitalize="none"
                        />

                        <View style={{ height: 10 }} />

            						<FloatingLabelInput
            							label="Email"
            							value={"hoang8x.pts@gmail.com"}
            							keyboardType="email-address"
            							returnKeyType="done"
            							maxLength={40}
            							selectionColor={'#959595'}
            							autoCapitalize="none"
            						/>

            						<View style={{ height: 10 }} />
                          <FloatingLabelInput
                            label="Address"
                            value={"Ton Duc Thang, Da Nang"}
                            keyboardType="default"
                            returnKeyType="done"
                            maxLength={40}
                            selectionColor={'#959595'}
                            autoCapitalize="none"
                          />

                          <View style={{ height: 10 }} />

                          <FloatingLabelInput
                            label="Postcode"
                            value={"123456"}
                            keyboardType="default"
                            returnKeyType="done"
                            maxLength={6}
                            selectionColor={'#959595'}
                            autoCapitalize="none"
                          />

                          <View style={{ height: 10 }} />

                      </View>
                   </View>
                 </View>
              </Modal>
            </View>
        </ScrollView>


      );
    }

    if (selectedStep === 2) {
      return (
        <View
          style={{
            width: Metrics.WIDTH * 0.9,
            alignSelf: "center",
            height: Metrics.HEIGHT * 0.6
          }}
        >
          <Content style={{ marginTop: Metrics.HEIGHT * 0.05 }}>
            <View style={styles.viewPaymentBg}>
              {this.state.paymentMethod.map((item, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      style={
                        this.state.selectedLots == item.id
                          ? [
                              styles.rowPaymentMethod,
                              { backgroundColor: "#f3f3f3" }
                            ]
                          : [
                              styles.rowPaymentMethod,
                              { backgroundColor: Colors.transparent }
                            ]
                      }
                      onPress={() => this.onCheckBoxPress(item.id, item.isOpen)}
                    >
                      <View
                        style={[
                          styles.rowPaymentDetail,
                          { justifyContent: "space-between" }
                        ]}
                      >
                        <View style={styles.rowPaymentDetail}>
                          <Image
                            source={item.paymentMethodImage}
                            style={styles.paymentMethodImage}
                          />
                          <Text
                            style={[
                              styles.fieldInfoTxt,
                              { marginLeft: Metrics.WIDTH * 0.04 }
                            ]}
                          >
                            {item.paymentMethodTitle}
                          </Text>
                        </View>
                        {this.state.selectedLots == item.id ? (
                          <MaterialIcons
                            name="check"
                            size={25}
                            color={"#ffc700"}
                          />
                        ) : null}
                      </View>
                    </TouchableOpacity>

                    {this.state.selectedLots == item.id ? (
                      item.isOpen == true ? (
                        <View>
                          <Text style={[styles.fieldInfoTxt, { padding: 10 }]}>
                            Card Number
                          </Text>

                          <TextInput
                            style={styles.textInput}
                            placeholder="Card Number"
                            placeholderTextColor="#959595"
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            textAlign={I18nManager.isRTL ? "right" : "left"}
                            keyboardType={Platform.OS == 'ios' ? "number-pad" : "phone-pad"}
                            maxLength={16}
                          />

                          <View style={{ flexDirection: "row" }}>
                            <Text
                              style={[styles.fieldInfoTxt, { padding: 10 }]}
                            >
                              Month
                            </Text>
                            <Text
                              style={[
                                styles.fieldInfoTxt,
                                { padding: 10, marginLeft: 30 }
                              ]}
                            >
                              Year
                            </Text>
                          </View>

                          <View style={{ flexDirection: "row" }}>
                            <TextInput
                              style={[
                                styles.textInput,
                                {
                                  width: Metrics.WIDTH * 0.2,
                                  marginLeft: Metrics.WIDTH * 0.03
                                }
                              ]}
                              placeholder="02"
                              placeholderTextColor="#959595"
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              textAlign={I18nManager.isRTL ? "right" : "left"}
                              keyboardType={Platform.OS == 'ios' ? "number-pad" : "phone-pad"}
                              maxLength={2}
                            />

                            <TextInput
                              style={[
                                styles.textInput,
                                {
                                  width: Metrics.WIDTH * 0.2,
                                  marginLeft: Metrics.WIDTH * 0.08
                                }
                              ]}
                              placeholder="22"
                              placeholderTextColor="#959595"
                              underlineColorAndroid="transparent"
                              autoCapitalize="none"
                              textAlign={I18nManager.isRTL ? "right" : "left"}
                              keyboardType={Platform.OS == 'ios' ? "number-pad" : "phone-pad"}
                              maxLength={2}
                            />
                          </View>

                          <Text style={[styles.fieldInfoTxt, { padding: 10 }]}>
                            CVV
                          </Text>

                          <TextInput
                            style={styles.textInput}
                            placeholder="CVV"
                            placeholderTextColor="#959595"
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            textAlign={I18nManager.isRTL ? "right" : "left"}
                            keyboardType={Platform.OS == 'ios' ? "number-pad" : "phone-pad"}
                            maxLength={4}
                          />

                          <View style={styles.saveCancelBg}>
                            <TouchableOpacity
                              style={styles.cancelBg}
                              onPress={() => alert("Cancel")}
                            >
                              <Text style={styles.footerTxt}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={styles.cancelBg}
                              onPress={() => alert("Save")}
                            >
                              <Text style={styles.footerTxt}>Save</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      ) : null
                    ) : null}

                    <View
                      style={
                        item.id == this.state.paymentMethod.length
                          ? null
                          : styles.paymentListDivider
                      }
                    />
                  </View>
                );
              })}
            </View>
          </Content>
        </View>
      );
    }

    if (selectedStep === 3) {
      return (
        <View style={styles.contentBg}>
          <Content>
            {productOrderList.map((item, index) => {
              return (
                <View key={index}>
                  <View
                    style={
                      item.id == 1
                        ? styles.orderListRowBg
                        : [
                            styles.orderListRowBg,
                            { marginTop: Metrics.WIDTH * 0.04 }
                          ]
                    }
                  >
                    <CachedImage
                      source={item.productImage}
                      style={styles.productImage}
                    />

                    <View style={styles.productDetailBg}>
                      <View style={styles.productTitlerow}>
                        <Text
                          style={[
                            styles.productTitleTxt,
                            { width: Metrics.WIDTH * 0.45 }
                          ]}
                        >
                          {item.productTile}
                        </Text>
                        <TouchableOpacity
                          style={styles.closeIconBg}
                          onPress={() => alert("close")}
                        >
                          <FontAwesome
                            name="close"
                            size={10}
                            style={styles.closeImg}
                          />
                        </TouchableOpacity>
                      </View>

                      <Text style={styles.priceTxt}>{item.productPrice}</Text>

                      <View
                        style={[
                          styles.detailFieldRow,
                          { marginTop: Metrics.WIDTH * 0.06 }
                        ]}
                      >
                        <Text
                          style={[
                            styles.productTitleTxt,
                            { width: Metrics.WIDTH * 0.24 }
                          ]}
                        >
                          Size
                        </Text>
                        <Text style={styles.productTitleTxt}>{item.size}</Text>
                      </View>

                      <View style={styles.detailFieldRow}>
                        <Text
                          style={[
                            styles.productTitleTxt,
                            { width: Metrics.WIDTH * 0.24 }
                          ]}
                        >
                          Color
                        </Text>
                        <View
                          style={[
                            styles.colorViewer,
                            { backgroundColor: item.color }
                          ]}
                        />
                      </View>

                      <View style={styles.detailFieldRow}>
                        <Text
                          style={[
                            styles.productTitleTxt,
                            { width: Metrics.WIDTH * 0.24 }
                          ]}
                        >
                          Quantity
                        </Text>
                        <Text style={styles.productTitleTxt}>
                          {item.quantity}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={
                      item.id === this.state.data.length
                        ? null
                        : styles.orderListDivider
                    }
                  />
                </View>
              );
            })}
            <View style={styles.totalBg}>
              <View>
                <View style={styles.totalFieldRow}>
                  <Text
                    style={[
                      styles.productTitleTxt,
                      { width: Metrics.WIDTH * 0.25 }
                    ]}
                  >
                    Subtotal
                  </Text>
                  <Text
                    style={[
                      styles.productTitleTxt,
                      { textAlign: "right", width: Metrics.WIDTH * 0.65 }
                    ]}
                  >
                    $520.00
                  </Text>
                </View>
                <View style={styles.totalFieldDivider} />
              </View>
              <View>
                <View style={styles.totalFieldRow}>
                  <Text
                    style={[
                      styles.productTitleTxt,
                      { width: Metrics.WIDTH * 0.25 }
                    ]}
                  >
                    Shipping
                  </Text>
                  <Text
                    style={[
                      styles.productTitleTxt,
                      { textAlign: "right", width: Metrics.WIDTH * 0.65 }
                    ]}
                  >
                    Free
                  </Text>
                </View>
                <View style={styles.totalFieldDivider} />
              </View>
              <View style={styles.totalFieldRow}>
                <Text
                  style={[styles.totalTxt, { width: Metrics.WIDTH * 0.25 }]}
                >
                  Total
                </Text>
                <Text
                  style={[
                    styles.totalTxt,
                    { textAlign: "right", width: Metrics.WIDTH * 0.65 }
                  ]}
                >
                  $520.00
                </Text>
              </View>
            </View>

            <View style={styles.subHeaderBg}>
              <Text style={styles.subHeaderTitle}>BILLING INFORMATION</Text>
            </View>

            <View style={styles.bilingInfoBg}>
              <View style={styles.billingInfoHeaderBg}>
                <Text style={styles.bilingInfoHeaderLabel}>Hoang.Thai</Text>
                <TouchableOpacity
                  onPress={() => this.setState({ selectedStep: 1 })}
                >
                  <Text style={styles.editTxt}>Edit</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.billingInfo}>
                <Text
                  style={[
                    styles.billingInfoLabel,
                    { width: Metrics.WIDTH * 0.18 }
                  ]}
                >
                  Address
                </Text>
                <Text style={styles.billingInfoLabel}> :</Text>
                <Text style={styles.productTitleTxt}>
                  Ton Duc Thang - Da Nang
                </Text>
              </View>

              <View style={styles.billingInfo}>
                <Text
                  style={[
                    styles.billingInfoLabel,
                    { width: Metrics.WIDTH * 0.18 }
                  ]}
                >
                  Phone
                </Text>
                <Text style={styles.billingInfoLabel}> :</Text>
                <Text style={styles.productTitleTxt}>0905070017</Text>
              </View>

              <View style={styles.billingInfo}>
                <Text
                  style={[
                    styles.billingInfoLabel,
                    { width: Metrics.WIDTH * 0.18 }
                  ]}
                >
                  Email
                </Text>
                <Text style={styles.billingInfoLabel}> :</Text>
                <Text style={styles.productTitleTxt}>hong8x.pts@gmail.com</Text>
              </View>
            </View>

            <View style={styles.subHeaderBg}>
              <Text style={styles.subHeaderTitle}>PAYMENT METHOD</Text>
            </View>

            <View style={styles.paymentBg}>
              <View style={[styles.billingInfo, { alignItems: "center" }]}>
                <Image
                  source={Images.visaCard}
                  style={styles.orderPaymentImage}
                />
                <Text
                  style={[
                    styles.bilingInfoHeaderLabel,
                    { marginLeft: Metrics.WIDTH * 0.04 }
                  ]}
                >
                  Visa
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => this.setState({ selectedStep: 2 })}
              >
                <Text style={styles.editTxt}>Edit</Text>
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.orderListDivider,
                { marginBottom: Metrics.WIDTH * 0.08 }
              ]}
            />
          </Content>
        </View>
      );
    }
  };

  _renderFooter = () => {
    const { selectedStep } = this.state;

    if (selectedStep === 1) {
      return (
        <TouchableOpacity
          style={styles.footerTxtBg}
          onPress={() => this.setState({ selectedStep: 2 })}
        >
          <Text style={styles.footerTxt}>Continue</Text>
        </TouchableOpacity>
      );
    }

    if (selectedStep === 2) {
      return (
        <TouchableOpacity
          style={styles.footerTxtBg}
          onPress={() => this.setState({ selectedStep: 3 })}
        >
          <Text style={styles.footerTxt}>Continue</Text>
        </TouchableOpacity>
      );
    }

    if (selectedStep === 3) {
      return (
        <TouchableOpacity
          style={styles.footerTxtBg}
          onPress={() => alert("Place Order")}
        >
          <Text style={styles.footerTxt}>Order Now</Text>
        </TouchableOpacity>
      );
    }
  };

  onItemClick() {
    this.props.navigation.navigate("ECommerceMyBag");
  }

  _handleBagNavigation() {
		AsyncStorage.multiSet([
			['ArrivedFrom',"ECommerceCheckout"],
		]);
		this.props.navigation.navigate("ECommerceMyBag");
	}

  _handleWishListNavigation() {
		AsyncStorage.multiSet([
			['ArrivedForWishList',"ECommerceCheckout"],
		]);
		this.props.navigation.navigate("ECommerceWishList");
	}

  render() {
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
              onPress={this.onItemClick.bind(this)}
            >
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={35}
                color="white"
                style={{paddingRight: 20}}
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>CheckOut</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this._handleWishListNavigation()}>
              <View style={styles.heartBg}>
                <FontAwesome name="heart" size={8} style={styles.heartIcon} />
              </View>
              <View style={styles.alertBg}>
                <Text style={styles.alertTxt}>1</Text>
              </View>
            </TouchableOpacity>
          </Right>
        </Header>

        <View style={styles.subHeaderBg}>{this._renderSubHeader()}</View>

        <View style={styles.subHeaderBottomLine} />

        <View>{this._renderSelectStep()}</View>

        <View>{this._renderActiveComponent()}</View>

        <View style={styles.footerBg}>{this._renderFooter()}</View>
      </Container>
    );
  }
}
