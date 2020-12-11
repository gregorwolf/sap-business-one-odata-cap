/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscountGroupBaseObjectEnum } from './DiscountGroupBaseObjectEnum';
import { DiscountGroupDiscountTypeEnum } from './DiscountGroupDiscountTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DiscountGroupLine
 */
export interface DiscountGroupLine {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: DiscountGroupBaseObjectEnum;
  /**
   * Object Code.
   * @nullable
   */
  objectCode?: string;
  /**
   * Discount Type.
   * @nullable
   */
  discountType?: DiscountGroupDiscountTypeEnum;
  /**
   * Discount.
   * @nullable
   */
  discount?: number;
  /**
   * Paid Quantity.
   * @nullable
   */
  paidQuantity?: number;
  /**
   * Free Quantity.
   * @nullable
   */
  freeQuantity?: number;
  /**
   * Maximum Free Quantity.
   * @nullable
   */
  maximumFreeQuantity?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DiscountGroupLine.build]] instead.
 */
export function createDiscountGroupLine(json: any): DiscountGroupLine {
  return DiscountGroupLine.build(json);
}

/**
 * DiscountGroupLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DiscountGroupLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DiscountGroupLine> {
  /**
   * Representation of the [[DiscountGroupLine.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DiscountGroupLine.objectType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ObjectType', this);
  /**
   * Representation of the [[DiscountGroupLine.objectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectCode', this, 'Edm.String');
  /**
   * Representation of the [[DiscountGroupLine.discountType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DiscountType', this);
  /**
   * Representation of the [[DiscountGroupLine.discount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Discount', this, 'Edm.Double');
  /**
   * Representation of the [[DiscountGroupLine.paidQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaidQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DiscountGroupLine.freeQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FreeQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DiscountGroupLine.maximumFreeQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maximumFreeQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaximumFreeQuantity', this, 'Edm.Double');

  /**
   * Creates an instance of DiscountGroupLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DiscountGroupLine);
  }
}

export namespace DiscountGroupLine {
  /**
   * Metadata information on all properties of the `DiscountGroupLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DiscountGroupLine>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ObjectType',
    name: 'objectType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ObjectCode',
    name: 'objectCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DiscountType',
    name: 'discountType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Discount',
    name: 'discount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PaidQuantity',
    name: 'paidQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FreeQuantity',
    name: 'freeQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'MaximumFreeQuantity',
    name: 'maximumFreeQuantity',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DiscountGroupLine {
    return deserializeComplexTypeV4(json, DiscountGroupLine);
  }
}
