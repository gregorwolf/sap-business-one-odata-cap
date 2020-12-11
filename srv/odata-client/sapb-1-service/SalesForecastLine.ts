/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class SalesForecastLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesForecastLine> {
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

  /**
   * Creates an instance of SalesForecastLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesForecastLine);
  }
}

export namespace SalesForecastLine {
  /**
   * Metadata information on all properties of the `SalesForecastLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesForecastLine>[] = [{
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ForecastedDay',
    name: 'forecastedDay',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ItemNo',
    name: 'itemNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Warehouse',
    name: 'warehouse',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesForecastLine {
    return deserializeComplexTypeV4(json, SalesForecastLine);
  }
}
