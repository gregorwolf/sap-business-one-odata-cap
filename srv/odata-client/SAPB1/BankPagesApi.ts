/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankPages } from './BankPages';
import { BankPagesRequestBuilder } from './BankPagesRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { UsersApi } from './UsersApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBpsDocTypes } from './BoBpsDocTypes';
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
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BankPagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankPages<DeSerializersT>, DeSerializersT>
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
  ): BankPagesApi<DeSerializersT> {
    return new BankPagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      BankPages<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      BankPages<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      BankPages<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[0]),
      USER: new OneToOneLink('User', this, linkedApis[1]),
      BUSINESS_PARTNER: new OneToOneLink('BusinessPartner', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = BankPages;

  requestBuilder(): BankPagesRequestBuilder<DeSerializersT> {
    return new BankPagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankPages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BankPages<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BankPages<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BankPages, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BankPages, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_CODE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNT_NAME: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MEMO: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BANK_MATCH: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DATA_SOURCE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_SIGNATURE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_CODE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_NAME: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_NUMBER: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CREATED: EnumField<
      BankPages<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VISUAL_ORDER: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_NUMBER_TYPE: EnumField<
      BankPages<DeSerializers>,
      DeSerializersT,
      BoBpsDocTypes,
      true,
      true
    >;
    PAYMENT_REFERENCE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_NUMBER_EX: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIC_SWIFT_CODE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_DOC_NR: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BP_P_DATE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_BP_T_DATE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_BP_C_BALA: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_BP_N_BALA: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_BP_G_LACC: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_STATU: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_EX_DOC: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BP_PAY_DO: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BP_VAT: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_VAT_A: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_BP_PC: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_PRJ: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_DMCM: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_F_OUT: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_BP_F_IN: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_BP_F_CURR: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BP_F_RATE: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_BP_FVAT: OrderableEdmTypeField<
      BankPages<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      BankPages<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      BankPages<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      BankPages<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankPages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'AccountCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField(
          'Sequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link accountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'AccountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE: fieldBuilder.buildEdmTypeField(
          'Reference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link memo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEMO: fieldBuilder.buildEdmTypeField('Memo', 'Edm.String', true),
        /**
         * Static representation of the {@link debitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DebitAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link creditAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link bankMatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_MATCH: fieldBuilder.buildEdmTypeField(
          'BankMatch',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link dataSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_SOURCE: fieldBuilder.buildEdmTypeField(
          'DataSource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGNATURE: fieldBuilder.buildEdmTypeField(
          'UserSignature',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'ExternalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_CODE: fieldBuilder.buildEdmTypeField(
          'CardCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NAME: fieldBuilder.buildEdmTypeField(
          'CardName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'StatementNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link invoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CREATED: fieldBuilder.buildEnumField(
          'PaymentCreated',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link visualOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VISUAL_ORDER: fieldBuilder.buildEdmTypeField(
          'VisualOrder',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link docNumberType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUMBER_TYPE: fieldBuilder.buildEnumField(
          'DocNumberType',
          BoBpsDocTypes,
          true
        ),
        /**
         * Static representation of the {@link paymentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'PaymentReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceNumberEx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NUMBER_EX: fieldBuilder.buildEdmTypeField(
          'InvoiceNumberEx',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bicSwiftCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIC_SWIFT_CODE: fieldBuilder.buildEdmTypeField(
          'BICSwiftCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpDocNr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_DOC_NR: fieldBuilder.buildEdmTypeField(
          'U_BP_DocNr',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBpPDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_P_DATE: fieldBuilder.buildEdmTypeField(
          'U_BP_PDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uBpTDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_T_DATE: fieldBuilder.buildEdmTypeField(
          'U_BP_TDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uBpCBala} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_C_BALA: fieldBuilder.buildEdmTypeField(
          'U_BP_CBala',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uBpNBala} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_N_BALA: fieldBuilder.buildEdmTypeField(
          'U_BP_NBala',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uBpGLacc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_G_LACC: fieldBuilder.buildEdmTypeField(
          'U_BP_GLacc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpStatu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_STATU: fieldBuilder.buildEdmTypeField(
          'U_BP_Statu',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpExDoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_EX_DOC: fieldBuilder.buildEdmTypeField(
          'U_BP_ExDoc',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBpPayDo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_PAY_DO: fieldBuilder.buildEdmTypeField(
          'U_BP_PayDo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBpVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_VAT: fieldBuilder.buildEdmTypeField(
          'U_BP_VAT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpVatA} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_VAT_A: fieldBuilder.buildEdmTypeField(
          'U_BP_VAT_A',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uBpPc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_PC: fieldBuilder.buildEdmTypeField('U_BP_PC', 'Edm.String', true),
        /**
         * Static representation of the {@link uBpPrj} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_PRJ: fieldBuilder.buildEdmTypeField(
          'U_BP_Prj',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpDmcm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_DMCM: fieldBuilder.buildEdmTypeField(
          'U_BP_DMCM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpFOut} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_F_OUT: fieldBuilder.buildEdmTypeField(
          'U_BP_FOut',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uBpFIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_F_IN: fieldBuilder.buildEdmTypeField(
          'U_BP_FIn',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uBpFCurr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_F_CURR: fieldBuilder.buildEdmTypeField(
          'U_BP_FCurr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpFRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_F_RATE: fieldBuilder.buildEdmTypeField(
          'U_BP_FRate',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uBpFvat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_FVAT: fieldBuilder.buildEdmTypeField(
          'U_BP_FVAT',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankPages)
      };
    }

    return this._schema;
  }
}
