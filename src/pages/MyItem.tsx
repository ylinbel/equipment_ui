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
        getBorrowList(2)
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

    returnItemClick() {
        returnItem(6);
    }

    repostDamagedClick() {
        repostDamaged(6)
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
                                    <IonButton fill="outline" slot="end" onClick={() => this.returnItemClick()}>Return</IonButton>
                                    <IonButton fill="outline" slot="end" onClick={() => this.repostDamagedClick()}>Report damage</IonButton>
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
