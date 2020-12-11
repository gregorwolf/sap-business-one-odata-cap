import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BrazilMultiIndexerParams
 */
export interface BrazilMultiIndexerParams {
    /**
     * Id.
     * @nullable
     */
    id?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BrazilMultiIndexerParams.build]] instead.
 */
export declare function createBrazilMultiIndexerParams(json: any): BrazilMultiIndexerParams;
/**
 * BrazilMultiIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BrazilMultiIndexerParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BrazilMultiIndexerParams> {
    /**
     * Representation of the [[BrazilMultiIndexerParams.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BrazilMultiIndexerParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BrazilMultiIndexerParams {
    /**
     * Metadata information on all properties of the `BrazilMultiIndexerParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BrazilMultiIndexerParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BrazilMultiIndexerParams;
}
//# sourceMappingURL=BrazilMultiIndexerParams.d.ts.map