/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInvoiceTypeEnum } from './PaymentInvoiceTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createPaymentInvoiceEntry(json: any): PaymentInvoiceEntry {
  return PaymentInvoiceEntry.build(json);
}

/**
 * PaymentInvoiceEntryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentInvoiceEntryField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentInvoiceEntry> {
  /**
   * Representation of the [[PaymentInvoiceEntry.docType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocType', this);
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

  /**
   * Creates an instance of PaymentInvoiceEntryField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PaymentInvoiceEntry);
  }
}

export namespace PaymentInvoiceEntry {
  /**
   * Metadata information on all properties of the `PaymentInvoiceEntry` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentInvoiceEntry>[] = [{
    originalName: 'DocType',
    name: 'docType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'InstallmentId',
    name: 'installmentId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PaymentInvoiceEntry {
    return deserializeComplexTypeV4(json, PaymentInvoiceEntry);
  }
}
