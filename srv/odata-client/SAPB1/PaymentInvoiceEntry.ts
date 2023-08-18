/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInvoiceTypeEnum } from './PaymentInvoiceTypeEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * PaymentInvoiceEntry
 */
export interface PaymentInvoiceEntry<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Type.
   * @nullable
   */
  docType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Installment Id.
   * @nullable
   */
  installmentId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * PaymentInvoiceEntryField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentInvoiceEntryField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PaymentInvoiceEntry,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PaymentInvoiceEntry.docType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: EnumField<
    EntityT,
    DeSerializersT,
    PaymentInvoiceTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DocType',
    PaymentInvoiceTypeEnum,
    true
  );
  /**
   * Representation of the {@link PaymentInvoiceEntry.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentInvoiceEntry.installmentId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  installmentId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InstallmentId', 'Edm.Int32', true);

  /**
   * Creates an instance of PaymentInvoiceEntryField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PaymentInvoiceEntry, fieldOptions);
  }
}

export namespace PaymentInvoiceEntry {
  /**
   * Metadata information on all properties of the `PaymentInvoiceEntry` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentInvoiceEntry>[] = [
    {
      originalName: 'DocType',
      name: 'docType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'InstallmentId',
      name: 'installmentId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
