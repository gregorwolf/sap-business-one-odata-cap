/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ServiceCallActivity
 */
export interface ServiceCallActivity {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Activity Code.
   * @nullable
   */
  activityCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallActivity.build]] instead.
 */
export function createServiceCallActivity(json: any): ServiceCallActivity {
  return ServiceCallActivity.build(json);
}

/**
 * ServiceCallActivityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallActivityField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallActivity> {
  /**
   * Representation of the [[ServiceCallActivity.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallActivity.activityCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActivityCode', this, 'Edm.Int32');

  /**
   * Creates an instance of ServiceCallActivityField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceCallActivity);
  }
}

export namespace ServiceCallActivity {
  /**
   * Metadata information on all properties of the `ServiceCallActivity` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallActivity>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ActivityCode',
    name: 'activityCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ServiceCallActivity {
    return deserializeComplexTypeV4(json, ServiceCallActivity);
  }
}
