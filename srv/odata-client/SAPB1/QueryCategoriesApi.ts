/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { QueryCategories } from './QueryCategories';
import { QueryCategoriesRequestBuilder } from './QueryCategoriesRequestBuilder';
import { UserQueriesApi } from './UserQueriesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class QueryCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<QueryCategories<DeSerializersT>, DeSerializersT>
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
  ): QueryCategoriesApi<DeSerializersT> {
    return new QueryCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link userQueries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_QUERIES: OneToManyLink<
      QueryCategories<DeSerializersT>,
      DeSerializersT,
      UserQueriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [UserQueriesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      USER_QUERIES: new OneToManyLink('UserQueries', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = QueryCategories;

  requestBuilder(): QueryCategoriesRequestBuilder<DeSerializersT> {
    return new QueryCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    QueryCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<QueryCategories<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<QueryCategories<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof QueryCategories, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        QueryCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      QueryCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      QueryCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERMISSIONS: OrderableEdmTypeField<
      QueryCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userQueries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_QUERIES: OneToManyLink<
      QueryCategories<DeSerializersT>,
      DeSerializersT,
      UserQueriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<QueryCategories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link permissions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERMISSIONS: fieldBuilder.buildEdmTypeField(
          'Permissions',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', QueryCategories)
      };
    }

    return this._schema;
  }
}
