/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class AttributeGroupLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
   * Representation of the [[AttributeGroupLine.defaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DefaultValue', this, 'Edm.String');
}

export namespace AttributeGroupLine {
  export function build(json: { [keys: string]: FieldType }): AttributeGroupLine {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') }),
      SortNumber: (sortNumber: number) => ({ sortNumber: edmToTs(sortNumber, 'Edm.Int32') }),
      AttributeID: (attributeId: number) => ({ attributeId: edmToTs(attributeId, 'Edm.Int32') }),
      AttributeName: (attributeName: string) => ({ attributeName: edmToTs(attributeName, 'Edm.String') }),
      DefaultValue: (defaultValue: string) => ({ defaultValue: edmToTs(defaultValue, 'Edm.String') })
    });
  }
}
