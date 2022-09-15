import {
    IonAccordion, IonAccordionGroup, IonButton, IonCard,
    IonContent, IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './MyHome.css';
import React from "react";
import {
    borrowItemWithUserAndItem,
    deleteItemWithId, findItemsBySet,
    getItemWithId,
    restoreItemWithId
} from "../services/myitem";
import {getLoginFlagCookie} from "../services/cookieUtil";


class ItemPage extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state= {
            data: [],
            isLoaded: false,
            setItems: [],
            id: window.location.search.split('=')[1]
        };
    }

    componentDidMount() {
        const _this = this;
        if(getLoginFlagCookie() == ''){
            window.location.href =`/`;
        }
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

    restoreItem() {
        restoreItemWithId(this.state.id);
    }

    findSet() {
        findItemsBySet(this.state.data.setName)
            .then(res => {
                this.setState({setItems: res.data})
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
            <p> {this.state.data.category.parentLayerEnum} - {this.state.data.category.layer1} - {this.state.data.category.name}</p>
            )
        }
    }

    borrowItem() {
        borrowItemWithUserAndItem(this.state.id)
            .catch(function () {
            alert("Please try again");
        })
        window.location.reload();
    }


    toItem = async (id : any) => {
        window.location.href =`/item?id=${id}`
    }

    toUpdate = async () => {
        window.location.href =`/tab5?id=${this.state.id}`
    }
    showBorrowButton(){
        if(this.state.data.statusEnum == 'Available'){
            return (<IonButton strong expand="block" onClick={() => this.borrowItem()}>Borrow</IonButton>);
        }
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
                    {this.showBorrowButton()}
                    <br/>
                    <IonButton fill="clear" onClick={() => this.toUpdate()} strong size="small">Update item</IonButton> <br/>
                    <IonButton fill="clear" strong size="small" onClick={() => this.deleteItem()}>Delete item</IonButton> <br/>
                    <IonButton fill="clear" strong size="small" onClick={() => this.restoreItem()}>Restore item</IonButton> <br/>
                </IonContent>
            </IonPage>
        );
    };
}

export default ItemPage;
