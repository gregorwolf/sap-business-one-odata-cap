/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserQueries } from './UserQueries';
import { UserQueriesRequestBuilder } from './UserQueriesRequestBuilder';
import { QueryCategoriesApi } from './QueryCategoriesApi';
import { UserQueryTypeEnum } from './UserQueryTypeEnum';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class UserQueriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserQueries<DeSerializersT>, DeSerializersT>
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
  ): UserQueriesApi<DeSerializersT> {
    return new UserQueriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link queryCategory2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUERY_CATEGORY_2: OneToOneLink<
      UserQueries<DeSerializersT>,
      DeSerializersT,
      QueryCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [QueryCategoriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      QUERY_CATEGORY_2: new OneToOneLink('QueryCategory2', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = UserQueries;

  requestBuilder(): UserQueriesRequestBuilder<DeSerializersT> {
    return new UserQueriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserQueries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserQueries<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UserQueries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof UserQueries, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(UserQueries, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INTERNAL_KEY: OrderableEdmTypeField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUERY_CATEGORY: OrderableEdmTypeField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUERY_DESCRIPTION: OrderableEdmTypeField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUERY: OrderableEdmTypeField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCEDURE_ALIAS: OrderableEdmTypeField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCEDURE_NAME: OrderableEdmTypeField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUERY_TYPE: EnumField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      UserQueryTypeEnum,
      true,
      true
    >;
    MENU_CAPTION: OrderableEdmTypeField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_MENU_ID: OrderableEdmTypeField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MENU_POSITION: OrderableEdmTypeField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MENU_UNIQUE_ID: OrderableEdmTypeField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_MENU_ENTRY: EnumField<
      UserQueries<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link queryCategory2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUERY_CATEGORY_2: OneToOneLink<
      UserQueries<DeSerializersT>,
      DeSerializersT,
      QueryCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UserQueries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link internalKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_KEY: fieldBuilder.buildEdmTypeField(
          'InternalKey',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link queryCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_CATEGORY: fieldBuilder.buildEdmTypeField(
          'QueryCategory',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link queryDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'QueryDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link query} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY: fieldBuilder.buildEdmTypeField('Query', 'Edm.String', true),
        /**
         * Static representation of the {@link procedureAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCEDURE_ALIAS: fieldBuilder.buildEdmTypeField(
          'ProcedureAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link procedureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCEDURE_NAME: fieldBuilder.buildEdmTypeField(
          'ProcedureName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link queryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_TYPE: fieldBuilder.buildEnumField(
          'QueryType',
          UserQueryTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link menuCaption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_CAPTION: fieldBuilder.buildEdmTypeField(
          'MenuCaption',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentMenuId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_MENU_ID: fieldBuilder.buildEdmTypeField(
          'ParentMenuID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link menuPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_POSITION: fieldBuilder.buildEdmTypeField(
          'MenuPosition',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link menuUniqueId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_UNIQUE_ID: fieldBuilder.buildEdmTypeField(
          'MenuUniqueID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableMenuEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_MENU_ENTRY: fieldBuilder.buildEnumField(
          'EnableMenuEntry',
          BoYesNoEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserQueries)
      };
    }

    return this._schema;
  }
}
