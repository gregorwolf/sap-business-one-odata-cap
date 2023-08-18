/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebClientRecentActivities } from './WebClientRecentActivities';
import { WebClientRecentActivitiesRequestBuilder } from './WebClientRecentActivitiesRequestBuilder';
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
export class WebClientRecentActivitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WebClientRecentActivities<DeSerializersT>, DeSerializersT>
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
  ): WebClientRecentActivitiesApi<DeSerializersT> {
    return new WebClientRecentActivitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WebClientRecentActivities;

  requestBuilder(): WebClientRecentActivitiesRequestBuilder<DeSerializersT> {
    return new WebClientRecentActivitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WebClientRecentActivities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WebClientRecentActivities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WebClientRecentActivities<DeSerializersT>,
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
    typeof WebClientRecentActivities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WebClientRecentActivities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GUID: OrderableEdmTypeField<
      WebClientRecentActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APP_ID: OrderableEdmTypeField<
      WebClientRecentActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APP_TYPE: OrderableEdmTypeField<
      WebClientRecentActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNT: OrderableEdmTypeField<
      WebClientRecentActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TIMESTAMP: OrderableEdmTypeField<
      WebClientRecentActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      WebClientRecentActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      WebClientRecentActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_ARRAY: OrderableEdmTypeField<
      WebClientRecentActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      WebClientRecentActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RECENT_DAY: OrderableEdmTypeField<
      WebClientRecentActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WebClientRecentActivities<DeSerializers>>;
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
         * Static representation of the {@link appId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APP_ID: fieldBuilder.buildEdmTypeField('AppId', 'Edm.String', true),
        /**
         * Static representation of the {@link appType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APP_TYPE: fieldBuilder.buildEdmTypeField('AppType', 'Edm.String', true),
        /**
         * Static representation of the {@link count} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNT: fieldBuilder.buildEdmTypeField('Count', 'Edm.Int32', true),
        /**
         * Static representation of the {@link timestamp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMESTAMP: fieldBuilder.buildEdmTypeField(
          'Timestamp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('Url', 'Edm.String', true),
        /**
         * Static representation of the {@link usageArray} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_ARRAY: fieldBuilder.buildEdmTypeField(
          'UsageArray',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.Int32', true),
        /**
         * Static representation of the {@link recentDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECENT_DAY: fieldBuilder.buildEdmTypeField(
          'RecentDay',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WebClientRecentActivities)
      };
    }

    return this._schema;
  }
}
