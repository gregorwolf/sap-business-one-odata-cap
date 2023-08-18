/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bncadm } from './U_Bncadm';
import { U_BncadmRequestBuilder } from './U_BncadmRequestBuilder';
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
export class U_BncadmApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bncadm<DeSerializersT>, DeSerializersT>
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
  ): U_BncadmApi<DeSerializersT> {
    return new U_BncadmApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bncadm;

  requestBuilder(): U_BncadmRequestBuilder<DeSerializersT> {
    return new U_BncadmRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bncadm<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bncadm<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bncadm<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bncadm, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bncadm, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VAT_REG_NO: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VAT_REG_EX: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OBLIG_LVL: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TAX_STATE: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COM_DEC_ID: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DECL_DEL: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DECL_INV: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DECL_DEPT: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CONT_NAME: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CONT_FON: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CONT_FAX: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VALID_KEY: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DNSCE: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RET_ACCNT: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FORCE_CMP: OrderableEdmTypeField<
      U_Bncadm<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bncadm<DeSerializers>>;
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
         * Static representation of the {@link uVatRegNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VAT_REG_NO: fieldBuilder.buildEdmTypeField(
          'U_VATRegNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uVatRegEx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VAT_REG_EX: fieldBuilder.buildEdmTypeField(
          'U_VATRegEx',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uObligLvl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OBLIG_LVL: fieldBuilder.buildEdmTypeField(
          'U_ObligLvl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTaxState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TAX_STATE: fieldBuilder.buildEdmTypeField(
          'U_TaxState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uComDecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COM_DEC_ID: fieldBuilder.buildEdmTypeField(
          'U_ComDecID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDeclDel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DECL_DEL: fieldBuilder.buildEdmTypeField(
          'U_DeclDel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDeclInv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DECL_INV: fieldBuilder.buildEdmTypeField(
          'U_DeclInv',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDeclDept} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DECL_DEPT: fieldBuilder.buildEdmTypeField(
          'U_DeclDept',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uContName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CONT_NAME: fieldBuilder.buildEdmTypeField(
          'U_ContName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uContFon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CONT_FON: fieldBuilder.buildEdmTypeField(
          'U_ContFon',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uContFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CONT_FAX: fieldBuilder.buildEdmTypeField(
          'U_ContFax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uValidKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VALID_KEY: fieldBuilder.buildEdmTypeField(
          'U_ValidKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDnsce} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DNSCE: fieldBuilder.buildEdmTypeField('U_DNSCE', 'Edm.String', true),
        /**
         * Static representation of the {@link uRetAccnt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RET_ACCNT: fieldBuilder.buildEdmTypeField(
          'U_RetAccnt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uForceCmp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FORCE_CMP: fieldBuilder.buildEdmTypeField(
          'U_ForceCmp',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bncadm)
      };
    }

    return this._schema;
  }
}
