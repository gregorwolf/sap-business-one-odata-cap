/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bncprt } from './U_Bncprt';
import { U_BncprtRequestBuilder } from './U_BncprtRequestBuilder';
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
export class U_BncprtApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bncprt<DeSerializersT>, DeSerializersT>
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
  ): U_BncprtApi<DeSerializersT> {
    return new U_BncprtApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bncprt;

  requestBuilder(): U_BncprtRequestBuilder<DeSerializersT> {
    return new U_BncprtRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bncprt<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bncprt<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bncprt<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bncprt, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bncprt, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bncprt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bncprt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_EXPORT: OrderableEdmTypeField<
      U_Bncprt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_IMPORT: OrderableEdmTypeField<
      U_Bncprt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bncprt<DeSerializers>>;
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
         * Static representation of the {@link uExport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EXPORT: fieldBuilder.buildEdmTypeField(
          'U_Export',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_IMPORT: fieldBuilder.buildEdmTypeField(
          'U_Import',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bncprt)
      };
    }

    return this._schema;
  }
}
