# Shopping App
A shopping app using React Navigation, Redux, Redux-Thunk and Firebase.

## Features
- authentification screen to log in or sign up.
- shop to see all products and product details.
- cart to add/remove products and order them.
- orders screen to retrieve orders.
- user admin to create, update and delete products.

## React Navigation
- handling stack of screens for products, orders and user admin with createStackNavigator and createAppContainer.
- using props.navigation to navigate between screens.
- handling data from component to header with setParams and getParam.
- custom header title with navigationOptions.
- custom cart button in the header with react-navigation-header-buttons.
- custom SideDrawer with react-navigation-drawer.
- adding listener with props.navigation.addListener to reload data from server.
- handling manual logout with SafeAreaView and DrawerNavigatorItems.
- handling autologout and forced reload with a custom wrapper for the navigator thanks to useRef and NavigationActions.

## Redux and React-Redux
- using actions and reducers to authenticate and to store data (token and user ID, products, cart, orders).
- using useSelector hook to get the state.
- using props.navigation to pass data to the header without re-render.
- using useDispatch hook to dispatch actions. 
- passing useDispatch to the header with useEffect and useCallback to limit re-render cycles.
- handling logic for the cart (quantity, removing a product and clearing the cart).
- debugging with redux-devtools-extension and React Native debugger.

## React Native
- using FlatList, ScrollView, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, Alert, AsyncStorage and SafeAreaView.
- custom reusable components (Card, HeaderButton, Input).
- custom fonts, color and environment constants.
- using React hooks (useState, useEffect, useCallback, useReducer, useRef).
- handling input validation with useReducer and custom TextInput component.
- handling dates with Moment.js.
- handling sessions with AsyncStorage, setItem and getItem.

## Redux-Thunk and Firebase
- using Redux-thunk as a middleware to add async code.
- using Firebase as a database for products and orders with fetch (POST, PATCH, DELETE).
- handling authentication with Firebase (email and password).
- showing a loading spinner with ActivityIndicator and useState while fetching data/trying to authenticate.
- handling errors with try/catch blocks and throwing Alerts. 
- using getState from Redux-thunk to send http requests with a token.


Based on [React Native - The Practical Guide](https://www.udemy.com/react-native-the-practical-guide/) by Maximilian Schwarzmüller.
