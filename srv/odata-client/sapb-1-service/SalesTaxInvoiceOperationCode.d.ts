import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesTaxInvoiceOperationCode
 */
export interface SalesTaxInvoiceOperationCode {
    /**
     * Op Code.
     * @nullable
     */
    opCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxInvoiceOperationCode.build]] instead.
 */
export declare function createSalesTaxInvoiceOperationCode(json: any): SalesTaxInvoiceOperationCode;
/**
 * SalesTaxInvoiceOperationCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesTaxInvoiceOperationCodeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesTaxInvoiceOperationCode.opCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    opCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SalesTaxInvoiceOperationCode {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesTaxInvoiceOperationCode;
}
//# sourceMappingURL=SalesTaxInvoiceOperationCode.d.ts.map