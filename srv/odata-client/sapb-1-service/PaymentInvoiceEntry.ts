/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createPaymentInvoiceEntry(json: any): PaymentInvoiceEntry {
  return PaymentInvoiceEntry.build(json);
}

/**
 * PaymentInvoiceEntryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentInvoiceEntryField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PaymentInvoiceEntry.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentInvoiceEntry.installmentId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  installmentId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InstallmentId', this, 'Edm.Int32');
}

export namespace PaymentInvoiceEntry {
  export function build(json: { [keys: string]: FieldType }): PaymentInvoiceEntry {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      InstallmentId: (installmentId: number) => ({ installmentId: edmToTs(installmentId, 'Edm.Int32') })
    });
  }
}
