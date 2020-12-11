import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TechnicianSettingsGroupParams
 */
export interface TechnicianSettingsGroupParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSettingsGroupParams.build]] instead.
 */
export declare function createTechnicianSettingsGroupParams(json: any): TechnicianSettingsGroupParams;
/**
 * TechnicianSettingsGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TechnicianSettingsGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TechnicianSettingsGroupParams> {
    /**
     * Representation of the [[TechnicianSettingsGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TechnicianSettingsGroupParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of TechnicianSettingsGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TechnicianSettingsGroupParams {
    /**
     * Metadata information on all properties of the `TechnicianSettingsGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TechnicianSettingsGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TechnicianSettingsGroupParams;
}
//# sourceMappingURL=TechnicianSettingsGroupParams.d.ts.map