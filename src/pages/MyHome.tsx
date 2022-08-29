import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonSearchbar, IonItem, IonList, IonLabel
} from '@ionic/react';
import './MyHome.css';
import React from "react";
import axios from "axios";

class MyHome extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.state={
            items:[],
            value: '',
            isLoaded: false
        }
    }

    getResult = async (val:String) => {
        const _this = this;
        await axios.get(`http://localhost:8080/items/find-by-name/${val}/`)
            .then(res => {
                _this.setState({
                    items: res.data,
                    isLoaded: true
                })
                console.log(res.data);
                console.log(res);
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded:false,
                    error:error
                })
            })
    };

    onChangeHandler = async (e:any) => {
        this.getResult(e.target.value);
        this.setState({ value: e.target.value });
    };

    render() {
        const openScanner = async () => {
            // const data = await BarcodeScanner.scan();
            // console.log(`Barcode data: ${data.text}`);
        };
        return (
            <IonPage>
                <IonContent>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle class="ion-text-center">Search</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonSearchbar value={this.state.value} onIonChange={e => this.onChangeHandler(e)} placeholder="Search with name"/>
                    <IonList>
                        {this.state.items.map((item: any) => {
                            return (
                                <IonItem button href='/tab4' key={item.id}>
                                    <IonLabel>
                                        {item.name}
                                    </IonLabel>
                                    <p>{item.statusEnum}</p>
                                </IonItem>
                            )
                        })
                        }
                    </IonList>
                    <IonSearchbar placeholder="Search with category"/>
                    <IonButton strong expand="block" onClick={openScanner}>Scan</IonButton>
                    <IonButton strong fill="clear" href="/tab3">Add Item</IonButton>
                </IonContent>
            </IonPage>
        );
    }
}

export default MyHome;
