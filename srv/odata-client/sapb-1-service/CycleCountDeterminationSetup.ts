/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CycleCountDeterminationSetup
 */
export interface CycleCountDeterminationSetup {
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
  /**
   * Entry.
   * @nullable
   */
  entry?: number;
  /**
   * Cycle Code.
   * @nullable
   */
  cycleCode?: number;
  /**
   * Destination User.
   * @nullable
   */
  destinationUser?: number;
  /**
   * Next Counting Date.
   * @nullable
   */
  nextCountingDate?: Moment;
  /**
   * Time.
   * @nullable
   */
  time?: Time;
}

/**
 * @deprecated Since v1.6.0. Use [[CycleCountDeterminationSetup.build]] instead.
 */
export function createCycleCountDeterminationSetup(json: any): CycleCountDeterminationSetup {
  return CycleCountDeterminationSetup.build(json);
}

/**
 * CycleCountDeterminationSetupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CycleCountDeterminationSetupField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CycleCountDeterminationSetup.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[CycleCountDeterminationSetup.entry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Entry', this, 'Edm.Int32');
  /**
   * Representation of the [[CycleCountDeterminationSetup.cycleCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cycleCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CycleCode', this, 'Edm.Int32');
  /**
   * Representation of the [[CycleCountDeterminationSetup.destinationUser]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  destinationUser: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DestinationUser', this, 'Edm.Int32');
  /**
   * Representation of the [[CycleCountDeterminationSetup.nextCountingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextCountingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('NextCountingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[CycleCountDeterminationSetup.time]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  time: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('Time', this, 'Edm.TimeOfDay');
}

export namespace CycleCountDeterminationSetup {
  export function build(json: { [keys: string]: FieldType }): CycleCountDeterminationSetup {
    return createComplexType(json, {
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') }),
      Entry: (entry: number) => ({ entry: edmToTs(entry, 'Edm.Int32') }),
      CycleCode: (cycleCode: number) => ({ cycleCode: edmToTs(cycleCode, 'Edm.Int32') }),
      DestinationUser: (destinationUser: number) => ({ destinationUser: edmToTs(destinationUser, 'Edm.Int32') }),
      NextCountingDate: (nextCountingDate: Moment) => ({ nextCountingDate: edmToTs(nextCountingDate, 'Edm.DateTimeOffset') }),
      Time: (time: Time) => ({ time: edmToTs(time, 'Edm.TimeOfDay') })
    });
  }
}
