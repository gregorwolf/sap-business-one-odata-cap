/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Alert.
   * @nullable
   */
  alert?: BoYesNoEnum;
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
  /**
   * Exclude Items With Zero Quantity.
   * @nullable
   */
  excludeItemsWithZeroQuantity?: BoYesNoEnum;
  /**
   * Change Existing Items.
   * @nullable
   */
  changeExistingItems?: BoYesNoEnum;
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
export class CycleCountDeterminationSetupField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CycleCountDeterminationSetup> {
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
   * Representation of the [[CycleCountDeterminationSetup.alert]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alert: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Alert', this);
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
  /**
   * Representation of the [[CycleCountDeterminationSetup.excludeItemsWithZeroQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  excludeItemsWithZeroQuantity: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ExcludeItemsWithZeroQuantity', this);
  /**
   * Representation of the [[CycleCountDeterminationSetup.changeExistingItems]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeExistingItems: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ChangeExistingItems', this);

  /**
   * Creates an instance of CycleCountDeterminationSetupField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CycleCountDeterminationSetup);
  }
}

export namespace CycleCountDeterminationSetup {
  /**
   * Metadata information on all properties of the `CycleCountDeterminationSetup` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CycleCountDeterminationSetup>[] = [{
    originalName: 'WarehouseCode',
    name: 'warehouseCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Entry',
    name: 'entry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
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
    originalName: 'DestinationUser',
    name: 'destinationUser',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'NextCountingDate',
    name: 'nextCountingDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Time',
    name: 'time',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'ExcludeItemsWithZeroQuantity',
    name: 'excludeItemsWithZeroQuantity',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ChangeExistingItems',
    name: 'changeExistingItems',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CycleCountDeterminationSetup {
    return deserializeComplexTypeV4(json, CycleCountDeterminationSetup);
  }
}
