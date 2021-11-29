import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { store } from "../app/store";
import { StyleManager } from "../components/lowLevel/StyleManager";

export const ContextWrapper: React.FC = ({ children }) => {
    return (
        <Provider store={store}>
            <StyleManager>
                {children}
            </ StyleManager>
        </Provider>
    );
}

export const RouterWrapper: React.FC = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path="/">
                    <div id="test-id" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export const ContextRouterWrapper: React.FC = ({ children }) => {
    return (
        <RouterWrapper>
            <ContextWrapper>
                {children}
            </ContextWrapper>
        </RouterWrapper>
    )
}