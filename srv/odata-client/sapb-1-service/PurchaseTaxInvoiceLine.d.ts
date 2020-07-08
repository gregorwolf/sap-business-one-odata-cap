import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PurchaseTaxInvoiceLine
 */
export interface PurchaseTaxInvoiceLine {
    /**
     * Ref Entry 1.
     * @nullable
     */
    refEntry1?: number;
    /**
     * Ref Entry 2.
     * @nullable
     */
    refEntry2?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PurchaseTaxInvoiceLine.build]] instead.
 */
export declare function createPurchaseTaxInvoiceLine(json: any): PurchaseTaxInvoiceLine;
/**
 * PurchaseTaxInvoiceLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PurchaseTaxInvoiceLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PurchaseTaxInvoiceLine.refEntry1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    refEntry1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PurchaseTaxInvoiceLine.refEntry2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    refEntry2: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PurchaseTaxInvoiceLine {
    function build(json: {
        [keys: string]: FieldType;
    }): PurchaseTaxInvoiceLine;
}
//# sourceMappingURL=PurchaseTaxInvoiceLine.d.ts.map