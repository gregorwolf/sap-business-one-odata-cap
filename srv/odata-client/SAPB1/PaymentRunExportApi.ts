/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentRunExport } from './PaymentRunExport';
import { PaymentRunExportRequestBuilder } from './PaymentRunExportRequestBuilder';
import { BankChargesAllocationCodesApi } from './BankChargesAllocationCodesApi';
import { PaymentRunExportLine } from './PaymentRunExportLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoOpexStatus } from './BoOpexStatus';
import { PaymentRunExportRowTypeEnum } from './PaymentRunExportRowTypeEnum';
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
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PaymentRunExportApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentRunExport<DeSerializersT>, DeSerializersT>
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
  ): PaymentRunExportApi<DeSerializersT> {
    return new PaymentRunExportApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link bankChargesAllocationCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_CHARGES_ALLOCATION_CODE: OneToOneLink<
      PaymentRunExport<DeSerializersT>,
      DeSerializersT,
      BankChargesAllocationCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BankChargesAllocationCodesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BANK_CHARGES_ALLOCATION_CODE: new OneToOneLink(
        'BankChargesAllocationCode',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PaymentRunExport;

  requestBuilder(): PaymentRunExportRequestBuilder<DeSerializersT> {
    return new PaymentRunExportRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentRunExport<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentRunExport<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PaymentRunExport<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PaymentRunExport, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymentRunExport,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABSOLUTE_ENTRY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RUN_DATE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VENDOR_NUM: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NUM: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FISCAL_YEAR: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    COUNTERY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_TAX_NUM: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_NAME: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_POSTAL_CODE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_CITY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_STREET: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_COUNTRY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_STATE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_NAME: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_ZIP: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_CITY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_STREET: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_COUNTRY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_ACCOUNT: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_CODE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_CTRL_KEY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_SWIFT_NUM: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_IBAN: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_COUNTRY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CODE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_IBAN: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_ACCOUNT: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_AMOUNT_LOCAL: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOC_CURRNECY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_AMOUNT_FORIGN: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOC_CASH_DISCOUNT: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOC_CASH_DISCOUNT_FORIGN: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOC_NUM_OFFIELD_PAID: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_RATE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WIZ_CODE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COLLECTION_AUTHORIZATION: EnumField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PAYEE_BANK_POST_OFFICE: EnumField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PAYEE_BANK_NEXT_CHECK_NUMBER: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PAYEE_BANK_HOUSE_BANK: EnumField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PAYEE_BANK_BLOCK: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_COUNTY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_STATE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_BISR: EnumField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PAYEE_BANK_USER_NUM_1: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_USER_NUM_2: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_USER_NUM_3: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_USER_NUM_4: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTRUCTION_KEY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_FORMAT: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_NAME: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ADDRESS: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      BoOpexStatus,
      true,
      true
    >;
    COMP_ISR_BILLER_ID: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ISR_BILLER_ID: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_ID_NUMBER: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_BANK_BRANCH: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BANK_BRANCH: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_E_MAIL: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_MOBILE_PHONE_NUMBER: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_FAX_NUMBER: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_DEPARTMENT: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEBIT_MEMO: EnumField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    EU_INTERNAL_TRANSFER: EnumField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FILE_PATH: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERING_PARTY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BANK_CONTROL_KEY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_TAX_NUMBER: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_KEY_CODE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYEE_REFERENCE_DETAILS: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMAT_NAME: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_DONEWITH_CHECK: EnumField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    COMPANY_BLOCK: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CITY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_COUNTY: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_STATE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_STREET: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ZIP_CODE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BANK_CHARGES: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BANK_USER_NO_1: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BANK_USER_NO_2: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BANK_USER_NO_3: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BANK_USER_NO_4: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BANK_CHARGES_ALLOCATION_CODE: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ORDER_NUM: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FREE_TEXT_1: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_TEXT_2: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_TEXT_3: OrderableEdmTypeField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROW_TYPE: EnumField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      PaymentRunExportRowTypeEnum,
      true,
      true
    >;
    PAYMENT_RUN_EXPORT_LINES: CollectionField<
      PaymentRunExport<DeSerializers>,
      DeSerializersT,
      PaymentRunExportLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bankChargesAllocationCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_CHARGES_ALLOCATION_CODE: OneToOneLink<
      PaymentRunExport<DeSerializersT>,
      DeSerializersT,
      BankChargesAllocationCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PaymentRunExport<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absoluteEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSOLUTE_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsoluteEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link runDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_DATE: fieldBuilder.buildEdmTypeField(
          'RunDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link vendorNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NUM: fieldBuilder.buildEdmTypeField(
          'VendorNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NUM: fieldBuilder.buildEdmTypeField(
          'CustomerNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'PaymentMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true),
        /**
         * Static representation of the {@link fiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'FiscalYear',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link countery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTERY: fieldBuilder.buildEdmTypeField(
          'Countery',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyTaxNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TAX_NUM: fieldBuilder.buildEdmTypeField(
          'CompanyTaxNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_NAME: fieldBuilder.buildEdmTypeField(
          'PayeeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeePostalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'PayeePostalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_CITY: fieldBuilder.buildEdmTypeField(
          'PayeeCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_STREET: fieldBuilder.buildEdmTypeField(
          'PayeeStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_COUNTRY: fieldBuilder.buildEdmTypeField(
          'PayeeCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_STATE: fieldBuilder.buildEdmTypeField(
          'PayeeState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_NAME: fieldBuilder.buildEdmTypeField(
          'PayeeBankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankZip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_ZIP: fieldBuilder.buildEdmTypeField(
          'PayeeBankZip',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_CITY: fieldBuilder.buildEdmTypeField(
          'PayeeBankCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_STREET: fieldBuilder.buildEdmTypeField(
          'PayeeBankStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_COUNTRY: fieldBuilder.buildEdmTypeField(
          'PayeeBankCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PayeeBankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_CODE: fieldBuilder.buildEdmTypeField(
          'PayeeBankCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankCtrlKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_CTRL_KEY: fieldBuilder.buildEdmTypeField(
          'PayeeBankCtrlKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankSwiftNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_SWIFT_NUM: fieldBuilder.buildEdmTypeField(
          'PayeeBankSwiftNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankIban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_IBAN: fieldBuilder.buildEdmTypeField(
          'PayeeBankIBAN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DATE: fieldBuilder.buildEdmTypeField(
          'PostingDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_COUNTRY: fieldBuilder.buildEdmTypeField(
          'BankCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODE: fieldBuilder.buildEdmTypeField(
          'BankCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankIban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_IBAN: fieldBuilder.buildEdmTypeField(
          'BankIBAN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link glAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'GLAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docAmountLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_AMOUNT_LOCAL: fieldBuilder.buildEdmTypeField(
          'DocAmountLocal',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link docCurrnecy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_CURRNECY: fieldBuilder.buildEdmTypeField(
          'DocCurrnecy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docAmountForign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_AMOUNT_FORIGN: fieldBuilder.buildEdmTypeField(
          'DocAmountForign',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link docCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_CASH_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'DocCashDiscount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link docCashDiscountForign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_CASH_DISCOUNT_FORIGN: fieldBuilder.buildEdmTypeField(
          'DocCashDiscountForign',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link docNumOffieldPaid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM_OFFIELD_PAID: fieldBuilder.buildEdmTypeField(
          'DocNumOffieldPaid',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link docRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_RATE: fieldBuilder.buildEdmTypeField('DocRate', 'Edm.Double', true),
        /**
         * Static representation of the {@link wizCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIZ_CODE: fieldBuilder.buildEdmTypeField('WizCode', 'Edm.Int32', true),
        /**
         * Static representation of the {@link collectionAuthorization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_AUTHORIZATION: fieldBuilder.buildEnumField(
          'CollectionAuthorization',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link payeeBankPostOffice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_POST_OFFICE: fieldBuilder.buildEnumField(
          'PayeeBankPostOffice',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link payeeBankNextCheckNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_NEXT_CHECK_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayeeBankNextCheckNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link payeeBankHouseBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_HOUSE_BANK: fieldBuilder.buildEnumField(
          'PayeeBankHouseBank',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link payeeBankBlock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_BLOCK: fieldBuilder.buildEdmTypeField(
          'PayeeBankBlock',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_COUNTY: fieldBuilder.buildEdmTypeField(
          'PayeeBankCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_STATE: fieldBuilder.buildEdmTypeField(
          'PayeeBankState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankBisr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_BISR: fieldBuilder.buildEnumField(
          'PayeeBankBISR',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link payeeBankUserNum1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_USER_NUM_1: fieldBuilder.buildEdmTypeField(
          'PayeeBankUserNum1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankUserNum2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_USER_NUM_2: fieldBuilder.buildEdmTypeField(
          'PayeeBankUserNum2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankUserNum3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_USER_NUM_3: fieldBuilder.buildEdmTypeField(
          'PayeeBankUserNum3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankUserNum4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_USER_NUM_4: fieldBuilder.buildEdmTypeField(
          'PayeeBankUserNum4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link instructionKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTION_KEY: fieldBuilder.buildEdmTypeField(
          'InstructionKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FORMAT: fieldBuilder.buildEdmTypeField(
          'PaymentFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'CompanyAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', BoOpexStatus, true),
        /**
         * Static representation of the {@link compIsrBillerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMP_ISR_BILLER_ID: fieldBuilder.buildEdmTypeField(
          'CompIsrBillerID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorIsrBillerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ISR_BILLER_ID: fieldBuilder.buildEdmTypeField(
          'VendorIsrBillerID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalIdNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_ID_NUMBER: fieldBuilder.buildEdmTypeField(
          'AdditionalIdNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeBankBranch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_BANK_BRANCH: fieldBuilder.buildEdmTypeField(
          'PayeeBankBranch',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentBankBranch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BANK_BRANCH: fieldBuilder.buildEdmTypeField(
          'PaymentBankBranch',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'UserName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userEMail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_E_MAIL: fieldBuilder.buildEdmTypeField(
          'UserEMail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userMobilePhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_MOBILE_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'UserMobilePhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userFaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'UserFaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userDepartment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'UserDepartment',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link debitMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_MEMO: fieldBuilder.buildEnumField('DebitMemo', BoYesNoEnum, true),
        /**
         * Static representation of the {@link euInternalTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_INTERNAL_TRANSFER: fieldBuilder.buildEnumField(
          'EUInternalTransfer',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link filePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_PATH: fieldBuilder.buildEdmTypeField(
          'FilePath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderingParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERING_PARTY: fieldBuilder.buildEdmTypeField(
          'OrderingParty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentBankControlKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BANK_CONTROL_KEY: fieldBuilder.buildEdmTypeField(
          'PaymentBankControlKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeTaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_TAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayeeTaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentKeyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_KEY_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentKeyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payeeReferenceDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYEE_REFERENCE_DETAILS: fieldBuilder.buildEdmTypeField(
          'PayeeReferenceDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formatName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT_NAME: fieldBuilder.buildEdmTypeField(
          'FormatName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentDonewithCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DONEWITH_CHECK: fieldBuilder.buildEnumField(
          'PaymentDonewithCheck',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link companyBlock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_BLOCK: fieldBuilder.buildEdmTypeField(
          'CompanyBlock',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CITY: fieldBuilder.buildEdmTypeField(
          'CompanyCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_COUNTY: fieldBuilder.buildEdmTypeField(
          'CompanyCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_STATE: fieldBuilder.buildEdmTypeField(
          'CompanyState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_STREET: fieldBuilder.buildEdmTypeField(
          'CompanyStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentBankCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BANK_CHARGES: fieldBuilder.buildEdmTypeField(
          'PaymentBankCharges',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentBankUserNo1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BANK_USER_NO_1: fieldBuilder.buildEdmTypeField(
          'PaymentBankUserNo1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentBankUserNo2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BANK_USER_NO_2: fieldBuilder.buildEdmTypeField(
          'PaymentBankUserNo2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentBankUserNo3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BANK_USER_NO_3: fieldBuilder.buildEdmTypeField(
          'PaymentBankUserNo3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentBankUserNo4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BANK_USER_NO_4: fieldBuilder.buildEdmTypeField(
          'PaymentBankUserNo4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentBankChargesAllocationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BANK_CHARGES_ALLOCATION_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentBankChargesAllocationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentOrderNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ORDER_NUM: fieldBuilder.buildEdmTypeField(
          'PaymentOrderNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link freeText1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_1: fieldBuilder.buildEdmTypeField(
          'FreeText1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeText2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_2: fieldBuilder.buildEdmTypeField(
          'FreeText2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeText3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_3: fieldBuilder.buildEdmTypeField(
          'FreeText3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rowType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_TYPE: fieldBuilder.buildEnumField(
          'RowType',
          PaymentRunExportRowTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link paymentRunExportLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_RUN_EXPORT_LINES: fieldBuilder.buildCollectionField(
          'PaymentRunExport_Lines',
          PaymentRunExportLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentRunExport)
      };
    }

    return this._schema;
  }
}
