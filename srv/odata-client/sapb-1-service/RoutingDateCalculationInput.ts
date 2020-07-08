/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class RoutingDateCalculationInputField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
   * Representation of the [[RoutingDateCalculationInput.worObjAbs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  worObjAbs: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WORObjAbs', this, 'Edm.Int32');
  /**
   * Representation of the [[RoutingDateCalculationInput.worLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  worLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WORLine', this, 'Edm.Int32');
}

export namespace RoutingDateCalculationInput {
  export function build(json: { [keys: string]: FieldType }): RoutingDateCalculationInput {
    return createComplexType(json, {
      ResourceCode: (resourceCode: string) => ({ resourceCode: edmToTs(resourceCode, 'Edm.String') }),
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') }),
      CalculateFromDate: (calculateFromDate: Moment) => ({ calculateFromDate: edmToTs(calculateFromDate, 'Edm.DateTimeOffset') }),
      CalculateUntilDate: (calculateUntilDate: Moment) => ({ calculateUntilDate: edmToTs(calculateUntilDate, 'Edm.DateTimeOffset') }),
      CapacitySum: (capacitySum: number) => ({ capacitySum: edmToTs(capacitySum, 'Edm.Double') }),
      FirstDateProportion: (firstDateProportion: number) => ({ firstDateProportion: edmToTs(firstDateProportion, 'Edm.Double') }),
      WORObjAbs: (worObjAbs: number) => ({ worObjAbs: edmToTs(worObjAbs, 'Edm.Int32') }),
      WORLine: (worLine: number) => ({ worLine: edmToTs(worLine, 'Edm.Int32') })
    });
  }
}
