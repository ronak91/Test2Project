import { StackNavigator, DrawerNavigator } from "react-navigation";

import FirstScreen from "../Containers/Mainscreens/MainScreen/MainScreen";

/* Antiqueruby Screens List START */

//main screens
import HomeScreen from "../Containers/Mainscreens/SignIn/Signin";
import SignUp from "../Containers/Mainscreens/SignUp/Signup";
import Walkthrough from "../Containers/Mainscreens/Walkthrough/Walkthrough";
import Social from "../Containers/Mainscreens/Social/Social";
import Profile from "../Containers/Mainscreens/Profile/Profile";
import Drawer from "../Containers/Mainscreens/Drawer/Drawer";
import AdMob from "../Containers/Mainscreens/AdMob/admob";

// SignIn
import SignIn_01 from "../Containers/SignIn/Signin_01/index";
import SignIn_02 from "../Containers/SignIn/Signin_02/index";
import SignIn_03 from "../Containers/SignIn/Signin_03/index";
import SignIn_04 from "../Containers/SignIn/Signin_04/index";
import SignIn_05 from "../Containers/SignIn/Signin_05/index";
import SignIn_06 from "../Containers/SignIn/Signin_06/index";
import SignIn_07 from "../Containers/SignIn/Signin_07/index";
import SignIn_08 from "../Containers/SignIn/Signin_08/index";
import SignIn_09 from "../Containers/SignIn/Signin_09/index";
import SignIn_10 from "../Containers/SignIn/Signin_10/index";
import SignIn_11 from "../Containers/SignIn/Signin_11/index";
import SignIn_12 from "../Containers/SignIn/Signin_12/index";
import SignIn_13 from "../Containers/SignIn/Signin_13/index";
import SignIn_14 from "../Containers/SignIn/Signin_14/index";

//SignUp
import SignUp_01 from "../Containers/SignUp/SignUp_01/index";
import SignUp_02 from "../Containers/SignUp/SignUp_02/index";
import SignUp_03 from "../Containers/SignUp/SignUp_03/index";
import SignUp_04 from "../Containers/SignUp/SignUp_04/index";
import SignUp_05 from "../Containers/SignUp/SignUp_05/index";
import SignUp_06 from "../Containers/SignUp/SignUp_06/index";
import SignUp_07 from "../Containers/SignUp/SignUp_07/index";
import SignUp_08 from "../Containers/SignUp/SignUp_08/index";
import SignUp_09 from "../Containers/SignUp/SignUp_09/index";
import SignUp_10 from "../Containers/SignUp/SignUp_10/index";
import SignUp_11 from "../Containers/SignUp/SignUp_11/index";
import SignUp_12 from "../Containers/SignUp/SignUp_12/index";
import SignUp_13 from "../Containers/SignUp/SignUp_13/index";
import SignUp_14 from "../Containers/SignUp/SignUp_14/index";
import SignUp_15 from "../Containers/SignUp/SignUp_15/index";

// Walkthrough
import Walkthrough_01 from "../Containers/Walkthrough/WalkthroughInvestment/index";
import Walkthrough_02 from "../Containers/Walkthrough/WalkthroughShopping/index";
import Walkthrough_03 from "../Containers/Walkthrough/WalkthroughTravel/index";
import Walkthrough_04 from "../Containers/Walkthrough/WalkthroughDiscoverPlace/index";
import Walkthrough_05 from "../Containers/Walkthrough/WalkthroughJourney/index";
import Walkthrough_06 from "../Containers/Walkthrough/WalkthroughGetRide/index";
import Walkthrough_07 from "../Containers/Walkthrough/WalkthroughAppUsageHints/index";
import Walkthrough_08 from "../Containers/Walkthrough/WalkthroughTrackRide/index";
import Walkthrough_09 from "../Containers/Walkthrough/WalkthroughRecipe/index";
import Walkthrough_10 from "../Containers/Walkthrough/WalkthroughHistoricalPlace/index";
import Walkthrough_11 from "../Containers/Walkthrough/WalkthroughVoiceControl/index";
import Walkthrough_12 from "../Containers/Walkthrough/WalkthroughChat/index";
import Walkthrough_13 from "../Containers/Walkthrough/WalkthroughGetStarted/index";
import Walkthrough_14 from "../Containers/Walkthrough/WalkthroughCreativeThings/index";
import Walkthrough_15 from "../Containers/Walkthrough/WalkthroughCaliforniaDream/index";
import Walkthrough_16 from "../Containers/Walkthrough/WalkthroughNewsFeed/index";
import Walkthrough_17 from "../Containers/Walkthrough/WalkthroughFitness/index";
import Walkthrough_18 from "../Containers/Walkthrough/WalkthroughHotelService/index";
import Walkthrough_19 from "../Containers/Walkthrough/WalkthroughTravelTour/index";
import Walkthrough_20 from "../Containers/Walkthrough/WalkthroughSeaFood/index";
import Walkthrough_21 from "../Containers/Walkthrough/WalkthroughRealtor/index";
import Walkthrough_22 from "../Containers/Walkthrough/WalkthroughCoffeeShop/index";
import Walkthrough_23 from "../Containers/Walkthrough/WalkthroughRestaurant/index";
import Walkthrough_24 from "../Containers/Walkthrough/WalkthroughResidence/index";
import Walkthrough_25 from "../Containers/Walkthrough/WalkthroughEvents/index";
import Walkthrough_26 from "../Containers/Walkthrough/WalkthroughEventHandler/index";
import Walkthrough_27 from "../Containers/Walkthrough/WalkthroughDiscovery/index";
import Walkthrough_28 from "../Containers/Walkthrough/WalkthroughTraceLocation/index";
import Walkthrough_29 from "../Containers/Walkthrough/WalkthroughTicketBooking/index";
import Walkthrough_30 from "../Containers/Walkthrough/WalkthroughChatApp/index";

