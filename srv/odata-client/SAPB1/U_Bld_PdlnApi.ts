/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bld_Pdln } from './U_Bld_Pdln';
import { U_Bld_PdlnRequestBuilder } from './U_Bld_PdlnRequestBuilder';
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
export class U_Bld_PdlnApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bld_Pdln<DeSerializersT>, DeSerializersT>
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
  ): U_Bld_PdlnApi<DeSerializersT> {
    return new U_Bld_PdlnApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bld_Pdln;

  requestBuilder(): U_Bld_PdlnRequestBuilder<DeSerializersT> {
    return new U_Bld_PdlnRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bld_Pdln<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bld_Pdln<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bld_Pdln<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bld_Pdln, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bld_Pdln, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bld_Pdln<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bld_Pdln<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LINE_ID: OrderableEdmTypeField<
      U_Bld_Pdln<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_PREF_ID: OrderableEdmTypeField<
      U_Bld_Pdln<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DOC_TYPE: OrderableEdmTypeField<
      U_Bld_Pdln<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_LAYT_ID: OrderableEdmTypeField<
      U_Bld_Pdln<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_COPIES: OrderableEdmTypeField<
      U_Bld_Pdln<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bld_Pdln<DeSerializers>>;
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
         * Static representation of the {@link uLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LINE_ID: fieldBuilder.buildEdmTypeField(
          'U_LineID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uPrefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PREF_ID: fieldBuilder.buildEdmTypeField(
          'U_PrefID',
          'Edm.Int32',
          true
        ),
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
        ALL_FIELDS: new AllFields('*', U_Bld_Pdln)
      };
    }

    return this._schema;
  }
}
