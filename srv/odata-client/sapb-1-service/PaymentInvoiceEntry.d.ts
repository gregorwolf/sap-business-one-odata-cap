import { PaymentInvoiceTypeEnum } from './PaymentInvoiceTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PaymentInvoiceEntry
 */
export interface PaymentInvoiceEntry {
    /**
     * Doc Type.
     * @nullable
     */
    docType?: PaymentInvoiceTypeEnum;
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
export declare class PaymentInvoiceEntryField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentInvoiceEntry> {
    /**
     * Representation of the [[PaymentInvoiceEntry.docType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docType: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Creates an instance of PaymentInvoiceEntryField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PaymentInvoiceEntry {
    /**
     * Metadata information on all properties of the `PaymentInvoiceEntry` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PaymentInvoiceEntry>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentInvoiceEntry;
}
//# sourceMappingURL=PaymentInvoiceEntry.d.ts.map