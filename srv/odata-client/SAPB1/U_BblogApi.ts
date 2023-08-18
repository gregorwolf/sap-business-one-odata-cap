/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bblog } from './U_Bblog';
import { U_BblogRequestBuilder } from './U_BblogRequestBuilder';
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
export class U_BblogApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bblog<DeSerializersT>, DeSerializersT>
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
  ): U_BblogApi<DeSerializersT> {
    return new U_BblogApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bblog;

  requestBuilder(): U_BblogRequestBuilder<DeSerializersT> {
    return new U_BblogRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bblog<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bblog<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bblog<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bblog, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bblog, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bblog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bblog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LOG_ID: OrderableEdmTypeField<
      U_Bblog<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BC_CODE: OrderableEdmTypeField<
      U_Bblog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CRT_DATE: OrderableEdmTypeField<
      U_Bblog<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_USER: OrderableEdmTypeField<
      U_Bblog<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_LANGUAG: OrderableEdmTypeField<
      U_Bblog<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BCS_TYPE: OrderableEdmTypeField<
      U_Bblog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bblog<DeSerializers>>;
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
         * Static representation of the {@link uLogId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LOG_ID: fieldBuilder.buildEdmTypeField('U_LogID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uBcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BC_CODE: fieldBuilder.buildEdmTypeField(
          'U_BC_Code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCrtDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CRT_DATE: fieldBuilder.buildEdmTypeField(
          'U_CrtDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USER: fieldBuilder.buildEdmTypeField('U_User_', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uLanguag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LANGUAG: fieldBuilder.buildEdmTypeField(
          'U_Languag',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBcsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BCS_TYPE: fieldBuilder.buildEdmTypeField(
          'U_BCSType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bblog)
      };
    }

    return this._schema;
  }
}
