/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PaymentCheck
 */
export interface PaymentCheck {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Check Number.
   * @nullable
   */
  checkNumber?: number;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: string;
  /**
   * Branch.
   * @nullable
   */
  branch?: string;
  /**
   * Accountt Num.
   * @nullable
   */
  accounttNum?: string;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * Check Sum.
   * @nullable
   */
  checkSum?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Country Code.
   * @nullable
   */
  countryCode?: string;
  /**
   * Check Abs Entry.
   * @nullable
   */
  checkAbsEntry?: number;
  /**
   * Check Account.
   * @nullable
   */
  checkAccount?: string;
  /**
   * Fiscal Id.
   * @nullable
   */
  fiscalId?: string;
  /**
   * Originally Issued By.
   * @nullable
   */
  originallyIssuedBy?: string;
  /**
   * Endorsable Check No.
   * @nullable
   */
  endorsableCheckNo?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentCheck.build]] instead.
 */
export function createPaymentCheck(json: any): PaymentCheck {
  return PaymentCheck.build(json);
}

/**
 * PaymentCheckField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentCheckField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PaymentCheck.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentCheck.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PaymentCheck.checkNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentCheck.bankCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankCode', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.branch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Branch', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.accounttNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accounttNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccounttNum', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.checkSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckSum', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentCheck.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.countryCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CountryCode', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.checkAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentCheck.checkAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CheckAccount', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.fiscalId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FiscalID', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.originallyIssuedBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originallyIssuedBy: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OriginallyIssuedBy', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.endorsableCheckNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endorsableCheckNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EndorsableCheckNo', this, 'Edm.Int32');
}

export namespace PaymentCheck {
  export function build(json: { [keys: string]: FieldType }): PaymentCheck {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      DueDate: (dueDate: Moment) => ({ dueDate: edmToTs(dueDate, 'Edm.DateTimeOffset') }),
      CheckNumber: (checkNumber: number) => ({ checkNumber: edmToTs(checkNumber, 'Edm.Int32') }),
      BankCode: (bankCode: string) => ({ bankCode: edmToTs(bankCode, 'Edm.String') }),
      Branch: (branch: string) => ({ branch: edmToTs(branch, 'Edm.String') }),
      AccounttNum: (accounttNum: string) => ({ accounttNum: edmToTs(accounttNum, 'Edm.String') }),
      Details: (details: string) => ({ details: edmToTs(details, 'Edm.String') }),
      CheckSum: (checkSum: number) => ({ checkSum: edmToTs(checkSum, 'Edm.Double') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      CountryCode: (countryCode: string) => ({ countryCode: edmToTs(countryCode, 'Edm.String') }),
      CheckAbsEntry: (checkAbsEntry: number) => ({ checkAbsEntry: edmToTs(checkAbsEntry, 'Edm.Int32') }),
      CheckAccount: (checkAccount: string) => ({ checkAccount: edmToTs(checkAccount, 'Edm.String') }),
      FiscalID: (fiscalId: string) => ({ fiscalId: edmToTs(fiscalId, 'Edm.String') }),
      OriginallyIssuedBy: (originallyIssuedBy: string) => ({ originallyIssuedBy: edmToTs(originallyIssuedBy, 'Edm.String') }),
      EndorsableCheckNo: (endorsableCheckNo: number) => ({ endorsableCheckNo: edmToTs(endorsableCheckNo, 'Edm.Int32') })
    });
  }
}
