import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, BackHandler, ListView, Modal, ScrollView, I18nManager, AsyncStorage} from 'react-native';
import { Content,Container, Right, Header, Left, Body, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {  Images,Fonts, Metrics, Colors } from '../../../Themes/';
import CheckBox from 'react-native-check-box';
import { CachedImage } from 'react-native-cached-image';

export default class Sale extends Component {

  constructor(props) {
      super(props);

      const NewArrivalsOne = "https://antiqueruby.aliansoftware.net/Images/woocommerce/ic_new_arrivals_one.png";
      const NewArrivalsTwo = "https://antiqueruby.aliansoftware.net/Images/woocommerce/ic_new_arrivals_two.png";
      const NewArrivalsThree = "https://antiqueruby.aliansoftware.net/Images/woocommerce/ic_new_arrivals_three.png";
      const NewArrivalsFour = "https://antiqueruby.aliansoftware.net/Images/woocommerce/ic_new_arrivals_four.png";

      const rowHasChanged = (r1, r2) => r1 !== r2
      const ds = new ListView.DataSource({rowHasChanged})

      const dataObjects = [
        {
          id: 1,
          itemImage: {uri:NewArrivalsOne},
          itemTitle: 'W-Faux Leather With Quilted Sleeves',
          itemPrice: '$15.00',
          oldPrice: '$30.00',
          saleOffer: '50% Off'
        },
        {
          id: 2,
          itemImage: {uri:NewArrivalsTwo},
          itemTitle: 'W-Quilted Men Jogger Pants',
          itemPrice: '$25.00',
          oldPrice: '$50.00',
          saleOffer: '50% Off'
        },
        {
          id: 3,
          itemImage: {uri:NewArrivalsThree},
          itemTitle: 'W-Faux Leather With Quilted Sleeves',
          itemPrice: '$35.00',
          oldPrice: '$70.00',
          saleOffer: '50% Off'
        },
        {
          id: 4,
          itemImage: {uri:NewArrivalsFour},
          itemTitle: 'W-Quilted Men Jogger Pants',
          itemPrice: '$30.00',
          oldPrice: '$60.00',
          saleOffer: '50% Off'
        },
      ]

      this.state = {
        dataSource: ds.cloneWithRows(dataObjects),
        category: [
          {id: 1,categoryName: 'Editor Picks'},
          {id: 2,categoryName: 'Bestsellers'},
          {id: 3,categoryName: 'Fragrance'},
          {id: 4,categoryName: 'Palettes & Sets'},
          {id: 5,categoryName: 'Tools & Brushes'},
          {id: 6,categoryName: 'Skin Care'},
          {id: 7,categoryName: 'Body'},
          {id: 8,categoryName: 'Nails'},
          {id: 9,categoryName: 'Makeup'},
          {id: 10,categoryName: 'Editor Picks'},
          {id: 11,categoryName: 'Bestsellers'},
          {id: 12,categoryName: 'Editor Picks'},
        ],

        sort: [
          {id: 1, sortName: 'Popularity'},
          {id: 2, sortName: 'Brand A to Z'},
          {id: 3, sortName: 'Brand Z to A'},
          {id: 4, sortName: 'Price High to Low'},
          {id: 5, sortName: 'Price Low to High'},
          {id: 6, sortName: 'Name A to Z'},
          {id: 7, sortName: 'Name Z to A'},
          {id: 8, sortName: 'New Arrival'},
          {id: 9, sortName: 'Discount'},
        ],

        modalVisible: false,
        modalCategoryVisible: false,
        modalSortVisible: false,
        selectedLots: '2',

      };
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("ECommerceMenu");
      return true;
    });
  }

  _handleProductDetailClick() {

    this.props.navigation.navigate("ECommerceProductDetails",{},
    {
      type: "Navigation/NAVIGATE",
      routeName: "ECommerceProductDetails",
      params: {name: "ECommerceSale"}
    })

  }

  _handleBagNavigation() {
		AsyncStorage.multiSet([
			['ArrivedFrom',"ECommerceSale"],
		]);
		this.props.navigation.navigate("ECommerceMyBag");
	}

  _handleWishListNavigation() {
		AsyncStorage.multiSet([
			['ArrivedForWishList',"ECommerceSale"],
		]);
		this.props.navigation.navigate("ECommerceWishList");
	}

  _renderRow(rowData) {
    return(
      <TouchableOpacity style={styles.rowMain} onPress={() => this._handleProductDetailClick()}>

        <CachedImage source={rowData.itemImage} style={styles.itemImage} />
        <View style={styles.saleOfferView}>
          <Text style={styles.saleText}>{rowData.saleOffer}</Text>
        </View>
        <Text style={styles.itemTitle}>{rowData.itemTitle}</Text>
        <View style={styles.priceView}>
            <Text style={styles.itemPrice}>{rowData.itemPrice}</Text>
            <Text style={styles.oldItemPrice}>{rowData.oldPrice}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  toggleFilterModal(visible) {
    this.setState({ modalVisible: visible });
  }

  toggleCategoryModal(visible) {
    this.setState({ modalCategoryVisible: visible });
  }

  _handleFilterClick(){
    this.setState({ modalVisible: false });
    this.toggleCategoryModal(true)
  }

  _handleCategoryFilterClick(){
    this.setState({ modalCategoryVisible: false });
    this.toggleFilterModal(true)
  }

  toggleSortModal(visible) {
    this.setState({ modalSortVisible: visible });
  }

  _handleSortModal() {
    this.setState({ modalSortVisible: false});
    this.toggleSortModal(true)
  }

  FilterClickHandle()
  {
      (this.state.modalSortVisible == true) ? this.toggleSortModal(false) : null;
      this.toggleFilterModal(true)
  }

  onCheckBoxPress(id) {
   this.setState({
     selectedLots: id
   });
  }

  render(){
    StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
		 StatusBar.setBackgroundColor('#0e1130',true);
		 StatusBar.setTranslucent(true);
		}

    return(
      <Container style={styles.container}>
        <Header
          androidStatusBarColor={"#0e1130"}
          style={styles.header}>
            <Left style={styles.left}>
              <View style={styles.rightLeftView}>
                <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
                  <Ionicons name="ios-menu" size={30} color="white" style={{paddingRight: 20}}/>
                </TouchableOpacity>
              </View>
            </Left>

            <Body style={styles.body}>
              <Text style={styles.textTitle}>Sale</Text>
            </Body>

            <Right style={styles.right}>
                <TouchableOpacity style={styles.rightLeftView} onPress={() => this._handleWishListNavigation()}>
                  <View style={styles.heartBg}>
                    <FontAwesome name="heart" size={8} style={styles.heartIcon}/>
                  </View>
                  <View style={styles.alertBg}>
                    <Text style={styles.alertTxt}>1</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightLeftView} onPress={() => this._handleBagNavigation()}>
                  <SimpleLineIcons name="handbag" size={20} style={styles.bagIcon}/>
                  <View style={styles.alertBg}>
                    <Text style={styles.alertTxt}>3</Text>
                  </View>
                </TouchableOpacity>
            </Right>
        </Header>

        <View style={{height: Metrics.HEIGHT* 0.9}}>

          <ListView
             contentContainerStyle={styles.listContent}
             dataSource={this.state.dataSource}
             renderRow={this._renderRow.bind(this)}
             enableEmptySections
             pageSize={4}/>

          <View style={styles.sortFilterMainView}>
             <TouchableOpacity style={styles.sortFilterView} onPress={() => {this.toggleSortModal(true)}}>
               <Image source={Images.sortIcon} style={styles.sortImg} />
               <Text style={styles.sortFilterText}>Sort</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.sortFilterView} onPress={() => {this.toggleFilterModal(true)}}>
               <Image source={Images.filterIcon} style={styles.filterImg}/>
               <Text style={styles.sortFilterText}>Filter</Text>
             </TouchableOpacity>
         </View>
        </View>

        <View style={styles.modalOpenView}>
          <Modal transparent = {true}
             visible = {this.state.modalVisible}
             onRequestClose = {() => { this.state.modalVisible(false) } }>

             <View style={styles.modalView}>
              <Image source={Images.upArrowIcon} style={styles.upArrow}/>

               <View style = {styles.modal}>
                  <View style={styles.modalHeader}>
                    <TouchableOpacity onPress={() => {this.setState({ modalVisible: false })}}>
                      <Text style={styles.cancelApplyTxt}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.shareTxt}>Filter</Text>
                    <TouchableOpacity onPress={() => {this.toggleFilterModal(false)}}>
                      <Text style={styles.cancelApplyTxt}>Apply</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalBottomView}>

                    <TouchableOpacity style={styles.modalRow} onPress={() => {this._handleFilterClick()}}>
                      <Text style={styles.shareTxt}>Category</Text>
                      <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"} size={20} color="#cccccc"/>
                    </TouchableOpacity>

                    <View style={styles.modalDivider}>
                    </View>

                    <View style={styles.modalRow}>
                      <Text style={styles.shareTxt}>Price</Text>
                      <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"} size={20} color="#cccccc"/>
                    </View>

                    <View style={styles.modalDivider}>
                    </View>

                    <View style={styles.modalRow}>
                      <Text style={styles.shareTxt}>Brand</Text>
                      <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"} size={20} color="#cccccc"/>
                    </View>

                    <View style={styles.modalDivider}>
                    </View>

                    <View style={styles.modalRow}>
                      <Text style={styles.shareTxt}>Color</Text>
                      <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"} size={20} color="#cccccc"/>
                    </View>
                  </View>

               </View>
             </View>
          </Modal>
        </View>

        <View style={styles.modalOpenView}>
          <Modal transparent = {true}
             visible = {this.state.modalCategoryVisible}
             onRequestClose = {() => { this.state.modalCategoryVisible(false) } }>

             <View style={styles.modalView}>
              <Image source={Images.upArrowIcon} style={styles.upArrow}/>

               <View style = {styles.modal}>

                  <View style={styles.modalHeader}>
                    <TouchableOpacity onPress={() => {this._handleCategoryFilterClick()}}>
                      <Text style={styles.cancelApplyTxt}>Filter</Text>
                    </TouchableOpacity>
                    <Text style={styles.shareTxt}>Category</Text>
                    <TouchableOpacity onPress={() => {this.setState({ modalCategoryVisible: false })}}>
                      <Text style={styles.cancelApplyTxt}>Done</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{maxHeight: Metrics.HEIGHT * 0.60}}>
                    <ScrollView style={styles.categoryListBg}>
                      {
                        this.state.category.map((item, index) => {
                          return(
                            <View style={styles.categoryBottomView} key={index}>
                              <TouchableOpacity style={[styles.modalRow,{backgroundColor: Colors.transparent}]} onPress={() => this.onCheckBoxPress(item.id)}>
                                <Text style={styles.shareTxt}>{item.categoryName}</Text>
                                {
                                  (this.state.selectedLots == item.id) ?
                                  <MaterialIcons name="check" size={25} color={"#ffc700"}/>
                                  : null
                                }
                              </TouchableOpacity>
                              <View style={(item.id == this.state.category.length) ? null : styles.modalDivider}>
                              </View>
                            </View>
                          )
                        })
                      }
                    </ScrollView>
                  </View>
               </View>
             </View>
          </Modal>
        </View>

        <View style={styles.modalOpenView}>
          <Modal transparent = {true}
             visible = {this.state.modalSortVisible}
             onRequestClose = {() => { this.state.modalSortVisible(false) } }>

             <View style={styles.modalView}>
              <Image source={Images.upArrowIcon} style={styles.sortUpArrow}/>

               <View style = {styles.modal}>

                  <View style={styles.modalHeader}>
                    <TouchableOpacity onPress={() => {this.setState({ modalSortVisible: false })}}>
                      <Text style={styles.cancelApplyTxt}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={styles.shareTxt}>Sort</Text>
                    <TouchableOpacity onPress={() => {this.setState({ modalSortVisible: false })}}>
                      <Text style={styles.cancelApplyTxt}>Apply</Text>
                    </TouchableOpacity>
                  </View>

                <ScrollView style={styles.categoryListBg}>
                    {
                      this.state.sort.map((item, index) => {
                        return(
                          <View style={styles.categoryBottomView} key={index}>
                            <TouchableOpacity style={[styles.modalRow,{backgroundColor: Colors.transparent}]} onPress={() => this.onCheckBoxPress(item.id)}>
                              <Text style={styles.shareTxt}>{item.sortName}</Text>
                              {
                                (this.state.selectedLots == item.id) ?
                                <MaterialIcons name="check" size={25} color={"#ffc700"}/>
                                : null
                              }
                            </TouchableOpacity>
                            <View style={(item.id == this.state.sort.length) ? null : styles.modalDivider}>
                            </View>
                          </View>
                        )
                      })
                    }
                  </ScrollView>
               </View>
             </View>
          </Modal>
        </View>

      </Container>
    )
  }
}
