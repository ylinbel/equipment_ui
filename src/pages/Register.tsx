import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonInput, IonLabel, IonButton,
} from '@ionic/react';
import React, {useState} from "react";
import {createUser, getUserWithEmail} from "../services/myitem";

const Register: React.FC = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [repassword, setRepassword] = useState<string>();
    const [util, setUtil] = useState<string>();
    const createAccount = () => {
        if (email == '' || name == '' || password == '' || repassword == '' || util == '') {
            alert("all fields are required.");
        }
        if (password != repassword) {
            alert("password does not match.");
        } else {
            createUser(email as string, name as string, password as string, util as string);
            alert("Registration Complete.");
            storeData();
            window.location.href='/myHome';
        }
    }

    const storeData = () => {
        getUserWithEmail(email)
            .then(res => {
            window.sessionStorage.setItem('userName', res.data.name);
            window.sessionStorage.setItem('userEmail', res.data.email);
            window.sessionStorage.setItem('userType', res.data.userTypeEnum);
            window.sessionStorage.setItem('userId', res.data.id);
            }).catch(function (error) {
                console.log(error);
                return;
            });
    }

    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-center">Welcome To Dynamics Lab</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonItem>
                    <IonLabel position="stacked">Name* (Please use your college registered name) </IonLabel>
                    <IonInput value={name} placeholder="Enter Name"
                              onIonChange={e => setName(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked" inputMode="email">Email* (Please use your college email) </IonLabel>
                    <IonInput type="email" required={true} value={email} placeholder="Enter Email"
                              onIonChange={e => setEmail(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked" typeof="password">Password* </IonLabel>
                    <IonInput type="password" required={true} value={password} placeholder="Enter Password"
                              onIonChange={e => setPassword(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Reenter Password*</IonLabel>
                    <IonInput required={true} value={repassword} placeholder="Enter Password"
                              onIonChange={e => setRepassword(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Leaving Date*</IonLabel>
                    <IonInput type="date" required={true} value={util} placeholder="DD/MM/YYYY"
                              onIonChange={e => setUtil(e.detail.value!)}> </IonInput>
                </IonItem>
                <br/>
                <IonButton strong expand="block" onClick={() => createAccount()}>Register</IonButton>
            </IonContent>
        </IonPage>
        );
    };


export default Register;
