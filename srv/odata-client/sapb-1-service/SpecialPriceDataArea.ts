/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { SpecialPriceQuantityArea } from './SpecialPriceQuantityArea';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SpecialPriceDataArea
 */
export interface SpecialPriceDataArea {
  /**
   * Price Currency.
   * @nullable
   */
  priceCurrency?: string;
  /**
   * Auto Update.
   * @nullable
   */
  autoUpdate?: BoYesNoEnum;
  /**
   * Dateto.
   * @nullable
   */
  dateto?: Moment;
  /**
   * Discount.
   * @nullable
   */
  discount?: number;
  /**
   * Special Price.
   * @nullable
   */
  specialPrice?: number;
  /**
   * Date From.
   * @nullable
   */
  dateFrom?: Moment;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Price List No.
   * @nullable
   */
  priceListNo?: number;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: string;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Special Price Quantity Areas.
   * @nullable
   */
  specialPriceQuantityAreas?: SpecialPriceQuantityArea[];
}

/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceDataArea.build]] instead.
 */
export function createSpecialPriceDataArea(json: any): SpecialPriceDataArea {
  return SpecialPriceDataArea.build(json);
}

/**
 * SpecialPriceDataAreaField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SpecialPriceDataAreaField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SpecialPriceDataArea> {
  /**
   * Representation of the [[SpecialPriceDataArea.priceCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PriceCurrency', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceDataArea.autoUpdate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  autoUpdate: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AutoUpdate', this);
  /**
   * Representation of the [[SpecialPriceDataArea.dateto]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateto: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Dateto', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SpecialPriceDataArea.discount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Discount', this, 'Edm.Double');
  /**
   * Representation of the [[SpecialPriceDataArea.specialPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SpecialPrice', this, 'Edm.Double');
  /**
   * Representation of the [[SpecialPriceDataArea.dateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SpecialPriceDataArea.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceDataArea.priceListNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceListNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceListNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SpecialPriceDataArea.itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemNo', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceDataArea.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[SpecialPriceDataArea.specialPriceQuantityAreas]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialPriceQuantityAreas: CollectionField<EntityT, SpecialPriceQuantityArea> = new CollectionField('SpecialPriceQuantityAreas', this, SpecialPriceQuantityArea);

  /**
   * Creates an instance of SpecialPriceDataAreaField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SpecialPriceDataArea);
  }
}

export namespace SpecialPriceDataArea {
  /**
   * Metadata information on all properties of the `SpecialPriceDataArea` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SpecialPriceDataArea>[] = [{
    originalName: 'PriceCurrency',
    name: 'priceCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AutoUpdate',
    name: 'autoUpdate',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Dateto',
    name: 'dateto',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Discount',
    name: 'discount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'SpecialPrice',
    name: 'specialPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DateFrom',
    name: 'dateFrom',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PriceListNo',
    name: 'priceListNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemNo',
    name: 'itemNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RowNumber',
    name: 'rowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SpecialPriceQuantityAreas',
    name: 'specialPriceQuantityAreas',
    type: SpecialPriceQuantityArea,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | SpecialPriceQuantityArea }): SpecialPriceDataArea {
    return deserializeComplexTypeV4(json, SpecialPriceDataArea);
  }
}
