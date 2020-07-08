/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UserObjectMdEnhancedFormColumn
 */
export interface UserObjectMdEnhancedFormColumn {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Column Number.
   * @nullable
   */
  columnNumber?: number;
  /**
   * Child Number.
   * @nullable
   */
  childNumber?: number;
  /**
   * Column Alias.
   * @nullable
   */
  columnAlias?: string;
  /**
   * Column Description.
   * @nullable
   */
  columnDescription?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdEnhancedFormColumn.build]] instead.
 */
export function createUserObjectMdEnhancedFormColumn(json: any): UserObjectMdEnhancedFormColumn {
  return UserObjectMdEnhancedFormColumn.build(json);
}

/**
 * UserObjectMdEnhancedFormColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserObjectMdEnhancedFormColumnField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserObjectMdEnhancedFormColumn.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdEnhancedFormColumn.columnNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ColumnNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[UserObjectMdEnhancedFormColumn.childNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  childNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ChildNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[UserObjectMdEnhancedFormColumn.columnAlias]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnAlias: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ColumnAlias', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdEnhancedFormColumn.columnDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ColumnDescription', this, 'Edm.String');
}

export namespace UserObjectMdEnhancedFormColumn {
  export function build(json: { [keys: string]: FieldType }): UserObjectMdEnhancedFormColumn {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      ColumnNumber: (columnNumber: number) => ({ columnNumber: edmToTs(columnNumber, 'Edm.Int32') }),
      ChildNumber: (childNumber: number) => ({ childNumber: edmToTs(childNumber, 'Edm.Int32') }),
      ColumnAlias: (columnAlias: string) => ({ columnAlias: edmToTs(columnAlias, 'Edm.String') }),
      ColumnDescription: (columnDescription: string) => ({ columnDescription: edmToTs(columnDescription, 'Edm.String') })
    });
  }
}
