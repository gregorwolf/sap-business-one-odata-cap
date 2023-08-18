/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Cto_Toa } from './U_Cto_Toa';
import { U_Cto_ToaRequestBuilder } from './U_Cto_ToaRequestBuilder';
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
export class U_Cto_ToaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Cto_Toa<DeSerializersT>, DeSerializersT>
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
  ): U_Cto_ToaApi<DeSerializersT> {
    return new U_Cto_ToaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Cto_Toa;

  requestBuilder(): U_Cto_ToaRequestBuilder<DeSerializersT> {
    return new U_Cto_ToaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Cto_Toa<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Cto_Toa<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Cto_Toa<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Cto_Toa, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Cto_Toa, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Cto_Toa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Cto_Toa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_MANDT: OrderableEdmTypeField<
      U_Cto_Toa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BUS_OBJ: OrderableEdmTypeField<
      U_Cto_Toa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OBJ_KEY: OrderableEdmTypeField<
      U_Cto_Toa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DOC_NUM: OrderableEdmTypeField<
      U_Cto_Toa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DOCU_TYPE: OrderableEdmTypeField<
      U_Cto_Toa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CREA_DATE: OrderableEdmTypeField<
      U_Cto_Toa<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_CREA_USER: OrderableEdmTypeField<
      U_Cto_Toa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DOC_ID: OrderableEdmTypeField<
      U_Cto_Toa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Cto_Toa<DeSerializers>>;
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
         * Static representation of the {@link uMandt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MANDT: fieldBuilder.buildEdmTypeField('U_Mandt', 'Edm.String', true),
        /**
         * Static representation of the {@link uBusObj} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BUS_OBJ: fieldBuilder.buildEdmTypeField(
          'U_BusObj',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uObjKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OBJ_KEY: fieldBuilder.buildEdmTypeField(
          'U_ObjKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'U_DocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDocuType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DOCU_TYPE: fieldBuilder.buildEdmTypeField(
          'U_DocuType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCreaDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREA_DATE: fieldBuilder.buildEdmTypeField(
          'U_CreaDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uCreaUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREA_USER: fieldBuilder.buildEdmTypeField(
          'U_CreaUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDocId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DOC_ID: fieldBuilder.buildEdmTypeField('U_DocId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Cto_Toa)
      };
    }

    return this._schema;
  }
}
