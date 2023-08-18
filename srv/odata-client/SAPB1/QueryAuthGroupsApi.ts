/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { QueryAuthGroups } from './QueryAuthGroups';
import { QueryAuthGroupsRequestBuilder } from './QueryAuthGroupsRequestBuilder';
import { CategoryGroup } from './CategoryGroup';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class QueryAuthGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<QueryAuthGroups<DeSerializersT>, DeSerializersT>
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
  ): QueryAuthGroupsApi<DeSerializersT> {
    return new QueryAuthGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = QueryAuthGroups;

  requestBuilder(): QueryAuthGroupsRequestBuilder<DeSerializersT> {
    return new QueryAuthGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    QueryAuthGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<QueryAuthGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<QueryAuthGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof QueryAuthGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        QueryAuthGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AUTH_GROUP_CODE: OrderableEdmTypeField<
      QueryAuthGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTH_GROUP_DES: OrderableEdmTypeField<
      QueryAuthGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTH_GROUP_ID: OrderableEdmTypeField<
      QueryAuthGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CATEGORY_GROUP_COLLECTION: CollectionField<
      QueryAuthGroups<DeSerializers>,
      DeSerializersT,
      CategoryGroup,
      true,
      true
    >;
    ALL_FIELDS: AllFields<QueryAuthGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link authGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTH_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'AuthGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authGroupDes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTH_GROUP_DES: fieldBuilder.buildEdmTypeField(
          'AuthGroupDes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTH_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'AuthGroupId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link categoryGroupCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_GROUP_COLLECTION: fieldBuilder.buildCollectionField(
          'CategoryGroupCollection',
          CategoryGroup,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', QueryAuthGroups)
      };
    }

    return this._schema;
  }
}
