import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './MyItem.css';
import React, {useState} from "react";
import {createLocations} from "../services/myitem";

const AddLocation: React.FC = () => {
  const [serial, setSerial] = useState<string>();
  const [name, setName] = useState<string>();
  const [layer, setLayer] = useState<number>();
  const [cabinet, setCabinet] = useState<string>();

  const createLocation = () => {
    if (serial == '' || name == '') {
      alert("name and serial number are required.");
    } else {
      createLocations(name as string, serial as string, layer as number, cabinet as string)
          .catch(function (error) {
            console.log(error);
            alert("Please try again");
            return;
          })
      alert("Location Added");
    }
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle class="ion-text-center">Add Location</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput value={name} placeholder="Enter Name" onIonChange={e => setName(e.detail.value!)}> </IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Serial Number</IonLabel>
          <IonInput value={serial} placeholder="Enter Serial" onIonChange={e => setSerial(e.detail.value!)}> </IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Layer</IonLabel>
          <IonInput type="number" value={layer} placeholder="Enter Layer" onIonChange={e => setLayer(parseInt(e.detail.value!, 10))}> </IonInput>
        </IonItem>


        <IonItem>
          <IonLabel position="stacked">Cabinet</IonLabel>
          <IonInput value={cabinet} placeholder="Enter Cabinet" onIonChange={e => setCabinet(e.detail.value!)}> </IonInput>
        </IonItem>

        <IonButton strong expand="block" onClick={() => createLocation()}>Add</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddLocation;