// Profile
import Profile_01 from "../Containers/Profile/ProfileNewsFeed/index";
import Profile_02 from "../Containers/Profile/ProfileInterior/index";
import Profile_03 from "../Containers/Profile/ProfileMusic/index";
import Profile_04 from "../Containers/Profile/ProfilePayment/index";
import Profile_05 from "../Containers/Profile/ProfileRealtor/index";
import Profile_06 from "../Containers/Profile/ProfileSocial/index";
import Profile_07 from "../Containers/Profile/ProfileDiscovery/index";
import Profile_08 from "../Containers/Profile/ProfileBlog/index";
import Profile_09 from "../Containers/Profile/ProfileBlogTwo/index";
import Profile_10 from "../Containers/Profile/ProfileAccountInfo/index";
import Profile_11 from "../Containers/Profile/ProfileSocialTwo/index";
import Profile_12 from "../Containers/Profile/ProfileSocialThree/index";
import Profile_13 from "../Containers/Profile/ProfileRealtorTwo/index";
import Profile_14 from "../Containers/Profile/ProfileNewsFeedTwo/index";
import Profile_15 from "../Containers/Profile/ProfilePortfolio/index";
import Profile_16 from "../Containers/Profile/ProfileMyBlog/index";
import Profile_17 from "../Containers/Profile/ProfileSocialCollapse/index";
import Profile_18 from "../Containers/Profile/ProfileNewsFeedThree/index";
import Profile_19 from "../Containers/Profile/ProfileScrollOver/index";
import Profile_20 from "../Containers/Profile/ProfileOverlay/index";
import Profile_21 from "../Containers/Profile/ProfileAbout/index";
import Profile_22 from "../Containers/Profile/ProfileChat/index";
import Profile_23 from "../Containers/Profile/ProfileCollapse/index";
import Profile_24 from "../Containers/Profile/ProfileDetail/index";
import Profile_25 from "../Containers/Profile/ProfileGallery/index";
import Profile_26 from "../Containers/Profile/ProfileSlideUp/index";
import Profile_27 from "../Containers/Profile/ProfileDiscoveryTwo/index";
import Profile_28 from "../Containers/Profile/ProfileFitness/index";
import Profile_29 from "../Containers/Profile/ProfileFriends/index";
import Profile_30 from "../Containers/Profile/ProfileHotel/index";

//Social
import Social_01 from "../Containers/Social/Social01/index";
import Social_02 from "../Containers/Social/Social02/index";
import Social_03 from "../Containers/Social/Social03/index";
import Social_04 from "../Containers/Social/Social04/index";
import Social_05 from "../Containers/Social/Social05/index";
import Social_06 from "../Containers/Social/Social06/index";
import Social_07 from "../Containers/Social/Social07/index";
import Social_08 from "../Containers/Social/Social08/index";
import Social_09 from "../Containers/Social/Social09/index";
import Social_10 from "../Containers/Social/Social10/index";
import Social_11 from "../Containers/Social/Social11/index";
import Social_12 from "../Containers/Social/Social12/index";
import Social_13 from "../Containers/Social/Social13/index";
import Social_14 from "../Containers/Social/Social14/index";
import Social_15 from "../Containers/Social/Social15/index";
import Social_16 from "../Containers/Social/Social16/index";
// import Social_17 from '../Containers/Social/Social17/index'
import Social_18 from "../Containers/Social/Social18/index";
import Social_19 from "../Containers/Social/Social19/index";
import Social_20 from "../Containers/Social/Social20/index";
import Social_21 from "../Containers/Social/Social21/index";

