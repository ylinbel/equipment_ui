import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonInput, IonLabel, IonButton, useIonPicker,
} from '@ionic/react';
import React, {useState} from "react";
import axios from "axios";

class Register extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            reEnter: '',
            utilDate: '',
        };
    }
    createAccount() {
        const params = JSON.stringify({
            "email": this.state.email,
            "name": this.state.name,
            "password": this.state.password,
            "utilDate": this.state.utilDate,
            "userType": "StandardUser"
        });
        console.log(params);
        axios.post('http://localhost:8080/users', params, {
                headers: {
                    "Content-Type": "application/json",
                }})
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {

        return (
            <IonPage>
                <IonContent>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle class="ion-text-center">Welcome To Dynamics Lab</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonItem>
                        <IonLabel position="stacked">Name</IonLabel>
                        <IonInput value={this.state.name} placeholder="Enter Name"
                                  onIonChange={e => this.setState({name: e})}> </IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked" inputMode="email">Email</IonLabel>
                        <IonInput value={this.state.email} placeholder="Enter Email"
                                  onIonChange={e => this.setState({email: e})}> </IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked" typeof="password">Password</IonLabel>
                        <IonInput value={this.state.password} placeholder="Enter Password"
                                  onIonChange={e => this.setState({password: e})}> </IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Reenter Password</IonLabel>
                        <IonInput value={this.state.reEnter} placeholder="Enter Password"
                                  onIonChange={e => this.setState({reEnter: e})}> </IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Leaving Date</IonLabel>
                        <IonInput value={this.state.utilDate} placeholder="DD/MM/YYYY"
                                  onIonChange={e => this.setState({utilDate: e})}> </IonInput>
                    </IonItem>
                    <br/>
                    <IonButton strong expand="block" onClick={() => this.createAccount()}>Register</IonButton>
                </IonContent>
            </IonPage>
        );
    };
}

export default Register;
