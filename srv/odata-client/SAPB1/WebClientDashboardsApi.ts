/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebClientDashboards } from './WebClientDashboards';
import { WebClientDashboardsRequestBuilder } from './WebClientDashboardsRequestBuilder';
import { WebClientDashboardCard } from './WebClientDashboardCard';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class WebClientDashboardsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WebClientDashboards<DeSerializersT>, DeSerializersT>
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
  ): WebClientDashboardsApi<DeSerializersT> {
    return new WebClientDashboardsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WebClientDashboards;

  requestBuilder(): WebClientDashboardsRequestBuilder<DeSerializersT> {
    return new WebClientDashboardsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WebClientDashboards<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WebClientDashboards<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WebClientDashboards<DeSerializersT>,
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
    typeof WebClientDashboards,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WebClientDashboards,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GUID: OrderableEdmTypeField<
      WebClientDashboards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      WebClientDashboards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CONTENT: OrderableEdmTypeField<
      WebClientDashboards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS: EnumField<
      WebClientDashboards<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WEB_CLIENT_DASHBOARD_CARDS: CollectionField<
      WebClientDashboards<DeSerializers>,
      DeSerializersT,
      WebClientDashboardCard,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WebClientDashboards<DeSerializers>>;
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
         * Static representation of the {@link content} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT: fieldBuilder.buildEdmTypeField('Content', 'Edm.String', true),
        /**
         * Static representation of the {@link sys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS: fieldBuilder.buildEnumField('Sys', BoYesNoEnum, true),
        /**
         * Static representation of the {@link webClientDashboardCards} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_CLIENT_DASHBOARD_CARDS: fieldBuilder.buildCollectionField(
          'WebClientDashboardCards',
          WebClientDashboardCard,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WebClientDashboards)
      };
    }

    return this._schema;
  }
}
