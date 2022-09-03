import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonSearchbar, IonItem, IonList, IonLabel, IonSelectOption, IonSelect
} from '@ionic/react';
// import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';
import './MyHome.css';
import React from "react";
import {getCategory, getItemWithCategory, getItemWithName, getSubCategory} from "../services/myitem";

class MyHome extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.state={
            items:[],
            value: '',
            parent: '',
            layer: [],
            isLoaded: false,
            subLayer:'',
            category:[],
            categoryId : 0,
        }
    }

    getLayers = async (parent: any) => {
        const _this = this;
        getSubCategory(parent)
            .then(res => {
                _this.setState({
                    layer: res.data,
                    isLoaded: true
                })
            })
    }

    getCategories = async (parent: any, subLayer: any) => {
        const _this = this;
        getCategory(parent,subLayer)
            .then(res => {
                _this.setState({
                    category: res.data,
                    isLoaded: true
                })
            })
    }

    getResult = async (val: string) => {
        const _this = this;
        getItemWithName(val)
            .then(res => {
                _this.setState({
                    items: res.data,
                    isLoaded: true
                })
            })
            .catch(function (error) {
                _this.setState({
                    isLoaded:false,
                    error:error
                })
            })
    };

    onChangeHandler = async (e:any) => {
        this.getResult(e.target.value);
        this.setState({ value: e.target.value });
    };

    getLayersHandler = async (e:any) => {
        this.setState({parent: e.detail.value!})
        this.getLayers(e.detail.value!)
    };

    getCategoriesHandler = async (e:any) => {
        this.setState({subLayer: e.detail.value!})
        this.getCategories(this.state.parent, e.detail.value!)
    };

    getItemsHandler = async (e:any) => {
        this.setState({ categoryId: e.detail.value!})
        this.startSearch()
    };

    startSearch = async () => {
        const _this = this;
        getItemWithCategory(this.state.categoryId)
            .then(res => {
                _this.setState({
                    items: res.data,
                    isLoaded: true
                })
            })
            .catch(function (error) {
                _this.setState({
                    isLoaded:false,
                    error:error
                })
            })
    }

    toItem = async (id : any) => {
        window.location.href =`/item?id=${id}`
    }

    render() {
        const openScanner = async () => {
            // const data = await BarcodeScanner.scan();
            // console.log(`Barcode data: ${data.text}`);
        };
        return (
            <IonPage>
                <IonContent>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle class="ion-text-center">Search</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonSearchbar value={this.state.value} onIonChange={e => this.onChangeHandler(e)} placeholder="Search with name"/>

                    <IonList>
                        <IonItem>
                            <IonSelect
                                interface="popover"
                                placeholder="Select Main Category"
                                onIonChange={e => this.getLayersHandler(e)}>
                                <IonSelectOption value="ELECTRONICS_ACQUISITION">Electronics Acquisition</IonSelectOption>
                                <IonSelectOption value="ELECTRONICS_ACTUATION">Electronics Actuation</IonSelectOption>
                                <IonSelectOption value="ELECTRONICS_WORKSHOP">Electronics Workshop</IonSelectOption>
                                <IonSelectOption value="ELECTRONICS_COMPUTER_AND_OTHER">Electronics Computer And Other</IonSelectOption>
                                <IonSelectOption value="MECHANICAL">Mechanical</IonSelectOption>
                                <IonSelectOption value="TOOL">Tool</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonItem>
                            <IonSelect
                                interface="popover"
                                placeholder="Select SubCategory"
                                onIonChange={e => this.getCategoriesHandler(e)}>
                                {
                                    this.state.layer.map((item: any) => {
                                        return (
                                            <IonSelectOption value={item}>{item}</IonSelectOption>
                                        )
                                    })
                                }
                            </IonSelect>
                        </IonItem>
                        <IonItem>
                            <IonSelect
                                interface="popover"
                                placeholder="Select Category"
                                onIonChange={e => this.getItemsHandler(e)}>
                                {
                                    this.state.category.map((item: any) => {
                                        return (
                                            <IonSelectOption value={item.id}>{item.name}</IonSelectOption>
                                        )
                                    })
                                }
                            </IonSelect>
                        </IonItem>
                    </IonList>

                    <br/>

                    <IonList>
                        {this.state.items.map((item: any) => {
                            return (
                                <IonItem button onClick={() => this.toItem(item.id)} key={item.id}>
                                    <IonLabel>
                                        {item.name}
                                    </IonLabel>
                                    <p>{item.statusEnum}</p>
                                </IonItem>
                            )
                        })
                        }
                    </IonList>

                    <IonButton strong expand="block" onClick={openScanner}>Scan</IonButton>
                    <IonButton strong fill="clear" href="/addItem">Add Item</IonButton> <br/>
                    <IonButton strong fill="clear" href="/addLocation">Add Location</IonButton><br/>
                    <IonButton strong fill="clear" href="/addCategory">Add Category</IonButton>
                </IonContent>
            </IonPage>
        );
    }
}

export default MyHome;
