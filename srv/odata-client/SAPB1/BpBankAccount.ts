/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SepaSequenceTypeEnum } from './SepaSequenceTypeEnum';
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
 * BpBankAccount
 */
export interface BpBankAccount<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Log Instance.
   * @nullable
   */
  logInstance?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * User No 4.
   * @nullable
   */
  userNo4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * County.
   * @nullable
   */
  county?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * User No 2.
   * @nullable
   */
  userNo2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Iban.
   * @nullable
   */
  iban?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Block.
   * @nullable
   */
  block?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Branch.
   * @nullable
   */
  branch?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Control Key.
   * @nullable
   */
  controlKey?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * User No 3.
   * @nullable
   */
  userNo3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Account No.
   * @nullable
   */
  accountNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * User No 1.
   * @nullable
   */
  userNo1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Internal Key.
   * @nullable
   */
  internalKey?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Building Floor Room.
   * @nullable
   */
  buildingFloorRoom?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bik.
   * @nullable
   */
  bik?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Account Name.
   * @nullable
   */
  accountName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Correspondent Account.
   * @nullable
   */
  correspondentAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Phone.
   * @nullable
   */
  phone?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fax.
   * @nullable
   */
  fax?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customer Id Number.
   * @nullable
   */
  customerIdNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Isr Biller Id.
   * @nullable
   */
  isrBillerId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Isr Type.
   * @nullable
   */
  isrType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bic Swift Code.
   * @nullable
   */
  bicSwiftCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Aba Routing Number.
   * @nullable
   */
  abaRoutingNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Mandate Id.
   * @nullable
   */
  mandateId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Signature Date.
   * @nullable
   */
  signatureDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Mandate Exp Date.
   * @nullable
   */
  mandateExpDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Sepa Seq Type.
   * @nullable
   */
  sepaSeqType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * BpBankAccountField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpBankAccountField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BpBankAccount,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BpBankAccount.logInstance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logInstance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogInstance', 'Edm.Int32', true);
  /**
   * Representation of the {@link BpBankAccount.userNo4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userNo4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserNo4', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.bpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.county} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  county: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.state} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('State', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.userNo2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userNo2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserNo2', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.iban} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  iban: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.zipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.city} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('City', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.block} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  block: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Block', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.branch} property for query construction.
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
   * Representation of the {@link BpBankAccount.country} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.street} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  street: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.controlKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  controlKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ControlKey', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.userNo3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userNo3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserNo3', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.bankCode} property for query construction.
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
   * Representation of the {@link BpBankAccount.accountNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountNo', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.userNo1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userNo1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserNo1', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.internalKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InternalKey', 'Edm.Int32', true);
  /**
   * Representation of the {@link BpBankAccount.buildingFloorRoom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  buildingFloorRoom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BuildingFloorRoom',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BpBankAccount.bik} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bik: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BIK', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.accountName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountName', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.correspondentAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  correspondentAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CorrespondentAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BpBankAccount.phone} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phone: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.fax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.customerIdNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerIdNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomerIdNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BpBankAccount.isrBillerId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isrBillerId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ISRBillerID', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.isrType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isrType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ISRType', 'Edm.Int32', true);
  /**
   * Representation of the {@link BpBankAccount.bicSwiftCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bicSwiftCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BICSwiftCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.abaRoutingNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  abaRoutingNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ABARoutingNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BpBankAccount.mandateId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mandateId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MandateID', 'Edm.String', true);
  /**
   * Representation of the {@link BpBankAccount.signatureDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  signatureDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SignatureDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BpBankAccount.mandateExpDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mandateExpDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MandateExpDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BpBankAccount.sepaSeqType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sepaSeqType: EnumField<
    EntityT,
    DeSerializersT,
    SepaSequenceTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SEPASeqType',
    SepaSequenceTypeEnum,
    true
  );

  /**
   * Creates an instance of BpBankAccountField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BpBankAccount, fieldOptions);
  }
}

export namespace BpBankAccount {
  /**
   * Metadata information on all properties of the `BpBankAccount` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpBankAccount>[] = [
    {
      originalName: 'LogInstance',
      name: 'logInstance',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UserNo4',
      name: 'userNo4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPCode',
      name: 'bpCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'County',
      name: 'county',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'State',
      name: 'state',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UserNo2',
      name: 'userNo2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IBAN',
      name: 'iban',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ZipCode',
      name: 'zipCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'City',
      name: 'city',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Block',
      name: 'block',
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
      originalName: 'Country',
      name: 'country',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Street',
      name: 'street',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ControlKey',
      name: 'controlKey',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UserNo3',
      name: 'userNo3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BankCode',
      name: 'bankCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AccountNo',
      name: 'accountNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UserNo1',
      name: 'userNo1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InternalKey',
      name: 'internalKey',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BuildingFloorRoom',
      name: 'buildingFloorRoom',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BIK',
      name: 'bik',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AccountName',
      name: 'accountName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CorrespondentAccount',
      name: 'correspondentAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Phone',
      name: 'phone',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Fax',
      name: 'fax',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CustomerIdNumber',
      name: 'customerIdNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ISRBillerID',
      name: 'isrBillerId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ISRType',
      name: 'isrType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BICSwiftCode',
      name: 'bicSwiftCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ABARoutingNumber',
      name: 'abaRoutingNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MandateID',
      name: 'mandateId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SignatureDate',
      name: 'signatureDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'MandateExpDate',
      name: 'mandateExpDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'SEPASeqType',
      name: 'sepaSeqType',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
