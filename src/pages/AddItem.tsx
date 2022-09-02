import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect, IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './MyItem.css';
import React from "react";
import {checkLocationExist, createItem, getCategory, getSubCategory} from "../services/myitem";

class AddItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      serial: '',
      name: '',
      set: '',
      info: '',
      location: '',
      returnTime: '',
      mainCategory: '',
      sublayer: '',
      categoryId: null,
      locationId: null,
      layer: [],
      category:[],
    }
  }

  checkLocation = async () => {
    checkLocationExist(this.state.location)
        .then(res => {
          this.setState({locationId: res.data.id})
        }).catch(function () {
      alert("location not found, please create new location")
      return;
    });
  }

  getLayersHandler = async (e:any) => {
    this.setState({mainCategory: e.detail.value!})
    await this.getLayers(e.detail.value!)
  };

  getCategoriesHandler = async (e:any) => {
    this.setState({sublayer: e.detail.value!})
    await this.getCategories(this.state.mainCategory, e.detail.value!)
  };

  getItemsHandler = async (e:any) => {
    this.setState({categoryId: e.detail.value!});
  }

  getLayers = async (parent: any) => {
    const _this = this;
    getSubCategory(parent)
        .then(res => {
          _this.setState({
            layer: res.data,
            isLoaded: true
          })
        })
  }

  getCategories = async (parent: any, subLayer: any) => {
    const _this = this;
    getCategory(parent, subLayer)
        .then(res => {
          _this.setState({
            category: res.data,
            isLoaded: true
          })
        })
  }


  createItem = () => {
    createItem(this.state.name, this.state.serial, this.state.set, this.state.returnTime, this.state.locationId, this.state.categoryId, this.state.info)
        .catch(function (error) {
          console.log(error);
          alert("Error")
          return;
        });
  }

  render() {
    return (
        <IonPage>
          <IonContent fullscreen>
            <IonHeader>
              <IonToolbar>
                <IonTitle class="ion-text-center">Add Item</IonTitle>
              </IonToolbar>
            </IonHeader>

            <IonItem>
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput value={this.state.name} placeholder="Enter Name" onIonChange={e => this.setState({name:e.detail.value!})}> </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Serial Number</IonLabel>
              <IonInput value={this.state.serial} placeholder="Enter Serial"
                        onIonChange={e => this.setState({serial: e.detail.value!})}> </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Set Name</IonLabel>
              <IonInput value={this.state.set} placeholder="Enter Set Name"
                        onIonChange={e => this.setState({set: e.detail.value!})}> </IonInput>
            </IonItem>


            <IonItem>
              <IonLabel position="stacked">Location</IonLabel>
              <IonInput value={this.state.location} placeholder="Enter Location Serial Number"
                        onIonChange={e => this.setState({location: e.detail.value!})}> </IonInput>
              <IonButton fill="outline" slot="end" onClick={() => this.checkLocation()}>Check</IonButton>
            </IonItem>

            <IonList>
              <IonItem>
                <IonLabel position="stacked">Return Time</IonLabel>
                <IonSelect
                    interface="popover"
                    placeholder="Select Return Time"
                    onIonChange={e => this.setState({returnTime: e.detail.value!})}>
                  <IonSelectOption value="Daily">Daily</IonSelectOption>
                  <IonSelectOption value="Weekly">Weekly</IonSelectOption>
                  <IonSelectOption value="Two Weeks">Two Weeks</IonSelectOption>
                  <IonSelectOption value="Monthly">Monthly</IonSelectOption>
                  <IonSelectOption value="Three Months">Three Months</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>

            <IonList>
              <IonItem>
                <IonLabel position="stacked">Main Category</IonLabel>
                <IonSelect
                    interface="popover"
                    placeholder="Select Return Time"
                    onIonChange={e => this.getLayersHandler(e)}>
                  <IonSelectOption value="ELECTRONICS_ACQUISITION">Electronics Acquisition</IonSelectOption>
                  <IonSelectOption value="ELECTRONICS_ACTUATION">Electronics Actuation</IonSelectOption>
                  <IonSelectOption value="ELECTRONICS_WORKSHOP">Electronics Workshop</IonSelectOption>
                  <IonSelectOption value="ELECTRONICS_COMPUTER_AND_OTHER">Electronics Computer And
                    Other</IonSelectOption>
                  <IonSelectOption value="MECHANICAL">Mechanical</IonSelectOption>
                  <IonSelectOption value="TOOL">Tool</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonSelect
                    interface="popover"
                    placeholder="Select SubCategory"
                    onIonChange={e => this.getCategoriesHandler(e)}>
                  {
                    this.state.layer.map((item: any) => {
                      return (
                          <IonSelectOption value={item}>{item}</IonSelectOption>
                      )
                    })
                  }
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonSelect
                    interface="popover"
                    placeholder="Select Category"
                    onIonChange={e => this.getItemsHandler(e)}>
                  {
                    this.state.category.map((item: any) => {
                      return (
                          <IonSelectOption value={item.id}>{item.name}</IonSelectOption>
                      )
                    })
                  }
                </IonSelect>
              </IonItem>
            </IonList>



            <IonItem>
              <IonLabel position="stacked">Info</IonLabel>
              <IonInput value={this.state.info} placeholder="More info.." onIonChange={e => this.setState({info: e.detail.value!})}> </IonInput>
            </IonItem>

            <IonButton strong expand="block" onClick={() => this.createItem()}>Add</IonButton>
          </IonContent>
        </IonPage>
    );
  };
}

export default AddItem;
