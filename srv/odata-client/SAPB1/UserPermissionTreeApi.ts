/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserPermissionTree } from './UserPermissionTree';
import { UserPermissionTreeRequestBuilder } from './UserPermissionTreeRequestBuilder';
import { UsersApi } from './UsersApi';
import { UserPermissionForm } from './UserPermissionForm';
import { BoUptOptions } from './BoUptOptions';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class UserPermissionTreeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserPermissionTree<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): UserPermissionTreeApi<DeSerializersT> {
    return new UserPermissionTreeApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      UserPermissionTree<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [UsersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      USER: new OneToOneLink('User', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = UserPermissionTree;

  requestBuilder(): UserPermissionTreeRequestBuilder<DeSerializersT> {
    return new UserPermissionTreeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserPermissionTree<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserPermissionTree<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UserPermissionTree<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof UserPermissionTree,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UserPermissionTree,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_SIGNATURE: OrderableEdmTypeField<
      UserPermissionTree<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      UserPermissionTree<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PERMISSION_ID: OrderableEdmTypeField<
      UserPermissionTree<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPTIONS: EnumField<
      UserPermissionTree<DeSerializers>,
      DeSerializersT,
      BoUptOptions,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      UserPermissionTree<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEVELS: OrderableEdmTypeField<
      UserPermissionTree<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IS_ITEM: EnumField<
      UserPermissionTree<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      UserPermissionTree<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_PERMISSION_FORMS: CollectionField<
      UserPermissionTree<DeSerializers>,
      DeSerializersT,
      UserPermissionForm,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      UserPermissionTree<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UserPermissionTree<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGNATURE: fieldBuilder.buildEdmTypeField(
          'UserSignature',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link permissionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERMISSION_ID: fieldBuilder.buildEdmTypeField(
          'PermissionID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link options} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTIONS: fieldBuilder.buildEnumField('Options', BoUptOptions, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link levels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVELS: fieldBuilder.buildEdmTypeField('Levels', 'Edm.Int32', true),
        /**
         * Static representation of the {@link isItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ITEM: fieldBuilder.buildEnumField('IsItem', BoYesNoEnum, true),
        /**
         * Static representation of the {@link parentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ID: fieldBuilder.buildEdmTypeField(
          'ParentID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userPermissionForms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_PERMISSION_FORMS: fieldBuilder.buildCollectionField(
          'UserPermissionForms',
          UserPermissionForm,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserPermissionTree)
      };
    }

    return this._schema;
  }
}
