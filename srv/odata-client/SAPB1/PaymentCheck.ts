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
 * PaymentCheck
 */
export interface PaymentCheck<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Check Number.
   * @nullable
   */
  checkNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Branch.
   * @nullable
   */
  branch?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Accountt Num.
   * @nullable
   */
  accounttNum?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Trnsfrable.
   * @nullable
   */
  trnsfrable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Check Sum.
   * @nullable
   */
  checkSum?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Country Code.
   * @nullable
   */
  countryCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Check Abs Entry.
   * @nullable
   */
  checkAbsEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Check Account.
   * @nullable
   */
  checkAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Manual Check.
   * @nullable
   */
  manualCheck?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
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
   * Endorse.
   * @nullable
   */
  endorse?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Endorsable Check No.
   * @nullable
   */
  endorsableCheckNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * E Check.
   * @nullable
   */
  eCheck?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * PaymentCheckField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentCheckField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PaymentCheck,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PaymentCheck.lineNum} property for query construction.
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
   * Representation of the {@link PaymentCheck.dueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PaymentCheck.checkNumber} property for query construction.
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
   * Representation of the {@link PaymentCheck.bankCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BankCode', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentCheck.branch} property for query construction.
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
   * Representation of the {@link PaymentCheck.accounttNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accounttNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccounttNum', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentCheck.details} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentCheck.trnsfrable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trnsfrable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Trnsfrable', BoYesNoEnum, true);
  /**
   * Representation of the {@link PaymentCheck.checkSum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkSum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CheckSum', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentCheck.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentCheck.countryCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CountryCode', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentCheck.checkAbsEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkAbsEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CheckAbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentCheck.checkAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CheckAccount', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentCheck.manualCheck} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manualCheck: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ManualCheck', BoYesNoEnum, true);
  /**
   * Representation of the {@link PaymentCheck.fiscalId} property for query construction.
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
   * Representation of the {@link PaymentCheck.originallyIssuedBy} property for query construction.
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
   * Representation of the {@link PaymentCheck.endorse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endorse: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Endorse', BoYesNoEnum, true);
  /**
   * Representation of the {@link PaymentCheck.endorsableCheckNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endorsableCheckNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EndorsableCheckNo',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PaymentCheck.eCheck} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eCheck: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ECheck', BoYesNoEnum, true);

  /**
   * Creates an instance of PaymentCheckField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PaymentCheck, fieldOptions);
  }
}

export namespace PaymentCheck {
  /**
   * Metadata information on all properties of the `PaymentCheck` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentCheck>[] = [
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DueDate',
      name: 'dueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CheckNumber',
      name: 'checkNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BankCode',
      name: 'bankCode',
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
      originalName: 'AccounttNum',
      name: 'accounttNum',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Details',
      name: 'details',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Trnsfrable',
      name: 'trnsfrable',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CheckSum',
      name: 'checkSum',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Currency',
      name: 'currency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CountryCode',
      name: 'countryCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CheckAbsEntry',
      name: 'checkAbsEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CheckAccount',
      name: 'checkAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ManualCheck',
      name: 'manualCheck',
      type: 'Edm.Enum',
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
      originalName: 'Endorse',
      name: 'endorse',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EndorsableCheckNo',
      name: 'endorsableCheckNo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ECheck',
      name: 'eCheck',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
