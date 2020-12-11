/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ResourceCapacityTypeEnum } from './ResourceCapacityTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ResourceCapacityWithFilterParams
 */
export interface ResourceCapacityWithFilterParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Type.
   * @nullable
   */
  type?: ResourceCapacityTypeEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[ResourceCapacityWithFilterParams.build]] instead.
 */
export function createResourceCapacityWithFilterParams(json: any): ResourceCapacityWithFilterParams {
  return ResourceCapacityWithFilterParams.build(json);
}

/**
 * ResourceCapacityWithFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceCapacityWithFilterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ResourceCapacityWithFilterParams> {
  /**
   * Representation of the [[ResourceCapacityWithFilterParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[ResourceCapacityWithFilterParams.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
  /**
   * Representation of the [[ResourceCapacityWithFilterParams.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ResourceCapacityWithFilterParams.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Type', this);

  /**
   * Creates an instance of ResourceCapacityWithFilterParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ResourceCapacityWithFilterParams);
  }
}

export namespace ResourceCapacityWithFilterParams {
  /**
   * Metadata information on all properties of the `ResourceCapacityWithFilterParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ResourceCapacityWithFilterParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Warehouse',
    name: 'warehouse',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Date',
    name: 'date',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ResourceCapacityWithFilterParams {
    return deserializeComplexTypeV4(json, ResourceCapacityWithFilterParams);
  }
}
