import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonInput, IonLabel, IonButton, IonRouterOutlet
} from '@ionic/react';
import React, {useState} from "react";
import {Route} from "react-router-dom";
import Register from "./Register";
import './MyHome.css';
import {login} from "../services/myitem";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const handleLogin = () => {
            login(email, password).then(res => {
                window.location.href='/myitem';
            }).catch(function () {
                alert("Email or password does not match, please try again.");
                return;
            })

    }

    return (
        <IonPage>
            <IonRouterOutlet>
                <Route exact path="/register">
                    <Register/>
                </Route>
            </IonRouterOutlet>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-center">Welcome To Dynamics Lab</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput value={email} placeholder="Enter Email"
                              onIonChange={e => setEmail(e.detail.value!)}> </IonInput>
                </IonItem>


                <IonItem>
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput type="password" value={password} placeholder="Enter Password"
                              onIonChange={e => setPassword(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonButton strong expand="block" onClick={() => handleLogin()}>Login</IonButton>
                <br/>
                <IonButton fill="clear" strong size="small" href="/register">Register</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;
