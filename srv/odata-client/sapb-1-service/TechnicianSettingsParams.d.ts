import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TechnicianSettingsParams
 */
export interface TechnicianSettingsParams {
    /**
     * Technician.
     * @nullable
     */
    technician?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSettingsParams.build]] instead.
 */
export declare function createTechnicianSettingsParams(json: any): TechnicianSettingsParams;
/**
 * TechnicianSettingsParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TechnicianSettingsParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TechnicianSettingsParams.technician]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    technician: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TechnicianSettingsParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TechnicianSettingsParams;
}
//# sourceMappingURL=TechnicianSettingsParams.d.ts.map