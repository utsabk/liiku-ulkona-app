import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import theme from './src/theme';
import Routes from './src/navigation/MainStackNavigator';
import { ActivitiesProvider } from './src/ActivitiesContext';
import { ActivityDetailsProvider } from './src/ActivityDetailsContext';

import { Provider } from 'react-redux';
import configureStore from './src/store/store';

const store = configureStore();

const App = () => {
  return (
    <ActivitiesProvider>
      <ActivityDetailsProvider>
        <Provider store={store}>
          <>
            <StatusBar backgroundColor={theme.colors.primary} />
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </>
        </Provider>
      </ActivityDetailsProvider>
    </ActivitiesProvider>
  );
};

export default App;
