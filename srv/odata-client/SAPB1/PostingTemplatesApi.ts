/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PostingTemplates } from './PostingTemplates';
import { PostingTemplatesRequestBuilder } from './PostingTemplatesRequestBuilder';
import { PostingTemplatesLine } from './PostingTemplatesLine';
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
export class PostingTemplatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PostingTemplates<DeSerializersT>, DeSerializersT>
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
  ): PostingTemplatesApi<DeSerializersT> {
    return new PostingTemplatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PostingTemplates;

  requestBuilder(): PostingTemplatesRequestBuilder<DeSerializersT> {
    return new PostingTemplatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PostingTemplates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PostingTemplates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PostingTemplates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PostingTemplates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PostingTemplates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      PostingTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PostingTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAMP_TAX: EnumField<
      PostingTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AUTOMATIC_VAT: EnumField<
      PostingTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MANAGE_W_TAX: EnumField<
      PostingTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DEFERRED_TAX: EnumField<
      PostingTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    POSTING_TEMPLATES_LINE_COLLECTION: CollectionField<
      PostingTemplates<DeSerializers>,
      DeSerializersT,
      PostingTemplatesLine,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PostingTemplates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stampTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAMP_TAX: fieldBuilder.buildEnumField('StampTax', BoYesNoEnum, true),
        /**
         * Static representation of the {@link automaticVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_VAT: fieldBuilder.buildEnumField(
          'AutomaticVAT',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link manageWTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGE_W_TAX: fieldBuilder.buildEnumField(
          'ManageWTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link deferredTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_TAX: fieldBuilder.buildEnumField(
          'DeferredTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link postingTemplatesLineCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_TEMPLATES_LINE_COLLECTION: fieldBuilder.buildCollectionField(
          'PostingTemplatesLineCollection',
          PostingTemplatesLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PostingTemplates)
      };
    }

    return this._schema;
  }
}
