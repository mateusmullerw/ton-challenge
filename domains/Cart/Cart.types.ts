export interface State {
    cart: DataInterface
}

export interface DataInterface {
    items: CartItemType[];
    isNotificationOpen: boolean;
}

export type CartItemType = {
    id: number;
    quantity: number;
}
