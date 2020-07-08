/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class BpBankAccountField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace BpBankAccount {
  export function build(json: { [keys: string]: FieldType }): BpBankAccount {
    return createComplexType(json, {
      LogInstance: (logInstance: number) => ({ logInstance: edmToTs(logInstance, 'Edm.Int32') }),
      UserNo4: (userNo4: string) => ({ userNo4: edmToTs(userNo4, 'Edm.String') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      County: (county: string) => ({ county: edmToTs(county, 'Edm.String') }),
      State: (state: string) => ({ state: edmToTs(state, 'Edm.String') }),
      UserNo2: (userNo2: string) => ({ userNo2: edmToTs(userNo2, 'Edm.String') }),
      IBAN: (iban: string) => ({ iban: edmToTs(iban, 'Edm.String') }),
      ZipCode: (zipCode: string) => ({ zipCode: edmToTs(zipCode, 'Edm.String') }),
      City: (city: string) => ({ city: edmToTs(city, 'Edm.String') }),
      Block: (block: string) => ({ block: edmToTs(block, 'Edm.String') }),
      Branch: (branch: string) => ({ branch: edmToTs(branch, 'Edm.String') }),
      Country: (country: string) => ({ country: edmToTs(country, 'Edm.String') }),
      Street: (street: string) => ({ street: edmToTs(street, 'Edm.String') }),
      ControlKey: (controlKey: string) => ({ controlKey: edmToTs(controlKey, 'Edm.String') }),
      UserNo3: (userNo3: string) => ({ userNo3: edmToTs(userNo3, 'Edm.String') }),
      BankCode: (bankCode: string) => ({ bankCode: edmToTs(bankCode, 'Edm.String') }),
      AccountNo: (accountNo: string) => ({ accountNo: edmToTs(accountNo, 'Edm.String') }),
      UserNo1: (userNo1: string) => ({ userNo1: edmToTs(userNo1, 'Edm.String') }),
      InternalKey: (internalKey: number) => ({ internalKey: edmToTs(internalKey, 'Edm.Int32') }),
      BuildingFloorRoom: (buildingFloorRoom: string) => ({ buildingFloorRoom: edmToTs(buildingFloorRoom, 'Edm.String') }),
      BIK: (bik: string) => ({ bik: edmToTs(bik, 'Edm.String') }),
      AccountName: (accountName: string) => ({ accountName: edmToTs(accountName, 'Edm.String') }),
      CorrespondentAccount: (correspondentAccount: string) => ({ correspondentAccount: edmToTs(correspondentAccount, 'Edm.String') }),
      Phone: (phone: string) => ({ phone: edmToTs(phone, 'Edm.String') }),
      Fax: (fax: string) => ({ fax: edmToTs(fax, 'Edm.String') }),
      CustomerIdNumber: (customerIdNumber: string) => ({ customerIdNumber: edmToTs(customerIdNumber, 'Edm.String') }),
      ISRBillerID: (isrBillerId: string) => ({ isrBillerId: edmToTs(isrBillerId, 'Edm.String') }),
      ISRType: (isrType: number) => ({ isrType: edmToTs(isrType, 'Edm.Int32') }),
      BICSwiftCode: (bicSwiftCode: string) => ({ bicSwiftCode: edmToTs(bicSwiftCode, 'Edm.String') }),
      ABARoutingNumber: (abaRoutingNumber: string) => ({ abaRoutingNumber: edmToTs(abaRoutingNumber, 'Edm.String') }),
      MandateID: (mandateId: string) => ({ mandateId: edmToTs(mandateId, 'Edm.String') }),
      SignatureDate: (signatureDate: Moment) => ({ signatureDate: edmToTs(signatureDate, 'Edm.DateTimeOffset') }),
      MandateExpDate: (mandateExpDate: Moment) => ({ mandateExpDate: edmToTs(mandateExpDate, 'Edm.DateTimeOffset') })
    });
  }
}
