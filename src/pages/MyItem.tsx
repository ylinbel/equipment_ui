import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonLabel, IonButton, IonList
} from '@ionic/react';
import './MyItem.css';
import {getBorrowList, returnItem, reportDamaged} from '../services/myitem';


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
            })
            .catch(function (error) {
                _this.setState({
                    isLoaded:false,
                    error:error
                })
            })
    }

    returnItemClick(itemId: number) {
        returnItem(itemId);
    }

    reportDamagedClick(itemId: number) {
        alert("please return the broken item to lab manager")
        reportDamaged(itemId)
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
                                <IonItem key={item.item.id}>
                                    <IonLabel>
                                    {item.item.name}
                                    </IonLabel>
                                    <IonButton fill="outline" slot="end" onClick={() => this.returnItemClick(item.item.id)}>Return</IonButton>
                                    <IonButton fill="outline" slot="end" onClick={() => this.reportDamagedClick(item.item.id)}>Report damage</IonButton>
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
