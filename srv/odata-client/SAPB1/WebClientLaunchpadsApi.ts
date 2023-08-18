/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebClientLaunchpads } from './WebClientLaunchpads';
import { WebClientLaunchpadsRequestBuilder } from './WebClientLaunchpadsRequestBuilder';
import { WebClientLaunchpadGroup } from './WebClientLaunchpadGroup';
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
export class WebClientLaunchpadsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WebClientLaunchpads<DeSerializersT>, DeSerializersT>
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
  ): WebClientLaunchpadsApi<DeSerializersT> {
    return new WebClientLaunchpadsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WebClientLaunchpads;

  requestBuilder(): WebClientLaunchpadsRequestBuilder<DeSerializersT> {
    return new WebClientLaunchpadsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WebClientLaunchpads<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WebClientLaunchpads<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WebClientLaunchpads<DeSerializersT>,
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
    typeof WebClientLaunchpads,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WebClientLaunchpads,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GUID: OrderableEdmTypeField<
      WebClientLaunchpads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      WebClientLaunchpads<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    THEME_ID: OrderableEdmTypeField<
      WebClientLaunchpads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_QUICK_VIEW: EnumField<
      WebClientLaunchpads<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    NOTIFICATION_SHOW_DAYS: OrderableEdmTypeField<
      WebClientLaunchpads<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WEB_CLIENT_LAUNCHPAD_GROUPS: CollectionField<
      WebClientLaunchpads<DeSerializers>,
      DeSerializersT,
      WebClientLaunchpadGroup,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WebClientLaunchpads<DeSerializers>>;
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
         * Static representation of the {@link themeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THEME_ID: fieldBuilder.buildEdmTypeField('ThemeId', 'Edm.String', true),
        /**
         * Static representation of the {@link displayQuickView} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_QUICK_VIEW: fieldBuilder.buildEnumField(
          'DisplayQuickView',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link notificationShowDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIFICATION_SHOW_DAYS: fieldBuilder.buildEdmTypeField(
          'NotificationShowDays',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link webClientLaunchpadGroups} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_CLIENT_LAUNCHPAD_GROUPS: fieldBuilder.buildCollectionField(
          'WebClientLaunchpadGroups',
          WebClientLaunchpadGroup,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WebClientLaunchpads)
      };
    }

    return this._schema;
  }
}
