/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoDepositCheckEnum } from './BoDepositCheckEnum';
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
 * CheckLine
 */
export interface CheckLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Check Key.
   * @nullable
   */
  checkKey?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Check Number.
   * @nullable
   */
  checkNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bank.
   * @nullable
   */
  bank?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Branch.
   * @nullable
   */
  branch?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cash Check.
   * @nullable
   */
  cashCheck?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Check Date.
   * @nullable
   */
  checkDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Customer.
   * @nullable
   */
  customer?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Check Amount.
   * @nullable
   */
  checkAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Deposited.
   * @nullable
   */
  deposited?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Transferred.
   * @nullable
   */
  transferred?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Account Number.
   * @nullable
   */
  accountNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Check Currency.
   * @nullable
   */
  checkCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fiscal Id.
   * @nullable
   */
  fiscalId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Originally Issued By.
   * @nullable
   */
  originallyIssuedBy?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Rejected By Bank.
   * @nullable
   */
  rejectedByBank?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * CheckLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CheckLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CheckLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CheckLine.checkKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CheckKey', 'Edm.Int32', true);
  /**
   * Representation of the {@link CheckLine.checkNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CheckNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link CheckLine.bank} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bank: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Bank', 'Edm.String', true);
  /**
   * Representation of the {@link CheckLine.branch} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branch: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Branch', 'Edm.String', true);
  /**
   * Representation of the {@link CheckLine.cashCheck} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashCheck: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CashCheck', 'Edm.String', true);
  /**
   * Representation of the {@link CheckLine.checkDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CheckDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link CheckLine.customer} property for query construction.
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
   * Representation of the {@link CheckLine.checkAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CheckAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link CheckLine.deposited} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deposited: EnumField<
    EntityT,
    DeSerializersT,
    BoDepositCheckEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('Deposited', BoDepositCheckEnum, true);
  /**
   * Representation of the {@link CheckLine.transferred} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferred: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Transferred', BoYesNoEnum, true);
  /**
   * Representation of the {@link CheckLine.accountNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountNumber', 'Edm.String', true);
  /**
   * Representation of the {@link CheckLine.checkCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CheckCurrency', 'Edm.String', true);
  /**
   * Representation of the {@link CheckLine.fiscalId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FiscalID', 'Edm.String', true);
  /**
   * Representation of the {@link CheckLine.originallyIssuedBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originallyIssuedBy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OriginallyIssuedBy',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CheckLine.rejectedByBank} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rejectedByBank: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('RejectedByBank', BoYesNoEnum, true);

  /**
   * Creates an instance of CheckLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CheckLine, fieldOptions);
  }
}

export namespace CheckLine {
  /**
   * Metadata information on all properties of the `CheckLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CheckLine>[] = [
    {
      originalName: 'CheckKey',
      name: 'checkKey',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CheckNumber',
      name: 'checkNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Bank',
      name: 'bank',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Branch',
      name: 'branch',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CashCheck',
      name: 'cashCheck',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CheckDate',
      name: 'checkDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Customer',
      name: 'customer',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CheckAmount',
      name: 'checkAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Deposited',
      name: 'deposited',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Transferred',
      name: 'transferred',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AccountNumber',
      name: 'accountNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CheckCurrency',
      name: 'checkCurrency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FiscalID',
      name: 'fiscalId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OriginallyIssuedBy',
      name: 'originallyIssuedBy',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RejectedByBank',
      name: 'rejectedByBank',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
