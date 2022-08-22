import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonInput, IonLabel, IonModal, IonDatetime, IonButton, IonRouterOutlet
} from '@ionic/react';
import React, {useState} from "react";
import {Route} from "react-router-dom";
import MyHome from "./MyHome";
import Register from "./Register";
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
                <IonHeader className="ion-no-border">
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

                <IonButton fill="outline" expand="block">Login</IonButton>
                <IonButton fill="outline">forget password</IonButton> <br/>
                <IonButton fill="outline" href="/register">register</IonButton>











            </IonContent>
        </IonPage>
    );
};

export default Login;
