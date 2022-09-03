import {
    IonAccordion, IonAccordionGroup, IonButton, IonCard,
    IonContent, IonHeader,
    IonItem,
    IonLabel, IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './MyItem.css';
import React from "react";
import axios from "axios";
import {deleteItemWithId, getItemWithId} from "../services/myitem";

class ItemPage extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state= {
            data: [],
            isLoaded: false,
            setItems: [],
            id: window.location.search.split('=')[1]
        }
    }

    componentDidMount() {
        const _this = this;
        getItemWithId(this.state.id)
            .then(function (res) {
                _this.setState( {
                    data:res.data,
                    isLoaded: true
                })
            })
    }

    deleteItem() {
        deleteItemWithId(this.state.id);
    }

    findSet() {
        axios.get(`http://localhost:8080/items/find-by-set/` + this.state.data.setName)
            .then(res => {
                this.setState({setItems: res.data})
                console.log(this.state.data.setName)
            })
    }

    getLocationDetail() {
        if(this.state.data.location != undefined) {
            if(this.state.data.location.layer == null) {
                return(
                    <p>{this.state.data.location.cabinet} - {this.state.data.location.name}</p>)
            } else {
                return (
                    <p>{this.state.data.location.cabinet} - layer {this.state.data.location.layer} - {this.state.data.location.name}</p>)
            }
        }
    }

    getCategoryDetail() {
        if(this.state.data.category != undefined) {
            return (
            <p> {this.state.data.category.parentLayerEnum} - layer {this.state.data.category.layer1} - {this.state.data.category.name}</p>
            )
        }
    }

    toItem = async (id : any) => {
        window.location.href =`/tab4?id=${id}`
    }

    toUpdate = async () => {
        window.location.href =`/tab5?id=${this.state.id}`
    }


    render() {
        return (
            <IonPage>
                <IonContent fullscreen>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle class="ion-text-center">Item</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonCard>
                        <IonItem>
                            <IonLabel>
                                Name
                            </IonLabel>
                            <p>{this.state.data.name}</p>
                        </IonItem>


                        <IonItem>
                            <IonLabel>
                                Status
                            </IonLabel>
                            <p>{this.state.data.statusEnum}</p>

                        </IonItem>

                        <IonItem>
                            <IonLabel>
                                Serial Number
                            </IonLabel>
                            <p>{this.state.data.serial}</p>
                        </IonItem>

                        <IonItem>
                            <IonLabel>
                                Location
                            </IonLabel>
                            {this.getLocationDetail()}
                        </IonItem>

                        <IonItem>
                            <IonLabel>
                                Category
                            </IonLabel>
                            {this.getCategoryDetail()}
                        </IonItem>

                        <IonItem>
                            <IonLabel>
                                Time
                            </IonLabel>
                            <p>{this.state.data.borrowTermEnum}</p>
                        </IonItem>

                        <IonAccordionGroup>
                            <IonAccordion value="first">
                                <IonItem slot="header">
                                    <IonLabel>More</IonLabel>
                                </IonItem>
                                <IonItem slot="content">
                                    <IonLabel>
                                        Set Name
                                    </IonLabel>
                                    <p>{this.state.data.setName}</p>
                                </IonItem>
                                <IonItem slot="content">
                                    <IonLabel>
                                        More Info
                                    </IonLabel>
                                    <p>{this.state.data.detailInformation}</p>
                                </IonItem>
                                <IonItem button slot="content" onClick={() => this.findSet()}>
                                    <IonLabel>
                                        Find Set
                                    </IonLabel>
                                </IonItem>
                            </IonAccordion>

                                    {this.state.setItems.map((item: any) => {
                                        return (
                                            <IonItem button onClick={() => this.toItem(item.id)} key={item.id}>
                                                <IonLabel>
                                                    {item.name}
                                                </IonLabel>
                                                <p>{item.statusEnum}</p>
                                            </IonItem>
                                        )})
                                    }

                        </IonAccordionGroup>
                    </IonCard>

                    <br/>
                    <IonButton strong expand="block">Borrow</IonButton>
                    <br/>
                    <IonButton fill="clear" onClick={() => this.toUpdate()} strong size="small">Update item</IonButton> <br/>
                    <IonButton fill="clear" strong size="small" onClick={() => this.deleteItem()}>Delete item</IonButton> <br/>
                </IonContent>
            </IonPage>
        );
    };
};

export default ItemPage;