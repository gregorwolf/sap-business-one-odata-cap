/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Odoc2 } from './U_Ba_Odoc2';
import { U_Ba_Odoc2RequestBuilder } from './U_Ba_Odoc2RequestBuilder';
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
export class U_Ba_Odoc2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Odoc2<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_Odoc2Api<DeSerializersT> {
    return new U_Ba_Odoc2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Odoc2;

  requestBuilder(): U_Ba_Odoc2RequestBuilder<DeSerializersT> {
    return new U_Ba_Odoc2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Odoc2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Odoc2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Odoc2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Odoc2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Odoc2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DOC_NUM: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_POS_NUM: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_CANCELED: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_POS_TYP: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ACCOUNT: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FIS_YEAR: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_POST_PRD: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_TRNS_ID: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_POST_DATE: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_PRICE: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_CURRENCY: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TAX_KEY: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TAX_AMT: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_REMARK: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DEBIT: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_CREDIT: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_CURR_CODE: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DEBIT_LC: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_CREDIT_LC: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_DEBIT_SC: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_CREDIT_SC: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_ACCT_REVN: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_AR_ID: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_QTY: OrderableEdmTypeField<
      U_Ba_Odoc2<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Odoc2<DeSerializers>>;
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
         * Static representation of the {@link uDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'U_DocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPosNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POS_NUM: fieldBuilder.buildEdmTypeField(
          'U_PosNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uCanceled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CANCELED: fieldBuilder.buildEdmTypeField(
          'U_Canceled',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPosTyp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POS_TYP: fieldBuilder.buildEdmTypeField(
          'U_PosTyp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'U_Account',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFisYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FIS_YEAR: fieldBuilder.buildEdmTypeField(
          'U_FisYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPostPrd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POST_PRD: fieldBuilder.buildEdmTypeField(
          'U_PostPrd',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uTrnsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TRNS_ID: fieldBuilder.buildEdmTypeField(
          'U_TrnsID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uPostDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POST_DATE: fieldBuilder.buildEdmTypeField(
          'U_PostDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PRICE: fieldBuilder.buildEdmTypeField('U_Price', 'Edm.Double', true),
        /**
         * Static representation of the {@link uCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CURRENCY: fieldBuilder.buildEdmTypeField(
          'U_Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTaxKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TAX_KEY: fieldBuilder.buildEdmTypeField(
          'U_TaxKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTaxAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TAX_AMT: fieldBuilder.buildEdmTypeField(
          'U_TaxAmt',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uRemark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REMARK: fieldBuilder.buildEdmTypeField(
          'U_Remark',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEBIT: fieldBuilder.buildEdmTypeField('U_Debit', 'Edm.Double', true),
        /**
         * Static representation of the {@link uCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREDIT: fieldBuilder.buildEdmTypeField(
          'U_Credit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uCurrCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CURR_CODE: fieldBuilder.buildEdmTypeField(
          'U_CurrCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDebitLc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEBIT_LC: fieldBuilder.buildEdmTypeField(
          'U_DebitLC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uCreditLc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREDIT_LC: fieldBuilder.buildEdmTypeField(
          'U_CreditLC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uDebitSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DEBIT_SC: fieldBuilder.buildEdmTypeField(
          'U_DebitSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uCreditSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_CREDIT_SC: fieldBuilder.buildEdmTypeField(
          'U_CreditSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uAcctRevn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACCT_REVN: fieldBuilder.buildEdmTypeField(
          'U_AcctRevn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDprArId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_AR_ID: fieldBuilder.buildEdmTypeField(
          'U_DprArID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_QTY: fieldBuilder.buildEdmTypeField('U_Qty', 'Edm.Double', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Odoc2)
      };
    }

    return this._schema;
  }
}
