import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonInput, IonLabel, IonModal, IonDatetime, IonButton
} from '@ionic/react';
import React, {useState} from "react";
// import {IonDatetimeButton} from '@ionic/react';



const Register: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [repassword, setRePassword] = useState<string>();
    const [number, setNumber] = useState<number>();
    return (
        <IonPage>
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
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput value={email} placeholder="Enter Email" onIonChange={e => setEmail(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput value={password} placeholder="Enter Password" onIonChange={e => setPassword(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Reenter Password</IonLabel>
                    <IonInput value={repassword} placeholder="Enter Password" onIonChange={e => setRePassword(e.detail.value!)}> </IonInput>
                </IonItem>


                {/*<IonDatetimeButton datetime="datetime"/>*/}

                {/*<IonModal keepContentsMounted={true}>*/}
                {/*    <IonDatetime id="datetime"></IonDatetime>*/}
                {/*</IonModal>*/}

                {/*need to check password to be the same as the reenter one */}
                {/*need to check email format*/}

                <IonButton fill="outline">Register</IonButton>








            </IonContent>
        </IonPage>
    );
};

export default Register;
