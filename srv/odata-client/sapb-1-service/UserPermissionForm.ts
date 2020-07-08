/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class UserPermissionFormField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace UserPermissionForm {
  export function build(json: { [keys: string]: FieldType }): UserPermissionForm {
    return createComplexType(json, {
      FormType: (formType: string) => ({ formType: edmToTs(formType, 'Edm.String') }),
      DisplayOrder: (displayOrder: number) => ({ displayOrder: edmToTs(displayOrder, 'Edm.Int32') }),
      PermissionID: (permissionId: string) => ({ permissionId: edmToTs(permissionId, 'Edm.String') })
    });
  }
}
