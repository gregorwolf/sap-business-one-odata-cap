/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ReconciliationBankStatementLine
 */
export interface ReconciliationBankStatementLine {
  /**
   * Bank Statement Account Code.
   * @nullable
   */
  bankStatementAccountCode?: string;
  /**
   * Sequence.
   * @nullable
   */
  sequence?: number;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Ref 1.
   * @nullable
   */
  ref1?: string;
  /**
   * Amount.
   * @nullable
   */
  amount?: number;
  /**
   * Details.
   * @nullable
   */
  details?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ReconciliationBankStatementLine.build]] instead.
 */
export function createReconciliationBankStatementLine(json: any): ReconciliationBankStatementLine {
  return ReconciliationBankStatementLine.build(json);
}

/**
 * ReconciliationBankStatementLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReconciliationBankStatementLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReconciliationBankStatementLine> {
  /**
   * Representation of the [[ReconciliationBankStatementLine.bankStatementAccountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankStatementAccountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankStatementAccountCode', this, 'Edm.String');
  /**
   * Representation of the [[ReconciliationBankStatementLine.sequence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequence: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Sequence', this, 'Edm.Int32');
  /**
   * Representation of the [[ReconciliationBankStatementLine.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ReconciliationBankStatementLine.ref1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Ref1', this, 'Edm.String');
  /**
   * Representation of the [[ReconciliationBankStatementLine.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Amount', this, 'Edm.Double');
  /**
   * Representation of the [[ReconciliationBankStatementLine.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');

  /**
   * Creates an instance of ReconciliationBankStatementLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ReconciliationBankStatementLine);
  }
}

export namespace ReconciliationBankStatementLine {
  /**
   * Metadata information on all properties of the `ReconciliationBankStatementLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReconciliationBankStatementLine>[] = [{
    originalName: 'BankStatementAccountCode',
    name: 'bankStatementAccountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Sequence',
    name: 'sequence',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Date',
    name: 'date',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Ref1',
    name: 'ref1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Amount',
    name: 'amount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Details',
    name: 'details',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ReconciliationBankStatementLine {
    return deserializeComplexTypeV4(json, ReconciliationBankStatementLine);
  }
}
