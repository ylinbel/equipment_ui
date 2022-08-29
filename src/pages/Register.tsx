import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonInput, IonLabel, IonButton, useIonPicker,
} from '@ionic/react';
import React, {useState} from "react";

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [repassword, setRePassword] = useState<string>();
    const [date, setDate] = useState<string>();
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
                    <IonInput value={name} placeholder="Enter Name" onIonChange={e => setName(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked" inputMode="email">Email</IonLabel>
                    <IonInput value={email} placeholder="Enter Email" onIonChange={e => setEmail(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked" typeof="password">Password</IonLabel>
                    <IonInput value={password} placeholder="Enter Password" onIonChange={e => setPassword(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Reenter Password</IonLabel>
                    <IonInput value={repassword} placeholder="Enter Password" onIonChange={e => setRePassword(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Leaving Date</IonLabel>
                    <IonInput value={date} placeholder="DD/MM/YYYY" onIonChange={e => setDate(e.detail.value!)}> </IonInput>
                </IonItem>
                <br/>
                <IonButton strong expand="block">Register</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Register;
