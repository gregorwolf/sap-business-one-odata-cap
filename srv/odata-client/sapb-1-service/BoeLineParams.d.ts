import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BoeLineParams
 */
export interface BoeLineParams {
    /**
     * Boe Key.
     * @nullable
     */
    boeKey?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BoeLineParams.build]] instead.
 */
export declare function createBoeLineParams(json: any): BoeLineParams;
/**
 * BoeLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BoeLineParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BoeLineParams> {
    /**
     * Representation of the [[BoeLineParams.boeKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boeKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BoeLineParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BoeLineParams {
    /**
     * Metadata information on all properties of the `BoeLineParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BoeLineParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BoeLineParams;
}
//# sourceMappingURL=BoeLineParams.d.ts.map