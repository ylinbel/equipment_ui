import React from 'react';
// import Html5QrcodePlugin from "./Html5QrcodePlugin";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonAlert} from "@ionic/react";
import "./Scanner.css"
import {getItemBySerialLike} from "../services/myitem";
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';


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

    openScanner() {
        BarcodeScanner.scan().then(barcode => {
            const [presentAlert] = useIonAlert();
            presentAlert({
                header: 'Alert',
                subHeader: 'Important message',
                message: 'Will search the item with serial number: ' + barcode,
                buttons: ['OK'],
            }).then(r => this.onNewScanResult(barcode));
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
                    {/*<div>*/}
                    {/*<Html5QrcodePlugin*/}
                    {/*    fps={10}*/}
                    {/*    qrbox={250}*/}
                    {/*    disableFlip={false}*/}
                    {/*    qrCodeSuccessCallback={this.onNewScanResult}/>*/}
                    {/*</div>*/}
                    <IonContent>
                        <IonButton onClick={this.openScanner}>Scan barcode</IonButton>
                    </IonContent>
                </IonContent>
            </IonPage>
                );
    }

}

export default Scanner;