/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * RclRecurringTransactionParams
 */
export interface RclRecurringTransactionParams {
  /**
   * Transaction Id.
   * @nullable
   */
  transactionId?: number;
  /**
   * Planned Date.
   * @nullable
   */
  plannedDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[RclRecurringTransactionParams.build]] instead.
 */
export function createRclRecurringTransactionParams(json: any): RclRecurringTransactionParams {
  return RclRecurringTransactionParams.build(json);
}

/**
 * RclRecurringTransactionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RclRecurringTransactionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RclRecurringTransactionParams> {
  /**
   * Representation of the [[RclRecurringTransactionParams.transactionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransactionID', this, 'Edm.Int32');
  /**
   * Representation of the [[RclRecurringTransactionParams.plannedDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PlannedDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of RclRecurringTransactionParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, RclRecurringTransactionParams);
  }
}

export namespace RclRecurringTransactionParams {
  /**
   * Metadata information on all properties of the `RclRecurringTransactionParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RclRecurringTransactionParams>[] = [{
    originalName: 'TransactionID',
    name: 'transactionId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PlannedDate',
    name: 'plannedDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): RclRecurringTransactionParams {
    return deserializeComplexTypeV4(json, RclRecurringTransactionParams);
  }
}
