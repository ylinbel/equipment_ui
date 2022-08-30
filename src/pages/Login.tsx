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
import axios from "axios";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const handleLogin = () => {
            axios({
                method: 'post',
                url: 'http://localhost:8080/users/login',
                params: {
                    email: email,
                    password: password
                },
                headers : {
                    "Content-Type": "application/json",
                }
            }).catch(function (error) {
                console.log(error);
                alert("Email or password does not match, please try again.");
                return;
            });
           window.location.href='/myHome';
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
                    <IonInput value={password} placeholder="Enter Password"
                              onIonChange={e => setPassword(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonButton strong expand="block" onClick={() => handleLogin()}>Login</IonButton>
                <br/>
                <IonButton fill="clear" strong size="small">Forget password?</IonButton> <br/>
                <IonButton fill="clear" strong size="small" href="/register">Register</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;