//Drawers
import Drawer_01 from "../Containers/Drawer/DrawerSocial/index";
import Drawer_02 from "../Containers/Drawer/DrawerSocialTwo/index";
import Drawer_03 from "../Containers/Drawer/DrawerSocialCustom/index";
import Drawer_04 from "../Containers/Drawer/DrawerSocialNotification/index";
import Drawer_05 from "../Containers/Drawer/DrawerSocialDark/index";
import Drawer_06 from "../Containers/Drawer/DrawerSocialFullScreen/index";
import Drawer_07 from "../Containers/Drawer/DrawerSlideUp/index";
import Drawer_08 from "../Containers/Drawer/DrawerSocialWallpaper/index";
import Drawer_09 from "../Containers/Drawer/DrawerTop/index";
import Drawer_10 from "../Containers/Drawer/DrawerTopIcon/index";
import Drawer_11 from "../Containers/Drawer/DrawerBottomSlideUp/index";
import Drawer_12 from "../Containers/Drawer/DrawerSocialSmall/index";
import Drawer_13 from "../Containers/Drawer/DrawerSmallIcon/index";
import Drawer_14 from "../Containers/Drawer/DrawerEditable/index";
import Drawer_15 from "../Containers/Drawer/DrawerBottomIcon/index";
import Drawer_16 from "../Containers/Drawer/DrawerEcom/index";
import Drawer_17 from "../Containers/Drawer/DrawerEcomTwo/index";
import Drawer_18 from "../Containers/Drawer/DrawerTopSlideDown/index";
import Drawer_19 from "../Containers/Drawer/DrawerTopSlideDownTwo/index";
import Drawer_20 from "../Containers/Drawer/DrawerDuoNavigation/index";
import Drawer_21 from "../Containers/Drawer/DrawerFABIcon/index";
import Drawer_22 from "../Containers/Drawer/DrawerExpanding/index";
import Drawer_23 from "../Containers/Drawer/DrawerExpandingFull/index";
import Drawer_24 from "../Containers/Drawer/DrawerExpandingwithSwiper/index";
import Drawer_25 from "../Containers/Drawer/DrawerMusic/index";
import Drawer_26 from "../Containers/Drawer/DrawerMusicTwo/index";
import Drawer_27 from "../Containers/Drawer/DrawerEcomThree/index";
import Drawer_28 from "../Containers/Drawer/DrawerMusicThree/index";
import Drawer_29 from "../Containers/Drawer/DrawerChat/index";
import Drawer_30 from "../Containers/Drawer/DrawerEcomTabs/index";

//Admob
import AdMob_Banner from "../Containers/AdMob/BannerAd/index";

//Sidebar
import SideBar from "../Containers/Sidebar";

/* Antiqueruby Screens List END */

/* WooCommerce Screens List START */
import ECommerceLogin from "../Containers/ECommerce/Login/index";

import ECommerceMenu from "../Containers/ECommerce/Menu/Main";
import WooCommerceSideMenu from "../Containers/ECommerce/Menu/Sidebar";
import ECommerceAddress from "../Containers/ECommerce/Address/index";
import ECommerceChangePassword from "../Containers/ECommerce/ChangePassword/index";
import ECommerceCheckout from "../Containers/ECommerce/CheckOut/index";
import ECommerceFAQ from "../Containers/ECommerce/FAQ/index";
import ECommerceFAQGeneralEnquiry from "../Containers/ECommerce/FAQGeneralEnquiries/index";
import ECommerceInviteFriends from "../Containers/ECommerce/InviteFriends/index";
import ECommerceMyAccount from "../Containers/ECommerce/MyAccount/index";
import ECommerceMyBag from "../Containers/ECommerce/MyBag/index";
import ECommerceMyInformation from "../Containers/ECommerce/MyInformation/index";
import ECommerceNotification from "../Containers/ECommerce/Notification/index";
import ECommerceOrderHistory from "../Containers/ECommerce/OrderHistory/index";
import ECommerceProductDetails from "../Containers/ECommerce/ProductDetails/index";
import ECommerceProductDetailsTab from "../Containers/ECommerce/ProductDetailsTab/index";
import ECommerceWishList from "../Containers/ECommerce/WishList/index";
import ECommerceForgotPassword from "../Containers/ECommerce/ForgotPassword/index";
import ECommerceChangeCountry from "../Containers/ECommerce/ChangeCountry/index";
import ECommerceSale from "../Containers/ECommerce/Sale/index";
import ECommerceResetPassword from "../Containers/ECommerce/ResetPassword/index";
import ECommerceAboutUs from "../Containers/ECommerce/AboutUs/index";
import ECommerceCategoryProduct from "../Containers/ECommerce/CategoryProduct/index";
import ECommerceBrands from "../Containers/ECommerce/Brands/index";
import ECommercePrivacyPolicy from "../Containers/ECommerce/PrivacyPolicy/index";
import ECommerceEditInformation from "../Containers/ECommerce/EditInformation/index";
/* WooCommerce Screens List END */

