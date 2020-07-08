/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BillOfExchangeTransDeposit
 */
export interface BillOfExchangeTransDeposit {
  /**
   * Deposit Norm.
   * @nullable
   */
  depositNorm?: string;
  /**
   * Bank Country.
   * @nullable
   */
  bankCountry?: string;
  /**
   * Bank Account.
   * @nullable
   */
  bankAccount?: string;
  /**
   * Bank Deposit Account.
   * @nullable
   */
  bankDepositAccount?: string;
  /**
   * Bank Branch.
   * @nullable
   */
  bankBranch?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransDeposit.build]] instead.
 */
export function createBillOfExchangeTransDeposit(json: any): BillOfExchangeTransDeposit {
  return BillOfExchangeTransDeposit.build(json);
}

/**
 * BillOfExchangeTransDepositField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeTransDepositField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BillOfExchangeTransDeposit.depositNorm]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depositNorm: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepositNorm', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchangeTransDeposit.bankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCountry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankCountry', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchangeTransDeposit.bankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankAccount', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchangeTransDeposit.bankDepositAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankDepositAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankDepositAccount', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchangeTransDeposit.bankBranch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankBranch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankBranch', this, 'Edm.String');
}

export namespace BillOfExchangeTransDeposit {
  export function build(json: { [keys: string]: FieldType }): BillOfExchangeTransDeposit {
    return createComplexType(json, {
      DepositNorm: (depositNorm: string) => ({ depositNorm: edmToTs(depositNorm, 'Edm.String') }),
      BankCountry: (bankCountry: string) => ({ bankCountry: edmToTs(bankCountry, 'Edm.String') }),
      BankAccount: (bankAccount: string) => ({ bankAccount: edmToTs(bankAccount, 'Edm.String') }),
      BankDepositAccount: (bankDepositAccount: string) => ({ bankDepositAccount: edmToTs(bankDepositAccount, 'Edm.String') }),
      BankBranch: (bankBranch: string) => ({ bankBranch: edmToTs(bankBranch, 'Edm.String') })
    });
  }
}
