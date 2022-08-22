import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange, IonNote } from '@ionic/react';
import {
  aperture,
  shield,
  handRight,
  bagAdd,
  mail,
  server,
  pizza,
  snow,
  storefront,
  personOutline
} from 'ionicons/icons';

const MyCenter: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle class="ion-text-center">My Account</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonItem>
            <IonLabel>
            Name
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              Email
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              Password
            </IonLabel>
            <IonButton fill="outline" slot="end">Edit</IonButton>
          </IonItem>

          <IonItem>
            <IonLabel>
              User Type
            </IonLabel>
          </IonItem>

        {/*<IonItem detail>*/}
        {/*  <IonIcon icon={shield} slot="start" />*/}
        {/*  <IonLabel>*/}
        {/*    用户保护中心*/}
        {/*  </IonLabel>*/}
        {/*</IonItem>*/}

        {/*<IonItem detail>*/}
        {/*  <IonIcon icon={handRight} slot="start" />*/}
        {/*  <IonLabel>*/}
        {/*    商家服务*/}
        {/*  </IonLabel>*/}
        {/*</IonItem>*/}
        {/*</IonCard>*/}

        {/*<IonCard>*/}
        {/* <IonItem detail>*/}
        {/*  <IonIcon icon={mail} slot="start" />*/}
        {/*  <IonLabel>*/}
        {/*    账单*/}
        {/*  </IonLabel>*/}
        {/*</IonItem>*/}

        {/*<IonItem detail>*/}
        {/*  <IonIcon icon={bagAdd} slot="start" />*/}
        {/*  <IonLabel>*/}
        {/*    总资产*/}
        {/*  </IonLabel>*/}
        {/*</IonItem>*/}

        {/*<IonItem detail>*/}
        {/*  <IonIcon icon={server} slot="start" />*/}
        {/*  <IonLabel>*/}
        {/*    余额*/}
        {/*  </IonLabel>*/}
        {/*</IonItem>*/}

        {/*<IonItem detail>*/}
        {/*  <IonIcon icon={pizza} slot="start" />*/}
        {/*  <IonLabel>*/}
        {/*    余额宝*/}
        {/*  </IonLabel>*/}
        {/*</IonItem>*/}

        {/*<IonItem detail>*/}
        {/*  <IonIcon icon={snow} slot="start" />*/}
        {/*  <IonLabel>*/}
        {/*    花呗*/}
        {/*  </IonLabel>*/}
        {/*</IonItem>*/}

        {/*<IonItem detail>*/}
        {/*  <IonIcon icon={storefront} slot="start" />*/}
        {/*  <IonLabel>*/}
        {/*    余利宝*/}
        {/*  </IonLabel>*/}
        {/*</IonItem>*/}

        </IonCard>



      </IonContent>
    </IonPage>
  );
};

export default MyCenter;
