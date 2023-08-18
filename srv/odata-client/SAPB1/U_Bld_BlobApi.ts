/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bld_Blob } from './U_Bld_Blob';
import { U_Bld_BlobRequestBuilder } from './U_Bld_BlobRequestBuilder';
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
export class U_Bld_BlobApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bld_Blob<DeSerializersT>, DeSerializersT>
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
  ): U_Bld_BlobApi<DeSerializersT> {
    return new U_Bld_BlobApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bld_Blob;

  requestBuilder(): U_Bld_BlobRequestBuilder<DeSerializersT> {
    return new U_Bld_BlobRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bld_Blob<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bld_Blob<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bld_Blob<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bld_Blob, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bld_Blob, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bld_Blob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bld_Blob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LAYT_ID: OrderableEdmTypeField<
      U_Bld_Blob<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CON_IDX: OrderableEdmTypeField<
      U_Bld_Blob<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FILE_TYPE: OrderableEdmTypeField<
      U_Bld_Blob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FILE_CONT: OrderableEdmTypeField<
      U_Bld_Blob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bld_Blob<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link uLaytId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LAYT_ID: fieldBuilder.buildEdmTypeField(
          'U_LaytID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uConIdx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CON_IDX: fieldBuilder.buildEdmTypeField(
          'U_ConIdx',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uFileType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FILE_TYPE: fieldBuilder.buildEdmTypeField(
          'U_FileType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFileCont} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FILE_CONT: fieldBuilder.buildEdmTypeField(
          'U_FileCont',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bld_Blob)
      };
    }

    return this._schema;
  }
}
