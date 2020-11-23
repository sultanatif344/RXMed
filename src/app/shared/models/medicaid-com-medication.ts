import { DecimalPipe } from '@angular/common';

export class MedicaidComMedication {
    id: number;
    rxcui: number;
    productDescription: string;
    originalDrugName: string;
    formularyRestriction: string;
    tty: string;
    routeOfAdministration: string;
    package: string;
    coveredForDualEligible: string;
    brandStatus: string;
    pricePerUnit: string;
    coPay: number;
    planId: number;
    planTypeId: number;
}
