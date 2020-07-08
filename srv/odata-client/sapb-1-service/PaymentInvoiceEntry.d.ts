import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PaymentInvoiceEntry
 */
export interface PaymentInvoiceEntry {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Installment Id.
     * @nullable
     */
    installmentId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentInvoiceEntry.build]] instead.
 */
export declare function createPaymentInvoiceEntry(json: any): PaymentInvoiceEntry;
/**
 * PaymentInvoiceEntryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentInvoiceEntryField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PaymentInvoiceEntry.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentInvoiceEntry.installmentId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    installmentId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PaymentInvoiceEntry {
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentInvoiceEntry;
}
//# sourceMappingURL=PaymentInvoiceEntry.d.ts.map