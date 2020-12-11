/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ExternalReconciliationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExternalReconciliationParams> {
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

  /**
   * Creates an instance of ExternalReconciliationParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ExternalReconciliationParams);
  }
}

export namespace ExternalReconciliationParams {
  /**
   * Metadata information on all properties of the `ExternalReconciliationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExternalReconciliationParams>[] = [{
    originalName: 'AccountCode',
    name: 'accountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReconciliationNo',
    name: 'reconciliationNo',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ExternalReconciliationParams {
    return deserializeComplexTypeV4(json, ExternalReconciliationParams);
  }
}
