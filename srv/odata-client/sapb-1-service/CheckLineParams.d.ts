import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CheckLineParams
 */
export interface CheckLineParams {
    /**
     * Check Key.
     * @nullable
     */
    checkKey?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CheckLineParams.build]] instead.
 */
export declare function createCheckLineParams(json: any): CheckLineParams;
/**
 * CheckLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CheckLineParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CheckLineParams> {
    /**
     * Representation of the [[CheckLineParams.checkKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CheckLineParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CheckLineParams {
    /**
     * Metadata information on all properties of the `CheckLineParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CheckLineParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CheckLineParams;
}
//# sourceMappingURL=CheckLineParams.d.ts.map