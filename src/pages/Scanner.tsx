import React from 'react';
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import "./Scanner.css"
import {getItemBySerialLike} from "../services/myitem";


class Scanner extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state= {
            text: '',
            id: ''
        }
        this.onNewScanResult = this.onNewScanResult.bind(this);
    }

    onNewScanResult(decodedText: any) {
        if (decodedText !== null) {
            this.setState({text: decodedText})
        }
        this.findBySerialLike(decodedText)
    }

    findBySerialLike(decodeText: any) {
        getItemBySerialLike(decodeText)
            .then(res => {
                this.setState({id: res.data[0].id})
                window.location.href=`/item?id=${this.state.id}`
            });
    }

    render() {
        return (
            <IonPage>
                <IonContent>
                    <IonHeader>
                            <IonToolbar>
                                <IonTitle class="ion-text-center">Scanner</IonTitle>
                            </IonToolbar>
                    </IonHeader>
                    <div>
                    <Html5QrcodePlugin
                        fps={10}
                        qrbox={250}
                        disableFlip={false}
                        qrCodeSuccessCallback={this.onNewScanResult}/>
                    </div>
                </IonContent>
            </IonPage>
                );
    }

}

export default Scanner;