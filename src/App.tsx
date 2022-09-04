import { Route } from 'react-router-dom';
import {
  IonApp, IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import MyHome from './pages/MyHome';
import MyItem from './pages/MyItem';
import MyCenter from './pages/MyCenter';
import Register from "./pages/Register";
import AddCategory from "./pages/AddCategory";
import {
  searchOutline, personCircleOutline, listOutline
} from 'ionicons/icons';


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
import AddItem from "./pages/AddItem";
import ItemPage from "./pages/ItemPage";
import UpdateItem from "./pages/UpdateItem";
import Manager from "./pages/Manager";
import AddLocation from "./pages/AddLocation";

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
            <Route exact path="/register">
              <Register/>
            </Route>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route exact path="/addItem">
              <AddItem/>
            </Route>
            <Route exact path="/addLocation">
              <AddLocation/>
            </Route>
            <Route exact path="/addCategory">
              <AddCategory/>
            </Route>
            <Route exact path="/item">
              <ItemPage/>
            </Route>
            <Route exact path="/tab5">
              <UpdateItem/>
            </Route>
            <Route exact path="/um">
              <Manager/>
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
