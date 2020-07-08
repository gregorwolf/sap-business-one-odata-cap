/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesForecastLine
 */
export interface SalesForecastLine {
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Forecasted Day.
   * @nullable
   */
  forecastedDay?: Moment;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: string;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesForecastLine.build]] instead.
 */
export function createSalesForecastLine(json: any): SalesForecastLine {
  return SalesForecastLine.build(json);
}

/**
 * SalesForecastLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesForecastLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesForecastLine.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[SalesForecastLine.forecastedDay]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  forecastedDay: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ForecastedDay', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SalesForecastLine.itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemNo', this, 'Edm.String');
  /**
   * Representation of the [[SalesForecastLine.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
}

export namespace SalesForecastLine {
  export function build(json: { [keys: string]: FieldType }): SalesForecastLine {
    return createComplexType(json, {
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      ForecastedDay: (forecastedDay: Moment) => ({ forecastedDay: edmToTs(forecastedDay, 'Edm.DateTimeOffset') }),
      ItemNo: (itemNo: string) => ({ itemNo: edmToTs(itemNo, 'Edm.String') }),
      Warehouse: (warehouse: string) => ({ warehouse: edmToTs(warehouse, 'Edm.String') })
    });
  }
}
