import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesTaxAuthorityParams
 */
export interface SalesTaxAuthorityParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Type.
     * @nullable
     */
    type?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxAuthorityParams.build]] instead.
 */
export declare function createSalesTaxAuthorityParams(json: any): SalesTaxAuthorityParams;
/**
 * SalesTaxAuthorityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesTaxAuthorityParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesTaxAuthorityParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SalesTaxAuthorityParams.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SalesTaxAuthorityParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesTaxAuthorityParams;
}
//# sourceMappingURL=SalesTaxAuthorityParams.d.ts.map