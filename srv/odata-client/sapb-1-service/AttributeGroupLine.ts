/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AttributeGroupFieldTypeEnum } from './AttributeGroupFieldTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AttributeGroupLine
 */
export interface AttributeGroupLine {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Sort Number.
   * @nullable
   */
  sortNumber?: number;
  /**
   * Attribute Id.
   * @nullable
   */
  attributeId?: number;
  /**
   * Attribute Name.
   * @nullable
   */
  attributeName?: string;
  /**
   * Field Type.
   * @nullable
   */
  fieldType?: AttributeGroupFieldTypeEnum;
  /**
   * Default Value.
   * @nullable
   */
  defaultValue?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AttributeGroupLine.build]] instead.
 */
export function createAttributeGroupLine(json: any): AttributeGroupLine {
  return AttributeGroupLine.build(json);
}

/**
 * AttributeGroupLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AttributeGroupLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AttributeGroupLine> {
  /**
   * Representation of the [[AttributeGroupLine.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[AttributeGroupLine.sortNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SortNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[AttributeGroupLine.attributeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attributeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AttributeID', this, 'Edm.Int32');
  /**
   * Representation of the [[AttributeGroupLine.attributeName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attributeName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AttributeName', this, 'Edm.String');
  /**
   * Representation of the [[AttributeGroupLine.fieldType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('FieldType', this);
  /**
   * Representation of the [[AttributeGroupLine.defaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DefaultValue', this, 'Edm.String');

  /**
   * Creates an instance of AttributeGroupLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AttributeGroupLine);
  }
}

export namespace AttributeGroupLine {
  /**
   * Metadata information on all properties of the `AttributeGroupLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AttributeGroupLine>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SortNumber',
    name: 'sortNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AttributeID',
    name: 'attributeId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AttributeName',
    name: 'attributeName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FieldType',
    name: 'fieldType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DefaultValue',
    name: 'defaultValue',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AttributeGroupLine {
    return deserializeComplexTypeV4(json, AttributeGroupLine);
  }
}
