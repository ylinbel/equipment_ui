import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
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
import MyList from './pages/MyList';
import MyCenter from './pages/MyCenter';
import { musicalNote, power, calendar, personCircle, map, informationCircle } from 'ionicons/icons';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/myhome">
            <MyHome />
          </Route>
          <Route exact path="/myitem">
            <MyItem />
          </Route>
          <Route path="/mylist">
            <MyList />
          </Route>
          <Route path="/mycenter">
              <MyCenter />
            </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="myhome" href="/myhome">
            <IonIcon icon={musicalNote} />
            <IonLabel>首页</IonLabel>
          </IonTabButton>
          <IonTabButton tab="myitem" href="/myitem">
            <IonIcon icon={power} />
            <IonLabel>我的器材</IonLabel>
          </IonTabButton>
          <IonTabButton tab="mylist" href="/mylist">
            <IonIcon icon={informationCircle} />
            <IonLabel>消息</IonLabel>
          </IonTabButton>
            <IonTabButton tab="mycenter" href="/mycenter">
              <IonIcon icon={personCircle} />
              <IonLabel>我的</IonLabel>
            </IonTabButton>
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
