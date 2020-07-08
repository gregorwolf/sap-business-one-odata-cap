/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BankStatementsFilter
 */
export interface BankStatementsFilter {
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Bank.
   * @nullable
   */
  bank?: string;
  /**
   * Account.
   * @nullable
   */
  account?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BankStatementsFilter.build]] instead.
 */
export function createBankStatementsFilter(json: any): BankStatementsFilter {
  return BankStatementsFilter.build(json);
}

/**
 * BankStatementsFilterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BankStatementsFilterField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BankStatementsFilter.country]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Country', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementsFilter.bank]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bank: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Bank', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementsFilter.account]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  account: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Account', this, 'Edm.String');
}

export namespace BankStatementsFilter {
  export function build(json: { [keys: string]: FieldType }): BankStatementsFilter {
    return createComplexType(json, {
      Country: (country: string) => ({ country: edmToTs(country, 'Edm.String') }),
      Bank: (bank: string) => ({ bank: edmToTs(bank, 'Edm.String') }),
      Account: (account: string) => ({ account: edmToTs(account, 'Edm.String') })
    });
  }
}
