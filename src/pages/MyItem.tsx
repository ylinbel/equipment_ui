import React from 'react';
import axios from 'axios';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonLabel, IonButton, IonList
} from '@ionic/react';
import './MyItem.css';
import {getBorrowList, returnItem, repostDamaged} from './../services/myitem';


class MyItem extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.state={
            data:[],
            isLoaded: false
        }
    }

    componentDidMount() {
        const _this=this;
        getBorrowList(parseInt(window.sessionStorage.getItem('userId') as string))
            .then(res => {
                _this.setState({
                    data:res.data,
                    isLoaded: true
                })
                console.log(res.data);
                console.log(this.state.data);
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded:false,
                    error:error
                })
            })
    }

    returnItemClick(itemId: number) {
        returnItem(itemId);
    }

    repostDamagedClick(itemId: number) {
        repostDamaged(itemId)
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-center">My Item List</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        {this.state.data.map((item: any) => {
                            return (
                                <IonItem key={item.id}>
                                    <IonLabel>
                                    {item.item.name}
                                    </IonLabel>
                                    <IonButton fill="outline" slot="end" onClick={() => this.returnItemClick(item.item.id)}>Return</IonButton>
                                    <IonButton fill="outline" slot="end" onClick={() => this.repostDamagedClick(item.item.id)}>Report damage</IonButton>
                                </IonItem>
                            )
                        })
                        }
                    </IonList>
                </IonContent>
            </IonPage>
        )
    }
}

export default MyItem;
