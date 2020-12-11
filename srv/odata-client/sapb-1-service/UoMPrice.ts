/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UoMPrice
 */
export interface UoMPrice {
  /**
   * Price List.
   * @nullable
   */
  priceList?: number;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Reduce By.
   * @nullable
   */
  reduceBy?: number;
  /**
   * Price.
   * @nullable
   */
  price?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Additional Reduce By 1.
   * @nullable
   */
  additionalReduceBy1?: number;
  /**
   * Additional Price 1.
   * @nullable
   */
  additionalPrice1?: number;
  /**
   * Additional Currency 1.
   * @nullable
   */
  additionalCurrency1?: string;
  /**
   * Additional Reduce By 2.
   * @nullable
   */
  additionalReduceBy2?: number;
  /**
   * Additional Price 2.
   * @nullable
   */
  additionalPrice2?: number;
  /**
   * Additional Currency 2.
   * @nullable
   */
  additionalCurrency2?: string;
  /**
   * Auto.
   * @nullable
   */
  auto?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[UoMPrice.build]] instead.
 */
export function createUoMPrice(json: any): UoMPrice {
  return UoMPrice.build(json);
}

/**
 * UoMPriceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UoMPriceField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UoMPrice> {
  /**
   * Representation of the [[UoMPrice.priceList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceList', this, 'Edm.Int32');
  /**
   * Representation of the [[UoMPrice.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[UoMPrice.reduceBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reduceBy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReduceBy', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[UoMPrice.additionalReduceBy1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalReduceBy1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalReduceBy1', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.additionalPrice1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPrice1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalPrice1', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.additionalCurrency1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalCurrency1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AdditionalCurrency1', this, 'Edm.String');
  /**
   * Representation of the [[UoMPrice.additionalReduceBy2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalReduceBy2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalReduceBy2', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.additionalPrice2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPrice2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalPrice2', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.additionalCurrency2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalCurrency2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AdditionalCurrency2', this, 'Edm.String');
  /**
   * Representation of the [[UoMPrice.auto]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  auto: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Auto', this);

  /**
   * Creates an instance of UoMPriceField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UoMPrice);
  }
}

export namespace UoMPrice {
  /**
   * Metadata information on all properties of the `UoMPrice` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UoMPrice>[] = [{
    originalName: 'PriceList',
    name: 'priceList',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UoMEntry',
    name: 'uoMEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ReduceBy',
    name: 'reduceBy',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Price',
    name: 'price',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AdditionalReduceBy1',
    name: 'additionalReduceBy1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AdditionalPrice1',
    name: 'additionalPrice1',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AdditionalCurrency1',
    name: 'additionalCurrency1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AdditionalReduceBy2',
    name: 'additionalReduceBy2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AdditionalPrice2',
    name: 'additionalPrice2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AdditionalCurrency2',
    name: 'additionalCurrency2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Auto',
    name: 'auto',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UoMPrice {
    return deserializeComplexTypeV4(json, UoMPrice);
  }
}
