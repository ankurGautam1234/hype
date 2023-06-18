import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../Store';

const initialState = Object.freeze({
    isLoading: false,
});

const routersReducers = {
    leaveRoutes(state: any) {},
    initiateSSE(
        state: any,
        {
            payload,
        }: {
            payload: {
                userId: string;
                token: string;
            };
        }
    ) {},
    setUserInfo(
        state: any,
        {
            payload,
        }: {
            payload: {
                liCookie: string;
                liProfileLink: string;
                email?: string;
            };
        }
    ) {},
};

export const routersPage = createSlice({
    name: 'Login',
    initialState,
    // @ts-ignore
    reducers: routersReducers,
});

export default routersPage.reducer;
export const {
    leaveRoutes,
} = routersPage.actions;