/* Music List START */
import RecommendedMusic from "../Containers/Music/RecommendedMusic/index";
import Album from "../Containers/Music/Album/index";
import AlbumGallery from "../Containers/Music/AlbumGallery/index";
import SelectStyle from "../Containers/Music/SelectStyle/index";
import MusicPlayer from "../Containers/Music/MusicPlayer/index";
/* Music List END */

/* Blog List START */
import Category from "../Containers/Blog/Category/index";
import Favorite from "../Containers/Blog/Favorite/index";
import Search from "../Containers/Blog/Search/index";
import CategoryList from "../Containers/Blog/CategoryList/index";
import CategoryDetail from "../Containers/Blog/CategoryDetail/index";
import BlogSideMenu from "../Containers/Blog/CategoryList/sidebar";
/* Blog List END */

/* Antiqueruby Drawer START */
const DrawerStackAntiqueruby = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Drawer: { screen: Drawer },
    Profile: { screen: Profile },
    SignUp: { screen: SignUp },
    Walkthrough: { screen: Walkthrough },
    Social: { screen: Social },
    AdMob: { screen: AdMob },

    Drawer_01: { screen: Drawer_01 },
    Drawer_02: { screen: Drawer_02 },
    Drawer_03: { screen: Drawer_03 },
    Drawer_04: { screen: Drawer_04 },
    Drawer_05: { screen: Drawer_05 },
    Drawer_06: { screen: Drawer_06 },
    Drawer_07: { screen: Drawer_07 },
    Drawer_08: { screen: Drawer_08 },
    Drawer_09: { screen: Drawer_09 },
    Drawer_10: { screen: Drawer_10 },
    Drawer_11: { screen: Drawer_11 },
    Drawer_12: { screen: Drawer_12 },
    Drawer_13: { screen: Drawer_13 },
    Drawer_14: { screen: Drawer_14 },
    Drawer_15: { screen: Drawer_15 },
    Drawer_16: { screen: Drawer_16 },
    Drawer_17: { screen: Drawer_17 },
    Drawer_18: { screen: Drawer_18 },
    Drawer_19: { screen: Drawer_19 },
    Drawer_20: { screen: Drawer_20 },
    Drawer_21: { screen: Drawer_21 },
    Drawer_22: { screen: Drawer_22 },
    Drawer_23: { screen: Drawer_23 },
    Drawer_24: { screen: Drawer_24 },
    Drawer_25: { screen: Drawer_25 },
    Drawer_26: { screen: Drawer_26 },
    Drawer_27: { screen: Drawer_27 },
    Drawer_28: { screen: Drawer_28 },
    Drawer_29: { screen: Drawer_29 },
    Drawer_30: { screen: Drawer_30 },

    SignIn_01: { screen: SignIn_01 },
    SignIn_02: { screen: SignIn_02 },
    SignIn_03: { screen: SignIn_03 },
    SignIn_04: { screen: SignIn_04 },
    SignIn_05: { screen: SignIn_05 },
    SignIn_06: { screen: SignIn_06 },
    SignIn_07: { screen: SignIn_07 },
    SignIn_08: { screen: SignIn_08 },
    SignIn_09: { screen: SignIn_09 },
    SignIn_10: { screen: SignIn_10 },
    SignIn_11: { screen: SignIn_11 },
    SignIn_12: { screen: SignIn_12 },
    SignIn_13: { screen: SignIn_13 },
    SignIn_14: { screen: SignIn_14 },

    SignUp_01: { screen: SignUp_01 },
    SignUp_02: { screen: SignUp_02 },
    SignUp_03: { screen: SignUp_03 },
    SignUp_04: { screen: SignUp_04 },
    SignUp_05: { screen: SignUp_05 },
    SignUp_06: { screen: SignUp_06 },
    SignUp_07: { screen: SignUp_07 },
    SignUp_08: { screen: SignUp_08 },
    SignUp_09: { screen: SignUp_09 },
    SignUp_10: { screen: SignUp_10 },
    SignUp_11: { screen: SignUp_11 },
    SignUp_12: { screen: SignUp_12 },
    SignUp_13: { screen: SignUp_13 },
    SignUp_14: { screen: SignUp_14 },
    SignUp_15: { screen: SignUp_15 },

    Walkthrough_01: { screen: Walkthrough_01 },
    Walkthrough_02: { screen: Walkthrough_02 },
    Walkthrough_03: { screen: Walkthrough_03 },
    Walkthrough_04: { screen: Walkthrough_04 },
    Walkthrough_05: { screen: Walkthrough_05 },
    Walkthrough_06: { screen: Walkthrough_06 },
    Walkthrough_07: { screen: Walkthrough_07 },
    Walkthrough_08: { screen: Walkthrough_08 },
    Walkthrough_09: { screen: Walkthrough_09 },
    Walkthrough_10: { screen: Walkthrough_10 },
    Walkthrough_11: { screen: Walkthrough_11 },
    Walkthrough_12: { screen: Walkthrough_12 },
    Walkthrough_13: { screen: Walkthrough_13 },
    Walkthrough_14: { screen: Walkthrough_14 },
    Walkthrough_15: { screen: Walkthrough_15 },
    Walkthrough_16: { screen: Walkthrough_16 },
    Walkthrough_17: { screen: Walkthrough_17 },
    Walkthrough_18: { screen: Walkthrough_18 },
    Walkthrough_19: { screen: Walkthrough_19 },
    Walkthrough_20: { screen: Walkthrough_20 },
    Walkthrough_21: { screen: Walkthrough_21 },
    Walkthrough_22: { screen: Walkthrough_22 },
    Walkthrough_23: { screen: Walkthrough_23 },
    Walkthrough_24: { screen: Walkthrough_24 },
    Walkthrough_25: { screen: Walkthrough_25 },
    Walkthrough_26: { screen: Walkthrough_26 },
    Walkthrough_27: { screen: Walkthrough_27 },
    Walkthrough_28: { screen: Walkthrough_28 },
    Walkthrough_29: { screen: Walkthrough_29 },
    Walkthrough_30: { screen: Walkthrough_30 },

    Profile_01: { screen: Profile_01 },
    Profile_02: { screen: Profile_02 },
    Profile_03: { screen: Profile_03 },
    Profile_04: { screen: Profile_04 },
    Profile_05: { screen: Profile_05 },
    Profile_06: { screen: Profile_06 },
    Profile_07: { screen: Profile_07 },
    Profile_08: { screen: Profile_08 },
    Profile_09: { screen: Profile_09 },
    Profile_10: { screen: Profile_10 },
    Profile_11: { screen: Profile_11 },
    Profile_12: { screen: Profile_12 },
    Profile_13: { screen: Profile_13 },
    Profile_14: { screen: Profile_14 },
    Profile_15: { screen: Profile_15 },
    Profile_16: { screen: Profile_16 },
    Profile_17: { screen: Profile_17 },
    Profile_18: { screen: Profile_18 },
    Profile_19: { screen: Profile_19 },
    Profile_20: { screen: Profile_20 },
    Profile_21: { screen: Profile_21 },
    Profile_22: { screen: Profile_22 },
    Profile_23: { screen: Profile_23 },
    Profile_24: { screen: Profile_24 },
    Profile_25: { screen: Profile_25 },
    Profile_26: { screen: Profile_26 },
    Profile_27: { screen: Profile_27 },
    Profile_28: { screen: Profile_28 },
    Profile_29: { screen: Profile_29 },
    Profile_30: { screen: Profile_30 },

    Social_01: { screen: Social_01 },
    Social_02: { screen: Social_02 },
    Social_03: { screen: Social_03 },
    Social_04: { screen: Social_04 },
    Social_05: { screen: Social_05 },
    Social_06: { screen: Social_06 },
    Social_07: { screen: Social_07 },
    Social_08: { screen: Social_08 },
    Social_09: { screen: Social_09 },
    Social_10: { screen: Social_10 },
    Social_11: { screen: Social_11 },
    Social_12: { screen: Social_12 },
    Social_13: { screen: Social_13 },
    Social_14: { screen: Social_14 },
    Social_15: { screen: Social_15 },
    Social_16: { screen: Social_16 },
    // Social_17:{screen: Social_17},
    Social_18: { screen: Social_18 },
    Social_19: { screen: Social_19 },
    Social_20: { screen: Social_20 },
    Social_21: { screen: Social_21 },

    AdMob_Banner: { screen: AdMob_Banner }
  },
  {
    gesturesEnabled: false,
    contentComponent: SideBar
  }
);

