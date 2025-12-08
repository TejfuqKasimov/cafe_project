'use client'

import { useState } from 'react';
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/src/shared/store/store";
import styles from "./Header.module.css";
import { Role } from "@/src/shared/enums/role";
import { AdminPanel } from "@/src/entities/admin/ui/AdminPanel";

export function Header() {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const role = useSelector((state: RootState) => state.auth.role);
    const cartTotalItems = useSelector((state: RootState) => state.cart.totalItems);

    const [showAdminPanel, setShowAdminPanel] = useState(false);

    const isAdmin = role === Role.ADMIN;

    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href="/" className={styles.logo}>CKYФATORR</Link>
                </div>

                <nav className={styles.nav}>
                    <Link href="/menu">Меню</Link>
                </nav>

                <div className={styles.right}>
                    <Link href="/cart" className={styles.cartButton}>
                        Корзина
                        {cartTotalItems > 0 && (
                            <span className={styles.cartBadge}></span>
                        )}
                    </Link>

                    {isAuthenticated ? (
                        <>
                            {isAdmin && (
                                <button 
                                    onClick={() => setShowAdminPanel(true)}
                                    className={styles.adminButton}
                                >
                                    Admin
                                </button>
                            )}
                            <Link href="/me" className={styles.authButton}>Профиль</Link>
                        </>
                    ) : (
                        <Link href="/login" className={styles.authButton}>Войти</Link>
                    )}
                </div>
            </header>

            {/* Админ панель */}
            {showAdminPanel && (
                <AdminPanel onClose={() => setShowAdminPanel(false)} />
            )}
        </>
    );
}