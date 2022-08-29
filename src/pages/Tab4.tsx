import {
    IonAccordion, IonAccordionGroup, IonButton, IonCard,
    IonContent, IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Tab3.css';
import './MyItem.css';
import React from "react";
import axios from "axios";

class Tab4 extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state= {
            data: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        const _this = this;
        axios.get(`http://localhost:8080/items/3`)
            .then(function (res ) {
                _this.setState( {
                    data:res.data,
                    isLoaded: true
                })
                console.log(res.data);
            })
    }

    deleteItem() {
        axios.delete('http://localhost:8080/items/31');
    }

    render() {
        console.log(this.state.data.location);
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
                            {/*{*/}
                            {/*    Object.values(this.state.data).map((item:any, k:any) =>*/}
                            {/*        (<h4 key={k}>{item.id}</h4>))*/}
                            {/*}*/}
                            {/*cabinet - layer box...*/}
                        </IonItem>

                        <IonItem>
                            <IonLabel>
                                Category
                            </IonLabel>
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
                                    <IonButton fill="outline" slot="end">Find Set</IonButton>
                                </IonItem>
                                <IonItem slot="content">
                                    <IonLabel>
                                        More Info
                                    </IonLabel>
                                    <p>{this.state.data.detailInformation}</p>
                                </IonItem>
                            </IonAccordion>
                        </IonAccordionGroup>

                    </IonCard>

                    <br/>
                    <IonButton strong expand="block">Borrow</IonButton>
                    <br/>
                    <IonButton fill="clear" href="/Tab5" strong size="small">Update item</IonButton> <br/>
                    <IonButton fill="clear" href="/Tab5" strong size="small" onClick={() => this.deleteItem()}>Delete item</IonButton> <br/>


                </IonContent>
            </IonPage>
        );
    };
};

export default Tab4;
