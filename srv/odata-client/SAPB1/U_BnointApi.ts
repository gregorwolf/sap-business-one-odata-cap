/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bnoint } from './U_Bnoint';
import { U_BnointRequestBuilder } from './U_BnointRequestBuilder';
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
export class U_BnointApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bnoint<DeSerializersT>, DeSerializersT>
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
  ): U_BnointApi<DeSerializersT> {
    return new U_BnointApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bnoint;

  requestBuilder(): U_BnointRequestBuilder<DeSerializersT> {
    return new U_BnointRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bnoint<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bnoint<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bnoint<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bnoint, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bnoint, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DECL_YEAR: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DECL_MON: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_IM_EX_IND: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COUNTRY: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VAT_REG_NO: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VAT_REG_EX: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DECL_NUM: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DEC_NO_EX: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_HEADER_ID: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_COMP_NAME: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COMP_ADDR: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COMP_IND: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DECL_STAT: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DECL_DEPT: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_MAIN_CURR: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OBLIG_LVL: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TAX_STATE: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CUST_OFFC: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CUST_ID: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CUST_SER: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COM_DEC_ID: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_I_CTRL_REF: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CONT_NAME: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CONT_FON: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CONT_FAX: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ADDR_1_3_P: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ADDR_2_3_P: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ADDR_3_3_P: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ADDR_4_3_P: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CONT_3_P: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FON_3_P: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FAX_3_P: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FREE_TXT_1: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FREE_TXT_2: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FREE_TXT_3: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FREE_TXT_4: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FREE_TXT_5: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VALID_KEY: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DNSCE: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RELEASE: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CRT_USER: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_CRT_TIME: OrderableEdmTypeField<
      U_Bnoint<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bnoint<DeSerializers>>;
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
         * Static representation of the {@link uDeclYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DECL_YEAR: fieldBuilder.buildEdmTypeField(
          'U_DeclYear',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uDeclMon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DECL_MON: fieldBuilder.buildEdmTypeField(
          'U_DeclMon',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uImExInd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_IM_EX_IND: fieldBuilder.buildEdmTypeField(
          'U_ImExInd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COUNTRY: fieldBuilder.buildEdmTypeField(
          'U_Country',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link uDeclNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DECL_NUM: fieldBuilder.buildEdmTypeField(
          'U_DeclNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDecNoEx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEC_NO_EX: fieldBuilder.buildEdmTypeField(
          'U_DecNoEx',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uHeaderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_HEADER_ID: fieldBuilder.buildEdmTypeField(
          'U_HeaderID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uCompName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COMP_NAME: fieldBuilder.buildEdmTypeField(
          'U_CompName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCompAddr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COMP_ADDR: fieldBuilder.buildEdmTypeField(
          'U_CompAddr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCompInd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COMP_IND: fieldBuilder.buildEdmTypeField(
          'U_CompInd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDeclStat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DECL_STAT: fieldBuilder.buildEdmTypeField(
          'U_DeclStat',
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
         * Static representation of the {@link uMainCurr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MAIN_CURR: fieldBuilder.buildEdmTypeField(
          'U_MainCurr',
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
         * Static representation of the {@link uCustOffc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CUST_OFFC: fieldBuilder.buildEdmTypeField(
          'U_CustOffc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCustId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CUST_ID: fieldBuilder.buildEdmTypeField(
          'U_CustID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCustSer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CUST_SER: fieldBuilder.buildEdmTypeField(
          'U_CustSer',
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
         * Static representation of the {@link uICtrlRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_I_CTRL_REF: fieldBuilder.buildEdmTypeField(
          'U_ICtrlRef',
          'Edm.String',
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
         * Static representation of the {@link uAddr13P} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ADDR_1_3_P: fieldBuilder.buildEdmTypeField(
          'U_Addr1_3p',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAddr23P} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ADDR_2_3_P: fieldBuilder.buildEdmTypeField(
          'U_Addr2_3p',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAddr33P} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ADDR_3_3_P: fieldBuilder.buildEdmTypeField(
          'U_Addr3_3p',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAddr43P} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ADDR_4_3_P: fieldBuilder.buildEdmTypeField(
          'U_Addr4_3p',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uCont3P} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CONT_3_P: fieldBuilder.buildEdmTypeField(
          'U_Cont_3p',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFon3P} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FON_3_P: fieldBuilder.buildEdmTypeField(
          'U_Fon_3p',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFax3P} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FAX_3_P: fieldBuilder.buildEdmTypeField(
          'U_Fax_3p',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFreeTxt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FREE_TXT_1: fieldBuilder.buildEdmTypeField(
          'U_FreeTxt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFreeTxt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FREE_TXT_2: fieldBuilder.buildEdmTypeField(
          'U_FreeTxt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFreeTxt3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FREE_TXT_3: fieldBuilder.buildEdmTypeField(
          'U_FreeTxt3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFreeTxt4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FREE_TXT_4: fieldBuilder.buildEdmTypeField(
          'U_FreeTxt4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFreeTxt5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FREE_TXT_5: fieldBuilder.buildEdmTypeField(
          'U_FreeTxt5',
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
         * Static representation of the {@link uRelease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RELEASE: fieldBuilder.buildEdmTypeField(
          'U_Release',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bnoint)
      };
    }

    return this._schema;
  }
}
