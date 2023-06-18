import { Provider } from 'react-redux';
import { NativeBaseProvider, View } from 'native-base';

import store from './Store';
import { theme } from './Constant/theme';
import Router from './Container/Router/Router';

export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider theme={theme}>
                <Router />
            </NativeBaseProvider>
        </Provider>
    );
}
