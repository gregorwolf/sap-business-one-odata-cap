/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bld_Prnd } from './U_Bld_Prnd';
import { U_Bld_PrndRequestBuilder } from './U_Bld_PrndRequestBuilder';
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
export class U_Bld_PrndApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bld_Prnd<DeSerializersT>, DeSerializersT>
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
  ): U_Bld_PrndApi<DeSerializersT> {
    return new U_Bld_PrndApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bld_Prnd;

  requestBuilder(): U_Bld_PrndRequestBuilder<DeSerializersT> {
    return new U_Bld_PrndRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bld_Prnd<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bld_Prnd<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bld_Prnd<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bld_Prnd, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bld_Prnd, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bld_Prnd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bld_Prnd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ID: OrderableEdmTypeField<
      U_Bld_Prnd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_OBJ_TYPE: OrderableEdmTypeField<
      U_Bld_Prnd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_OBJ_ID: OrderableEdmTypeField<
      U_Bld_Prnd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DOC_TYPE: OrderableEdmTypeField<
      U_Bld_Prnd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_LAYT_ID: OrderableEdmTypeField<
      U_Bld_Prnd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_COPIES: OrderableEdmTypeField<
      U_Bld_Prnd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bld_Prnd<DeSerializers>>;
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
         * Static representation of the {@link uId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ID: fieldBuilder.buildEdmTypeField('U_ID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uObjType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OBJ_TYPE: fieldBuilder.buildEdmTypeField(
          'U_ObjType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uObjId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OBJ_ID: fieldBuilder.buildEdmTypeField('U_ObjID', 'Edm.String', true),
        /**
         * Static representation of the {@link uDocType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DOC_TYPE: fieldBuilder.buildEdmTypeField(
          'U_DocType',
          'Edm.Int32',
          true
        ),
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
         * Static representation of the {@link uCopies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COPIES: fieldBuilder.buildEdmTypeField('U_Copies', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bld_Prnd)
      };
    }

    return this._schema;
  }
}
