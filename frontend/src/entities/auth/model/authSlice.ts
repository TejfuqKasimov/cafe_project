import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role } from '@/src/shared/enums/role';

export interface AuthState {
    isAuthenticated: boolean;
    role: Role | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    role: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated(state, action: PayloadAction<{ isAuthenticated: boolean; role: Role | null }>) {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.role = action.payload.role;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.role = null;
        },
    },
});

export const { setAuthenticated, logout } = authSlice.actions;
export default authSlice.reducer;