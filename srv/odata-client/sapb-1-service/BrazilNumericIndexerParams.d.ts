import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BrazilNumericIndexerParams
 */
export interface BrazilNumericIndexerParams {
    /**
     * Id.
     * @nullable
     */
    id?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BrazilNumericIndexerParams.build]] instead.
 */
export declare function createBrazilNumericIndexerParams(json: any): BrazilNumericIndexerParams;
/**
 * BrazilNumericIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BrazilNumericIndexerParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BrazilNumericIndexerParams> {
    /**
     * Representation of the [[BrazilNumericIndexerParams.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BrazilNumericIndexerParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BrazilNumericIndexerParams {
    /**
     * Metadata information on all properties of the `BrazilNumericIndexerParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BrazilNumericIndexerParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BrazilNumericIndexerParams;
}
//# sourceMappingURL=BrazilNumericIndexerParams.d.ts.map