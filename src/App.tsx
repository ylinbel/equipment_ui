import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonButtons, IonHeader,
  IonIcon, IonItem,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs, IonTitle, IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import MyHome from './pages/MyHome';
import MyItem from './pages/MyItem';
import MyCenter from './pages/MyCenter';
import Register from "./pages/Register";
import {
  searchOutline, personCircleOutline, listOutline
} from 'ionicons/icons';
import cors from 'cors';
import express from 'express';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from "./pages/Login";
import Tab3 from "./pages/Tab3";
import Tab4 from "./pages/Tab4";
import Tab5 from "./pages/Tab5";
import UserManagement from "./pages/UserManagement";

setupIonicReact();


const App: React.FC = () => {
  return(
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/myhome">
              <MyHome/>
            </Route>
            <Route exact path="/myitem">
              <MyItem/>
            </Route>
            <Route path="/mycenter">
              <MyCenter/>
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1"/>
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/tab3">
              <Tab3/>
            </Route>
            <Route exact path="/tab4">
              <Tab4/>
            </Route>
            <Route exact path="/tab5">
              <Tab5/>
            </Route>
            <Route exact path="/um">
              <UserManagement/>
            </Route>
          </IonRouterOutlet>

          <IonHeader class="ion-text-center">
            <h3>Dynamics Lab</h3>
          </IonHeader>

          <IonTabBar slot="bottom">
            <IonTabButton tab="myitem" href="/myitem">
              <IonIcon icon={listOutline}/>
              <IonLabel>List</IonLabel>
            </IonTabButton>
            <IonTabButton tab="myhome" href="/myhome">
              <IonIcon icon={searchOutline}/>
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="mycenter" href="/mycenter">
              <IonIcon icon={personCircleOutline}/>
              <IonLabel>Me</IonLabel>
            </IonTabButton>
          </IonTabBar>

        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}



export default App;
