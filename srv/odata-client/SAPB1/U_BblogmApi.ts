/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bblogm } from './U_Bblogm';
import { U_BblogmRequestBuilder } from './U_BblogmRequestBuilder';
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
export class U_BblogmApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bblogm<DeSerializersT>, DeSerializersT>
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
  ): U_BblogmApi<DeSerializersT> {
    return new U_BblogmApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bblogm;

  requestBuilder(): U_BblogmRequestBuilder<DeSerializersT> {
    return new U_BblogmRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bblogm<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bblogm<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bblogm<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bblogm, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bblogm, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bblogm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bblogm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LOG_ID: OrderableEdmTypeField<
      U_Bblogm<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_LINE_NUM: OrderableEdmTypeField<
      U_Bblogm<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_MSG_TXT: OrderableEdmTypeField<
      U_Bblogm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_MSG_TYPE: OrderableEdmTypeField<
      U_Bblogm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bblogm<DeSerializers>>;
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
         * Static representation of the {@link uLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'U_LineNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uMsgTxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MSG_TXT: fieldBuilder.buildEdmTypeField(
          'U_MsgTxt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uMsgType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MSG_TYPE: fieldBuilder.buildEdmTypeField(
          'U_MsgType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bblogm)
      };
    }

    return this._schema;
  }
}
