/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoPermission } from './BoPermission';
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
 * UserPermissionItem
 */
export interface UserPermissionItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * User Code.
   * @nullable
   */
  userCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Permission Id.
   * @nullable
   */
  permissionId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Permission.
   * @nullable
   */
  permission?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * UserPermissionItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserPermissionItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserPermissionItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserPermissionItem.userCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserPermissionItem.permissionId} property for query construction.
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
   * Representation of the {@link UserPermissionItem.permission} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  permission: EnumField<EntityT, DeSerializersT, BoPermission, true, false> =
    this._fieldBuilder.buildEnumField('Permission', BoPermission, true);

  /**
   * Creates an instance of UserPermissionItemField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UserPermissionItem, fieldOptions);
  }
}

export namespace UserPermissionItem {
  /**
   * Metadata information on all properties of the `UserPermissionItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserPermissionItem>[] = [
    {
      originalName: 'UserCode',
      name: 'userCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PermissionID',
      name: 'permissionId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Permission',
      name: 'permission',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
