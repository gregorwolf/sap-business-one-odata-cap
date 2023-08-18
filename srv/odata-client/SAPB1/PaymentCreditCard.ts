/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoRcptCredTypes } from './BoRcptCredTypes';
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
 * PaymentCreditCard
 */
export interface PaymentCreditCard<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Credit Card.
   * @nullable
   */
  creditCard?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Credit Acct.
   * @nullable
   */
  creditAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Credit Card Number.
   * @nullable
   */
  creditCardNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Card Valid Until.
   * @nullable
   */
  cardValidUntil?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Voucher Num.
   * @nullable
   */
  voucherNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Owner Id Num.
   * @nullable
   */
  ownerIdNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Owner Phone.
   * @nullable
   */
  ownerPhone?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Num Of Payments.
   * @nullable
   */
  numOfPayments?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * First Payment Due.
   * @nullable
   */
  firstPaymentDue?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * First Payment Sum.
   * @nullable
   */
  firstPaymentSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Additional Payment Sum.
   * @nullable
   */
  additionalPaymentSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credit Sum.
   * @nullable
   */
  creditSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credit Cur.
   * @nullable
   */
  creditCur?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Credit Rate.
   * @nullable
   */
  creditRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Confirmation Num.
   * @nullable
   */
  confirmationNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Num Of Credit Payments.
   * @nullable
   */
  numOfCreditPayments?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Credit Type.
   * @nullable
   */
  creditType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Split Payments.
   * @nullable
   */
  splitPayments?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * PaymentCreditCardField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentCreditCardField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PaymentCreditCard,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PaymentCreditCard.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentCreditCard.creditCard} property for query construction.
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
   * Representation of the {@link PaymentCreditCard.creditAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreditAcct', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentCreditCard.creditCardNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCardNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreditCardNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentCreditCard.cardValidUntil} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardValidUntil: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CardValidUntil',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PaymentCreditCard.voucherNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  voucherNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VoucherNum', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentCreditCard.ownerIdNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ownerIdNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OwnerIdNum', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentCreditCard.ownerPhone} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ownerPhone: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OwnerPhone', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentCreditCard.paymentMethodCode} property for query construction.
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
   * Representation of the {@link PaymentCreditCard.numOfPayments} property for query construction.
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
   * Representation of the {@link PaymentCreditCard.firstPaymentDue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstPaymentDue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FirstPaymentDue',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PaymentCreditCard.firstPaymentSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstPaymentSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FirstPaymentSum',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentCreditCard.additionalPaymentSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPaymentSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdditionalPaymentSum',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link PaymentCreditCard.creditSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreditSum', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentCreditCard.creditCur} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCur: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreditCur', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentCreditCard.creditRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreditRate', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentCreditCard.confirmationNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  confirmationNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ConfirmationNum',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PaymentCreditCard.numOfCreditPayments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numOfCreditPayments: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NumOfCreditPayments',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PaymentCreditCard.creditType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditType: EnumField<EntityT, DeSerializersT, BoRcptCredTypes, true, false> =
    this._fieldBuilder.buildEnumField('CreditType', BoRcptCredTypes, true);
  /**
   * Representation of the {@link PaymentCreditCard.splitPayments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  splitPayments: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SplitPayments', BoYesNoEnum, true);

  /**
   * Creates an instance of PaymentCreditCardField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PaymentCreditCard, fieldOptions);
  }
}

export namespace PaymentCreditCard {
  /**
   * Metadata information on all properties of the `PaymentCreditCard` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentCreditCard>[] = [
    {
      originalName: 'LineNum',
      name: 'lineNum',
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
      originalName: 'CreditAcct',
      name: 'creditAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CreditCardNumber',
      name: 'creditCardNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CardValidUntil',
      name: 'cardValidUntil',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'VoucherNum',
      name: 'voucherNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OwnerIdNum',
      name: 'ownerIdNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OwnerPhone',
      name: 'ownerPhone',
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
      originalName: 'NumOfPayments',
      name: 'numOfPayments',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FirstPaymentDue',
      name: 'firstPaymentDue',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'FirstPaymentSum',
      name: 'firstPaymentSum',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AdditionalPaymentSum',
      name: 'additionalPaymentSum',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CreditSum',
      name: 'creditSum',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CreditCur',
      name: 'creditCur',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CreditRate',
      name: 'creditRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ConfirmationNum',
      name: 'confirmationNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NumOfCreditPayments',
      name: 'numOfCreditPayments',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CreditType',
      name: 'creditType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SplitPayments',
      name: 'splitPayments',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
