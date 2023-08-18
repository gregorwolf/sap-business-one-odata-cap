/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Boostp } from './U_Boostp';
import { U_BoostpRequestBuilder } from './U_BoostpRequestBuilder';
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
export class U_BoostpApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Boostp<DeSerializersT>, DeSerializersT>
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
  ): U_BoostpApi<DeSerializersT> {
    return new U_BoostpApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Boostp;

  requestBuilder(): U_BoostpRequestBuilder<DeSerializersT> {
    return new U_BoostpRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Boostp<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Boostp<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Boostp<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Boostp, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Boostp, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TPL_NAME: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LANGUAGE: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CP_DATA: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CAT_ID: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_L_FILE_XLS: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_L_FILE_TXT: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CRT_USER: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CRT_TIME: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_CHG_USER: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CHG_TIME: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_DEFAULT: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VERSION: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_HOST: OrderableEdmTypeField<
      U_Boostp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Boostp<DeSerializers>>;
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
         * Static representation of the {@link uTplName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TPL_NAME: fieldBuilder.buildEdmTypeField(
          'U_TplName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'U_Language',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uCpData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CP_DATA: fieldBuilder.buildEdmTypeField(
          'U_CPData',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCatId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CAT_ID: fieldBuilder.buildEdmTypeField('U_CatID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uLFileXls} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_L_FILE_XLS: fieldBuilder.buildEdmTypeField(
          'U_LFileXls',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLFileTxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_L_FILE_TXT: fieldBuilder.buildEdmTypeField(
          'U_LFileTxt',
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
         * Static representation of the {@link uDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEFAULT: fieldBuilder.buildEdmTypeField(
          'U_Default',
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
        ALL_FIELDS: new AllFields('*', U_Boostp)
      };
    }

    return this._schema;
  }
}
