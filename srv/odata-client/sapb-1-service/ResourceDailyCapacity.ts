/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceDailyCapacityWeekdayEnum } from './ResourceDailyCapacityWeekdayEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ResourceDailyCapacity
 */
export interface ResourceDailyCapacity {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Weekday.
   * @nullable
   */
  weekday?: ResourceDailyCapacityWeekdayEnum;
  /**
   * Factor 1.
   * @nullable
   */
  factor1?: number;
  /**
   * Factor 2.
   * @nullable
   */
  factor2?: number;
  /**
   * Factor 3.
   * @nullable
   */
  factor3?: number;
  /**
   * Factor 4.
   * @nullable
   */
  factor4?: number;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Single Run.
   * @nullable
   */
  singleRun?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ResourceDailyCapacity.build]] instead.
 */
export function createResourceDailyCapacity(json: any): ResourceDailyCapacity {
  return ResourceDailyCapacity.build(json);
}

/**
 * ResourceDailyCapacityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceDailyCapacityField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ResourceDailyCapacity> {
  /**
   * Representation of the [[ResourceDailyCapacity.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[ResourceDailyCapacity.weekday]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weekday: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Weekday', this);
  /**
   * Representation of the [[ResourceDailyCapacity.factor1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor1', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceDailyCapacity.factor2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor2', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceDailyCapacity.factor3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor3: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor3', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceDailyCapacity.factor4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor4: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor4', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceDailyCapacity.total]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Total', this, 'Edm.Double');
  /**
   * Representation of the [[ResourceDailyCapacity.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[ResourceDailyCapacity.singleRun]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleRun: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SingleRun', this, 'Edm.Double');

  /**
   * Creates an instance of ResourceDailyCapacityField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ResourceDailyCapacity);
  }
}

export namespace ResourceDailyCapacity {
  /**
   * Metadata information on all properties of the `ResourceDailyCapacity` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ResourceDailyCapacity>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Weekday',
    name: 'weekday',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Factor1',
    name: 'factor1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Factor2',
    name: 'factor2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Factor3',
    name: 'factor3',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Factor4',
    name: 'factor4',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Total',
    name: 'total',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SingleRun',
    name: 'singleRun',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ResourceDailyCapacity {
    return deserializeComplexTypeV4(json, ResourceDailyCapacity);
  }
}
