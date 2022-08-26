import React, { Component } from 'react';
import axios from 'axios';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonButton,

    IonCard
} from '@ionic/react';
import './MyItem.css';

class ItemList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            this.props.items.map((item,i)=>{
                <IonItem>
                    <IonLabel>
                        {item.name}
                    </IonLabel>
                    <IonButton fill="outline" slot="end">Return</IonButton>
                    <IonButton fill="outline" slot="end">Report damage</IonButton>
                </IonItem>
            })
        )
    }
}

class MyItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded:false,
        }
    }
    componentDidMount(){
        const _this=this;
        axios.get('http://localhost:8080/items/4')
            .then(function (response) {
                _this.setState({
                    items:response,
                    isLoaded:true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded:false,
                    error:error
                })
            })
    }
    render(){
        return (
            <IonPage>
                <IonContent>
                    <IonHeader className="ion-no-border">
                        <IonToolbar>
                            <IonTitle class="ion-text-center">My Item List</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonCard>
                        <ItemList items={this.state.items} />
                    </IonCard>

                </IonContent>
            </IonPage>
        );
    }
}

export default MyItem;
