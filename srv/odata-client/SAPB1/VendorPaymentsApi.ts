/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorPayments } from './VendorPayments';
import { VendorPaymentsRequestBuilder } from './VendorPaymentsRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { ProjectsApi } from './ProjectsApi';
import { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { CountriesApi } from './CountriesApi';
import { VatGroupsApi } from './VatGroupsApi';
import { TransactionCodesApi } from './TransactionCodesApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { BlanketAgreementsApi } from './BlanketAgreementsApi';
import { Attachments2Api } from './Attachments2Api';
import { PaymentCheck } from './PaymentCheck';
import { PaymentInvoice } from './PaymentInvoice';
import { PaymentCreditCard } from './PaymentCreditCard';
import { PaymentAccount } from './PaymentAccount';
import { PaymentDocumentReferences } from './PaymentDocumentReferences';
import { BillOfExchange, BillOfExchangeField } from './BillOfExchange';
import { WithholdingTaxCertificatesData } from './WithholdingTaxCertificatesData';
import { ElectronicProtocol } from './ElectronicProtocol';
import { CashFlowAssignment } from './CashFlowAssignment';
import { PaymentsApprovalRequest } from './PaymentsApprovalRequest';
import { WithholdingTaxDataWtx } from './WithholdingTaxDataWtx';
import { BoRcptTypes } from './BoRcptTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBoeStatus } from './BoBoeStatus';
import { BoPaymentPriorities } from './BoPaymentPriorities';
import { BoOrctPaymentTypeEnum } from './BoOrctPaymentTypeEnum';
import { BoPaymentsObjectType } from './BoPaymentsObjectType';
import { PaymentsAuthorizationStatusEnum } from './PaymentsAuthorizationStatusEnum';
import { ElecCommStatusEnum } from './ElecCommStatusEnum';
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
export class VendorPaymentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorPayments<DeSerializersT>, DeSerializersT>
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
  ): VendorPaymentsApi<DeSerializersT> {
    return new VendorPaymentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link withholdingTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vatGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUP: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionCode2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_CODE_2: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      TransactionCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link blanketAgreement2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENT_2: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      WithholdingTaxCodesApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      VatGroupsApi<DeSerializersT>,
      TransactionCodesApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>,
      BlanketAgreementsApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[0]),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[1]),
      PROJECT: new OneToOneLink('Project', this, linkedApis[2]),
      WITHHOLDING_TAX_CODE: new OneToOneLink(
        'WithholdingTaxCode',
        this,
        linkedApis[3]
      ),
      COUNTRY: new OneToOneLink('Country', this, linkedApis[4]),
      VAT_GROUP: new OneToOneLink('VatGroup', this, linkedApis[5]),
      TRANSACTION_CODE_2: new OneToOneLink(
        'TransactionCode2',
        this,
        linkedApis[6]
      ),
      WAREHOUSE_LOCATION: new OneToOneLink(
        'WarehouseLocation',
        this,
        linkedApis[7]
      ),
      BUSINESS_PLACE: new OneToOneLink('BusinessPlace', this, linkedApis[8]),
      BLANKET_AGREEMENT_2: new OneToOneLink(
        'BlanketAgreement2',
        this,
        linkedApis[9]
      ),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[10])
    };
    return this;
  }

  entityConstructor = VendorPayments;

  requestBuilder(): VendorPaymentsRequestBuilder<DeSerializersT> {
    return new VendorPaymentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorPayments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorPayments<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VendorPayments<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VendorPayments, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VendorPayments, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_NUM: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_TYPE: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoRcptTypes,
      true,
      true
    >;
    HAND_WRITTEN: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PRINTED: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DOC_DATE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CARD_CODE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_NAME: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_ACCOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_CURRENCY: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_SUM: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CHECK_ACCOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_ACCOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_SUM: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TRANSFER_DATE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TRANSFER_REFERENCE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCAL_CURRENCY: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DOC_RATE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    REFERENCE_1: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_2: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTER_REFERENCE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_REMARKS: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPLIT_TRANSACTION: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CONTACT_PERSON_CODE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    APPLY_VAT: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TAX_DATE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BANK_CODE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PROJECT_CODE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_IS_LOCAL: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DEDUCTION_PERCENT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DEDUCTION_SUM: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CASH_SUM_FC: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CASH_SUM_SYS: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BOE_ACCOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_EXCHANGE_AMOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BILLOF_EXCHANGE_STATUS: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoBoeStatus,
      true,
      true
    >;
    BILL_OF_EXCHANGE_AMOUNT_FC: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BILL_OF_EXCHANGE_AMOUNT_SC: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BILL_OF_EXCHANGE_AGENT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WT_CODE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WT_AMOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_AMOUNT_FC: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_AMOUNT_SC: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_ACCOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WT_TAXABLE_AMOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PROFORMA: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PAY_TO_BANK_CODE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_TO_BANK_BRANCH: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_TO_BANK_ACCOUNT_NO: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_TO_CODE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_TO_BANK_COUNTRY: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PAY_TO_BANK: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DOC_ENTRY: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAYMENT_PRIORITY: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoPaymentPriorities,
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CHARGE_AMOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BANK_CHARGE_AMOUNT_IN_FC: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BANK_CHARGE_AMOUNT_IN_SC: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    UNDER_OVERPAYMENTDIFFERENCE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    UNDER_OVERPAYMENTDIFF_SC: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_BASE_SUM: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_BASE_SUM_FC: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_BASE_SUM_SC: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    VAT_DATE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TYPE: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoOrctPaymentTypeEnum,
      true,
      true
    >;
    TRANSFER_REAL_AMOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOC_OBJECT_CODE: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoPaymentsObjectType,
      true,
      true
    >;
    DOC_TYPTE: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoRcptTypes,
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LOCATION_CODE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CANCELLED: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CONTROL_ACCOUNT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDER_OVERPAYMENTDIFF_FC: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    AUTHORIZATION_STATUS: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      PaymentsAuthorizationStatusEnum,
      true,
      true
    >;
    BPLID: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BPL_NAME: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_REG_NUM: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLANKET_AGREEMENT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PAYMENT_BY_WT_CERTIF: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CIG: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CUP: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SIGNATURE_INPUT_MESSAGE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE_DIGEST: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFICATION_NUMBER: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIVATE_KEY_VERSION: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    E_DOC_EXPORT_FORMAT: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ELEC_COMM_STATUS: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      ElecCommStatusEnum,
      true,
      true
    >;
    ELEC_COMM_MESSAGE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPLIT_VENDOR_CREDIT_ROW: EnumField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    U_BP_DOC_NR: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BP_SEQUE: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BP_CONFD: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_UNKLAR: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TS_FORM: OrderableEdmTypeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PAYMENT_CHECKS: CollectionField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      PaymentCheck,
      true,
      true
    >;
    PAYMENT_INVOICES: CollectionField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      PaymentInvoice,
      true,
      true
    >;
    PAYMENT_CREDIT_CARDS: CollectionField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      PaymentCreditCard,
      true,
      true
    >;
    PAYMENT_ACCOUNTS: CollectionField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      PaymentAccount,
      true,
      true
    >;
    PAYMENT_DOCUMENT_REFERENCES_COLLECTION: CollectionField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      PaymentDocumentReferences,
      true,
      true
    >;
    BILL_OF_EXCHANGE: BillOfExchangeField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    WITHHOLDING_TAX_CERTIFICATES_COLLECTION: CollectionField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      WithholdingTaxCertificatesData,
      true,
      true
    >;
    ELECTRONIC_PROTOCOLS: CollectionField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      ElectronicProtocol,
      true,
      true
    >;
    CASH_FLOW_ASSIGNMENTS: CollectionField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      CashFlowAssignment,
      true,
      true
    >;
    PAYMENTS_APPROVAL_REQUESTS: CollectionField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      PaymentsApprovalRequest,
      true,
      true
    >;
    WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<
      VendorPayments<DeSerializers>,
      DeSerializersT,
      WithholdingTaxDataWtx,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link withholdingTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vatGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUP: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionCode2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_CODE_2: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      TransactionCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link blanketAgreement2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENT_2: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      VendorPayments<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorPayments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true),
        /**
         * Static representation of the {@link docType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE: fieldBuilder.buildEnumField('DocType', BoRcptTypes, true),
        /**
         * Static representation of the {@link handWritten} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAND_WRITTEN: fieldBuilder.buildEnumField(
          'HandWritten',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link printed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTED: fieldBuilder.buildEnumField('Printed', BoYesNoEnum, true),
        /**
         * Static representation of the {@link docDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_DATE: fieldBuilder.buildEdmTypeField(
          'DocDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
        /**
         * Static representation of the {@link cashAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CashAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_CURRENCY: fieldBuilder.buildEdmTypeField(
          'DocCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashSum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_SUM: fieldBuilder.buildEdmTypeField('CashSum', 'Edm.Double', true),
        /**
         * Static representation of the {@link checkAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CheckAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'TransferAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferSum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_SUM: fieldBuilder.buildEdmTypeField(
          'TransferSum',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link transferDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_DATE: fieldBuilder.buildEdmTypeField(
          'TransferDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link transferReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'TransferReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link localCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCAL_CURRENCY: fieldBuilder.buildEnumField(
          'LocalCurrency',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link docRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_RATE: fieldBuilder.buildEdmTypeField('DocRate', 'Edm.Double', true),
        /**
         * Static representation of the {@link reference1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_1: fieldBuilder.buildEdmTypeField(
          'Reference1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reference2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_2: fieldBuilder.buildEdmTypeField(
          'Reference2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link counterReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'CounterReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link journalRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_REMARKS: fieldBuilder.buildEdmTypeField(
          'JournalRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link splitTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_TRANSACTION: fieldBuilder.buildEnumField(
          'SplitTransaction',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link contactPersonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_CODE: fieldBuilder.buildEdmTypeField(
          'ContactPersonCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link applyVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_VAT: fieldBuilder.buildEnumField('ApplyVAT', BoYesNoEnum, true),
        /**
         * Static representation of the {@link taxDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DATE: fieldBuilder.buildEdmTypeField(
          'TaxDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
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
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENT: fieldBuilder.buildEdmTypeField(
          'DiscountPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link projectCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CODE: fieldBuilder.buildEdmTypeField(
          'ProjectCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyIsLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_IS_LOCAL: fieldBuilder.buildEnumField(
          'CurrencyIsLocal',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link deductionPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_PERCENT: fieldBuilder.buildEdmTypeField(
          'DeductionPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link deductionSum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_SUM: fieldBuilder.buildEdmTypeField(
          'DeductionSum',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link cashSumFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_SUM_FC: fieldBuilder.buildEdmTypeField(
          'CashSumFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link cashSumSys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_SUM_SYS: fieldBuilder.buildEdmTypeField(
          'CashSumSys',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link boeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BoeAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfExchangeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BillOfExchangeAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link billofExchangeStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLOF_EXCHANGE_STATUS: fieldBuilder.buildEnumField(
          'BillofExchangeStatus',
          BoBoeStatus,
          true
        ),
        /**
         * Static representation of the {@link billOfExchangeAmountFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_AMOUNT_FC: fieldBuilder.buildEdmTypeField(
          'BillOfExchangeAmountFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link billOfExchangeAmountSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_AMOUNT_SC: fieldBuilder.buildEdmTypeField(
          'BillOfExchangeAmountSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link billOfExchangeAgent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_AGENT: fieldBuilder.buildEdmTypeField(
          'BillOfExchangeAgent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wtCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_CODE: fieldBuilder.buildEdmTypeField('WTCode', 'Edm.String', true),
        /**
         * Static representation of the {@link wtAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'WTAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtAmountFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_AMOUNT_FC: fieldBuilder.buildEdmTypeField(
          'WTAmountFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtAmountSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_AMOUNT_SC: fieldBuilder.buildEdmTypeField(
          'WTAmountSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WTAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wtTaxableAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_TAXABLE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'WTTaxableAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link proforma} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFORMA: fieldBuilder.buildEnumField('Proforma', BoYesNoEnum, true),
        /**
         * Static representation of the {@link payToBankCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_TO_BANK_CODE: fieldBuilder.buildEdmTypeField(
          'PayToBankCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payToBankBranch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_TO_BANK_BRANCH: fieldBuilder.buildEdmTypeField(
          'PayToBankBranch',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payToBankAccountNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_TO_BANK_ACCOUNT_NO: fieldBuilder.buildEdmTypeField(
          'PayToBankAccountNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payToCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_TO_CODE: fieldBuilder.buildEdmTypeField(
          'PayToCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payToBankCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_TO_BANK_COUNTRY: fieldBuilder.buildEdmTypeField(
          'PayToBankCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPayToBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PAY_TO_BANK: fieldBuilder.buildEnumField(
          'IsPayToBank',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link paymentPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_PRIORITY: fieldBuilder.buildEnumField(
          'PaymentPriority',
          BoPaymentPriorities,
          true
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BankChargeAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link bankChargeAmountInFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CHARGE_AMOUNT_IN_FC: fieldBuilder.buildEdmTypeField(
          'BankChargeAmountInFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link bankChargeAmountInSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CHARGE_AMOUNT_IN_SC: fieldBuilder.buildEdmTypeField(
          'BankChargeAmountInSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link underOverpaymentdifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDER_OVERPAYMENTDIFFERENCE: fieldBuilder.buildEdmTypeField(
          'UnderOverpaymentdifference',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link underOverpaymentdiffSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDER_OVERPAYMENTDIFF_SC: fieldBuilder.buildEdmTypeField(
          'UnderOverpaymentdiffSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtBaseSum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_BASE_SUM: fieldBuilder.buildEdmTypeField(
          'WtBaseSum',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtBaseSumFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_BASE_SUM_FC: fieldBuilder.buildEdmTypeField(
          'WtBaseSumFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtBaseSumSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_BASE_SUM_SC: fieldBuilder.buildEdmTypeField(
          'WtBaseSumSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link vatDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DATE: fieldBuilder.buildEdmTypeField(
          'VatDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'PaymentType',
          BoOrctPaymentTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link transferRealAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_REAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransferRealAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link docObjectCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_OBJECT_CODE: fieldBuilder.buildEnumField(
          'DocObjectCode',
          BoPaymentsObjectType,
          true
        ),
        /**
         * Static representation of the {@link docTypte} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPTE: fieldBuilder.buildEnumField('DocTypte', BoRcptTypes, true),
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
         * Static representation of the {@link locationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_CODE: fieldBuilder.buildEdmTypeField(
          'LocationCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link cancelled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLED: fieldBuilder.buildEnumField('Cancelled', BoYesNoEnum, true),
        /**
         * Static representation of the {@link controlAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ControlAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link underOverpaymentdiffFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDER_OVERPAYMENTDIFF_FC: fieldBuilder.buildEdmTypeField(
          'UnderOverpaymentdiffFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link authorizationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_STATUS: fieldBuilder.buildEnumField(
          'AuthorizationStatus',
          PaymentsAuthorizationStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link bplid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPLID: fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link bplName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPL_NAME: fieldBuilder.buildEdmTypeField('BPLName', 'Edm.String', true),
        /**
         * Static representation of the {@link vatRegNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_REG_NUM: fieldBuilder.buildEdmTypeField(
          'VATRegNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blanketAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLANKET_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'BlanketAgreement',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link paymentByWtCertif} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BY_WT_CERTIF: fieldBuilder.buildEnumField(
          'PaymentByWTCertif',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link cig} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIG: fieldBuilder.buildEdmTypeField('Cig', 'Edm.Int32', true),
        /**
         * Static representation of the {@link cup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUP: fieldBuilder.buildEdmTypeField('Cup', 'Edm.Int32', true),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link signatureInputMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_INPUT_MESSAGE: fieldBuilder.buildEdmTypeField(
          'SignatureInputMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signatureDigest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNATURE_DIGEST: fieldBuilder.buildEdmTypeField(
          'SignatureDigest',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link certificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CertificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link privateKeyVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIVATE_KEY_VERSION: fieldBuilder.buildEdmTypeField(
          'PrivateKeyVersion',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link eDocExportFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_DOC_EXPORT_FORMAT: fieldBuilder.buildEdmTypeField(
          'EDocExportFormat',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link elecCommStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELEC_COMM_STATUS: fieldBuilder.buildEnumField(
          'ElecCommStatus',
          ElecCommStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link elecCommMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELEC_COMM_MESSAGE: fieldBuilder.buildEdmTypeField(
          'ElecCommMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link splitVendorCreditRow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_VENDOR_CREDIT_ROW: fieldBuilder.buildEnumField(
          'SplitVendorCreditRow',
          BoYesNoEnum,
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
         * Static representation of the {@link uBpSeque} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_SEQUE: fieldBuilder.buildEdmTypeField(
          'U_BP_Seque',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBpConfd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BP_CONFD: fieldBuilder.buildEdmTypeField(
          'U_BP_Confd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUnklar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_UNKLAR: fieldBuilder.buildEdmTypeField(
          'U_unklar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTsForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TS_FORM: fieldBuilder.buildEdmTypeField(
          'U_ts_form',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link paymentChecks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CHECKS: fieldBuilder.buildCollectionField(
          'PaymentChecks',
          PaymentCheck,
          true
        ),
        /**
         * Static representation of the {@link paymentInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_INVOICES: fieldBuilder.buildCollectionField(
          'PaymentInvoices',
          PaymentInvoice,
          true
        ),
        /**
         * Static representation of the {@link paymentCreditCards} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CREDIT_CARDS: fieldBuilder.buildCollectionField(
          'PaymentCreditCards',
          PaymentCreditCard,
          true
        ),
        /**
         * Static representation of the {@link paymentAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ACCOUNTS: fieldBuilder.buildCollectionField(
          'PaymentAccounts',
          PaymentAccount,
          true
        ),
        /**
         * Static representation of the {@link paymentDocumentReferencesCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DOCUMENT_REFERENCES_COLLECTION:
          fieldBuilder.buildCollectionField(
            'PaymentDocumentReferencesCollection',
            PaymentDocumentReferences,
            true
          ),
        /**
         * Static representation of the {@link billOfExchange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE: fieldBuilder.buildComplexTypeField(
          'BillOfExchange',
          BillOfExchangeField,
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxCertificatesCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_CERTIFICATES_COLLECTION:
          fieldBuilder.buildCollectionField(
            'WithholdingTaxCertificatesCollection',
            WithholdingTaxCertificatesData,
            true
          ),
        /**
         * Static representation of the {@link electronicProtocols} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PROTOCOLS: fieldBuilder.buildCollectionField(
          'ElectronicProtocols',
          ElectronicProtocol,
          true
        ),
        /**
         * Static representation of the {@link cashFlowAssignments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_ASSIGNMENTS: fieldBuilder.buildCollectionField(
          'CashFlowAssignments',
          CashFlowAssignment,
          true
        ),
        /**
         * Static representation of the {@link paymentsApprovalRequests} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENTS_APPROVAL_REQUESTS: fieldBuilder.buildCollectionField(
          'Payments_ApprovalRequests',
          PaymentsApprovalRequest,
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxDataWtxCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_DATA_WTX_COLLECTION: fieldBuilder.buildCollectionField(
          'WithholdingTaxDataWTXCollection',
          WithholdingTaxDataWtx,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorPayments)
      };
    }

    return this._schema;
  }
}
