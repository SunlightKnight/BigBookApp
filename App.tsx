/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './src/Localization/i18n';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainFlowCoordinator } from './src/Scenes/MainFlowCoordinator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BackendProvider from './src/Services/BackendProvider';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <BackendProvider>
          <MainFlowCoordinator />
        </BackendProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
