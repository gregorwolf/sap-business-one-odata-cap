/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserPermissionForm
 */
export interface UserPermissionForm {
  /**
   * Form Type.
   * @nullable
   */
  formType?: string;
  /**
   * Display Order.
   * @nullable
   */
  displayOrder?: number;
  /**
   * Permission Id.
   * @nullable
   */
  permissionId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserPermissionForm.build]] instead.
 */
export function createUserPermissionForm(json: any): UserPermissionForm {
  return UserPermissionForm.build(json);
}

/**
 * UserPermissionFormField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserPermissionFormField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserPermissionForm> {
  /**
   * Representation of the [[UserPermissionForm.formType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FormType', this, 'Edm.String');
  /**
   * Representation of the [[UserPermissionForm.displayOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DisplayOrder', this, 'Edm.Int32');
  /**
   * Representation of the [[UserPermissionForm.permissionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  permissionId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PermissionID', this, 'Edm.String');

  /**
   * Creates an instance of UserPermissionFormField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserPermissionForm);
  }
}

export namespace UserPermissionForm {
  /**
   * Metadata information on all properties of the `UserPermissionForm` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserPermissionForm>[] = [{
    originalName: 'FormType',
    name: 'formType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DisplayOrder',
    name: 'displayOrder',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PermissionID',
    name: 'permissionId',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserPermissionForm {
    return deserializeComplexTypeV4(json, UserPermissionForm);
  }
}
