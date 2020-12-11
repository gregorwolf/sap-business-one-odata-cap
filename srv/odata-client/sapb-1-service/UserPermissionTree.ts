/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserPermissionTreeRequestBuilder } from './UserPermissionTreeRequestBuilder';
import { UserPermissionForm } from './UserPermissionForm';
import { BoUptOptions } from './BoUptOptions';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "UserPermissionTree" of service "SAPB1".
 */
export class UserPermissionTree extends EntityV4 implements UserPermissionTreeType {
  /**
   * Technical entity name for UserPermissionTree.
   */
  static _entityName = 'UserPermissionTree';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: number;
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
  /**
   * Options.
   * @nullable
   */
  options?: BoUptOptions;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Levels.
   * @nullable
   */
  levels?: number;
  /**
   * Is Item.
   * @nullable
   */
  isItem?: BoYesNoEnum;
  /**
   * Parent Id.
   * @nullable
   */
  parentId?: string;
  /**
   * User Permission Forms.
   * @nullable
   */
  userPermissionForms?: UserPermissionForm[];
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;

  /**
   * Returns an entity builder to construct instances of `UserPermissionTree`.
   * @returns A builder that constructs instances of entity type `UserPermissionTree`.
   */
  static builder(): EntityBuilderType<UserPermissionTree, UserPermissionTreeType> {
    return EntityV4.entityBuilder(UserPermissionTree);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserPermissionTree` entity type.
   * @returns A `UserPermissionTree` request builder.
   */
  static requestBuilder(): UserPermissionTreeRequestBuilder {
    return new UserPermissionTreeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserPermissionTree`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserPermissionTree`.
   */
  static customField(fieldName: string): CustomFieldV4<UserPermissionTree> {
    return EntityV4.customFieldSelector(fieldName, UserPermissionTree);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Users, UsersType } from './Users';

export interface UserPermissionTreeType {
  userSignature?: number | null;
  displayOrder?: number | null;
  permissionId?: string | null;
  options?: BoUptOptions | null;
  name?: string | null;
  levels?: number | null;
  isItem?: BoYesNoEnum | null;
  parentId?: string | null;
  userPermissionForms?: UserPermissionForm[] | null;
  user: UsersType;
}

export namespace UserPermissionTree {
  /**
   * Static representation of the [[userSignature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SIGNATURE: NumberField<UserPermissionTree> = new NumberField('UserSignature', UserPermissionTree, 'Edm.Int32');
  /**
   * Static representation of the [[displayOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_ORDER: NumberField<UserPermissionTree> = new NumberField('DisplayOrder', UserPermissionTree, 'Edm.Int32');
  /**
   * Static representation of the [[permissionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERMISSION_ID: StringField<UserPermissionTree> = new StringField('PermissionID', UserPermissionTree, 'Edm.String');
  /**
   * Static representation of the [[options]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTIONS: EnumField<UserPermissionTree> = new EnumField('Options', UserPermissionTree);
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<UserPermissionTree> = new StringField('Name', UserPermissionTree, 'Edm.String');
  /**
   * Static representation of the [[levels]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVELS: NumberField<UserPermissionTree> = new NumberField('Levels', UserPermissionTree, 'Edm.Int32');
  /**
   * Static representation of the [[isItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ITEM: EnumField<UserPermissionTree> = new EnumField('IsItem', UserPermissionTree);
  /**
   * Static representation of the [[parentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_ID: StringField<UserPermissionTree> = new StringField('ParentID', UserPermissionTree, 'Edm.String');
  /**
   * Static representation of the [[userPermissionForms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_PERMISSION_FORMS: CollectionField<UserPermissionTree, UserPermissionForm> = new CollectionField('UserPermissionForms', UserPermissionTree, UserPermissionForm);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<UserPermissionTree, Users> = new OneToOneLink('User', UserPermissionTree, Users);
  /**
   * All fields of the UserPermissionTree entity.
   */
  export const _allFields: Array<NumberField<UserPermissionTree> | StringField<UserPermissionTree> | EnumField<UserPermissionTree> | CollectionField<UserPermissionTree, UserPermissionForm> | OneToOneLink<UserPermissionTree, Users>> = [
    UserPermissionTree.USER_SIGNATURE,
    UserPermissionTree.DISPLAY_ORDER,
    UserPermissionTree.PERMISSION_ID,
    UserPermissionTree.OPTIONS,
    UserPermissionTree.NAME,
    UserPermissionTree.LEVELS,
    UserPermissionTree.IS_ITEM,
    UserPermissionTree.PARENT_ID,
    UserPermissionTree.USER_PERMISSION_FORMS,
    UserPermissionTree.USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserPermissionTree> = new AllFields('*', UserPermissionTree);
  /**
   * All key fields of the UserPermissionTree entity.
   */
  export const _keyFields: Array<Field<UserPermissionTree>> = [UserPermissionTree.PERMISSION_ID];
  /**
   * Mapping of all key field names to the respective static field property UserPermissionTree.
   */
  export const _keys: { [keys: string]: Field<UserPermissionTree> } = UserPermissionTree._keyFields.reduce((acc: { [keys: string]: Field<UserPermissionTree> }, field: Field<UserPermissionTree>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
