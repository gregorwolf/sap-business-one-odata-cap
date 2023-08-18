/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SqlQueries } from './SqlQueries';
import { SqlQueriesRequestBuilder } from './SqlQueriesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SqlQueriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SqlQueries<DeSerializersT>, DeSerializersT>
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
  ): SqlQueriesApi<DeSerializersT> {
    return new SqlQueriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SqlQueries;

  requestBuilder(): SqlQueriesRequestBuilder<DeSerializersT> {
    return new SqlQueriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SqlQueries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SqlQueries<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SqlQueries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SqlQueries, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SqlQueries, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SQL_CODE: OrderableEdmTypeField<
      SqlQueries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SQL_NAME: OrderableEdmTypeField<
      SqlQueries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SQL_TEXT: OrderableEdmTypeField<
      SqlQueries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAM_LIST: OrderableEdmTypeField<
      SqlQueries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_DATE: OrderableEdmTypeField<
      SqlQueries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      SqlQueries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SqlQueries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sqlCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SQL_CODE: fieldBuilder.buildEdmTypeField(
          'SqlCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sqlName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SQL_NAME: fieldBuilder.buildEdmTypeField('SqlName', 'Edm.String', true),
        /**
         * Static representation of the {@link sqlText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SQL_TEXT: fieldBuilder.buildEdmTypeField('SqlText', 'Edm.String', true),
        /**
         * Static representation of the {@link paramList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAM_LIST: fieldBuilder.buildEdmTypeField(
          'ParamList',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DATE: fieldBuilder.buildEdmTypeField(
          'CreateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SqlQueries)
      };
    }

    return this._schema;
  }
}
