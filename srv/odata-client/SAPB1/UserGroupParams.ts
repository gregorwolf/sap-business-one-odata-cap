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
 * UserGroupParams
 */
export interface UserGroupParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * User Group Id.
   * @nullable
   */
  userGroupId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * User Group Name.
   * @nullable
   */
  userGroupName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * UserGroupParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserGroupParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserGroupParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserGroupParams.userGroupId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userGroupId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserGroupId', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserGroupParams.userGroupName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userGroupName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserGroupName', 'Edm.String', true);

  /**
   * Creates an instance of UserGroupParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UserGroupParams, fieldOptions);
  }
}

export namespace UserGroupParams {
  /**
   * Metadata information on all properties of the `UserGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserGroupParams>[] = [
    {
      originalName: 'UserGroupId',
      name: 'userGroupId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UserGroupName',
      name: 'userGroupName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
