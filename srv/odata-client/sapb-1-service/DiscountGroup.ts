/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscountGroupBaseObjectEnum } from './DiscountGroupBaseObjectEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DiscountGroup
 */
export interface DiscountGroup {
  /**
   * Object Entry.
   * @nullable
   */
  objectEntry?: string;
  /**
   * Discount Percentage.
   * @nullable
   */
  discountPercentage?: number;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Base Object Type.
   * @nullable
   */
  baseObjectType?: DiscountGroupBaseObjectEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[DiscountGroup.build]] instead.
 */
export function createDiscountGroup(json: any): DiscountGroup {
  return DiscountGroup.build(json);
}

/**
 * DiscountGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DiscountGroupField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DiscountGroup> {
  /**
   * Representation of the [[DiscountGroup.objectEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectEntry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectEntry', this, 'Edm.String');
  /**
   * Representation of the [[DiscountGroup.discountPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountPercentage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DiscountPercentage', this, 'Edm.Double');
  /**
   * Representation of the [[DiscountGroup.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[DiscountGroup.baseObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseObjectType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BaseObjectType', this);

  /**
   * Creates an instance of DiscountGroupField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DiscountGroup);
  }
}

export namespace DiscountGroup {
  /**
   * Metadata information on all properties of the `DiscountGroup` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DiscountGroup>[] = [{
    originalName: 'ObjectEntry',
    name: 'objectEntry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DiscountPercentage',
    name: 'discountPercentage',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BaseObjectType',
    name: 'baseObjectType',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DiscountGroup {
    return deserializeComplexTypeV4(json, DiscountGroup);
  }
}
