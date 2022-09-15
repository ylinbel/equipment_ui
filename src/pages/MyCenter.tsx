import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/react';
import './MyHome.css';
import {getLoginFlagCookie} from "../services/cookieUtil";
import {getUserWithName, logout} from "../services/myitem";

class MyCenter extends React.Component<any, any> {
  constructor(props:any){
    super(props);
    this.state={
      data:[],
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    const _this=this;
    if(getLoginFlagCookie() == ''){
      window.location.href =`/`;
    }
    getUserWithName()
        .then(res => {
          _this.setState({
            data:res.data,
            isLoaded: true
          })
        })
        .catch(function (error) {
          _this.setState({
            isLoaded:false,
            error:error
          })
        })
  }

  clearData() {
    logout().then(res => {window.location.href =`/`;});
  }

  render() {
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
                <span>{this.state.data.name}</span>
              </IonItem>

              <IonItem>
                <IonLabel>
                  Email
                </IonLabel>
                <span>{this.state.data.email}</span>
              </IonItem>

              <IonItem>
                <IonLabel>
                  User type
                </IonLabel>
                <span>{this.state.data.userTypeEnum}</span>


              </IonItem>

            </IonCard>

            <IonButton fill="clear" strong size="small" href="/" onClick={() => this.clearData()}>Log out</IonButton>
            <br/>
            <IonButton fill="clear" strong size="small" href="/um">More</IonButton>


          </IonContent>
        </IonPage>
    );
  }
}

export default MyCenter;
