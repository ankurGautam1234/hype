import { Provider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';

import store from './Store';
import { LinearGradientConfig, theme } from './Constant/theme';
import Router from './Container/Router/Router';

export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider theme={theme}  config={LinearGradientConfig}>
                <Router />
            </NativeBaseProvider>
        </Provider>
    );
}
