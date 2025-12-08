export interface Product {
    id: string;
    name: string;
    description: string;
    volume: number;
    price: string;
    createdAt: string;
}

export interface CreateProductData {
    name: string;
    description: string;
    volume: number;
    price: string;
}

export interface UpdateProductData {
    name?: string;
    description?: string;
    volume?: number;
    price?: string;
}
