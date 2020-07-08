/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CheckLine
 */
export interface CheckLine {
  /**
   * Check Key.
   * @nullable
   */
  checkKey?: number;
  /**
   * Check Number.
   * @nullable
   */
  checkNumber?: number;
  /**
   * Bank.
   * @nullable
   */
  bank?: string;
  /**
   * Branch.
   * @nullable
   */
  branch?: string;
  /**
   * Cash Check.
   * @nullable
   */
  cashCheck?: string;
  /**
   * Check Date.
   * @nullable
   */
  checkDate?: Moment;
  /**
   * Customer.
   * @nullable
   */
  customer?: string;
  /**
   * Check Amount.
   * @nullable
   */
  checkAmount?: number;
  /**
   * Account Number.
   * @nullable
   */
  accountNumber?: string;
  /**
   * Check Currency.
   * @nullable
   */
  checkCurrency?: string;
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
}

/**
 * @deprecated Since v1.6.0. Use [[CheckLine.build]] instead.
 */
export function createCheckLine(json: any): CheckLine {
  return CheckLine.build(json);
}

/**
 * CheckLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CheckLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CheckLine.checkKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckKey', this, 'Edm.Int32');
  /**
   * Representation of the [[CheckLine.checkNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[CheckLine.bank]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bank: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Bank', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.branch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Branch', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.cashCheck]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashCheck: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CashCheck', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.checkDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CheckDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[CheckLine.customer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customer: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Customer', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.checkAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckAmount', this, 'Edm.Double');
  /**
   * Representation of the [[CheckLine.accountNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountNumber', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.checkCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CheckCurrency', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.fiscalId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FiscalID', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.originallyIssuedBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originallyIssuedBy: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OriginallyIssuedBy', this, 'Edm.String');
}

export namespace CheckLine {
  export function build(json: { [keys: string]: FieldType }): CheckLine {
    return createComplexType(json, {
      CheckKey: (checkKey: number) => ({ checkKey: edmToTs(checkKey, 'Edm.Int32') }),
      CheckNumber: (checkNumber: number) => ({ checkNumber: edmToTs(checkNumber, 'Edm.Int32') }),
      Bank: (bank: string) => ({ bank: edmToTs(bank, 'Edm.String') }),
      Branch: (branch: string) => ({ branch: edmToTs(branch, 'Edm.String') }),
      CashCheck: (cashCheck: string) => ({ cashCheck: edmToTs(cashCheck, 'Edm.String') }),
      CheckDate: (checkDate: Moment) => ({ checkDate: edmToTs(checkDate, 'Edm.DateTimeOffset') }),
      Customer: (customer: string) => ({ customer: edmToTs(customer, 'Edm.String') }),
      CheckAmount: (checkAmount: number) => ({ checkAmount: edmToTs(checkAmount, 'Edm.Double') }),
      AccountNumber: (accountNumber: string) => ({ accountNumber: edmToTs(accountNumber, 'Edm.String') }),
      CheckCurrency: (checkCurrency: string) => ({ checkCurrency: edmToTs(checkCurrency, 'Edm.String') }),
      FiscalID: (fiscalId: string) => ({ fiscalId: edmToTs(fiscalId, 'Edm.String') }),
      OriginallyIssuedBy: (originallyIssuedBy: string) => ({ originallyIssuedBy: edmToTs(originallyIssuedBy, 'Edm.String') })
    });
  }
}
