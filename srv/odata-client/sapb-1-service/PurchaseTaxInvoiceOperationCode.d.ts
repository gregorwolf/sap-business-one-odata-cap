import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PurchaseTaxInvoiceOperationCode
 */
export interface PurchaseTaxInvoiceOperationCode {
    /**
     * Op Code.
     * @nullable
     */
    opCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PurchaseTaxInvoiceOperationCode.build]] instead.
 */
export declare function createPurchaseTaxInvoiceOperationCode(json: any): PurchaseTaxInvoiceOperationCode;
/**
 * PurchaseTaxInvoiceOperationCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PurchaseTaxInvoiceOperationCodeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PurchaseTaxInvoiceOperationCode.opCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    opCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PurchaseTaxInvoiceOperationCode {
    function build(json: {
        [keys: string]: FieldType;
    }): PurchaseTaxInvoiceOperationCode;
}
//# sourceMappingURL=PurchaseTaxInvoiceOperationCode.d.ts.map