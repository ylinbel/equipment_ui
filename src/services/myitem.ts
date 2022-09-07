import axios from 'axios';

const basicUrl = 'http://146.169.160.141:8080';

export function getBorrowList(userId: number) : Promise<any> {
    return axios.get(`${basicUrl}/items/log/get-borrow-list/${userId}`);
}

export function returnItem(itemId: number) : Promise<any> {
    return axios.put(`${basicUrl}/items/${itemId}/false/return`);
}

export function reportDamaged(itemId: number) : Promise<any> {
    return axios.put(`${basicUrl}/items/${itemId}/true/return`);
}

export function checkLocationExist(location: string) : Promise<any> {
    return axios.get(`${basicUrl}/location/find-by-serial/${location}`);
}

export function getItemWithId(id: any) : Promise<any> {
    return axios.get(`${basicUrl}/items/${id}`);
}

export function restoreItemWithId(id: any) : Promise<any> {
    return axios.put(`${basicUrl}/items/${id}/restore`);
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

export function getUserWithName(val: string) :Promise<any> {
    return axios.get(`${basicUrl}/users/find-by-name/${val}`)
}

export function getItemWithCategory(val: any) :Promise<any> {
    return axios.get(`${basicUrl}/items/find-by-category/${val}`)
}

export function getItemBySerialLike(text: any) {
    return axios.get(`${basicUrl}/items/find-by-serial-like/${text}`)
}

export function getAllDamaged() :Promise<any> {
    return axios.get(`${basicUrl}/items/find-by-status/DAMAGED`)
}

export function getUserWithEmail(email: any) :Promise<any> {
    return axios.get(`${basicUrl}/users/find-by-email/${email}`)
}

export function getAllOverDueNotReturnLogs() :Promise<any> {
    return axios.get(`${basicUrl}/items/find-by-overdue-and-isReturn/true/false`)
}

export function getUsersWithUserType(userType: any) :Promise<any> {
    return axios.get(`${basicUrl}/users/find-by-user-type/${userType}`)
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

export function borrowItemWithUserAndItem(itemId: number, userId: number) {
    return axios.put(`${basicUrl}/items/${userId}/borrow/${itemId}`)
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


