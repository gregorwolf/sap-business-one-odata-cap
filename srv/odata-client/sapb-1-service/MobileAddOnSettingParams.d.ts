import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * MobileAddOnSettingParams
 */
export interface MobileAddOnSettingParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[MobileAddOnSettingParams.build]] instead.
 */
export declare function createMobileAddOnSettingParams(json: any): MobileAddOnSettingParams;
/**
 * MobileAddOnSettingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MobileAddOnSettingParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MobileAddOnSettingParams> {
    /**
     * Representation of the [[MobileAddOnSettingParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MobileAddOnSettingParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of MobileAddOnSettingParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace MobileAddOnSettingParams {
    /**
     * Metadata information on all properties of the `MobileAddOnSettingParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<MobileAddOnSettingParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): MobileAddOnSettingParams;
}
//# sourceMappingURL=MobileAddOnSettingParams.d.ts.map