import { Observable } from 'rxjs';
import { LocationInfo } from './../shared/models/location-info';
import { Fta } from './../shared/models/fta';
import { MedicaidComMedication } from './../shared/models/medicaid-com-medication';
import { MedicalPlan } from './../shared/models/medical-plan.model';
import { RxConfigService } from './../rxconfig.service';
import { Component, OnInit } from '@angular/core';
import { AvailablePlans } from '../shared/models/AvailablePlans.model';
@Component({
  selector: 'app-rxsearch',
  templateUrl: './rxsearch.component.html',
  styleUrls: ['./rxsearch.component.scss', '../app.component.scss']
})

export class RxSearchComponent implements OnInit {
  title = 'RxMedWeb';
  medicalPlans: MedicalPlan[];
  filteredPlans: MedicalPlan[];
  medicaidCommMedications: MedicaidComMedication[];
  relatedMedications: MedicaidComMedication[];
  medicaidMedication: MedicaidComMedication;
  planId: number;
  planTypeId: number;
  locationInfo: LocationInfo;
  locationObservable: Observable <{ }>;
  PlanType:AvailablePlans[];
  drugRecords: Array<any> = []; 
  constructor(public rxService: RxConfigService) { 
    this.rxService.GetAllAvailablePlanTypes().subscribe((data : any)=>{
        this.PlanType = data;
    })
  }

  ngOnInit(): void {
    this.rxService
      .getPlans()
      .subscribe((data: any) => {
        this.medicalPlans = data;
      }); 
  }

  onPlanTypeSelected = (val: number): any => {
    this.planId = val;
    this.filteredPlans = this.medicalPlans.filter(x => x.typeId === val);
  }

  selectEvent = (item): any => {
    this.planId = item.id;
    this.planTypeId = item.typeId;
  }

  onChangeSearch = (val: string): any => {
    this.rxService.FindDrugBySearchString(val)
      .subscribe((data: any) => {
        console.log(data);
        this.medicaidCommMedications = data;
      });
  }

  onMedicationSelect = (item): any => {
    if (item.rxcui != null) {
      this.rxService.FindRelatedDrugs(item.rxcui, this.planId.toString())
        .subscribe((data: any) => {
          this.relatedMedications = data;
        });
    }
  }

  onZipCodeSearch = (val: any): any => {
    console.log(val);
    if (val.target.value.length === 5) {
      this.rxService.FindPlanInformation(val.target.value)
        .subscribe((data:any) => {
          this.filteredPlans = data;
          console.log(this.filteredPlans);
      });
    } 
    else {
      this.locationInfo = null;
    }
  }

  // onDrugNameSearchSelected = (item : any) : any =>{
  //   this.rxService.GetFTARecords().subscribe(data=>{
  //     this.medicaidMedication = data;
  //   })
  // }

  onStateNameSearch = (val: any): any => {
    console.log(val);
    if (val.target.value.length!=null) {
      this.rxService.FindLocationInfoByStateName(val.target.value)
        .subscribe((data: LocationInfo) => {
          this.locationInfo = data;
          console.log(data);
      });
    } 
    else {
      this.locationInfo = null;
    }
  }
}
