/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * CreditLine
 */
export interface CreditLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Credit Card.
   * @nullable
   */
  creditCard?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Voucher Number.
   * @nullable
   */
  voucherNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Pay Date.
   * @nullable
   */
  payDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Deposited.
   * @nullable
   */
  deposited?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Num Of Payments.
   * @nullable
   */
  numOfPayments?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Customer.
   * @nullable
   */
  customer?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reference.
   * @nullable
   */
  reference?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transferred.
   * @nullable
   */
  transferred?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Total.
   * @nullable
   */
  total?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credit Currency.
   * @nullable
   */
  creditCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * CreditLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CreditLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CreditLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CreditLine.absId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsId', 'Edm.Int32', true);
  /**
   * Representation of the {@link CreditLine.creditCard} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCard: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreditCard', 'Edm.Int32', true);
  /**
   * Representation of the {@link CreditLine.voucherNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  voucherNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VoucherNumber', 'Edm.String', true);
  /**
   * Representation of the {@link CreditLine.paymentMethodCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentMethodCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CreditLine.payDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  payDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PayDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link CreditLine.deposited} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deposited: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Deposited', BoYesNoEnum, true);
  /**
   * Representation of the {@link CreditLine.numOfPayments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numOfPayments: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NumOfPayments', 'Edm.Int32', true);
  /**
   * Representation of the {@link CreditLine.customer} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customer: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true);
  /**
   * Representation of the {@link CreditLine.reference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Reference', 'Edm.String', true);
  /**
   * Representation of the {@link CreditLine.transferred} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferred: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Transferred', BoYesNoEnum, true);
  /**
   * Representation of the {@link CreditLine.total} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Total', 'Edm.Double', true);
  /**
   * Representation of the {@link CreditLine.creditCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreditCurrency',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of CreditLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CreditLine, fieldOptions);
  }
}

export namespace CreditLine {
  /**
   * Metadata information on all properties of the `CreditLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CreditLine>[] = [
    {
      originalName: 'AbsId',
      name: 'absId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CreditCard',
      name: 'creditCard',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VoucherNumber',
      name: 'voucherNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PaymentMethodCode',
      name: 'paymentMethodCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PayDate',
      name: 'payDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Deposited',
      name: 'deposited',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'NumOfPayments',
      name: 'numOfPayments',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Customer',
      name: 'customer',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Reference',
      name: 'reference',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Transferred',
      name: 'transferred',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Total',
      name: 'total',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CreditCurrency',
      name: 'creditCurrency',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
