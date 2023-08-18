/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoeDocumentTypes } from './BoeDocumentTypes';
import { BoeDocumentTypesRequestBuilder } from './BoeDocumentTypesRequestBuilder';
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
export class BoeDocumentTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BoeDocumentTypes<DeSerializersT>, DeSerializersT>
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
  ): BoeDocumentTypesApi<DeSerializersT> {
    return new BoeDocumentTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BoeDocumentTypes;

  requestBuilder(): BoeDocumentTypesRequestBuilder<DeSerializersT> {
    return new BoeDocumentTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BoeDocumentTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BoeDocumentTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BoeDocumentTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BoeDocumentTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BoeDocumentTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_ENTRY: OrderableEdmTypeField<
      BoeDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOC_TYPE: OrderableEdmTypeField<
      BoeDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_DESCRIPTION: OrderableEdmTypeField<
      BoeDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BoeDocumentTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link docType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE: fieldBuilder.buildEdmTypeField('DocType', 'Edm.String', true),
        /**
         * Static representation of the {@link docDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DocDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BoeDocumentTypes)
      };
    }

    return this._schema;
  }
}
