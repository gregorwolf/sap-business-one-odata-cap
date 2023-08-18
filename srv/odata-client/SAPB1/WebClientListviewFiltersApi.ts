/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebClientListviewFilters } from './WebClientListviewFilters';
import { WebClientListviewFiltersRequestBuilder } from './WebClientListviewFiltersRequestBuilder';
import { WebClientListviewFilterCondition } from './WebClientListviewFilterCondition';
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
export class WebClientListviewFiltersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WebClientListviewFilters<DeSerializersT>, DeSerializersT>
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
  ): WebClientListviewFiltersApi<DeSerializersT> {
    return new WebClientListviewFiltersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WebClientListviewFilters;

  requestBuilder(): WebClientListviewFiltersRequestBuilder<DeSerializersT> {
    return new WebClientListviewFiltersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WebClientListviewFilters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WebClientListviewFilters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WebClientListviewFilters<DeSerializersT>,
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
    typeof WebClientListviewFilters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WebClientListviewFilters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GUID: OrderableEdmTypeField<
      WebClientListviewFilters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      WebClientListviewFilters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      WebClientListviewFilters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILTER_NAME: OrderableEdmTypeField<
      WebClientListviewFilters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEB_CLIENT_LISTVIEW_FILTER_CONDITIONS: CollectionField<
      WebClientListviewFilters<DeSerializers>,
      DeSerializersT,
      WebClientListviewFilterCondition,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WebClientListviewFilters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link guid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUID: fieldBuilder.buildEdmTypeField('Guid', 'Edm.String', false),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.Int32', true),
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link filterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILTER_NAME: fieldBuilder.buildEdmTypeField(
          'FilterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link webClientListviewFilterConditions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_CLIENT_LISTVIEW_FILTER_CONDITIONS:
          fieldBuilder.buildCollectionField(
            'WebClientListviewFilterConditions',
            WebClientListviewFilterCondition,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WebClientListviewFilters)
      };
    }

    return this._schema;
  }
}
