/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ExternalReconciliationFilterParams
 */
export interface ExternalReconciliationFilterParams {
  /**
   * Account Code From.
   * @nullable
   */
  accountCodeFrom?: string;
  /**
   * Account Code To.
   * @nullable
   */
  accountCodeTo?: string;
  /**
   * Reconciliation Date From.
   * @nullable
   */
  reconciliationDateFrom?: Moment;
  /**
   * Reconciliation Date To.
   * @nullable
   */
  reconciliationDateTo?: Moment;
  /**
   * Reconciliation No From.
   * @nullable
   */
  reconciliationNoFrom?: number;
  /**
   * Reconciliation No To.
   * @nullable
   */
  reconciliationNoTo?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliationFilterParams.build]] instead.
 */
export function createExternalReconciliationFilterParams(json: any): ExternalReconciliationFilterParams {
  return ExternalReconciliationFilterParams.build(json);
}

/**
 * ExternalReconciliationFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExternalReconciliationFilterParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ExternalReconciliationFilterParams.accountCodeFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCodeFrom: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCodeFrom', this, 'Edm.String');
  /**
   * Representation of the [[ExternalReconciliationFilterParams.accountCodeTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCodeTo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCodeTo', this, 'Edm.String');
  /**
   * Representation of the [[ExternalReconciliationFilterParams.reconciliationDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationDateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReconciliationDateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ExternalReconciliationFilterParams.reconciliationDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationDateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReconciliationDateTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ExternalReconciliationFilterParams.reconciliationNoFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationNoFrom: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReconciliationNoFrom', this, 'Edm.Int32');
  /**
   * Representation of the [[ExternalReconciliationFilterParams.reconciliationNoTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationNoTo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReconciliationNoTo', this, 'Edm.Int32');
}

export namespace ExternalReconciliationFilterParams {
  export function build(json: { [keys: string]: FieldType }): ExternalReconciliationFilterParams {
    return createComplexType(json, {
      AccountCodeFrom: (accountCodeFrom: string) => ({ accountCodeFrom: edmToTs(accountCodeFrom, 'Edm.String') }),
      AccountCodeTo: (accountCodeTo: string) => ({ accountCodeTo: edmToTs(accountCodeTo, 'Edm.String') }),
      ReconciliationDateFrom: (reconciliationDateFrom: Moment) => ({ reconciliationDateFrom: edmToTs(reconciliationDateFrom, 'Edm.DateTimeOffset') }),
      ReconciliationDateTo: (reconciliationDateTo: Moment) => ({ reconciliationDateTo: edmToTs(reconciliationDateTo, 'Edm.DateTimeOffset') }),
      ReconciliationNoFrom: (reconciliationNoFrom: number) => ({ reconciliationNoFrom: edmToTs(reconciliationNoFrom, 'Edm.Int32') }),
      ReconciliationNoTo: (reconciliationNoTo: number) => ({ reconciliationNoTo: edmToTs(reconciliationNoTo, 'Edm.Int32') })
    });
  }
}
