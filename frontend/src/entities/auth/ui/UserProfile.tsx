"use client";

import { useDispatch } from "react-redux";
import { logout } from "../model/authSlice";
import { User } from "../model/types";
import styles from "./UserProfile.module.css";
import { logoutUser } from "../lib/api";

export function UserProfile({ user }: { user: User }) {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        dispatch(logout());

        try {
            const res = await logoutUser();
            if (!res.success) {
                throw new Error(res.message);
            }
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    const handleTelegram = () => {
        window.location.href = `https://t.me/skufatorr_coffee_bot?start=${user.id}`
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Профиль пользователя</h1>

            <div className={styles.row}>
                <b>ID:</b> {user.id}
            </div>

            <div className={styles.row}>
                <b>Имя:</b> {user.name}
            </div>

            <div className={styles.row}>
                <b>Email:</b> {user.email}
            </div>

            <div className={styles.row}>
                <b>Роль:</b> {user.role}
            </div>

            <div className={styles.row}>
                <b>Аккаунт создан:</b>{" "}
                {new Date(user.createdAt).toLocaleDateString("ru-RU")}
            </div>

            <button className={styles.logoutButton} onClick={handleTelegram}>
                Карта лояльности
            </button>

            <button className={styles.logoutButton} onClick={handleLogout}>
                Выйти
            </button>
        </div>
    );
}
