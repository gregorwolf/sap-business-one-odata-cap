/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ReconciliationAccountTypeEnum } from './ReconciliationAccountTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  /**
   * Reconciliation Account Type.
   * @nullable
   */
  reconciliationAccountType?: ReconciliationAccountTypeEnum;
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
export class ExternalReconciliationFilterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExternalReconciliationFilterParams> {
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
  /**
   * Representation of the [[ExternalReconciliationFilterParams.reconciliationAccountType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationAccountType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ReconciliationAccountType', this);

  /**
   * Creates an instance of ExternalReconciliationFilterParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ExternalReconciliationFilterParams);
  }
}

export namespace ExternalReconciliationFilterParams {
  /**
   * Metadata information on all properties of the `ExternalReconciliationFilterParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExternalReconciliationFilterParams>[] = [{
    originalName: 'AccountCodeFrom',
    name: 'accountCodeFrom',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AccountCodeTo',
    name: 'accountCodeTo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReconciliationDateFrom',
    name: 'reconciliationDateFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ReconciliationDateTo',
    name: 'reconciliationDateTo',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ReconciliationNoFrom',
    name: 'reconciliationNoFrom',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ReconciliationNoTo',
    name: 'reconciliationNoTo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ReconciliationAccountType',
    name: 'reconciliationAccountType',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ExternalReconciliationFilterParams {
    return deserializeComplexTypeV4(json, ExternalReconciliationFilterParams);
  }
}
