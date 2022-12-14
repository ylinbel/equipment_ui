import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonSearchbar, IonAccordionGroup, IonItem, IonAccordion, IonLabel, IonCol
} from '@ionic/react';
import './Manager.css';
import React from "react";
import {
    getAllDamaged,
    getAllOverDueNotReturnLogs,
    getUserListWithName,
    getUsersWithUserType,
    getUserWithName
} from "../services/myitem";

class Manager extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state= {
            damagedItems: [],
            overdueNotReturnItems: [],
            user: [],
            name: '',
            isLoaded: false,
            damagedItemNumber: 0,
            overdueItemNumber: 0,
        }
    }

    componentDidMount() {
        const _this = this;
        getAllDamaged()
            .then(function (res) {
                _this.setState( {
                    damagedItems:res.data,
                    damagedItemNumber: res.data.length,
                    isLoaded: true
                })
            })
        getAllOverDueNotReturnLogs()
            .then(function (res) {
                _this.setState( {
                    overdueNotReturnItems:res.data,
                    overdueItemNumber: res.data.length,
                    isLoaded: true
                })
            })
    }

    onChangeHandler = async (e:any) => {
        this.setState({ name: e.target.value });
        getUserListWithName(this.state.name)
            .then(res => {
                this.setState({
                    user: res.data,
                    isLoaded: true
                })
            })
    }

    findUsers = async (e:any) => {
        getUsersWithUserType(e)
            .then(res => {
                this.setState({
                    user: res.data,
                    isLoaded: true
                })
            })
    }



    toItem = async (id : any) => {
        window.location.href =`/item?id=${id}`
    }

    render() {
        return (
            <IonPage>
                <IonContent>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle class="ion-text-center">Manager</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonAccordionGroup>
                        <IonAccordion value="first">
                            <IonItem slot="header">
                                <IonLabel>View All Damaged Items ({this.state.damagedItemNumber} in total)</IonLabel>
                            </IonItem>
                            {this.state.damagedItems.map((item: any) => {
                                return (
                                    <IonItem key={item.id} className="ion-padding" slot="content" onClick={() => this.toItem(item.id)}>
                                        <IonLabel>
                                            <IonCol><span>Name:</span> {item.name}</IonCol>   <IonCol><span>Serial:</span> {item.serial}</IonCol>
                                        </IonLabel>
                                    </IonItem>

                                )
                            })}
                        </IonAccordion>
                        <IonAccordion value="second">
                            <IonItem slot="header">
                                <IonLabel>View All Overdue Not Return Items ({this.state.overdueItemNumber} in total)</IonLabel>
                            </IonItem>
                            {this.state.overdueNotReturnItems.map((item: any) => {
                                return (
                                    <IonItem key={item.id} className="ion-padding" slot="content">
                                        <IonLabel>
                                            <IonCol><span>Item:</span> {item.item.name}</IonCol> <IonCol><span>Item Serial:</span> {item.item.serial}</IonCol> <IonCol><span>User Name:</span> {item.user.name} </IonCol>
                                        </IonLabel>
                                    </IonItem>

                                )
                            })}
                        </IonAccordion>
                    </IonAccordionGroup>
                    <br/>

                    <IonSearchbar value={this.state.name} onIonChange={e => this.onChangeHandler(e)} placeholder="Search with name"/>
                    <div className="div-center">
                        <IonButton fill="clear" class="button-solid" onClick={() => this.findUsers('MANAGER')}>Managers</IonButton>
                        <IonButton fill="clear" class="button-solid" onClick={() => this.findUsers('SUPER_USER')}>Super Users</IonButton>
                        <IonButton fill="clear" class="button-solid" onClick={() => this.findUsers('STANDARD_USER')}>Standard Users</IonButton>
                    </div>

                    {this.state.user.map((item: any) => {
                        return (
                            <IonItem key={item.id}>
                                <IonLabel>
                                    <p>User Name:</p> {item.name} <p>Email:</p> {item.email} <p>User Type:</p> {item.userTypeEnum} <p>Leaving Date:</p> {item.utilDate}
                                </IonLabel>
                            </IonItem>
                        )
                    })}
                </IonContent>
            </IonPage>
        );
    }
}

export default Manager;