const DrawerNavigationAntiqueruby = StackNavigator(
  {
    DrawerStackAntiqueruby: { screen: DrawerStackAntiqueruby }
  },
  {
    headerMode: "none",
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false
    })
  }
);
/*Antiqueruby Drawer END*/

/*Woocommerce Drawer START*/
const DrawerStackECommerce = DrawerNavigator(
  {
    ECommerceMenu: { screen: ECommerceMenu },
    ECommerceAddress: { screen: ECommerceAddress },
    ECommerceChangePassword: { screen: ECommerceChangePassword },
    ECommerceCheckout: { screen: ECommerceCheckout },
    ECommerceFAQ: { screen: ECommerceFAQ },
    ECommerceFAQGeneralEnquiry: { screen: ECommerceFAQGeneralEnquiry },
    ECommerceInviteFriends: { screen: ECommerceInviteFriends },
    ECommerceMyAccount: { screen: ECommerceMyAccount },
    ECommerceMyBag: { screen: ECommerceMyBag },
    ECommerceMyInformation: { screen: ECommerceMyInformation },
    ECommerceNotification: { screen: ECommerceNotification },
    ECommerceOrderHistory: { screen: ECommerceOrderHistory },
    ECommerceProductDetails: { screen: ECommerceProductDetails },
    ECommerceProductDetailsTab: { screen: ECommerceProductDetailsTab },
    ECommerceWishList: { screen: ECommerceWishList },
    ECommerceChangeCountry: { screen: ECommerceChangeCountry },
    ECommerceSale: { screen: ECommerceSale },
    ECommerceAboutUs: { screen: ECommerceAboutUs },
    ECommerceCategoryProduct: { screen: ECommerceCategoryProduct },
    ECommerceBrands: { screen: ECommerceBrands },
    ECommercePrivacyPolicy: { screen: ECommercePrivacyPolicy },
    ECommerceLogin: { screen: ECommerceLogin },
    ECommerceForgotPassword: { screen: ECommerceForgotPassword },
    ECommerceResetPassword: { screen: ECommerceResetPassword },
    ECommerceEditInformation: { screen: ECommerceEditInformation }
  },
  {
    gesturesEnabled: false,
    contentComponent: WooCommerceSideMenu
  }
);

