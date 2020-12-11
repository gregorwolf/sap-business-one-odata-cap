/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  /**
   * Column Is Used.
   * @nullable
   */
  columnIsUsed?: BoYesNoEnum;
  /**
   * Editable.
   * @nullable
   */
  editable?: BoYesNoEnum;
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
export class UserObjectMdEnhancedFormColumnField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserObjectMdEnhancedFormColumn> {
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
  /**
   * Representation of the [[UserObjectMdEnhancedFormColumn.columnIsUsed]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnIsUsed: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ColumnIsUsed', this);
  /**
   * Representation of the [[UserObjectMdEnhancedFormColumn.editable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  editable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Editable', this);

  /**
   * Creates an instance of UserObjectMdEnhancedFormColumnField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserObjectMdEnhancedFormColumn);
  }
}

export namespace UserObjectMdEnhancedFormColumn {
  /**
   * Metadata information on all properties of the `UserObjectMdEnhancedFormColumn` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserObjectMdEnhancedFormColumn>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ColumnNumber',
    name: 'columnNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ChildNumber',
    name: 'childNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ColumnAlias',
    name: 'columnAlias',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ColumnDescription',
    name: 'columnDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ColumnIsUsed',
    name: 'columnIsUsed',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Editable',
    name: 'editable',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserObjectMdEnhancedFormColumn {
    return deserializeComplexTypeV4(json, UserObjectMdEnhancedFormColumn);
  }
}
