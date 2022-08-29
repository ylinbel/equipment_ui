import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonSearchbar
} from '@ionic/react';
import './UserManagement.css';
import React from "react";

const UserManagement: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-center">Search</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonSearchbar placeholder="Search with name"/>
                <div className="div-center">
                <IonButton class="button-solid">Super Users</IonButton>
                <IonButton class="button-solid">Standard Users</IonButton>
                </div>
<br/>
            </IonContent>
        </IonPage>
    );
};

export default UserManagement;
