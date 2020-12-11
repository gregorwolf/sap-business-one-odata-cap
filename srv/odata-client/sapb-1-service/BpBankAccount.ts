/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { SepaSequenceTypeEnum } from './SepaSequenceTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BpBankAccount
 */
export interface BpBankAccount {
  /**
   * Log Instance.
   * @nullable
   */
  logInstance?: number;
  /**
   * User No 4.
   * @nullable
   */
  userNo4?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * County.
   * @nullable
   */
  county?: string;
  /**
   * State.
   * @nullable
   */
  state?: string;
  /**
   * User No 2.
   * @nullable
   */
  userNo2?: string;
  /**
   * Iban.
   * @nullable
   */
  iban?: string;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: string;
  /**
   * City.
   * @nullable
   */
  city?: string;
  /**
   * Block.
   * @nullable
   */
  block?: string;
  /**
   * Branch.
   * @nullable
   */
  branch?: string;
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Street.
   * @nullable
   */
  street?: string;
  /**
   * Control Key.
   * @nullable
   */
  controlKey?: string;
  /**
   * User No 3.
   * @nullable
   */
  userNo3?: string;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: string;
  /**
   * Account No.
   * @nullable
   */
  accountNo?: string;
  /**
   * User No 1.
   * @nullable
   */
  userNo1?: string;
  /**
   * Internal Key.
   * @nullable
   */
  internalKey?: number;
  /**
   * Building Floor Room.
   * @nullable
   */
  buildingFloorRoom?: string;
  /**
   * Bik.
   * @nullable
   */
  bik?: string;
  /**
   * Account Name.
   * @nullable
   */
  accountName?: string;
  /**
   * Correspondent Account.
   * @nullable
   */
  correspondentAccount?: string;
  /**
   * Phone.
   * @nullable
   */
  phone?: string;
  /**
   * Fax.
   * @nullable
   */
  fax?: string;
  /**
   * Customer Id Number.
   * @nullable
   */
  customerIdNumber?: string;
  /**
   * Isr Biller Id.
   * @nullable
   */
  isrBillerId?: string;
  /**
   * Isr Type.
   * @nullable
   */
  isrType?: number;
  /**
   * Bic Swift Code.
   * @nullable
   */
  bicSwiftCode?: string;
  /**
   * Aba Routing Number.
   * @nullable
   */
  abaRoutingNumber?: string;
  /**
   * Mandate Id.
   * @nullable
   */
  mandateId?: string;
  /**
   * Signature Date.
   * @nullable
   */
  signatureDate?: Moment;
  /**
   * Mandate Exp Date.
   * @nullable
   */
  mandateExpDate?: Moment;
  /**
   * Sepa Seq Type.
   * @nullable
   */
  sepaSeqType?: SepaSequenceTypeEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[BpBankAccount.build]] instead.
 */
export function createBpBankAccount(json: any): BpBankAccount {
  return BpBankAccount.build(json);
}

/**
 * BpBankAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpBankAccountField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpBankAccount> {
  /**
   * Representation of the [[BpBankAccount.logInstance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logInstance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LogInstance', this, 'Edm.Int32');
  /**
   * Representation of the [[BpBankAccount.userNo4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userNo4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserNo4', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.county]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  county: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('County', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.userNo2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userNo2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserNo2', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.iban]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  iban: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('IBAN', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ZipCode', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.city]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('City', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.block]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  block: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Block', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.branch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Branch', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.country]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Country', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.street]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  street: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Street', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.controlKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  controlKey: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ControlKey', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.userNo3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userNo3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserNo3', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.bankCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankCode', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.accountNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountNo', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.userNo1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userNo1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserNo1', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.internalKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InternalKey', this, 'Edm.Int32');
  /**
   * Representation of the [[BpBankAccount.buildingFloorRoom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  buildingFloorRoom: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BuildingFloorRoom', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.bik]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bik: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BIK', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.accountName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountName', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.correspondentAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  correspondentAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CorrespondentAccount', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.phone]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  phone: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Phone', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.fax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fax: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Fax', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.customerIdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerIdNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustomerIdNumber', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.isrBillerId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isrBillerId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ISRBillerID', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.isrType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isrType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ISRType', this, 'Edm.Int32');
  /**
   * Representation of the [[BpBankAccount.bicSwiftCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bicSwiftCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BICSwiftCode', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.abaRoutingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  abaRoutingNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ABARoutingNumber', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.mandateId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mandateId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MandateID', this, 'Edm.String');
  /**
   * Representation of the [[BpBankAccount.signatureDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  signatureDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('SignatureDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BpBankAccount.mandateExpDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mandateExpDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('MandateExpDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BpBankAccount.sepaSeqType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sepaSeqType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SEPASeqType', this);

  /**
   * Creates an instance of BpBankAccountField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BpBankAccount);
  }
}

export namespace BpBankAccount {
  /**
   * Metadata information on all properties of the `BpBankAccount` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpBankAccount>[] = [{
    originalName: 'LogInstance',
    name: 'logInstance',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UserNo4',
    name: 'userNo4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'County',
    name: 'county',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'State',
    name: 'state',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UserNo2',
    name: 'userNo2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'IBAN',
    name: 'iban',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ZipCode',
    name: 'zipCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'City',
    name: 'city',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Block',
    name: 'block',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Branch',
    name: 'branch',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Country',
    name: 'country',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Street',
    name: 'street',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ControlKey',
    name: 'controlKey',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UserNo3',
    name: 'userNo3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BankCode',
    name: 'bankCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AccountNo',
    name: 'accountNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UserNo1',
    name: 'userNo1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InternalKey',
    name: 'internalKey',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BuildingFloorRoom',
    name: 'buildingFloorRoom',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BIK',
    name: 'bik',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AccountName',
    name: 'accountName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CorrespondentAccount',
    name: 'correspondentAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Phone',
    name: 'phone',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Fax',
    name: 'fax',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CustomerIdNumber',
    name: 'customerIdNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ISRBillerID',
    name: 'isrBillerId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ISRType',
    name: 'isrType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BICSwiftCode',
    name: 'bicSwiftCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ABARoutingNumber',
    name: 'abaRoutingNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MandateID',
    name: 'mandateId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SignatureDate',
    name: 'signatureDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'MandateExpDate',
    name: 'mandateExpDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'SEPASeqType',
    name: 'sepaSeqType',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BpBankAccount {
    return deserializeComplexTypeV4(json, BpBankAccount);
  }
}
