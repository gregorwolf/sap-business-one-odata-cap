/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemCycleCount
 */
export interface ItemCycleCount {
  /**
   * Cycle Code.
   * @nullable
   */
  cycleCode?: number;
  /**
   * Alert.
   * @nullable
   */
  alert?: BoYesNoEnum;
  /**
   * Next Counting Date.
   * @nullable
   */
  nextCountingDate?: Moment;
  /**
   * Alert Time.
   * @nullable
   */
  alertTime?: Time;
  /**
   * Destination User.
   * @nullable
   */
  destinationUser?: number;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemCycleCount.build]] instead.
 */
export function createItemCycleCount(json: any): ItemCycleCount {
  return ItemCycleCount.build(json);
}

/**
 * ItemCycleCountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemCycleCountField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemCycleCount> {
  /**
   * Representation of the [[ItemCycleCount.cycleCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cycleCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CycleCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemCycleCount.alert]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alert: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Alert', this);
  /**
   * Representation of the [[ItemCycleCount.nextCountingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextCountingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('NextCountingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemCycleCount.alertTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alertTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('AlertTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[ItemCycleCount.destinationUser]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  destinationUser: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DestinationUser', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemCycleCount.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');

  /**
   * Creates an instance of ItemCycleCountField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemCycleCount);
  }
}

export namespace ItemCycleCount {
  /**
   * Metadata information on all properties of the `ItemCycleCount` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemCycleCount>[] = [{
    originalName: 'CycleCode',
    name: 'cycleCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Alert',
    name: 'alert',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'NextCountingDate',
    name: 'nextCountingDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'AlertTime',
    name: 'alertTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'DestinationUser',
    name: 'destinationUser',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WarehouseCode',
    name: 'warehouseCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemCycleCount {
    return deserializeComplexTypeV4(json, ItemCycleCount);
  }
}
