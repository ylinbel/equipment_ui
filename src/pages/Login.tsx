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
// import {IonDatetimeButton} from '@ionic/react';



const Login: React.FC = () => {
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();
    return (
        <IonPage>
            <IonRouterOutlet>
                <Route exact path="/register">
                    <Register />
                </Route>
            </IonRouterOutlet>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-center">Welcome To Dynamics Lab</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonItem>
                    <IonLabel position="stacked">Name</IonLabel>
                    <IonInput value={name} placeholder="Enter Name" onIonChange={e => setName(e.detail.value!)}> </IonInput>
                </IonItem>


                <IonItem>
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput value={password} placeholder="Enter Password" onIonChange={e => setPassword(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonButton strong expand="block">Login</IonButton>
                <br/>
                <IonButton fill="clear" strong size="small">Forget password?</IonButton> <br/>
                <IonButton fill="clear" strong size="small" href="/register">Register</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;
