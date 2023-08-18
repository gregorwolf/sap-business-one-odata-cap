/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Booadm } from './U_Booadm';
import { U_BooadmRequestBuilder } from './U_BooadmRequestBuilder';
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
export class U_BooadmApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Booadm<DeSerializersT>, DeSerializersT>
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
  ): U_BooadmApi<DeSerializersT> {
    return new U_BooadmApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Booadm;

  requestBuilder(): U_BooadmRequestBuilder<DeSerializersT> {
    return new U_BooadmRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Booadm<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Booadm<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Booadm<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Booadm, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Booadm, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Booadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Booadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LF_PATH: OrderableEdmTypeField<
      U_Booadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CRT_USER: OrderableEdmTypeField<
      U_Booadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CRT_TIME: OrderableEdmTypeField<
      U_Booadm<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_CHG_USER: OrderableEdmTypeField<
      U_Booadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CHG_TIME: OrderableEdmTypeField<
      U_Booadm<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_LFS_PATH: OrderableEdmTypeField<
      U_Booadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VERSION: OrderableEdmTypeField<
      U_Booadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_HOST: OrderableEdmTypeField<
      U_Booadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Booadm<DeSerializers>>;
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
         * Static representation of the {@link uLfPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LF_PATH: fieldBuilder.buildEdmTypeField(
          'U_LFPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCrtUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CRT_USER: fieldBuilder.buildEdmTypeField(
          'U_CrtUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCrtTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CRT_TIME: fieldBuilder.buildEdmTypeField(
          'U_CrtTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uChgUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CHG_USER: fieldBuilder.buildEdmTypeField(
          'U_ChgUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uChgTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CHG_TIME: fieldBuilder.buildEdmTypeField(
          'U_ChgTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uLfsPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LFS_PATH: fieldBuilder.buildEdmTypeField(
          'U_LFSPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VERSION: fieldBuilder.buildEdmTypeField(
          'U_Version',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uHost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_HOST: fieldBuilder.buildEdmTypeField('U_Host', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Booadm)
      };
    }

    return this._schema;
  }
}
