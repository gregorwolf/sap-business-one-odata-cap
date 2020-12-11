/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ReconciliationJournalEntryLine } from './ReconciliationJournalEntryLine';
import { ReconciliationBankStatementLine } from './ReconciliationBankStatementLine';
import { ReconciliationAccountTypeEnum } from './ReconciliationAccountTypeEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ExternalReconciliation
 */
export interface ExternalReconciliation {
  /**
   * Reconciliation Account Type.
   * @nullable
   */
  reconciliationAccountType?: ReconciliationAccountTypeEnum;
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
  reconciliationJournalEntryLines?: ReconciliationJournalEntryLine[];
  /**
   * Reconciliation Bank Statement Lines.
   * @nullable
   */
  reconciliationBankStatementLines?: ReconciliationBankStatementLine[];
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
export class ExternalReconciliationField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExternalReconciliation> {
  /**
   * Representation of the [[ExternalReconciliation.reconciliationAccountType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationAccountType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ReconciliationAccountType', this);
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
  reconciliationJournalEntryLines: CollectionField<EntityT, ReconciliationJournalEntryLine> = new CollectionField('ReconciliationJournalEntryLines', this, ReconciliationJournalEntryLine);
  /**
   * Representation of the [[ExternalReconciliation.reconciliationBankStatementLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationBankStatementLines: CollectionField<EntityT, ReconciliationBankStatementLine> = new CollectionField('ReconciliationBankStatementLines', this, ReconciliationBankStatementLine);

  /**
   * Creates an instance of ExternalReconciliationField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ExternalReconciliation);
  }
}

export namespace ExternalReconciliation {
  /**
   * Metadata information on all properties of the `ExternalReconciliation` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExternalReconciliation>[] = [{
    originalName: 'ReconciliationAccountType',
    name: 'reconciliationAccountType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AccountCode',
    name: 'accountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReconciliationNo',
    name: 'reconciliationNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Amount',
    name: 'amount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CurrencyType',
    name: 'currencyType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReconciliationType',
    name: 'reconciliationType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReconciliationDate',
    name: 'reconciliationDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CreationDate',
    name: 'creationDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ReconciliationJournalEntryLines',
    name: 'reconciliationJournalEntryLines',
    type: ReconciliationJournalEntryLine,
    isCollection: true
  }, {
    originalName: 'ReconciliationBankStatementLines',
    name: 'reconciliationBankStatementLines',
    type: ReconciliationBankStatementLine,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | ReconciliationBankStatementLine | ReconciliationJournalEntryLine }): ExternalReconciliation {
    return deserializeComplexTypeV4(json, ExternalReconciliation);
  }
}
