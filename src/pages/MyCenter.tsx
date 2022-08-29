import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange, IonNote } from '@ionic/react';
import './MyHome.css';
import axios from "axios";

class MyCenter extends React.Component<any, any> {
  constructor(props:any){
    super(props);
    this.state={
      data:[],
      isLoaded: false
    }
  }

  componentDidMount() {
    const _this=this;
    axios.get(`http://localhost:8080/users/find-by-name/test user`)
        .then(res => {
          _this.setState({
            data:res.data,
            isLoaded: true
          })
          console.log(res.data);
          console.log(this.state.data);
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            isLoaded:false,
            error:error
          })
        })
  }

  render() {
    console.log(this.state.data[0])
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
                  Usertype
                </IonLabel>
              </IonItem>


            </IonCard>

            <IonButton fill="clear" strong size="small" href="/Login">Log out</IonButton>
            <br/>
            <IonButton fill="clear" strong size="small" href="/um">More</IonButton>


          </IonContent>
        </IonPage>
    );
  }
};

export default MyCenter;
