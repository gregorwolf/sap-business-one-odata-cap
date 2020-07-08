/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BoeLine
 */
export interface BoeLine {
  /**
   * Boe Key.
   * @nullable
   */
  boeKey?: number;
  /**
   * Boe Number.
   * @nullable
   */
  boeNumber?: number;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
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
   * Account Number.
   * @nullable
   */
  accountNumber?: string;
  /**
   * Amount.
   * @nullable
   */
  amount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BoeLine.build]] instead.
 */
export function createBoeLine(json: any): BoeLine {
  return BoeLine.build(json);
}

/**
 * BoeLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BoeLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BoeLine.boeKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BOEKey', this, 'Edm.Int32');
  /**
   * Representation of the [[BoeLine.boeNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BOENumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BoeLine.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BoeLine.bank]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bank: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Bank', this, 'Edm.String');
  /**
   * Representation of the [[BoeLine.branch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Branch', this, 'Edm.String');
  /**
   * Representation of the [[BoeLine.accountNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountNumber', this, 'Edm.String');
  /**
   * Representation of the [[BoeLine.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Amount', this, 'Edm.Double');
}

export namespace BoeLine {
  export function build(json: { [keys: string]: FieldType }): BoeLine {
    return createComplexType(json, {
      BOEKey: (boeKey: number) => ({ boeKey: edmToTs(boeKey, 'Edm.Int32') }),
      BOENumber: (boeNumber: number) => ({ boeNumber: edmToTs(boeNumber, 'Edm.Int32') }),
      DueDate: (dueDate: Moment) => ({ dueDate: edmToTs(dueDate, 'Edm.DateTimeOffset') }),
      Bank: (bank: string) => ({ bank: edmToTs(bank, 'Edm.String') }),
      Branch: (branch: string) => ({ branch: edmToTs(branch, 'Edm.String') }),
      AccountNumber: (accountNumber: string) => ({ accountNumber: edmToTs(accountNumber, 'Edm.String') }),
      Amount: (amount: number) => ({ amount: edmToTs(amount, 'Edm.Double') })
    });
  }
}
