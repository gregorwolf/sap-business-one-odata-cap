/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebClientNotifications } from './WebClientNotifications';
import { WebClientNotificationsRequestBuilder } from './WebClientNotificationsRequestBuilder';
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
export class WebClientNotificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WebClientNotifications<DeSerializersT>, DeSerializersT>
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
  ): WebClientNotificationsApi<DeSerializersT> {
    return new WebClientNotificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WebClientNotifications;

  requestBuilder(): WebClientNotificationsRequestBuilder<DeSerializersT> {
    return new WebClientNotificationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WebClientNotifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WebClientNotifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WebClientNotifications<DeSerializersT>,
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
    typeof WebClientNotifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WebClientNotifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GUID: OrderableEdmTypeField<
      WebClientNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      WebClientNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ACTIVITY_DATE: OrderableEdmTypeField<
      WebClientNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    READ_STATUS: OrderableEdmTypeField<
      WebClientNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISMISSED: OrderableEdmTypeField<
      WebClientNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTI_TYPE: OrderableEdmTypeField<
      WebClientNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WebClientNotifications<DeSerializers>>;
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
         * Static representation of the {@link activityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_DATE: fieldBuilder.buildEdmTypeField(
          'ActivityDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link readStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        READ_STATUS: fieldBuilder.buildEdmTypeField(
          'ReadStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDismissed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISMISSED: fieldBuilder.buildEdmTypeField(
          'IsDismissed',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notiType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTI_TYPE: fieldBuilder.buildEdmTypeField(
          'NotiType',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WebClientNotifications)
      };
    }

    return this._schema;
  }
}
