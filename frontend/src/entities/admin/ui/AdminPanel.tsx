"use client";

import { useState } from 'react';
import { AddProductForm } from './AddProductForm';
import { EditProductForm } from './EditProductForm';
import { DeleteProductForm } from './DeleteProductForm';
import styles from './AdminPanel.module.css';

type PanelState = 'menu' | 'add' | 'edit' | 'delete';

interface AdminPanelProps {
    onClose: () => void;
}

export function AdminPanel({ onClose }: AdminPanelProps) {
    const [panelState, setPanelState] = useState<PanelState>('menu');

    const renderContent = () => {
        switch (panelState) {
            case 'menu':
                return (
                    <div className={styles.menu}>
                        <h2 className={styles.title}>Админ панель</h2>
                        <div className={styles.buttonGrid}>
                            <button 
                                onClick={() => setPanelState('add')}
                                className={`${styles.menuButton} ${styles.addButton}`}
                            >
                                <span className={styles.buttonIcon}>+</span>
                                <span className={styles.buttonText}>Добавить товар</span>
                            </button>
                            
                            <button 
                                onClick={() => setPanelState('edit')}
                                className={`${styles.menuButton} ${styles.editButton}`}
                            >
                                <span className={styles.buttonIcon}>✎</span>
                                <span className={styles.buttonText}>Изменить товар</span>
                            </button>
                            
                            <button 
                                onClick={() => setPanelState('delete')}
                                className={`${styles.menuButton} ${styles.deleteButton}`}
                            >
                                <span className={styles.buttonIcon}>🗑</span>
                                <span className={styles.buttonText}>Удалить товар</span>
                            </button>
                        </div>
                        <button 
                            onClick={onClose}
                            className={styles.closeButton}
                        >
                            Закрыть
                        </button>
                    </div>
                );
            
            case 'add':
                return (
                    <AddProductForm 
                        onClose={onClose}
                        onBack={() => setPanelState('menu')}
                    />
                );
            
            case 'edit':
                return (
                    <EditProductForm 
                        onClose={onClose}
                        onBack={() => setPanelState('menu')}
                    />
                );
            
            case 'delete':
                return (
                    <DeleteProductForm 
                        onClose={onClose}
                        onBack={() => setPanelState('menu')}
                    />
                );
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.panel}>
                {renderContent()}
            </div>
        </div>
    );
}