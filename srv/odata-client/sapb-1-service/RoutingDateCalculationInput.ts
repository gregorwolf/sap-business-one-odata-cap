/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * RoutingDateCalculationInput
 */
export interface RoutingDateCalculationInput {
  /**
   * Resource Code.
   * @nullable
   */
  resourceCode?: string;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
  /**
   * Calculate From Date.
   * @nullable
   */
  calculateFromDate?: Moment;
  /**
   * Calculate Until Date.
   * @nullable
   */
  calculateUntilDate?: Moment;
  /**
   * Capacity Sum.
   * @nullable
   */
  capacitySum?: number;
  /**
   * First Date Proportion.
   * @nullable
   */
  firstDateProportion?: number;
  /**
   * Resource Alloc.
   * @nullable
   */
  resourceAlloc?: ResourceAllocationEnum;
  /**
   * Wor Obj Abs.
   * @nullable
   */
  worObjAbs?: number;
  /**
   * Wor Line.
   * @nullable
   */
  worLine?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[RoutingDateCalculationInput.build]] instead.
 */
export function createRoutingDateCalculationInput(json: any): RoutingDateCalculationInput {
  return RoutingDateCalculationInput.build(json);
}

/**
 * RoutingDateCalculationInputField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RoutingDateCalculationInputField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RoutingDateCalculationInput> {
  /**
   * Representation of the [[RoutingDateCalculationInput.resourceCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  resourceCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ResourceCode', this, 'Edm.String');
  /**
   * Representation of the [[RoutingDateCalculationInput.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[RoutingDateCalculationInput.calculateFromDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculateFromDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CalculateFromDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[RoutingDateCalculationInput.calculateUntilDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  calculateUntilDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CalculateUntilDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[RoutingDateCalculationInput.capacitySum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  capacitySum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CapacitySum', this, 'Edm.Double');
  /**
   * Representation of the [[RoutingDateCalculationInput.firstDateProportion]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstDateProportion: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FirstDateProportion', this, 'Edm.Double');
  /**
   * Representation of the [[RoutingDateCalculationInput.resourceAlloc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  resourceAlloc: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ResourceAlloc', this);
  /**
   * Representation of the [[RoutingDateCalculationInput.worObjAbs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  worObjAbs: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WORObjAbs', this, 'Edm.Int32');
  /**
   * Representation of the [[RoutingDateCalculationInput.worLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  worLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WORLine', this, 'Edm.Int32');

  /**
   * Creates an instance of RoutingDateCalculationInputField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, RoutingDateCalculationInput);
  }
}

export namespace RoutingDateCalculationInput {
  /**
   * Metadata information on all properties of the `RoutingDateCalculationInput` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RoutingDateCalculationInput>[] = [{
    originalName: 'ResourceCode',
    name: 'resourceCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WarehouseCode',
    name: 'warehouseCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CalculateFromDate',
    name: 'calculateFromDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CalculateUntilDate',
    name: 'calculateUntilDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CapacitySum',
    name: 'capacitySum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FirstDateProportion',
    name: 'firstDateProportion',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ResourceAlloc',
    name: 'resourceAlloc',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'WORObjAbs',
    name: 'worObjAbs',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WORLine',
    name: 'worLine',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): RoutingDateCalculationInput {
    return deserializeComplexTypeV4(json, RoutingDateCalculationInput);
  }
}
