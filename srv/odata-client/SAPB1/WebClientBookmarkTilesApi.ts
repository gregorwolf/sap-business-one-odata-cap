/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebClientBookmarkTiles } from './WebClientBookmarkTiles';
import { WebClientBookmarkTilesRequestBuilder } from './WebClientBookmarkTilesRequestBuilder';
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
export class WebClientBookmarkTilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WebClientBookmarkTiles<DeSerializersT>, DeSerializersT>
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
  ): WebClientBookmarkTilesApi<DeSerializersT> {
    return new WebClientBookmarkTilesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WebClientBookmarkTiles;

  requestBuilder(): WebClientBookmarkTilesRequestBuilder<DeSerializersT> {
    return new WebClientBookmarkTilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WebClientBookmarkTiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WebClientBookmarkTiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WebClientBookmarkTiles<DeSerializersT>,
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
    typeof WebClientBookmarkTiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WebClientBookmarkTiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GUID: OrderableEdmTypeField<
      WebClientBookmarkTiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      WebClientBookmarkTiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_TITLE: OrderableEdmTypeField<
      WebClientBookmarkTiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INFO: OrderableEdmTypeField<
      WebClientBookmarkTiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIND_TYPE: OrderableEdmTypeField<
      WebClientBookmarkTiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL_TARGET: OrderableEdmTypeField<
      WebClientBookmarkTiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WebClientBookmarkTiles<DeSerializers>>;
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
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link subTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_TITLE: fieldBuilder.buildEdmTypeField(
          'SubTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link info} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFO: fieldBuilder.buildEdmTypeField('Info', 'Edm.String', true),
        /**
         * Static representation of the {@link bindType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIND_TYPE: fieldBuilder.buildEdmTypeField(
          'BindType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link urlTarget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL_TARGET: fieldBuilder.buildEdmTypeField(
          'UrlTarget',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WebClientBookmarkTiles)
      };
    }

    return this._schema;
  }
}
