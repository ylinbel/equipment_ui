import axios from 'axios';

const basicUrl = 'http://localhost:8080';

export function getBorrowList(userId: number) : Promise<any> {
    return axios.get(`${basicUrl}/items/log/get-borrow-list/${userId}`);
}

export function returnItem(itemId: number) : Promise<any> {
    return axios.put('${basicUrl}/items/${itemId}/false/return');
}

export function repostDamaged(itemId: number) : Promise<any> {
    return axios.put('${basicUrl}/items/${itemId}/true/return');
}