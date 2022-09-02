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

export function getItemWithId(id: any) : Promise<any> {
    return axios.get(`${basicUrl}/items/${id}`);
}

export function getSubCategory(parent: any) :Promise<any> {
    return axios.get(`${basicUrl}/category/find-all-subcategory/${parent}/`)
}

export function getCategory(parent: any, subLayer: any) :Promise<any> {
    return axios.get(`${basicUrl}/category/find-by-layers/${parent}/${subLayer}`)
}

export function getItemWithName(val: string) :Promise<any> {
    return axios.get(`${basicUrl}/items/find-by-name/${val}`)
}

export function getItemWithCategory(val: any) :Promise<any> {
    return axios.get(`${basicUrl}/items/find-by-category/${val}`)
}

export function getUserWithEmail(email: any) :Promise<any> {
    return axios.get(`${basicUrl}/users/find-by-email/${email}`)
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

export function updateItem(id: any, name: string, serial: string, set: string, time: string, location: any, category: any, info: string) : Promise<any> {
    return axios.put(`${basicUrl}/items`,{
        'id': id,
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


export function createUser(email: string, name: string, password: string, utilDate: string) : Promise<any> {
    return axios.post(`${basicUrl}/users`,{
        email: email,
        name: name,
        password: password,
        utilDate: utilDate,
        userTypeEnum: "StandardUser"
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export function deleteItemWithId(itemId: number) : Promise<any> {
    return axios.delete(`${basicUrl}/items/${itemId}`);
}


