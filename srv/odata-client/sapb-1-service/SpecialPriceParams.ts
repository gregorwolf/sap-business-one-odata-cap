/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SpecialPriceParams
 */
export interface SpecialPriceParams {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Price List Num.
   * @nullable
   */
  priceListNum?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceParams.build]] instead.
 */
export function createSpecialPriceParams(json: any): SpecialPriceParams {
  return SpecialPriceParams.build(json);
}

/**
 * SpecialPriceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SpecialPriceParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SpecialPriceParams> {
  /**
   * Representation of the [[SpecialPriceParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceParams.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceParams.priceListNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceListNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceListNum', this, 'Edm.Int32');

  /**
   * Creates an instance of SpecialPriceParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SpecialPriceParams);
  }
}

export namespace SpecialPriceParams {
  /**
   * Metadata information on all properties of the `SpecialPriceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SpecialPriceParams>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CardCode',
    name: 'cardCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PriceListNum',
    name: 'priceListNum',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SpecialPriceParams {
    return deserializeComplexTypeV4(json, SpecialPriceParams);
  }
}
