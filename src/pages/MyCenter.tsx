import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/react';
import './MyHome.css';
import axios from "axios";

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
    axios.get(`http://localhost:8080/users/find-by-email/` + window.sessionStorage.getItem('userEmail'))
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
    window.sessionStorage.clear();
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
                <span>{window.sessionStorage.getItem('userName')}</span>
              </IonItem>

              <IonItem>
                <IonLabel>
                  Email
                </IonLabel>
                <span>{window.sessionStorage.getItem('userEmail')}</span>
              </IonItem>

              <IonItem>
                <IonLabel>
                  Usertype
                </IonLabel>
                <span>{window.sessionStorage.getItem('userType')}</span>


              </IonItem>

            </IonCard>

            <IonButton fill="clear" strong size="small" href="/Login" onClick={() => this.clearData()}>Log out</IonButton>
            <br/>
            <IonButton fill="clear" strong size="small" href="/um">More</IonButton>


          </IonContent>
        </IonPage>
    );
  }
}

export default MyCenter;
