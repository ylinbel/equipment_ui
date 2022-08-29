import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect, IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import './MyItem.css';
import React, {useState} from "react";

const Tab5: React.FC = () => {
  const [serial, setSerial] = useState<string>();
  const [name, setName] = useState<string>();
  const [set, setSetName] = useState<string>();
  const [info, setInfo] = useState<string>();
  const [time, setTime] = useState<string>();
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle class="ion-text-center">Update Item</IonTitle>
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
          <IonLabel position="stacked">Set Name</IonLabel>
          <IonInput value={set} placeholder="Enter Set Name" onIonChange={e => setSetName(e.detail.value!)}> </IonInput>
        </IonItem>


        <IonItem>
          <IonLabel position="stacked">Location</IonLabel>
          <IonInput value={set} placeholder="Enter Location" onIonChange={e => setSetName(e.detail.value!)}> </IonInput>
        </IonItem>
        {/*location怎么弄呢*/}

        <IonList>
          <IonItem>
            <IonLabel position="stacked">Return Time</IonLabel>
            <IonSelect interface="popover" placeholder="Select Return Time">
              <IonSelectOption value="apples">Daily</IonSelectOption>
              <IonSelectOption value="apples">Weekly</IonSelectOption>
              <IonSelectOption value="apples">Two Weeks</IonSelectOption>
              <IonSelectOption value="oranges">Monthly</IonSelectOption>
              <IonSelectOption value="bananas">Three Months</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        <IonItem>
          <IonLabel position="stacked">Info</IonLabel>
          <IonInput value={info} placeholder="More info.." onIonChange={e => setInfo(e.detail.value!)}> </IonInput>
        </IonItem>

        <IonButton strong expand="block">Update</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
