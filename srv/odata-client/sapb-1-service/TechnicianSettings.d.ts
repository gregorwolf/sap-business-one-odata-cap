import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class TechnicianSettingsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TechnicianSettings> {
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
    /**
     * Creates an instance of TechnicianSettingsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TechnicianSettings {
    /**
     * Metadata information on all properties of the `TechnicianSettings` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TechnicianSettings>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TechnicianSettings;
}
//# sourceMappingURL=TechnicianSettings.d.ts.map