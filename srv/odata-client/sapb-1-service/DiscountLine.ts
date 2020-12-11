/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DiscountLine
 */
export interface DiscountLine {
  /**
   * Discount Code.
   * @nullable
   */
  discountCode?: string;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Num Of Days.
   * @nullable
   */
  numOfDays?: number;
  /**
   * Discount.
   * @nullable
   */
  discount?: number;
  /**
   * Day.
   * @nullable
   */
  day?: number;
  /**
   * Month.
   * @nullable
   */
  month?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DiscountLine.build]] instead.
 */
export function createDiscountLine(json: any): DiscountLine {
  return DiscountLine.build(json);
}

/**
 * DiscountLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DiscountLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DiscountLine> {
  /**
   * Representation of the [[DiscountLine.discountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DiscountCode', this, 'Edm.String');
  /**
   * Representation of the [[DiscountLine.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineId', this, 'Edm.Int32');
  /**
   * Representation of the [[DiscountLine.numOfDays]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numOfDays: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NumOfDays', this, 'Edm.Int32');
  /**
   * Representation of the [[DiscountLine.discount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Discount', this, 'Edm.Double');
  /**
   * Representation of the [[DiscountLine.day]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  day: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Day', this, 'Edm.Int32');
  /**
   * Representation of the [[DiscountLine.month]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  month: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Month', this, 'Edm.Int32');

  /**
   * Creates an instance of DiscountLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DiscountLine);
  }
}

export namespace DiscountLine {
  /**
   * Metadata information on all properties of the `DiscountLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DiscountLine>[] = [{
    originalName: 'DiscountCode',
    name: 'discountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LineId',
    name: 'lineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'NumOfDays',
    name: 'numOfDays',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Discount',
    name: 'discount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Day',
    name: 'day',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Month',
    name: 'month',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DiscountLine {
    return deserializeComplexTypeV4(json, DiscountLine);
  }
}
