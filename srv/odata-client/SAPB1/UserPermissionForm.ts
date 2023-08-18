/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * UserPermissionForm
 */
export interface UserPermissionForm<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Form Type.
   * @nullable
   */
  formType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Display Order.
   * @nullable
   */
  displayOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Permission Id.
   * @nullable
   */
  permissionId?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * UserPermissionFormField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserPermissionFormField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserPermissionForm,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserPermissionForm.formType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FormType', 'Edm.String', true);
  /**
   * Representation of the {@link UserPermissionForm.displayOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayOrder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DisplayOrder', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserPermissionForm.permissionId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  permissionId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PermissionID', 'Edm.String', true);

  /**
   * Creates an instance of UserPermissionFormField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UserPermissionForm, fieldOptions);
  }
}

export namespace UserPermissionForm {
  /**
   * Metadata information on all properties of the `UserPermissionForm` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserPermissionForm>[] = [
    {
      originalName: 'FormType',
      name: 'formType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DisplayOrder',
      name: 'displayOrder',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PermissionID',
      name: 'permissionId',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
