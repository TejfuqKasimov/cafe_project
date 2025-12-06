"use client";

import { Provider } from "react-redux";
import { ReactNode, useRef } from "react";
import { makeStore, AppStore } from "../store";

interface StoreProviderProps {
    children: ReactNode;
    isAuthenticated: boolean;
}

export function StoreProvider({ children, isAuthenticated }: StoreProviderProps) {
    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = makeStore({
            auth: {
                isAuthenticated,
            },
        });
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
