import { Deserializable } from './deserializable.model';

export class MedicalPlan {
    id: number;
    name: string;
    state: string;
    typeId: number;

    deserialize(input: any){
        Object.assign(this, input);
        return this;
    }
}
