import React from 'react';
import axios from 'axios';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem, IonLabel, IonButton, IonList
} from '@ionic/react';
import './MyItem.css';

// class ItemList extends React.Component<any, any>{
//     constructor(props:any){
//         super(props);
//     }
//     render(){
//         return (
//             this.state.data.map((item:any)=>{
//                 <IonItem>
//                     <IonLabel>
//                         {item.name}
//                     </IonLabel>
//                     <IonButton fill="outline" slot="end">Return</IonButton>
//                     <IonButton fill="outline" slot="end">Report damage</IonButton>
//                 </IonItem>
//             })
//         )
//     }
// }

// class MyItem extends React.Component<any, any> {
//     constructor(props:any){
//         super(props);
//         this.state={
//             items:[],
//             isLoaded:false,
//         }
//     }
//     componentDidMount(){
//         const _this=this;
//             .then(response => {
//                 _this.setState({
//                     items:response.data,
//                     isLoaded:true
//                 });
//             })
//             .catch(function (error) {
//                 console.log(error);
//                 _this.setState({
//                     isLoaded:false,
//                     error:error
//                 })
//             })
//         console.log(this.state.items)
//     }
//     render(){
//         const {items} = this.state;
//         return (
//             <IonPage>
//                 <IonContent>
//                     {items.map((home:any) => <div key={home.id}>{home.id}</div>)}
//

//
//                     <IonCard>
//                         <ItemList items={this.state.items} />
//                     </IonCard>
//
//                 </IonContent>
//             </IonPage>
//         );
//     }
// }
//
// export default MyItem;

class MyItem extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.state={
            data:[],
            isLoaded: false
        }
    }

    componentDidMount() {
        const _this=this;
        axios.get(`http://localhost:8080/items/log/get-borrow-list/2`)
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

    returnItem() {
        axios.put('http://localhost:8080/items/6/false/return');
    }

    repostDamaged() {
        axios.put('http://localhost:8080/items/6/true/return');
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle class="ion-text-center">My Item List</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        {this.state.data.map((item: any) => {
                            return (
                                <IonItem key={item.id}>
                                    <IonLabel>
                                    {item.item.name}
                                    </IonLabel>
                                    <IonButton fill="outline" slot="end" onClick={() => this.returnItem()}>Return</IonButton>
                                    <IonButton fill="outline" slot="end" onClick={() => this.repostDamaged()}>Report damage</IonButton>
                                </IonItem>
                            )
                        })
                        }
                    </IonList>
                </IonContent>
            </IonPage>
        )
    }
}

export default MyItem;
