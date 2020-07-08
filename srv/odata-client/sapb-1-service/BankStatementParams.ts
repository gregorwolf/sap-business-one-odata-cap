/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BankStatementParams
 */
export interface BankStatementParams {
  /**
   * Internal Number.
   * @nullable
   */
  internalNumber?: number;
  /**
   * Bank Account Key.
   * @nullable
   */
  bankAccountKey?: number;
  /**
   * Statement Number.
   * @nullable
   */
  statementNumber?: string;
  /**
   * Statement Date.
   * @nullable
   */
  statementDate?: Moment;
  /**
   * Starting Balance F.
   * @nullable
   */
  startingBalanceF?: number;
  /**
   * Ending Balance F.
   * @nullable
   */
  endingBalanceF?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Starting Balance L.
   * @nullable
   */
  startingBalanceL?: number;
  /**
   * Ending Balance L.
   * @nullable
   */
  endingBalanceL?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BankStatementParams.build]] instead.
 */
export function createBankStatementParams(json: any): BankStatementParams {
  return BankStatementParams.build(json);
}

/**
 * BankStatementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BankStatementParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BankStatementParams.internalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InternalNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementParams.bankAccountKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankAccountKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BankAccountKey', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementParams.statementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statementNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StatementNumber', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementParams.statementDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statementDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StatementDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BankStatementParams.startingBalanceF]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startingBalanceF: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StartingBalanceF', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementParams.endingBalanceF]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endingBalanceF: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EndingBalanceF', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementParams.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementParams.startingBalanceL]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startingBalanceL: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StartingBalanceL', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementParams.endingBalanceL]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endingBalanceL: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EndingBalanceL', this, 'Edm.Double');
}

export namespace BankStatementParams {
  export function build(json: { [keys: string]: FieldType }): BankStatementParams {
    return createComplexType(json, {
      InternalNumber: (internalNumber: number) => ({ internalNumber: edmToTs(internalNumber, 'Edm.Int32') }),
      BankAccountKey: (bankAccountKey: number) => ({ bankAccountKey: edmToTs(bankAccountKey, 'Edm.Int32') }),
      StatementNumber: (statementNumber: string) => ({ statementNumber: edmToTs(statementNumber, 'Edm.String') }),
      StatementDate: (statementDate: Moment) => ({ statementDate: edmToTs(statementDate, 'Edm.DateTimeOffset') }),
      StartingBalanceF: (startingBalanceF: number) => ({ startingBalanceF: edmToTs(startingBalanceF, 'Edm.Double') }),
      EndingBalanceF: (endingBalanceF: number) => ({ endingBalanceF: edmToTs(endingBalanceF, 'Edm.Double') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      StartingBalanceL: (startingBalanceL: number) => ({ startingBalanceL: edmToTs(startingBalanceL, 'Edm.Double') }),
      EndingBalanceL: (endingBalanceL: number) => ({ endingBalanceL: edmToTs(endingBalanceL, 'Edm.Double') })
    });
  }
}
