import { LocationInfo } from './shared/models/location-info';
import { Fta } from './shared/models/fta';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MedicalPlan } from './shared/models/medical-plan.model';
import { MedicaidComMedication } from './shared/models/medicaid-com-medication';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from './../environments/environment';
import { AvailablePlans } from './shared/models/AvailablePlans.model';

@Injectable({
  providedIn: 'root'
})
export class RxConfigService {
  constructor(private http: HttpClient) { }

  getPlans = (): any => this.http.get(`${environment.apiUrl}/MedicalPlan/GetAllPlans`)
    .pipe(
      map((data: MedicalPlan[]) => {
        return data;
      }), catchError(error => {
        return throwError('Something went wrong!');
      })
    )

  getFTAMedications = (): any => {
    return this.http.get(`${environment.apiUrl}/Fta/GetFTARecords`)
      .pipe(
        map((data: Fta[]) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      );
  }

  FindFtaRecordBySearchString = (searchString: string): any => {
    const params = new HttpParams()
      .set('searchString', searchString);

    return this.http.get(`${environment.apiUrl}/Fta/GetFtaRecordBySearchString`, { params })
      .pipe(
        map((data: Fta[]) => {
          return data;
        }), catchError(() => {
          return throwError('Something went wrong!');
        })
      );
  }

  FindDrugBySearchString = (searchString: string): any => {
    const params = new HttpParams()
      .set('searchString', searchString);
      // .set('planId', planId);

    return this.http.get(`${environment.apiUrl}/Fta/FindFTADrugsBySearchString`, { params })
      .pipe(
        map((data: MedicaidComMedication[]) => {
          return data;
        }), catchError(() => {
          return throwError('Something went wrong!');
        })
      );
  }

  FindRelatedDrugs = (rxcui: string, planId: string): any => {
    const params = new HttpParams()
      .set('rxcui', rxcui)
      .set('planId', planId);
    return this.http.get(`${environment.apiUrl}/Medication/GetCommMedicaidRelatedDrugs`, { params })
      .pipe(
        map((data: MedicaidComMedication[]) => {
          return data;
        }), catchError(() => {
          return throwError('Something went wrong!');
        })
      );
  }

  FindPlanInformation = (zipCode: string): any => {
    const params = new HttpParams()
      .set('zip', zipCode);

    return this.http.get(`${environment.apiUrl}/MedicalPlan/GetPlanInformationByZip?`, { params })
      .pipe(
        map((data: LocationInfo) => {
          return data;
        }), catchError(() => {
          return throwError('Something went wrong!');
        })
      );
  }

  FindLocationInfoByStateName = (stateName: string): any => {
    const params = new HttpParams()
      .set('searchString', stateName);

    return this.http.get(`${environment.apiUrl}/Medicare/GetLocationInfoByStateName?`, { params })
      .pipe(
        map((data: LocationInfo) => {
          return data;
        }), catchError(() => {
          return throwError('Something went wrong!');
        })
      );
  }

  GetAllAvailablePlanTypes = () : Observable<AvailablePlans> => {
    return this.http.get(`${environment.apiUrl}/MedicalPlan/GetType`).pipe(
      map((data:AvailablePlans) => {
        return data;
      })
    )
  }

  GetFTARecords = (): Observable<any> => {
    return this.http.get(`${environment.apiUrl}/Fta/GetFtaRecords`);
  }


}
