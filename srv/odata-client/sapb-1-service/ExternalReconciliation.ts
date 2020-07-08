/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ReconciliationJournalEntryLine, ReconciliationJournalEntryLineField } from './ReconciliationJournalEntryLine';
import { ReconciliationBankStatementLine, ReconciliationBankStatementLineField } from './ReconciliationBankStatementLine';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ExternalReconciliation
 */
export interface ExternalReconciliation {
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: string;
  /**
   * Reconciliation No.
   * @nullable
   */
  reconciliationNo?: number;
  /**
   * Amount.
   * @nullable
   */
  amount?: number;
  /**
   * Currency Type.
   * @nullable
   */
  currencyType?: string;
  /**
   * Reconciliation Type.
   * @nullable
   */
  reconciliationType?: string;
  /**
   * Reconciliation Date.
   * @nullable
   */
  reconciliationDate?: Moment;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Reconciliation Journal Entry Lines.
   * @nullable
   */
  reconciliationJournalEntryLines?: ReconciliationJournalEntryLine;
  /**
   * Reconciliation Bank Statement Lines.
   * @nullable
   */
  reconciliationBankStatementLines?: ReconciliationBankStatementLine;
}

/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliation.build]] instead.
 */
export function createExternalReconciliation(json: any): ExternalReconciliation {
  return ExternalReconciliation.build(json);
}

/**
 * ExternalReconciliationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExternalReconciliationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ExternalReconciliation.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[ExternalReconciliation.reconciliationNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReconciliationNo', this, 'Edm.Int32');
  /**
   * Representation of the [[ExternalReconciliation.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Amount', this, 'Edm.Double');
  /**
   * Representation of the [[ExternalReconciliation.currencyType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currencyType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CurrencyType', this, 'Edm.String');
  /**
   * Representation of the [[ExternalReconciliation.reconciliationType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReconciliationType', this, 'Edm.String');
  /**
   * Representation of the [[ExternalReconciliation.reconciliationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReconciliationDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ExternalReconciliation.creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CreationDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ExternalReconciliation.reconciliationJournalEntryLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationJournalEntryLines: ReconciliationJournalEntryLineField<EntityT> = new ReconciliationJournalEntryLineField('ReconciliationJournalEntryLines', this);
  /**
   * Representation of the [[ExternalReconciliation.reconciliationBankStatementLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationBankStatementLines: ReconciliationBankStatementLineField<EntityT> = new ReconciliationBankStatementLineField('ReconciliationBankStatementLines', this);
}

export namespace ExternalReconciliation {
  export function build(json: { [keys: string]: FieldType | ReconciliationBankStatementLine | ReconciliationJournalEntryLine }): ExternalReconciliation {
    return createComplexType(json, {
      AccountCode: (accountCode: string) => ({ accountCode: edmToTs(accountCode, 'Edm.String') }),
      ReconciliationNo: (reconciliationNo: number) => ({ reconciliationNo: edmToTs(reconciliationNo, 'Edm.Int32') }),
      Amount: (amount: number) => ({ amount: edmToTs(amount, 'Edm.Double') }),
      CurrencyType: (currencyType: string) => ({ currencyType: edmToTs(currencyType, 'Edm.String') }),
      ReconciliationType: (reconciliationType: string) => ({ reconciliationType: edmToTs(reconciliationType, 'Edm.String') }),
      ReconciliationDate: (reconciliationDate: Moment) => ({ reconciliationDate: edmToTs(reconciliationDate, 'Edm.DateTimeOffset') }),
      CreationDate: (creationDate: Moment) => ({ creationDate: edmToTs(creationDate, 'Edm.DateTimeOffset') }),
      ReconciliationJournalEntryLines: (reconciliationJournalEntryLines: ReconciliationJournalEntryLine) => ({ reconciliationJournalEntryLines: ReconciliationJournalEntryLine.build(reconciliationJournalEntryLines) }),
      ReconciliationBankStatementLines: (reconciliationBankStatementLines: ReconciliationBankStatementLine) => ({ reconciliationBankStatementLines: ReconciliationBankStatementLine.build(reconciliationBankStatementLines) })
    });
  }
}
