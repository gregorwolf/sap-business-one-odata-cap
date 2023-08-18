/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserGroups } from './UserGroups';
import { UserGroupsRequestBuilder } from './UserGroupsRequestBuilder';
import { UserGroupCategoryEnum } from './UserGroupCategoryEnum';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class UserGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserGroups<DeSerializersT>, DeSerializersT>
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
  ): UserGroupsApi<DeSerializersT> {
    return new UserGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = UserGroups;

  requestBuilder(): UserGroupsRequestBuilder<DeSerializersT> {
    return new UserGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UserGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof UserGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(UserGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_GROUP_ID: OrderableEdmTypeField<
      UserGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USER_GROUP_NAME: OrderableEdmTypeField<
      UserGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_GROUP_DEC: OrderableEdmTypeField<
      UserGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TPL_ID: OrderableEdmTypeField<
      UserGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      UserGroups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      UserGroups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    USER_GROUP_TYPE: EnumField<
      UserGroups<DeSerializers>,
      DeSerializersT,
      UserGroupCategoryEnum,
      true,
      true
    >;
    ALL_FIELDS: AllFields<UserGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'UserGroupId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link userGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'UserGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userGroupDec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP_DEC: fieldBuilder.buildEdmTypeField(
          'UserGroupDec',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tplId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TPL_ID: fieldBuilder.buildEdmTypeField('TPLId', 'Edm.Int32', true),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link userGroupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP_TYPE: fieldBuilder.buildEnumField(
          'UserGroupType',
          UserGroupCategoryEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserGroups)
      };
    }

    return this._schema;
  }
}
