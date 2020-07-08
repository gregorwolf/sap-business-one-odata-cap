import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesTaxAuthoritiesTypeParams
 */
export interface SalesTaxAuthoritiesTypeParams {
    /**
     * Numerator.
     * @nullable
     */
    numerator?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxAuthoritiesTypeParams.build]] instead.
 */
export declare function createSalesTaxAuthoritiesTypeParams(json: any): SalesTaxAuthoritiesTypeParams;
/**
 * SalesTaxAuthoritiesTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesTaxAuthoritiesTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesTaxAuthoritiesTypeParams.numerator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numerator: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SalesTaxAuthoritiesTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesTaxAuthoritiesTypeParams;
}
//# sourceMappingURL=SalesTaxAuthoritiesTypeParams.d.ts.map