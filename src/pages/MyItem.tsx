import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonLabel, IonButton, IonList
} from '@ionic/react';
import './MyHome.css';
import {getBorrowList, returnItem, reportDamaged} from '../services/myitem';
import {getLoginFlagCookie} from '../services/cookieUtil';


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
        if(getLoginFlagCookie() == ''){
            window.location.href =`/`;
        }
        getBorrowList()
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
        returnItem(itemId).then((res) => {
            window.location.reload()
        }).catch((res) => {
            alert("This item was already returned")
        });
    }

    reportDamagedClick(itemId: number) {
        alert("please return the broken item to lab manager")
        reportDamaged(itemId).then((res) => {
            window.location.reload()
        }).catch((res) => {
            alert("This item was already returned")
        });
    }

    handleOverDue(overDue: string) {
        if (overDue == "true") {
            return (<span className="overDue">Overdue</span>)
        }
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
                            const overDue = String(item.overDue);
                            return (
                                <IonItem key={item.item.id}>
                                    <IonLabel>
                                    {item.item.name}
                                    </IonLabel>
                                    {this.handleOverDue(overDue)}
                                    <IonButton fill="outline" onClick={() => this.returnItemClick(item.item.id)}>Return</IonButton>
                                    <IonButton fill="outline"  onClick={() => this.reportDamagedClick(item.item.id)}>Report damage</IonButton>
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
