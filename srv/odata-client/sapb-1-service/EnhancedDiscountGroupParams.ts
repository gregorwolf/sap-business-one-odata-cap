/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscountGroupTypeEnum } from './DiscountGroupTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * EnhancedDiscountGroupParams
 */
export interface EnhancedDiscountGroupParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Type.
   * @nullable
   */
  type?: DiscountGroupTypeEnum;
  /**
   * Object Code.
   * @nullable
   */
  objectCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EnhancedDiscountGroupParams.build]] instead.
 */
export function createEnhancedDiscountGroupParams(json: any): EnhancedDiscountGroupParams {
  return EnhancedDiscountGroupParams.build(json);
}

/**
 * EnhancedDiscountGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EnhancedDiscountGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EnhancedDiscountGroupParams> {
  /**
   * Representation of the [[EnhancedDiscountGroupParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[EnhancedDiscountGroupParams.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Type', this);
  /**
   * Representation of the [[EnhancedDiscountGroupParams.objectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectCode', this, 'Edm.String');

  /**
   * Creates an instance of EnhancedDiscountGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EnhancedDiscountGroupParams);
  }
}

export namespace EnhancedDiscountGroupParams {
  /**
   * Metadata information on all properties of the `EnhancedDiscountGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EnhancedDiscountGroupParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ObjectCode',
    name: 'objectCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EnhancedDiscountGroupParams {
    return deserializeComplexTypeV4(json, EnhancedDiscountGroupParams);
  }
}
