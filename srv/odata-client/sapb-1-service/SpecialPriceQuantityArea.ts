/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SpecialPriceQuantityArea
 */
export interface SpecialPriceQuantityArea {
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Spda Row Number.
   * @nullable
   */
  spdaRowNumber?: number;
  /**
   * Special Price.
   * @nullable
   */
  specialPrice?: number;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Price Currency.
   * @nullable
   */
  priceCurrency?: string;
  /**
   * Discountin.
   * @nullable
   */
  discountin?: number;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceQuantityArea.build]] instead.
 */
export function createSpecialPriceQuantityArea(json: any): SpecialPriceQuantityArea {
  return SpecialPriceQuantityArea.build(json);
}

/**
 * SpecialPriceQuantityAreaField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SpecialPriceQuantityAreaField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SpecialPriceQuantityArea> {
  /**
   * Representation of the [[SpecialPriceQuantityArea.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[SpecialPriceQuantityArea.spdaRowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  spdaRowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SPDARowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[SpecialPriceQuantityArea.specialPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SpecialPrice', this, 'Edm.Double');
  /**
   * Representation of the [[SpecialPriceQuantityArea.itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemNo', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceQuantityArea.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceQuantityArea.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[SpecialPriceQuantityArea.priceCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PriceCurrency', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceQuantityArea.discountin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Discountin', this, 'Edm.Double');
  /**
   * Representation of the [[SpecialPriceQuantityArea.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of SpecialPriceQuantityAreaField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SpecialPriceQuantityArea);
  }
}

export namespace SpecialPriceQuantityArea {
  /**
   * Metadata information on all properties of the `SpecialPriceQuantityArea` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SpecialPriceQuantityArea>[] = [{
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SPDARowNumber',
    name: 'spdaRowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SpecialPrice',
    name: 'specialPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ItemNo',
    name: 'itemNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RowNumber',
    name: 'rowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PriceCurrency',
    name: 'priceCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Discountin',
    name: 'discountin',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UoMEntry',
    name: 'uoMEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SpecialPriceQuantityArea {
    return deserializeComplexTypeV4(json, SpecialPriceQuantityArea);
  }
}
