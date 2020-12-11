/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ActivityInstanceParams
 */
export interface ActivityInstanceParams {
  /**
   * Activity Code.
   * @nullable
   */
  activityCode?: number;
  /**
   * Instance Date.
   * @nullable
   */
  instanceDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityInstanceParams.build]] instead.
 */
export function createActivityInstanceParams(json: any): ActivityInstanceParams {
  return ActivityInstanceParams.build(json);
}

/**
 * ActivityInstanceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityInstanceParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityInstanceParams> {
  /**
   * Representation of the [[ActivityInstanceParams.activityCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActivityCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ActivityInstanceParams.instanceDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instanceDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('InstanceDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of ActivityInstanceParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ActivityInstanceParams);
  }
}

export namespace ActivityInstanceParams {
  /**
   * Metadata information on all properties of the `ActivityInstanceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityInstanceParams>[] = [{
    originalName: 'ActivityCode',
    name: 'activityCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'InstanceDate',
    name: 'instanceDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ActivityInstanceParams {
    return deserializeComplexTypeV4(json, ActivityInstanceParams);
  }
}
