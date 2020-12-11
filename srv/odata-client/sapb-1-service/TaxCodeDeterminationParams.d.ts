import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxCodeDeterminationParams
 */
export interface TaxCodeDeterminationParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationParams.build]] instead.
 */
export declare function createTaxCodeDeterminationParams(json: any): TaxCodeDeterminationParams;
/**
 * TaxCodeDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationParams> {
    /**
     * Representation of the [[TaxCodeDeterminationParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of TaxCodeDeterminationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxCodeDeterminationParams {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationParams;
}
//# sourceMappingURL=TaxCodeDeterminationParams.d.ts.map