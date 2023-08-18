/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bld_Lytd } from './U_Bld_Lytd';
import { U_Bld_LytdRequestBuilder } from './U_Bld_LytdRequestBuilder';
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
export class U_Bld_LytdApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bld_Lytd<DeSerializersT>, DeSerializersT>
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
  ): U_Bld_LytdApi<DeSerializersT> {
    return new U_Bld_LytdApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bld_Lytd;

  requestBuilder(): U_Bld_LytdRequestBuilder<DeSerializersT> {
    return new U_Bld_LytdRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bld_Lytd<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bld_Lytd<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bld_Lytd<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bld_Lytd, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bld_Lytd, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ID: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_L_NAME: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_W_PROTCT: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DOC_TYPE: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_QRY_CAT: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_QRY_ID: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_IS_DEFLT: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COPIES: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_USER_ID: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_LL_VER: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CNTRY: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_INT_VER: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_FORM_ID: OrderableEdmTypeField<
      U_Bld_Lytd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bld_Lytd<DeSerializers>>;
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
         * Static representation of the {@link uLName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_L_NAME: fieldBuilder.buildEdmTypeField('U_LName', 'Edm.String', true),
        /**
         * Static representation of the {@link uWProtct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_W_PROTCT: fieldBuilder.buildEdmTypeField(
          'U_WProtct',
          'Edm.String',
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
         * Static representation of the {@link uQryCat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_QRY_CAT: fieldBuilder.buildEdmTypeField(
          'U_QryCat',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uQryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_QRY_ID: fieldBuilder.buildEdmTypeField('U_QryID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uIsDeflt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_IS_DEFLT: fieldBuilder.buildEdmTypeField(
          'U_IsDeflt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCopies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COPIES: fieldBuilder.buildEdmTypeField('U_Copies', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USER_ID: fieldBuilder.buildEdmTypeField(
          'U_UserId',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uLlVer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LL_VER: fieldBuilder.buildEdmTypeField('U_LLVer', 'Edm.String', true),
        /**
         * Static representation of the {@link uCntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CNTRY: fieldBuilder.buildEdmTypeField('U_Cntry', 'Edm.String', true),
        /**
         * Static representation of the {@link uIntVer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_INT_VER: fieldBuilder.buildEdmTypeField(
          'U_IntVer',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uFormId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FORM_ID: fieldBuilder.buildEdmTypeField(
          'U_FormID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bld_Lytd)
      };
    }

    return this._schema;
  }
}
