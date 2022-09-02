import axios from 'axios';

const basicUrl = 'http://localhost:8080';

export function getBorrowList(userId: number) : Promise<any> {
    return axios.get(`${basicUrl}/items/log/get-borrow-list/${userId}`);
}

export function returnItem(itemId: number) : Promise<any> {
    return axios.put(`${basicUrl}/items/${itemId}/false/return`);
}

export function repostDamaged(itemId: number) : Promise<any> {
    return axios.put(`${basicUrl}/items/${itemId}/true/return`);
}

export function checkLocationExist(location: string) : Promise<any> {
    return axios.get(`${basicUrl}/location/find-by-serial/${location}`);
}

export function getItemWithId() : Promise<any> {
    return axios.get(`${basicUrl}/items/3`);
}

export function createLocations(name: string, serial: string, layer: number, cabinet: string) : Promise<any> {
    return axios.post(`${basicUrl}/location`,{
        name: name,
        serial: serial,
        layer: layer,
        cabinet: cabinet
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export function createCategory(name: string, subLayer: string, parent: string) : Promise<any> {
    return axios.post(`${basicUrl}/category`,{
        name: name,
        layer1: subLayer,
        parentLayerEnum: parent
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export function createItem(name: string, serial: string, set: string, time: string, location: any, category: any, info: string) : Promise<any> {
    return axios.post(`${basicUrl}/items`,{
        'name': name,
        'serial': serial,
        'setName': set,
        'borrowTermEnum': time,
        'location': {'id': location},
        'category': {'id': category},
        'detailInformation': info
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}



