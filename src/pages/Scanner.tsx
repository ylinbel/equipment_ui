import React from 'react';
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import "./Scanner.css"


class Scanner extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onNewScanResult = this.onNewScanResult.bind(this);
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

    onNewScanResult(decodedText: any, decodedResult: any) {
        // Handle the result here.
    }

};

export default Scanner;