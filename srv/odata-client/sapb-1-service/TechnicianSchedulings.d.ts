import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TechnicianSchedulings
 */
export interface TechnicianSchedulings {
    /**
     * Service Call Id.
     * @nullable
     */
    serviceCallId?: number;
    /**
     * Scheduling Line Num.
     * @nullable
     */
    schedulingLineNum?: number;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSchedulings.build]] instead.
 */
export declare function createTechnicianSchedulings(json: any): TechnicianSchedulings;
/**
 * TechnicianSchedulingsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TechnicianSchedulingsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TechnicianSchedulings.serviceCallId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceCallId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSchedulings.schedulingLineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    schedulingLineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSchedulings.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSchedulings.endDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endDate: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace TechnicianSchedulings {
    function build(json: {
        [keys: string]: FieldType;
    }): TechnicianSchedulings;
}
//# sourceMappingURL=TechnicianSchedulings.d.ts.map