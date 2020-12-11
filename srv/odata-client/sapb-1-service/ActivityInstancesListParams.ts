/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ActivityInstancesListParams
 */
export interface ActivityInstancesListParams {
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Instance Count.
   * @nullable
   */
  instanceCount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityInstancesListParams.build]] instead.
 */
export function createActivityInstancesListParams(json: any): ActivityInstancesListParams {
  return ActivityInstancesListParams.build(json);
}

/**
 * ActivityInstancesListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityInstancesListParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityInstancesListParams> {
  /**
   * Representation of the [[ActivityInstancesListParams.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ActivityInstancesListParams.instanceCount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instanceCount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InstanceCount', this, 'Edm.Int32');

  /**
   * Creates an instance of ActivityInstancesListParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ActivityInstancesListParams);
  }
}

export namespace ActivityInstancesListParams {
  /**
   * Metadata information on all properties of the `ActivityInstancesListParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityInstancesListParams>[] = [{
    originalName: 'StartDate',
    name: 'startDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'InstanceCount',
    name: 'instanceCount',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ActivityInstancesListParams {
    return deserializeComplexTypeV4(json, ActivityInstancesListParams);
  }
}
