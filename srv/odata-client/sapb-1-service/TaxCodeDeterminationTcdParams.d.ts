import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TaxCodeDeterminationTcdParams
 */
export interface TaxCodeDeterminationTcdParams {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdParams.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdParams(json: any): TaxCodeDeterminationTcdParams;
/**
 * TaxCodeDeterminationTcdParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxCodeDeterminationTcdParams> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdParams.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of TaxCodeDeterminationTcdParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TaxCodeDeterminationTcdParams {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TaxCodeDeterminationTcdParams;
}
//# sourceMappingURL=TaxCodeDeterminationTcdParams.d.ts.map