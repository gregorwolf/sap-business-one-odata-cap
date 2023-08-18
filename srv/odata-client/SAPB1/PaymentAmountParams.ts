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
 * PaymentAmountParams
 */
export interface PaymentAmountParams<
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
  /**
   * Cash Discount Percentage.
   * @nullable
   */
  cashDiscountPercentage?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cash Discount Amount.
   * @nullable
   */
  cashDiscountAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cash Discount Amount Fc.
   * @nullable
   */
  cashDiscountAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cash Discount Amount Sc.
   * @nullable
   */
  cashDiscountAmountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Payment Amount.
   * @nullable
   */
  totalPaymentAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Payment Amount Fc.
   * @nullable
   */
  totalPaymentAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total Payment Amount Sc.
   * @nullable
   */
  totalPaymentAmountSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * PaymentAmountParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentAmountParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PaymentAmountParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PaymentAmountParams.docType} property for query construction.
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
   * Representation of the {@link PaymentAmountParams.docEntry} property for query construction.
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
   * Representation of the {@link PaymentAmountParams.installmentId} property for query construction.
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
   * Representation of the {@link PaymentAmountParams.cashDiscountPercentage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountPercentage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CashDiscountPercentage',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentAmountParams.cashDiscountAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CashDiscountAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentAmountParams.cashDiscountAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CashDiscountAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentAmountParams.cashDiscountAmountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountAmountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CashDiscountAmountSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentAmountParams.totalPaymentAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalPaymentAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalPaymentAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentAmountParams.totalPaymentAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalPaymentAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalPaymentAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentAmountParams.totalPaymentAmountSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalPaymentAmountSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TotalPaymentAmountSC',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of PaymentAmountParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PaymentAmountParams, fieldOptions);
  }
}

export namespace PaymentAmountParams {
  /**
   * Metadata information on all properties of the `PaymentAmountParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentAmountParams>[] = [
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
    },
    {
      originalName: 'CashDiscountPercentage',
      name: 'cashDiscountPercentage',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CashDiscountAmount',
      name: 'cashDiscountAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CashDiscountAmountFC',
      name: 'cashDiscountAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CashDiscountAmountSC',
      name: 'cashDiscountAmountSc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalPaymentAmount',
      name: 'totalPaymentAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalPaymentAmountFC',
      name: 'totalPaymentAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TotalPaymentAmountSC',
      name: 'totalPaymentAmountSc',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
