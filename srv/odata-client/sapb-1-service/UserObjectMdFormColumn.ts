/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserObjectMdFormColumn
 */
export interface UserObjectMdFormColumn {
  /**
   * Form Column Alias.
   * @nullable
   */
  formColumnAlias?: string;
  /**
   * Form Column Description.
   * @nullable
   */
  formColumnDescription?: string;
  /**
   * Form Column Number.
   * @nullable
   */
  formColumnNumber?: number;
  /**
   * Son Number.
   * @nullable
   */
  sonNumber?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Editable.
   * @nullable
   */
  editable?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdFormColumn.build]] instead.
 */
export function createUserObjectMdFormColumn(json: any): UserObjectMdFormColumn {
  return UserObjectMdFormColumn.build(json);
}

/**
 * UserObjectMdFormColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserObjectMdFormColumnField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserObjectMdFormColumn> {
  /**
   * Representation of the [[UserObjectMdFormColumn.formColumnAlias]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formColumnAlias: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FormColumnAlias', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdFormColumn.formColumnDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formColumnDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FormColumnDescription', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdFormColumn.formColumnNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formColumnNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FormColumnNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[UserObjectMdFormColumn.sonNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sonNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SonNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[UserObjectMdFormColumn.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdFormColumn.editable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  editable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Editable', this);

  /**
   * Creates an instance of UserObjectMdFormColumnField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserObjectMdFormColumn);
  }
}

export namespace UserObjectMdFormColumn {
  /**
   * Metadata information on all properties of the `UserObjectMdFormColumn` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserObjectMdFormColumn>[] = [{
    originalName: 'FormColumnAlias',
    name: 'formColumnAlias',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FormColumnDescription',
    name: 'formColumnDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FormColumnNumber',
    name: 'formColumnNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SonNumber',
    name: 'sonNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
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
  export function build(json: { [keys: string]: FieldType }): UserObjectMdFormColumn {
    return deserializeComplexTypeV4(json, UserObjectMdFormColumn);
  }
}