const DrawerNavigationWoocommerce = StackNavigator(
  {
    DrawerStackECommerce: { screen: DrawerStackECommerce }
  },
  {
    headerMode: "none",
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false
    })
  }
);
/*Woocommerce Drawer END*/

/*Blog Drawer START*/
const DrawerStackBlog = DrawerNavigator(
  {
    CategoryList: { screen: CategoryList },
    Category: { screen: Category },
    CategoryDetail: { screen: CategoryDetail },
    Favorite: { screen: Favorite },
    Search: { screen: Search }
  },
  {
    gesturesEnabled: false,
    contentComponent: BlogSideMenu
  }
);

const DrawerNavigationBlog = StackNavigator(
  {
    DrawerStackBlog: { screen: DrawerStackBlog }
  },
  {
    headerMode: "none",
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false
    })
  }
);
/*Blog Drawer END*/

// main stack
const MainStack = StackNavigator(
  {
    FirstScreen: { screen: FirstScreen },
    RecommendedMusic: { screen: RecommendedMusic },
    Album: { screen: Album },
    AlbumGallery: { screen: AlbumGallery },
    SelectStyle: { screen: SelectStyle },
    MusicPlayer: { screen: MusicPlayer }
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const PrimaryNav = StackNavigator(
  {
    mainStack: { screen: MainStack },
    DrawerStackAntiqueruby: { screen: DrawerNavigationAntiqueruby },
    DrawerStackECommerce: { screen: DrawerNavigationWoocommerce },
    DrawerStackBlog: { screen: DrawerNavigationBlog }
  },
  {
    headerMode: "none",
    initialRouteName: "mainStack",
    gesturesEnabled: false
  }
);

export default PrimaryNav;
