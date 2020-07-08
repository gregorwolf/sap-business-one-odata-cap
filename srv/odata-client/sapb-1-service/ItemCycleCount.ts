/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ItemCycleCountField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemCycleCount.cycleCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cycleCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CycleCode', this, 'Edm.Int32');
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
}

export namespace ItemCycleCount {
  export function build(json: { [keys: string]: FieldType }): ItemCycleCount {
    return createComplexType(json, {
      CycleCode: (cycleCode: number) => ({ cycleCode: edmToTs(cycleCode, 'Edm.Int32') }),
      NextCountingDate: (nextCountingDate: Moment) => ({ nextCountingDate: edmToTs(nextCountingDate, 'Edm.DateTimeOffset') }),
      AlertTime: (alertTime: Time) => ({ alertTime: edmToTs(alertTime, 'Edm.TimeOfDay') }),
      DestinationUser: (destinationUser: number) => ({ destinationUser: edmToTs(destinationUser, 'Edm.Int32') }),
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') })
    });
  }
}
