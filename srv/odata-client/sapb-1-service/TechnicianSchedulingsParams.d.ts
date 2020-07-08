import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TechnicianSchedulingsParams
 */
export interface TechnicianSchedulingsParams {
    /**
     * Technician.
     * @nullable
     */
    technician?: number;
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
 * @deprecated Since v1.6.0. Use [[TechnicianSchedulingsParams.build]] instead.
 */
export declare function createTechnicianSchedulingsParams(json: any): TechnicianSchedulingsParams;
/**
 * TechnicianSchedulingsParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TechnicianSchedulingsParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TechnicianSchedulingsParams.technician]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    technician: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSchedulingsParams.startDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSchedulingsParams.endDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endDate: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace TechnicianSchedulingsParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TechnicianSchedulingsParams;
}
//# sourceMappingURL=TechnicianSchedulingsParams.d.ts.map