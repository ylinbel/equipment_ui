import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel, IonList,
    IonPage, IonSelect, IonSelectOption,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './MyHome.css';
import React, {useState} from "react";
import {createCategory} from "../services/myitem";

const AddCategory: React.FC = () => {
    const [parent, setParent] = useState<string>();
    const [name, setName] = useState<string>();
    const [subLayer, setSubLayer] = useState<string>();

    const addCategory = () => {
        if (parent == '' || name == '' || subLayer == '') {
            alert("all fields are required.");
        } else {
            createCategory(name as string, subLayer as string, parent as string)
                .catch(function () {
                    alert("Please try again");
                })
        }
        window.location.reload();
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-center">Add Category</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonList>
                    <IonItem>
                        <IonLabel position="stacked">Main Category</IonLabel>
                        <IonSelect
                            interface="popover"
                            placeholder="Select Return Time"
                            onIonChange={e => setParent(e.detail.value!)}>
                            <IonSelectOption value="ElectronicsAcquisition">Electronics Acquisition</IonSelectOption>
                            <IonSelectOption value="ElectronicsActuation">Electronics Actuation</IonSelectOption>
                            <IonSelectOption value="ElectronicsWorkshop">Electronics Workshop</IonSelectOption>
                            <IonSelectOption value="ElectronicComputerAndOther">Electronics Computer And
                                Other</IonSelectOption>
                            <IonSelectOption value="Mechanical">Mechanical</IonSelectOption>
                            <IonSelectOption value="Tool">Tool</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>

                <IonItem>
                    <IonLabel position="stacked">SubLayer</IonLabel>
                    <IonInput value={subLayer} placeholder="Enter SubLayer" onIonChange={e => setSubLayer(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Name</IonLabel>
                    <IonInput value={name} placeholder="Enter Name" onIonChange={e => setName(e.detail.value!)}> </IonInput>
                </IonItem>

                <IonButton strong expand="block" onClick={() => addCategory()}>Add</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default AddCategory;
