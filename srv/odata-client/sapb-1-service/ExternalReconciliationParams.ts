/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ExternalReconciliationParams
 */
export interface ExternalReconciliationParams {
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
}

/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliationParams.build]] instead.
 */
export function createExternalReconciliationParams(json: any): ExternalReconciliationParams {
  return ExternalReconciliationParams.build(json);
}

/**
 * ExternalReconciliationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExternalReconciliationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ExternalReconciliationParams.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[ExternalReconciliationParams.reconciliationNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReconciliationNo', this, 'Edm.Int32');
}

export namespace ExternalReconciliationParams {
  export function build(json: { [keys: string]: FieldType }): ExternalReconciliationParams {
    return createComplexType(json, {
      AccountCode: (accountCode: string) => ({ accountCode: edmToTs(accountCode, 'Edm.String') }),
      ReconciliationNo: (reconciliationNo: number) => ({ reconciliationNo: edmToTs(reconciliationNo, 'Edm.Int32') })
    });
  }
}
