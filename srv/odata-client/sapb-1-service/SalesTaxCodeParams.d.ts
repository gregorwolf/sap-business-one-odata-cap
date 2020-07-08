import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesTaxCodeParams
 */
export interface SalesTaxCodeParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxCodeParams.build]] instead.
 */
export declare function createSalesTaxCodeParams(json: any): SalesTaxCodeParams;
/**
 * SalesTaxCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesTaxCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesTaxCodeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace SalesTaxCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesTaxCodeParams;
}
//# sourceMappingURL=SalesTaxCodeParams.d.ts.map