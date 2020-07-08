import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TechnicianSettings
 */
export interface TechnicianSettings {
    /**
     * Technician.
     * @nullable
     */
    technician?: number;
    /**
     * Group Code.
     * @nullable
     */
    groupCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSettings.build]] instead.
 */
export declare function createTechnicianSettings(json: any): TechnicianSettings;
/**
 * TechnicianSettingsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TechnicianSettingsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TechnicianSettings.technician]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    technician: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettings.groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TechnicianSettings {
    function build(json: {
        [keys: string]: FieldType;
    }): TechnicianSettings;
}
//# sourceMappingURL=TechnicianSettings.d.ts.map