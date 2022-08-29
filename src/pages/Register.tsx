import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonInput, IonLabel, IonModal, IonButton, useIonPicker, IonCard,
} from '@ionic/react';
import React, {useState} from "react";
// import {IonDatetimeButton} from '@ionic/react';



const Register: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [repassword, setRePassword] = useState<string>();
    const [date, setDate] = useState<string>();
    const [number, setNumber] = useState<number>();
    const [present] = useIonPicker();
    const [value, setValue] = useState('');
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

                {/*check date format*/}

                <br/>
                <IonButton strong expand="block">Register</IonButton>


                {/*<IonButton size="small"*/}
                {/*    onClick={() =>*/}
                {/*        present(*/}
                {/*            [*/}
                {/*                {*/}
                {/*                    name: 'animal',*/}
                {/*                    options: [*/}
                {/*                        { text: 'Dog', value: 'dog' },*/}
                {/*                        { text: 'Cat', value: 'cat' },*/}
                {/*                        { text: 'Bird', value: 'bird' },*/}
                {/*                    ],*/}
                {/*                },*/}
                {/*                {*/}
                {/*                    name: 'vehicle',*/}
                {/*                    options: [*/}
                {/*                        { text: 'Car', value: 'car' },*/}
                {/*                        { text: 'Truck', value: 'truck' },*/}
                {/*                        { text: 'Bike', value: 'bike' },*/}
                {/*                    ],*/}
                {/*                },*/}
                {/*            ],*/}
                {/*            [*/}
                {/*                {*/}
                {/*                    text: 'Confirm',*/}
                {/*                    handler: (selected) => {*/}
                {/*                        setValue(`${selected.animal.value}, ${selected.vehicle.value}`)*/}
                {/*                    },*/}
                {/*                },*/}
                {/*            ]*/}
                {/*        )*/}
                {/*    }*/}
                {/*>*/}
                {/*    Show Picker using para*/}
                {/*</IonButton>*/}
                {/*{value && (*/}
                {/*    <div>Selected Value: {value}</div>*/}
                {/*)}*/}









            </IonContent>
        </IonPage>
    );
};

export default Register;
