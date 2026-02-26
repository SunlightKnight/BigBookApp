import { View, Image, StyleSheet } from "react-native"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { NavigationContainer, NavigationState } from "@react-navigation/native";
import { useRef } from "react";
import { BookList } from "./BookList/BookList";
import { BookDetail } from "./BookDetail/BookDetail";
import colors from "../styles/colors";
import { NavigationRoutes } from "../Utils/Enums/NavigationRoutes";
import { icon_back } from "../Assets/Images";

const Stack = createStackNavigator();

export const MainFlowCoordinator = () => {
  const navRef = useRef(null)

  const pages: {[key: string]: any} = {
    BookList: { component: BookList },
    BookDetail: { component: BookDetail },
  }

  const screenOptions = {
    title: ' ',
    headerStyle: {
      backgroundColor: colors.lightPurple,
      shadowColor: 'transparent',
      elevation: 0, // https://github.com/react-navigation/react-navigation/issues/865
      height: 100,
    },
    headerBackImage: () => {
      return (<Image source={icon_back} resizeMode="contain" style={styles.backImage} />)
    },
    headerTintColor: colors.white,
    headerBackTitleVisible: false,
    gestureEnabled: false,
    ...TransitionPresets.SlideFromRightIOS
  }

  return (
    <View style={{flex: 1}}>
      <NavigationContainer 
        ref={navRef}
        onStateChange={(navigationState: NavigationState | undefined) => {
          console.log(`*** MainFlowCoordinator: onStateChange: navigationState=${JSON.stringify(navigationState)}`)
        }}>
        <Stack.Navigator
          initialRouteName={NavigationRoutes.BOOK_LIST}
          screenOptions={{cardStyle: {backgroundColor: colors.white}}}>
          {Object.keys(pages).map((key: string) => {
            const page = pages[key];
            const PageComponent = page.component;
            return (
              <Stack.Screen
                key={key}
                name={key}
                options={screenOptions}>
                {(props) => { return (<PageComponent {...props} />) }}
              </Stack.Screen>
            );
          })}
        </Stack.Navigator>    
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  backImage: {
    width: 20, 
    height: 20, 
    marginLeft: 20, 
    marginBottom: 10
  }
})