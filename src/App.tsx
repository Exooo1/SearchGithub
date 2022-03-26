import React from 'react';
import {Search} from './Components/Search/Search';
import {AppStyle, ChildApp} from './AppStyled';
import {observer} from 'mobx-react';


type PropsApp = {}
type StateApp = {}

@observer
class App extends React.Component<PropsApp, StateApp> {
    render() {
        return <AppStyle>
            <ChildApp>
                <Search/>
            </ChildApp>
        </AppStyle>
    }
}

export default App;
