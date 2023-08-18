/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebClientVariantGroups } from './WebClientVariantGroups';
import { WebClientVariantGroupsRequestBuilder } from './WebClientVariantGroupsRequestBuilder';
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
export class WebClientVariantGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WebClientVariantGroups<DeSerializersT>, DeSerializersT>
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
  ): WebClientVariantGroupsApi<DeSerializersT> {
    return new WebClientVariantGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WebClientVariantGroups;

  requestBuilder(): WebClientVariantGroupsRequestBuilder<DeSerializersT> {
    return new WebClientVariantGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WebClientVariantGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WebClientVariantGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WebClientVariantGroups<DeSerializersT>,
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
    typeof WebClientVariantGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WebClientVariantGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GUID: OrderableEdmTypeField<
      WebClientVariantGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      WebClientVariantGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    VIEW_TYPE: OrderableEdmTypeField<
      WebClientVariantGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VIEW_ID: OrderableEdmTypeField<
      WebClientVariantGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_NAME: OrderableEdmTypeField<
      WebClientVariantGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_VARIANT: OrderableEdmTypeField<
      WebClientVariantGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WebClientVariantGroups<DeSerializers>>;
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
         * Static representation of the {@link viewType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEW_TYPE: fieldBuilder.buildEdmTypeField(
          'ViewType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link viewId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEW_ID: fieldBuilder.buildEdmTypeField('ViewId', 'Edm.String', true),
        /**
         * Static representation of the {@link objectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ObjectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultVariant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VARIANT: fieldBuilder.buildEdmTypeField(
          'DefaultVariant',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WebClientVariantGroups)
      };
    }

    return this._schema;
  }
}
