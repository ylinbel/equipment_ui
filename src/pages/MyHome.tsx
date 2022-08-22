import {
    IonContent,
    IonHeader,
    IonPage,
    IonImg,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton,
    IonSearchbar
} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import imgBox from '../img/box.png';
import imgTable from '../img/table.png';
import imgElebox from '../img/ele-box.png';
import './MyHome.css';
import React from "react";

const MyHome: React.FC = () => {
  return (
    <IonPage>
        <IonContent>
        <IonHeader className="ion-no-border">
            <IonToolbar>
                <IonTitle class="ion-text-center">Search</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonSearchbar placeholder="Search with name"/>

        <IonSearchbar placeholder="Search with category"/>

        <IonButton fill="outline">Scan</IonButton><br/>

        <IonButton fill="outline">Add Item</IonButton>



        {/*<IonCard>*/}
        {/*    <IonItem>*/}
        {/*        <IonImg src = {imgBox} className="img"/>*/}
        {/*        <IonLabel className="ion-text-wrap">*/}
        {/*            <h2>这是个300cc 的烧瓶</h2>*/}
        {/*        </IonLabel>*/}
        {/*    </IonItem>*/}
        {/*    <IonItem>*/}
        {/*        <IonImg src = {imgTable} className="img"/>*/}
        {/*        <IonLabel className="ion-text-wrap">*/}
        {/*            <h2>多用途试验台</h2>*/}
        {/*        </IonLabel>*/}
        {/*    </IonItem>*/}
        {/*    <IonItem>*/}
        {/*        <IonImg src = {imgElebox} className="img"/>*/}
        {/*        <IonLabel className="ion-text-wrap">*/}
        {/*            <h2>实验室废水处理设备</h2>*/}
        {/*        </IonLabel>*/}
        {/*    </IonItem>*/}
        {/*</IonCard>*/}

        {/*<IonCard>*/}
        {/*    <IonItem>*/}
        {/*        <IonIcon icon={pin} slot="start" />*/}
        {/*        <IonLabel>ion-item in a card, icon left, button right</IonLabel>*/}
        {/*        <IonButton fill="outline" slot="end">View</IonButton>*/}
        {/*    </IonItem>*/}

        {/*    <IonCardContent>*/}
        {/*        This is content, without any paragraph or header tags,*/}
        {/*        within an ion-cardContent element.*/}
        {/*    </IonCardContent>*/}
        {/*</IonCard>*/}

        {/*<IonCard>*/}
        {/*    <IonItem href="#" className="ion-activated">*/}
        {/*        <IonIcon icon={wifi} slot="start" />*/}
        {/*        <IonLabel>Card Link Item 1 activated</IonLabel>*/}
        {/*    </IonItem>*/}

        {/*    <IonItem href="#">*/}
        {/*        <IonIcon icon={wine} slot="start" />*/}
        {/*        <IonLabel>Card Link Item 2</IonLabel>*/}
        {/*    </IonItem>*/}

        {/*    <IonItem className="ion-activated">*/}
        {/*        <IonIcon icon={warning} slot="start" />*/}
        {/*        <IonLabel>Card Button Item 1 activated</IonLabel>*/}
        {/*    </IonItem>*/}

        {/*    <IonItem>*/}
        {/*        <IonIcon icon={walk} slot="start" />*/}
        {/*        <IonLabel>Card Button Item 2</IonLabel>*/}
        {/*    </IonItem>*/}
        {/*</IonCard>*/}
        </IonContent>
    </IonPage>
  );
};

export default MyHome;
