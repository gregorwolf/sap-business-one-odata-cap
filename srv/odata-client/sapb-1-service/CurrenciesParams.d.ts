import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CurrenciesParams
 */
export interface CurrenciesParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CurrenciesParams.build]] instead.
 */
export declare function createCurrenciesParams(json: any): CurrenciesParams;
/**
 * CurrenciesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CurrenciesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CurrenciesParams> {
    /**
     * Representation of the [[CurrenciesParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of CurrenciesParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CurrenciesParams {
    /**
     * Metadata information on all properties of the `CurrenciesParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CurrenciesParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CurrenciesParams;
}
//# sourceMappingURL=CurrenciesParams.d.ts.map