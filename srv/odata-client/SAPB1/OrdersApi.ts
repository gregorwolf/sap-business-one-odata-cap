/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Orders } from './Orders';
import { OrdersRequestBuilder } from './OrdersRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { CurrenciesApi } from './CurrenciesApi';
import { PaymentTermsTypesApi } from './PaymentTermsTypesApi';
import { SalesPersonsApi } from './SalesPersonsApi';
import { ShippingTypesApi } from './ShippingTypesApi';
import { FactoringIndicatorsApi } from './FactoringIndicatorsApi';
import { UsersApi } from './UsersApi';
import { Forms1099Api } from './Forms1099Api';
import { WizardPaymentMethodsApi } from './WizardPaymentMethodsApi';
import { PaymentBlocksApi } from './PaymentBlocksApi';
import { ProjectsApi } from './ProjectsApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { CountriesApi } from './CountriesApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { UserLanguagesApi } from './UserLanguagesApi';
import { NfModelsApi } from './NfModelsApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { TaxWebSitesApi } from './TaxWebSitesApi';
import { BranchesApi } from './BranchesApi';
import { DepartmentsApi } from './DepartmentsApi';
import { PosDailySummaryApi } from './PosDailySummaryApi';
import { DocumentApprovalRequest } from './DocumentApprovalRequest';
import { DocumentLine } from './DocumentLine';
import { EWayBillDetails, EWayBillDetailsField } from './EWayBillDetails';
import { ElectronicProtocol } from './ElectronicProtocol';
import { DocumentAdditionalExpense } from './DocumentAdditionalExpense';
import { DocumentDistributedExpense } from './DocumentDistributedExpense';
import { WithholdingTaxDataWtx } from './WithholdingTaxDataWtx';
import { WithholdingTaxData } from './WithholdingTaxData';
import { DocumentPackage } from './DocumentPackage';
import { DocumentSpecialLine } from './DocumentSpecialLine';
import { DocumentInstallment } from './DocumentInstallment';
import { DownPaymentToDraw } from './DownPaymentToDraw';
import { TaxExtension, TaxExtensionField } from './TaxExtension';
import { AddressExtension, AddressExtensionField } from './AddressExtension';
import { DocumentReference } from './DocumentReference';
import { BoDocumentTypes } from './BoDocumentTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { PrintStatusEnum } from './PrintStatusEnum';
import { BoDocSummaryTypes } from './BoDocSummaryTypes';
import { BoObjectTypes } from './BoObjectTypes';
import { BoDocWhsUpdateTypes } from './BoDocWhsUpdateTypes';
import { BoDocumentSubType } from './BoDocumentSubType';
import { BoStatus } from './BoStatus';
import { DownPaymentTypeEnum } from './DownPaymentTypeEnum';
import { BoPayTermDueTypes } from './BoPayTermDueTypes';
import { EDocGenerationTypeEnum } from './EDocGenerationTypeEnum';
import { EDocStatusEnum } from './EDocStatusEnum';
import { BoSoStatus } from './BoSoStatus';
import { ClosingOptionEnum } from './ClosingOptionEnum';
import { DocumentAuthorizationStatusEnum } from './DocumentAuthorizationStatusEnum';
import { CancelStatusEnum } from './CancelStatusEnum';
import { DocumentDeliveryTypeEnum } from './DocumentDeliveryTypeEnum';
import { ElecCommStatusEnum } from './ElecCommStatusEnum';
import { FolioLetterEnum } from './FolioLetterEnum';
import { BoInterimDocTypes } from './BoInterimDocTypes';
import { PriceModeDocumentEnum } from './PriceModeDocumentEnum';
import { GstTransactionTypeEnum } from './GstTransactionTypeEnum';
import { CommissionTradeTypeEnum } from './CommissionTradeTypeEnum';
import { EDocTypeEnum } from './EDocTypeEnum';
import { BoFatherCardTypes } from './BoFatherCardTypes';
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
  Time,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class OrdersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Orders<DeSerializersT>, DeSerializersT>
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
  ): OrdersApi<DeSerializersT> {
    return new OrdersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTermsType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_TYPE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      ShippingTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link factoringIndicator} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FACTORING_INDICATOR: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      FactoringIndicatorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link forms1099} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORMS_1099: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      Forms1099Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link wizardPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHOD: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentBlock2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_BLOCK_2: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      PaymentBlocksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userLanguage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_LANGUAGE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      UserLanguagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nfModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NF_MODEL: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      NfModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxWebSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_WEB_SITE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      TaxWebSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link branch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRANCH: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      BranchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link posDailySummary} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POS_DAILY_SUMMARY: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      PosDailySummaryApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnersApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      PaymentTermsTypesApi<DeSerializersT>,
      SalesPersonsApi<DeSerializersT>,
      ShippingTypesApi<DeSerializersT>,
      FactoringIndicatorsApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      Forms1099Api<DeSerializersT>,
      WizardPaymentMethodsApi<DeSerializersT>,
      PaymentBlocksApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>,
      UserLanguagesApi<DeSerializersT>,
      NfModelsApi<DeSerializersT>,
      ChartOfAccountsApi<DeSerializersT>,
      TaxWebSitesApi<DeSerializersT>,
      BranchesApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      PosDailySummaryApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[0]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[1]),
      PAYMENT_TERMS_TYPE: new OneToOneLink(
        'PaymentTermsType',
        this,
        linkedApis[2]
      ),
      SALES_PERSON: new OneToOneLink('SalesPerson', this, linkedApis[3]),
      SHIPPING_TYPE: new OneToOneLink('ShippingType', this, linkedApis[4]),
      FACTORING_INDICATOR: new OneToOneLink(
        'FactoringIndicator',
        this,
        linkedApis[5]
      ),
      USER: new OneToOneLink('User', this, linkedApis[6]),
      FORMS_1099: new OneToOneLink('Forms1099', this, linkedApis[7]),
      WIZARD_PAYMENT_METHOD: new OneToOneLink(
        'WizardPaymentMethod',
        this,
        linkedApis[8]
      ),
      PAYMENT_BLOCK_2: new OneToOneLink('PaymentBlock2', this, linkedApis[9]),
      PROJECT_2: new OneToOneLink('Project2', this, linkedApis[10]),
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[11]),
      COUNTRY: new OneToOneLink('Country', this, linkedApis[12]),
      BUSINESS_PLACE: new OneToOneLink('BusinessPlace', this, linkedApis[13]),
      USER_LANGUAGE: new OneToOneLink('UserLanguage', this, linkedApis[14]),
      NF_MODEL: new OneToOneLink('NFModel', this, linkedApis[15]),
      CHART_OF_ACCOUNT: new OneToOneLink(
        'ChartOfAccount',
        this,
        linkedApis[16]
      ),
      TAX_WEB_SITE: new OneToOneLink('TaxWebSite', this, linkedApis[17]),
      BRANCH: new OneToOneLink('Branch', this, linkedApis[18]),
      DEPARTMENT: new OneToOneLink('Department', this, linkedApis[19]),
      POS_DAILY_SUMMARY: new OneToOneLink(
        'POSDailySummary',
        this,
        linkedApis[20]
      )
    };
    return this;
  }

  entityConstructor = Orders;

  requestBuilder(): OrdersRequestBuilder<DeSerializersT> {
    return new OrdersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Orders<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Orders<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Orders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Orders, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Orders, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_ENTRY: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_TYPE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoDocumentTypes,
      true,
      true
    >;
    HAND_WRITTEN: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PRINTED: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      PrintStatusEnum,
      true,
      true
    >;
    DOC_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOC_DUE_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CARD_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_NAME: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUM_AT_CARD: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_TOTAL: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_CURRENCY: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_RATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    REFERENCE_1: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_2: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_MEMO: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_GROUP_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_TIME: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SALES_PERSON_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRANSPORTATION_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CONFIRMED: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IMPORT_FILE_NUM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SUMMERY_TYPE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoDocSummaryTypes,
      true,
      true
    >;
    CONTACT_PERSON_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SHOW_SCN: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TAX_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PARTIAL_SUPPLY: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DOC_OBJECT_CODE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoObjectTypes,
      true,
      true
    >;
    SHIP_TO_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDICATOR: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEDERAL_TAX_ID: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PAYMENT_REFERENCE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FINANCIAL_PERIOD: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    USER_SIGN: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRANS_NUM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    VAT_SUM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    VAT_SUM_SYS: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    VAT_SUM_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    NET_PROCEDURE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DOC_TOTAL_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOC_TOTAL_SYS: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FORM_1099: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BOX_1099: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVISION_PO: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REQURIED_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CANCEL_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    BLOCK_DUNNING: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SUBMITTED: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SEGMENT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PICK_STATUS: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PICK: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BLOCK: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PAYMENT_BLOCK_ENTRY: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CENTRAL_BANK_INDICATOR: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_CASH_DISCOUNT: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RESERVE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROJECT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPTION_VALIDITY_DATE_FROM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EXEMPTION_VALIDITY_DATE_TO: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    WARE_HOUSE_UPDATE_TYPE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoDocWhsUpdateTypes,
      true,
      true
    >;
    ROUNDING: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    EXTERNAL_CORRECTED_DOC_NUM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNAL_CORRECTED_DOC_NUM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NEXT_CORRECTING_DOCUMENT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEFERRED_TAX: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TAX_EXEMPTION_LETTER_NUM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WT_APPLIED: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_APPLIED_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BILL_OF_EXCHANGE_RESERVED: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AGENT_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WT_APPLIED_SC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_EQUALIZATION_TAX: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_EQUALIZATION_TAX_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_EQUALIZATION_TAX_SC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    NUMBER_OF_INSTALLMENTS: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    APPLY_TAX_ON_FIRST_INSTALLMENT: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WT_NON_SUBJECT_AMOUNT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_NON_SUBJECT_AMOUNT_SC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_NON_SUBJECT_AMOUNT_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_EXEMPTED_AMOUNT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_EXEMPTED_AMOUNT_SC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_EXEMPTED_AMOUNT_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BASE_AMOUNT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BASE_AMOUNT_SC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BASE_AMOUNT_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_AMOUNT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_AMOUNT_SC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WT_AMOUNT_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    VAT_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOCUMENTS_OWNER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FOLIO_PREFIX_STRING: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOLIO_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOCUMENT_SUB_TYPE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoDocumentSubType,
      true,
      true
    >;
    BP_CHANNEL_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_CHANNEL_CONTACT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ADDRESS_2: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_STATUS: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoStatus,
      true,
      true
    >;
    PERIOD_INDICATOR: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_TO_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_SHPD_GOODS_ACT: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IS_PAY_TO_BANK: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PAY_TO_BANK_COUNTRY: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_TO_BANK_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_TO_BANK_ACCOUNT_NO: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_TO_BANK_BRANCH: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BPL_ID_ASSIGNED_TO_INVOICE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOWN_PAYMENT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    RESERVE_INVOICE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    LANGUAGE_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRACKING_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICK_REMARK: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSING_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SEQUENCE_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SEQUENCE_SERIAL: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES_STRING: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_SERIES_STRING: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQUENCE_MODEL: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_CORRECTION_VAT_GROUP: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TOTAL_DISCOUNT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOWN_PAYMENT_AMOUNT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOWN_PAYMENT_PERCENTAGE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOWN_PAYMENT_TYPE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      DownPaymentTypeEnum,
      true,
      true
    >;
    DOWN_PAYMENT_AMOUNT_SC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DOWN_PAYMENT_AMOUNT_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    VAT_PERCENT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SERVICE_GROSS_PROFIT_PERCENT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    OPENING_REMARKS: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSING_REMARKS: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_DIFF_AMOUNT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ROUNDING_DIFF_AMOUNT_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ROUNDING_DIFF_AMOUNT_SC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CANCELLED: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SIGNATURE_INPUT_MESSAGE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGNATURE_DIGEST: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFICATION_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIVATE_KEY_VERSION: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CONTROL_ACCOUNT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSURANCE_OPERATION_347: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ARCHIVE_NONREMOVABLE_SALES_QUOTATION: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    GTS_CHECKER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    GTS_PAYEE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EXTRA_MONTH: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EXTRA_DAYS: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CASH_DISCOUNT_DATE_OFFSET: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    START_FROM: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoPayTermDueTypes,
      true,
      true
    >;
    NTS_APPROVED: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    E_TAX_WEB_SITE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    E_TAX_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NTS_APPROVED_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_DOC_GENERATION_TYPE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      EDocGenerationTypeEnum,
      true,
      true
    >;
    E_DOC_SERIES: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    E_DOC_NUM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_DOC_EXPORT_FORMAT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    E_DOC_STATUS: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      EDocStatusEnum,
      true,
      true
    >;
    E_DOC_ERROR_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_DOC_ERROR_MESSAGE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOWN_PAYMENT_STATUS: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoSoStatus,
      true,
      true
    >;
    GROUP_SERIES: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    GROUP_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    GROUP_HAND_WRITTEN: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REOPEN_ORIGINAL_DOCUMENT: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CREATE_ONLINE_QUOTATION: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    POS_EQUIPMENT_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POS_MANUFACTURER_SERIAL_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POS_CASHIER_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CLOSING_OPTION: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      ClosingOptionEnum,
      true,
      true
    >;
    SPECIFIED_CLOSING_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    OPEN_FOR_LANDED_COSTS: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AUTHORIZATION_STATUS: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      DocumentAuthorizationStatusEnum,
      true,
      true
    >;
    TOTAL_DISCOUNT_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_DISCOUNT_SC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    RELEVANT_TO_GTS: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BPL_NAME: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_REG_NUM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNUAL_INVOICE_DECLARATION_REFERENCE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SUPPLIER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RECEIVER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BLANKET_AGREEMENT_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IS_ALTERATION: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CANCEL_STATUS: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      CancelStatusEnum,
      true,
      true
    >;
    ASSET_VALUE_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    REQUESTER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTER_NAME: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTER_BRANCH: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REQUESTER_DEPARTMENT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REQUESTER_EMAIL: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEND_NOTIFICATION: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REQ_TYPE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REQ_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_PAYMENT: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DOCUMENT_DELIVERY: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      DocumentDeliveryTypeEnum,
      true,
      true
    >;
    AUTHORIZATION_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DELIVERY_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    START_DELIVERY_TIME: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    END_DELIVERY_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    END_DELIVERY_TIME: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    VEHICLE_PLATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AT_DOCUMENT_TYPE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELEC_COMM_STATUS: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      ElecCommStatusEnum,
      true,
      true
    >;
    ELEC_COMM_MESSAGE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REUSE_DOCUMENT_NUM: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REUSE_NOTA_FISCAL_NUM: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PRINT_SEPA_DIRECT: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FISCAL_DOC_NUM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POS_DAILY_SUMMARY_NO: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    POS_RECEIPT_NO: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    POINT_OF_ISSUE_CODE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LETTER: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      FolioLetterEnum,
      true,
      true
    >;
    FOLIO_NUMBER_FROM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FOLIO_NUMBER_TO: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INTERIM_TYPE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoInterimDocTypes,
      true,
      true
    >;
    RELATED_TYPE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RELATED_ENTRY: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SAP_PASSPORT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TAX_ID: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    REPORTING_SECTION_CONTROL_STATEMENT_VAT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    POS_CASH_REGISTER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    UPDATE_TIME: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    CREATE_QR_CODE_FROM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_MODE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      PriceModeDocumentEnum,
      true,
      true
    >;
    DOWN_PAYMENT_TRASACTION_ID: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVISION: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ORIGINAL_REF_NO: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_REF_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    GST_TRANSACTION_TYPE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      GstTransactionTypeEnum,
      true,
      true
    >;
    ORIGINAL_CREDIT_OR_DEBIT_NO: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_CREDIT_OR_DEBIT_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    E_COMMERCE_OPERATOR: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_COMMERCE_GSTIN: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_INVOICE_NO: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_INVOICE_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SHIP_FROM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_TRADE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      CommissionTradeTypeEnum,
      true,
      true
    >;
    COMMISSION_TRADE_RETURN: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    USE_BILL_TO_ADDR_TO_DETERMINE_TAX: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ISSUING_REASON: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CIG: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CUP: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    E_DOC_TYPE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      EDocTypeEnum,
      true,
      true
    >;
    FCE_AS_PAYMENT_MEANS: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PAID_TO_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PAID_TO_DATE_FC: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PAID_TO_DATE_SYS: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FATHER_CARD: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FATHER_TYPE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoFatherCardTypes,
      true,
      true
    >;
    SHIP_STATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_PLACE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_OFFICE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FCI: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADD_LEG_IN: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEG_TEXT_F: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DANFE_LG_TXT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_VERSION: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LAST_PAGE_FOLIO_NUMBER: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INVENTORY_STATUS: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoStatus,
      true,
      true
    >;
    PLASTIC_PACKAGING_TAX_RELEVANT: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    NOT_RELEVANT_FOR_MONTHLY_INVOICE: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    U_FERTIGUNGSZEIT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    U_ILTIS_LIEFERZEIT: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    U_COR_FORM_TYPE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BELEGOK: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    U_EST_1: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_EST_2: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_EST_3: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ACT_1: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ACT_2: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ACT_3: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_EST_4: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ACT_4: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ACT_5: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_BS_INFOSERVICE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    U_AB_OK: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COR_BW_FROM_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_COR_BW_TO_DATE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_TESTBELEG: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ARTIKEL_DETAIL: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_INTERN: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_KALKULATION: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PROV_BEST: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AV: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_QM: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FERT_STAND: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RAHMENVERTRAG: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_RAHMENVERTRAGS_NR: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_EINGEGANGEN: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OPP_KALKULATION: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OPP_ABGABEART: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OPP_PREISE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_EINVOICE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DOCUMENT_APPROVAL_REQUESTS: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      DocumentApprovalRequest,
      true,
      true
    >;
    DOCUMENT_LINES: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      DocumentLine,
      true,
      true
    >;
    E_WAY_BILL_DETAILS: EWayBillDetailsField<
      Orders<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    ELECTRONIC_PROTOCOLS: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      ElectronicProtocol,
      true,
      true
    >;
    DOCUMENT_ADDITIONAL_EXPENSES: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      DocumentAdditionalExpense,
      true,
      true
    >;
    DOCUMENT_DISTRIBUTED_EXPENSES: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      DocumentDistributedExpense,
      true,
      true
    >;
    WITHHOLDING_TAX_DATA_WTX_COLLECTION: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      WithholdingTaxDataWtx,
      true,
      true
    >;
    WITHHOLDING_TAX_DATA_COLLECTION: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      WithholdingTaxData,
      true,
      true
    >;
    DOCUMENT_PACKAGES: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      DocumentPackage,
      true,
      true
    >;
    DOCUMENT_SPECIAL_LINES: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      DocumentSpecialLine,
      true,
      true
    >;
    DOCUMENT_INSTALLMENTS: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      DocumentInstallment,
      true,
      true
    >;
    DOWN_PAYMENTS_TO_DRAW: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      DownPaymentToDraw,
      true,
      true
    >;
    TAX_EXTENSION: TaxExtensionField<
      Orders<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    ADDRESS_EXTENSION: AddressExtensionField<
      Orders<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    DOCUMENT_REFERENCES: CollectionField<
      Orders<DeSerializers>,
      DeSerializersT,
      DocumentReference,
      true,
      true
    >;
    BASE_TYPE: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BASE_ENTRY: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IND_FINAL: EnumField<
      Orders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SOI_WIZARD_ID: OrderableEdmTypeField<
      Orders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTermsType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_TYPE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      ShippingTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link factoringIndicator} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FACTORING_INDICATOR: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      FactoringIndicatorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link forms1099} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORMS_1099: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      Forms1099Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link wizardPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHOD: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentBlock2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_BLOCK_2: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      PaymentBlocksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userLanguage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_LANGUAGE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      UserLanguagesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nfModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NF_MODEL: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      NfModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxWebSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_WEB_SITE: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      TaxWebSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link branch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRANCH: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      BranchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link posDailySummary} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POS_DAILY_SUMMARY: OneToOneLink<
      Orders<DeSerializersT>,
      DeSerializersT,
      PosDailySummaryApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Orders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true),
        /**
         * Static representation of the {@link docType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TYPE: fieldBuilder.buildEnumField('DocType', BoDocumentTypes, true),
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
        PRINTED: fieldBuilder.buildEnumField('Printed', PrintStatusEnum, true),
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
         * Static representation of the {@link docDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DocDueDate',
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
         * Static representation of the {@link numAtCard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_AT_CARD: fieldBuilder.buildEdmTypeField(
          'NumAtCard',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TOTAL: fieldBuilder.buildEdmTypeField(
          'DocTotal',
          'Edm.Double',
          true
        ),
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
         * Static representation of the {@link docCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_CURRENCY: fieldBuilder.buildEdmTypeField(
          'DocCurrency',
          'Edm.String',
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
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_MEMO: fieldBuilder.buildEdmTypeField(
          'JournalMemo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentGroupCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link docTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TIME: fieldBuilder.buildEdmTypeField(
          'DocTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link salesPersonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PERSON_CODE: fieldBuilder.buildEdmTypeField(
          'SalesPersonCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link transportationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_CODE: fieldBuilder.buildEdmTypeField(
          'TransportationCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link confirmed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED: fieldBuilder.buildEnumField('Confirmed', BoYesNoEnum, true),
        /**
         * Static representation of the {@link importFileNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_FILE_NUM: fieldBuilder.buildEdmTypeField(
          'ImportFileNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link summeryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMERY_TYPE: fieldBuilder.buildEnumField(
          'SummeryType',
          BoDocSummaryTypes,
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
         * Static representation of the {@link showScn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_SCN: fieldBuilder.buildEnumField('ShowSCN', BoYesNoEnum, true),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
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
         * Static representation of the {@link partialSupply} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTIAL_SUPPLY: fieldBuilder.buildEnumField(
          'PartialSupply',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link docObjectCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_OBJECT_CODE: fieldBuilder.buildEnumField(
          'DocObjectCode',
          BoObjectTypes,
          true
        ),
        /**
         * Static representation of the {@link shipToCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TO_CODE: fieldBuilder.buildEdmTypeField(
          'ShipToCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link indicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDICATOR: fieldBuilder.buildEdmTypeField(
          'Indicator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link federalTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_TAX_ID: fieldBuilder.buildEdmTypeField(
          'FederalTaxID',
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
         * Static representation of the {@link paymentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'PaymentReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link financialPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_PERIOD: fieldBuilder.buildEdmTypeField(
          'FinancialPeriod',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link userSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGN: fieldBuilder.buildEdmTypeField(
          'UserSign',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link transNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_NUM: fieldBuilder.buildEdmTypeField(
          'TransNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link vatSum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_SUM: fieldBuilder.buildEdmTypeField('VatSum', 'Edm.Double', true),
        /**
         * Static representation of the {@link vatSumSys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_SUM_SYS: fieldBuilder.buildEdmTypeField(
          'VatSumSys',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link vatSumFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_SUM_FC: fieldBuilder.buildEdmTypeField(
          'VatSumFc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link netProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PROCEDURE: fieldBuilder.buildEnumField(
          'NetProcedure',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link docTotalFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TOTAL_FC: fieldBuilder.buildEdmTypeField(
          'DocTotalFc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link docTotalSys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_TOTAL_SYS: fieldBuilder.buildEdmTypeField(
          'DocTotalSys',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link form1099} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_1099: fieldBuilder.buildEdmTypeField(
          'Form1099',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link box1099} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOX_1099: fieldBuilder.buildEdmTypeField('Box1099', 'Edm.String', true),
        /**
         * Static representation of the {@link revisionPo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVISION_PO: fieldBuilder.buildEnumField(
          'RevisionPo',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link requriedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQURIED_DATE: fieldBuilder.buildEdmTypeField(
          'RequriedDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link cancelDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL_DATE: fieldBuilder.buildEdmTypeField(
          'CancelDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link blockDunning} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_DUNNING: fieldBuilder.buildEnumField(
          'BlockDunning',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link submitted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMITTED: fieldBuilder.buildEnumField('Submitted', BoYesNoEnum, true),
        /**
         * Static representation of the {@link segment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT: fieldBuilder.buildEdmTypeField('Segment', 'Edm.Int32', true),
        /**
         * Static representation of the {@link pickStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICK_STATUS: fieldBuilder.buildEnumField(
          'PickStatus',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link pick} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICK: fieldBuilder.buildEnumField('Pick', BoYesNoEnum, true),
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
         * Static representation of the {@link paymentBlock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BLOCK: fieldBuilder.buildEnumField(
          'PaymentBlock',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link paymentBlockEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BLOCK_ENTRY: fieldBuilder.buildEdmTypeField(
          'PaymentBlockEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link centralBankIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_INDICATOR: fieldBuilder.buildEdmTypeField(
          'CentralBankIndicator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_CASH_DISCOUNT: fieldBuilder.buildEnumField(
          'MaximumCashDiscount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link reserve} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVE: fieldBuilder.buildEnumField('Reserve', BoYesNoEnum, true),
        /**
         * Static representation of the {@link project} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT: fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true),
        /**
         * Static representation of the {@link exemptionValidityDateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPTION_VALIDITY_DATE_FROM: fieldBuilder.buildEdmTypeField(
          'ExemptionValidityDateFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link exemptionValidityDateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPTION_VALIDITY_DATE_TO: fieldBuilder.buildEdmTypeField(
          'ExemptionValidityDateTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link wareHouseUpdateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARE_HOUSE_UPDATE_TYPE: fieldBuilder.buildEnumField(
          'WareHouseUpdateType',
          BoDocWhsUpdateTypes,
          true
        ),
        /**
         * Static representation of the {@link rounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING: fieldBuilder.buildEnumField('Rounding', BoYesNoEnum, true),
        /**
         * Static representation of the {@link externalCorrectedDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CORRECTED_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'ExternalCorrectedDocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internalCorrectedDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_CORRECTED_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'InternalCorrectedDocNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link nextCorrectingDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_CORRECTING_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'NextCorrectingDocument',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link deferredTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_TAX: fieldBuilder.buildEnumField(
          'DeferredTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link taxExemptionLetterNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPTION_LETTER_NUM: fieldBuilder.buildEdmTypeField(
          'TaxExemptionLetterNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wtApplied} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_APPLIED: fieldBuilder.buildEdmTypeField(
          'WTApplied',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtAppliedFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_APPLIED_FC: fieldBuilder.buildEdmTypeField(
          'WTAppliedFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link billOfExchangeReserved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_RESERVED: fieldBuilder.buildEnumField(
          'BillOfExchangeReserved',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link agentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENT_CODE: fieldBuilder.buildEdmTypeField(
          'AgentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wtAppliedSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_APPLIED_SC: fieldBuilder.buildEdmTypeField(
          'WTAppliedSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalEqualizationTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_EQUALIZATION_TAX: fieldBuilder.buildEdmTypeField(
          'TotalEqualizationTax',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalEqualizationTaxFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_EQUALIZATION_TAX_FC: fieldBuilder.buildEdmTypeField(
          'TotalEqualizationTaxFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalEqualizationTaxSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_EQUALIZATION_TAX_SC: fieldBuilder.buildEdmTypeField(
          'TotalEqualizationTaxSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link numberOfInstallments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_INSTALLMENTS: fieldBuilder.buildEdmTypeField(
          'NumberOfInstallments',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link applyTaxOnFirstInstallment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_TAX_ON_FIRST_INSTALLMENT: fieldBuilder.buildEnumField(
          'ApplyTaxOnFirstInstallment',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link wtNonSubjectAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_NON_SUBJECT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'WTNonSubjectAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtNonSubjectAmountSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_NON_SUBJECT_AMOUNT_SC: fieldBuilder.buildEdmTypeField(
          'WTNonSubjectAmountSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtNonSubjectAmountFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_NON_SUBJECT_AMOUNT_FC: fieldBuilder.buildEdmTypeField(
          'WTNonSubjectAmountFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtExemptedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_EXEMPTED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'WTExemptedAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtExemptedAmountSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_EXEMPTED_AMOUNT_SC: fieldBuilder.buildEdmTypeField(
          'WTExemptedAmountSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link wtExemptedAmountFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_EXEMPTED_AMOUNT_FC: fieldBuilder.buildEdmTypeField(
          'WTExemptedAmountFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link baseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BaseAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link baseAmountSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_AMOUNT_SC: fieldBuilder.buildEdmTypeField(
          'BaseAmountSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link baseAmountFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_AMOUNT_FC: fieldBuilder.buildEdmTypeField(
          'BaseAmountFC',
          'Edm.Double',
          true
        ),
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
         * Static representation of the {@link wtAmountSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_AMOUNT_SC: fieldBuilder.buildEdmTypeField(
          'WTAmountSC',
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
         * Static representation of the {@link vatDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DATE: fieldBuilder.buildEdmTypeField(
          'VatDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link documentsOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENTS_OWNER: fieldBuilder.buildEdmTypeField(
          'DocumentsOwner',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link folioPrefixString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_PREFIX_STRING: fieldBuilder.buildEdmTypeField(
          'FolioPrefixString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link folioNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_NUMBER: fieldBuilder.buildEdmTypeField(
          'FolioNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link documentSubType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_SUB_TYPE: fieldBuilder.buildEnumField(
          'DocumentSubType',
          BoDocumentSubType,
          true
        ),
        /**
         * Static representation of the {@link bpChannelCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CHANNEL_CODE: fieldBuilder.buildEdmTypeField(
          'BPChannelCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpChannelContact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CHANNEL_CONTACT: fieldBuilder.buildEdmTypeField(
          'BPChannelContact',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link address2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_2: fieldBuilder.buildEdmTypeField(
          'Address2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_STATUS: fieldBuilder.buildEnumField(
          'DocumentStatus',
          BoStatus,
          true
        ),
        /**
         * Static representation of the {@link periodIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_INDICATOR: fieldBuilder.buildEdmTypeField(
          'PeriodIndicator',
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
         * Static representation of the {@link manualNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ManualNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useShpdGoodsAct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SHPD_GOODS_ACT: fieldBuilder.buildEnumField(
          'UseShpdGoodsAct',
          BoYesNoEnum,
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
         * Static representation of the {@link payToBankCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_TO_BANK_COUNTRY: fieldBuilder.buildEdmTypeField(
          'PayToBankCountry',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link payToBankAccountNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_TO_BANK_ACCOUNT_NO: fieldBuilder.buildEdmTypeField(
          'PayToBankAccountNo',
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
         * Static representation of the {@link bplIdAssignedToInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPL_ID_ASSIGNED_TO_INVOICE: fieldBuilder.buildEdmTypeField(
          'BPL_IDAssignedToInvoice',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link downPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT: fieldBuilder.buildEdmTypeField(
          'DownPayment',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link reserveInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVE_INVOICE: fieldBuilder.buildEnumField(
          'ReserveInvoice',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link languageCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_CODE: fieldBuilder.buildEdmTypeField(
          'LanguageCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link trackingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrackingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickRemark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICK_REMARK: fieldBuilder.buildEdmTypeField(
          'PickRemark',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_DATE: fieldBuilder.buildEdmTypeField(
          'ClosingDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link sequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'SequenceCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link sequenceSerial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_SERIAL: fieldBuilder.buildEdmTypeField(
          'SequenceSerial',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link seriesString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES_STRING: fieldBuilder.buildEdmTypeField(
          'SeriesString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subSeriesString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_SERIES_STRING: fieldBuilder.buildEdmTypeField(
          'SubSeriesString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sequenceModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_MODEL: fieldBuilder.buildEdmTypeField(
          'SequenceModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useCorrectionVatGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CORRECTION_VAT_GROUP: fieldBuilder.buildEnumField(
          'UseCorrectionVATGroup',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link totalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link downPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DownPaymentAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link downPaymentPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'DownPaymentPercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link downPaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'DownPaymentType',
          DownPaymentTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link downPaymentAmountSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_AMOUNT_SC: fieldBuilder.buildEdmTypeField(
          'DownPaymentAmountSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link downPaymentAmountFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_AMOUNT_FC: fieldBuilder.buildEdmTypeField(
          'DownPaymentAmountFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link vatPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_PERCENT: fieldBuilder.buildEdmTypeField(
          'VatPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link serviceGrossProfitPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_GROSS_PROFIT_PERCENT: fieldBuilder.buildEdmTypeField(
          'ServiceGrossProfitPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link openingRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPENING_REMARKS: fieldBuilder.buildEdmTypeField(
          'OpeningRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closingRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_REMARKS: fieldBuilder.buildEdmTypeField(
          'ClosingRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roundingDiffAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_DIFF_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RoundingDiffAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link roundingDiffAmountFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_DIFF_AMOUNT_FC: fieldBuilder.buildEdmTypeField(
          'RoundingDiffAmountFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link roundingDiffAmountSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_DIFF_AMOUNT_SC: fieldBuilder.buildEdmTypeField(
          'RoundingDiffAmountSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link cancelled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLED: fieldBuilder.buildEnumField('Cancelled', BoYesNoEnum, true),
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
         * Static representation of the {@link controlAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ControlAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link insuranceOperation347} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSURANCE_OPERATION_347: fieldBuilder.buildEnumField(
          'InsuranceOperation347',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link archiveNonremovableSalesQuotation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARCHIVE_NONREMOVABLE_SALES_QUOTATION: fieldBuilder.buildEnumField(
          'ArchiveNonremovableSalesQuotation',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link gtsChecker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GTS_CHECKER: fieldBuilder.buildEdmTypeField(
          'GTSChecker',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link gtsPayee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GTS_PAYEE: fieldBuilder.buildEdmTypeField(
          'GTSPayee',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link extraMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTRA_MONTH: fieldBuilder.buildEdmTypeField(
          'ExtraMonth',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link extraDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTRA_DAYS: fieldBuilder.buildEdmTypeField(
          'ExtraDays',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountDateOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_DATE_OFFSET: fieldBuilder.buildEdmTypeField(
          'CashDiscountDateOffset',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link startFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_FROM: fieldBuilder.buildEnumField(
          'StartFrom',
          BoPayTermDueTypes,
          true
        ),
        /**
         * Static representation of the {@link ntsApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NTS_APPROVED: fieldBuilder.buildEnumField(
          'NTSApproved',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link eTaxWebSite} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_TAX_WEB_SITE: fieldBuilder.buildEdmTypeField(
          'ETaxWebSite',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link eTaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_TAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'ETaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ntsApprovedNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NTS_APPROVED_NUMBER: fieldBuilder.buildEdmTypeField(
          'NTSApprovedNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eDocGenerationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_DOC_GENERATION_TYPE: fieldBuilder.buildEnumField(
          'EDocGenerationType',
          EDocGenerationTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link eDocSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_DOC_SERIES: fieldBuilder.buildEdmTypeField(
          'EDocSeries',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link eDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'EDocNum',
          'Edm.String',
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
         * Static representation of the {@link eDocStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_DOC_STATUS: fieldBuilder.buildEnumField(
          'EDocStatus',
          EDocStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link eDocErrorCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_DOC_ERROR_CODE: fieldBuilder.buildEdmTypeField(
          'EDocErrorCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eDocErrorMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_DOC_ERROR_MESSAGE: fieldBuilder.buildEdmTypeField(
          'EDocErrorMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link downPaymentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_STATUS: fieldBuilder.buildEnumField(
          'DownPaymentStatus',
          BoSoStatus,
          true
        ),
        /**
         * Static representation of the {@link groupSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_SERIES: fieldBuilder.buildEdmTypeField(
          'GroupSeries',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link groupNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NUMBER: fieldBuilder.buildEdmTypeField(
          'GroupNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link groupHandWritten} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_HAND_WRITTEN: fieldBuilder.buildEnumField(
          'GroupHandWritten',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link reopenOriginalDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REOPEN_ORIGINAL_DOCUMENT: fieldBuilder.buildEnumField(
          'ReopenOriginalDocument',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link reopenManuallyClosedOrCanceledDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT:
          fieldBuilder.buildEnumField(
            'ReopenManuallyClosedOrCanceledDocument',
            BoYesNoEnum,
            true
          ),
        /**
         * Static representation of the {@link createOnlineQuotation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_ONLINE_QUOTATION: fieldBuilder.buildEnumField(
          'CreateOnlineQuotation',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link posEquipmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_EQUIPMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'POSEquipmentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posManufacturerSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_MANUFACTURER_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'POSManufacturerSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posCashierNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_CASHIER_NUMBER: fieldBuilder.buildEdmTypeField(
          'POSCashierNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link applyCurrentVatRatesForDownPaymentsToDraw} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW:
          fieldBuilder.buildEnumField(
            'ApplyCurrentVATRatesForDownPaymentsToDraw',
            BoYesNoEnum,
            true
          ),
        /**
         * Static representation of the {@link closingOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_OPTION: fieldBuilder.buildEnumField(
          'ClosingOption',
          ClosingOptionEnum,
          true
        ),
        /**
         * Static representation of the {@link specifiedClosingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFIED_CLOSING_DATE: fieldBuilder.buildEdmTypeField(
          'SpecifiedClosingDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link openForLandedCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_FOR_LANDED_COSTS: fieldBuilder.buildEnumField(
          'OpenForLandedCosts',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link authorizationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_STATUS: fieldBuilder.buildEnumField(
          'AuthorizationStatus',
          DocumentAuthorizationStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link totalDiscountFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_FC: fieldBuilder.buildEdmTypeField(
          'TotalDiscountFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalDiscountSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_SC: fieldBuilder.buildEdmTypeField(
          'TotalDiscountSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link relevantToGts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEVANT_TO_GTS: fieldBuilder.buildEnumField(
          'RelevantToGTS',
          BoYesNoEnum,
          true
        ),
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
         * Static representation of the {@link annualInvoiceDeclarationReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUAL_INVOICE_DECLARATION_REFERENCE: fieldBuilder.buildEdmTypeField(
          'AnnualInvoiceDeclarationReference',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link supplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER: fieldBuilder.buildEdmTypeField(
          'Supplier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASER: fieldBuilder.buildEdmTypeField('Releaser', 'Edm.Int32', true),
        /**
         * Static representation of the {@link receiver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER: fieldBuilder.buildEdmTypeField('Receiver', 'Edm.Int32', true),
        /**
         * Static representation of the {@link blanketAgreementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLANKET_AGREEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'BlanketAgreementNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link isAlteration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALTERATION: fieldBuilder.buildEnumField(
          'IsAlteration',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link cancelStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL_STATUS: fieldBuilder.buildEnumField(
          'CancelStatus',
          CancelStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link assetValueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_VALUE_DATE: fieldBuilder.buildEdmTypeField(
          'AssetValueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link requester} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER: fieldBuilder.buildEdmTypeField(
          'Requester',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requesterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER_NAME: fieldBuilder.buildEdmTypeField(
          'RequesterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requesterBranch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER_BRANCH: fieldBuilder.buildEdmTypeField(
          'RequesterBranch',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link requesterDepartment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER_DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'RequesterDepartment',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link requesterEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER_EMAIL: fieldBuilder.buildEdmTypeField(
          'RequesterEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sendNotification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEND_NOTIFICATION: fieldBuilder.buildEnumField(
          'SendNotification',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link reqType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_TYPE: fieldBuilder.buildEdmTypeField('ReqType', 'Edm.Int32', true),
        /**
         * Static representation of the {@link reqCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_CODE: fieldBuilder.buildEdmTypeField('ReqCode', 'Edm.String', true),
        /**
         * Static representation of the {@link invoicePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PAYMENT: fieldBuilder.buildEnumField(
          'InvoicePayment',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link documentDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DELIVERY: fieldBuilder.buildEnumField(
          'DocumentDelivery',
          DocumentDeliveryTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link authorizationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_CODE: fieldBuilder.buildEdmTypeField(
          'AuthorizationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'StartDeliveryDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link startDeliveryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DELIVERY_TIME: fieldBuilder.buildEdmTypeField(
          'StartDeliveryTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link endDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'EndDeliveryDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link endDeliveryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DELIVERY_TIME: fieldBuilder.buildEdmTypeField(
          'EndDeliveryTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link vehiclePlate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_PLATE: fieldBuilder.buildEdmTypeField(
          'VehiclePlate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link atDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AT_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ATDocumentType',
          'Edm.String',
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
         * Static representation of the {@link reuseDocumentNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REUSE_DOCUMENT_NUM: fieldBuilder.buildEnumField(
          'ReuseDocumentNum',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link reuseNotaFiscalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REUSE_NOTA_FISCAL_NUM: fieldBuilder.buildEnumField(
          'ReuseNotaFiscalNum',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link printSepaDirect} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_SEPA_DIRECT: fieldBuilder.buildEnumField(
          'PrintSEPADirect',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link fiscalDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'FiscalDocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posDailySummaryNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_DAILY_SUMMARY_NO: fieldBuilder.buildEdmTypeField(
          'POSDailySummaryNo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link posReceiptNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_RECEIPT_NO: fieldBuilder.buildEdmTypeField(
          'POSReceiptNo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link pointOfIssueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POINT_OF_ISSUE_CODE: fieldBuilder.buildEdmTypeField(
          'PointOfIssueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link letter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LETTER: fieldBuilder.buildEnumField('Letter', FolioLetterEnum, true),
        /**
         * Static representation of the {@link folioNumberFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_NUMBER_FROM: fieldBuilder.buildEdmTypeField(
          'FolioNumberFrom',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link folioNumberTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_NUMBER_TO: fieldBuilder.buildEdmTypeField(
          'FolioNumberTo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link interimType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERIM_TYPE: fieldBuilder.buildEnumField(
          'InterimType',
          BoInterimDocTypes,
          true
        ),
        /**
         * Static representation of the {@link relatedType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATED_TYPE: fieldBuilder.buildEdmTypeField(
          'RelatedType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link relatedEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATED_ENTRY: fieldBuilder.buildEdmTypeField(
          'RelatedEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link sapPassport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_PASSPORT: fieldBuilder.buildEdmTypeField(
          'SAPPassport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TAX_ID: fieldBuilder.buildEdmTypeField(
          'DocumentTaxID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateOfReportingControlStatementVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_REPORTING_CONTROL_STATEMENT_VAT: fieldBuilder.buildEdmTypeField(
          'DateOfReportingControlStatementVAT',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link reportingSectionControlStatementVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_SECTION_CONTROL_STATEMENT_VAT: fieldBuilder.buildEdmTypeField(
          'ReportingSectionControlStatementVAT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link excludeFromTaxReportControlStatementVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT:
          fieldBuilder.buildEnumField(
            'ExcludeFromTaxReportControlStatementVAT',
            BoYesNoEnum,
            true
          ),
        /**
         * Static representation of the {@link posCashRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_CASH_REGISTER: fieldBuilder.buildEdmTypeField(
          'POS_CashRegister',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link updateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_TIME: fieldBuilder.buildEdmTypeField(
          'UpdateTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link createQrCodeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_QR_CODE_FROM: fieldBuilder.buildEdmTypeField(
          'CreateQRCodeFrom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_MODE: fieldBuilder.buildEnumField(
          'PriceMode',
          PriceModeDocumentEnum,
          true
        ),
        /**
         * Static representation of the {@link downPaymentTrasactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_TRASACTION_ID: fieldBuilder.buildEdmTypeField(
          'DownPaymentTrasactionID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVISION: fieldBuilder.buildEnumField('Revision', BoYesNoEnum, true),
        /**
         * Static representation of the {@link originalRefNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_REF_NO: fieldBuilder.buildEdmTypeField(
          'OriginalRefNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalRefDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_REF_DATE: fieldBuilder.buildEdmTypeField(
          'OriginalRefDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link gstTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'GSTTransactionType',
          GstTransactionTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link originalCreditOrDebitNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_CREDIT_OR_DEBIT_NO: fieldBuilder.buildEdmTypeField(
          'OriginalCreditOrDebitNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalCreditOrDebitDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_CREDIT_OR_DEBIT_DATE: fieldBuilder.buildEdmTypeField(
          'OriginalCreditOrDebitDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link eCommerceOperator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_COMMERCE_OPERATOR: fieldBuilder.buildEdmTypeField(
          'ECommerceOperator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eCommerceGstin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_COMMERCE_GSTIN: fieldBuilder.buildEdmTypeField(
          'ECommerceGSTIN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxInvoiceNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_NO: fieldBuilder.buildEdmTypeField(
          'TaxInvoiceNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxInvoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'TaxInvoiceDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link shipFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_FROM: fieldBuilder.buildEdmTypeField(
          'ShipFrom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissionTrade} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_TRADE: fieldBuilder.buildEnumField(
          'CommissionTrade',
          CommissionTradeTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link commissionTradeReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_TRADE_RETURN: fieldBuilder.buildEnumField(
          'CommissionTradeReturn',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link useBillToAddrToDetermineTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_BILL_TO_ADDR_TO_DETERMINE_TAX: fieldBuilder.buildEnumField(
          'UseBillToAddrToDetermineTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link issuingReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUING_REASON: fieldBuilder.buildEdmTypeField(
          'IssuingReason',
          'Edm.Int32',
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
         * Static representation of the {@link eDocType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_DOC_TYPE: fieldBuilder.buildEnumField('EDocType', EDocTypeEnum, true),
        /**
         * Static representation of the {@link fceAsPaymentMeans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FCE_AS_PAYMENT_MEANS: fieldBuilder.buildEnumField(
          'FCEAsPaymentMeans',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link paidToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'PaidToDate',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link paidToDateFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_TO_DATE_FC: fieldBuilder.buildEdmTypeField(
          'PaidToDateFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link paidToDateSys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_TO_DATE_SYS: fieldBuilder.buildEdmTypeField(
          'PaidToDateSys',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link fatherCard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FATHER_CARD: fieldBuilder.buildEdmTypeField(
          'FatherCard',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fatherType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FATHER_TYPE: fieldBuilder.buildEnumField(
          'FatherType',
          BoFatherCardTypes,
          true
        ),
        /**
         * Static representation of the {@link shipState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_STATE: fieldBuilder.buildEdmTypeField(
          'ShipState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipPlace} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_PLACE: fieldBuilder.buildEdmTypeField(
          'ShipPlace',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custOffice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_OFFICE: fieldBuilder.buildEdmTypeField(
          'CustOffice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fci} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FCI: fieldBuilder.buildEdmTypeField('FCI', 'Edm.String', true),
        /**
         * Static representation of the {@link addLegIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADD_LEG_IN: fieldBuilder.buildEdmTypeField(
          'AddLegIn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legTextF} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEG_TEXT_F: fieldBuilder.buildEdmTypeField(
          'LegTextF',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link danfeLgTxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DANFE_LG_TXT: fieldBuilder.buildEdmTypeField(
          'DANFELgTxt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_VERSION: fieldBuilder.buildEdmTypeField(
          'DataVersion',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link lastPageFolioNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PAGE_FOLIO_NUMBER: fieldBuilder.buildEdmTypeField(
          'LastPageFolioNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link inventoryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS: fieldBuilder.buildEnumField(
          'InventoryStatus',
          BoStatus,
          true
        ),
        /**
         * Static representation of the {@link plasticPackagingTaxRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLASTIC_PACKAGING_TAX_RELEVANT: fieldBuilder.buildEnumField(
          'PlasticPackagingTaxRelevant',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link notRelevantForMonthlyInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOT_RELEVANT_FOR_MONTHLY_INVOICE: fieldBuilder.buildEnumField(
          'NotRelevantForMonthlyInvoice',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link uFertigungszeit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FERTIGUNGSZEIT: fieldBuilder.buildEdmTypeField(
          'U_Fertigungszeit',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link uIltisLieferzeit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ILTIS_LIEFERZEIT: fieldBuilder.buildEdmTypeField(
          'U_ILTIS_LIEFERZEIT',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link uCorFormType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COR_FORM_TYPE: fieldBuilder.buildEdmTypeField(
          'U_COR_FormType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBelegok} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BELEGOK: fieldBuilder.buildEdmTypeField(
          'U_Belegok',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link uEst1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EST_1: fieldBuilder.buildEdmTypeField('U_EST1', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uEst2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EST_2: fieldBuilder.buildEdmTypeField('U_EST2', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uEst3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EST_3: fieldBuilder.buildEdmTypeField('U_EST3', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uAct1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACT_1: fieldBuilder.buildEdmTypeField('U_ACT1', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uAct2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACT_2: fieldBuilder.buildEdmTypeField('U_ACT2', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uAct3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACT_3: fieldBuilder.buildEdmTypeField('U_ACT3', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uEst4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EST_4: fieldBuilder.buildEdmTypeField('U_EST4', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uAct4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACT_4: fieldBuilder.buildEdmTypeField('U_ACT4', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uAct5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACT_5: fieldBuilder.buildEdmTypeField('U_ACT5', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uBsInfoservice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_INFOSERVICE: fieldBuilder.buildEdmTypeField(
          'U_BS_INFOSERVICE',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link uAbOk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AB_OK: fieldBuilder.buildEdmTypeField('U_AB_OK', 'Edm.String', true),
        /**
         * Static representation of the {@link uCorBwFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COR_BW_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'U_COR_BW_FromDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uCorBwToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COR_BW_TO_DATE: fieldBuilder.buildEdmTypeField(
          'U_COR_BW_ToDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uTestbeleg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TESTBELEG: fieldBuilder.buildEdmTypeField(
          'U_Testbeleg',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uArtikelDetail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ARTIKEL_DETAIL: fieldBuilder.buildEdmTypeField(
          'U_ArtikelDetail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uIntern} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_INTERN: fieldBuilder.buildEdmTypeField(
          'U_Intern',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uKalkulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_KALKULATION: fieldBuilder.buildEdmTypeField(
          'U_Kalkulation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uProvBest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PROV_BEST: fieldBuilder.buildEdmTypeField(
          'U_PROV_Best',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AV: fieldBuilder.buildEdmTypeField('U_AV', 'Edm.String', true),
        /**
         * Static representation of the {@link uQm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_QM: fieldBuilder.buildEdmTypeField('U_qm', 'Edm.String', true),
        /**
         * Static representation of the {@link uFertStand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FERT_STAND: fieldBuilder.buildEdmTypeField(
          'U_FertStand',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uRahmenvertrag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RAHMENVERTRAG: fieldBuilder.buildEdmTypeField(
          'U_Rahmenvertrag',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uRahmenvertragsNr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RAHMENVERTRAGS_NR: fieldBuilder.buildEdmTypeField(
          'U_RahmenvertragsNr',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uEingegangen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EINGEGANGEN: fieldBuilder.buildEdmTypeField(
          'U_Eingegangen',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uOppKalkulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OPP_KALKULATION: fieldBuilder.buildEdmTypeField(
          'U_OPP_KALKULATION',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uOppAbgabeart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OPP_ABGABEART: fieldBuilder.buildEdmTypeField(
          'U_OPP_Abgabeart',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uOppPreise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OPP_PREISE: fieldBuilder.buildEdmTypeField(
          'U_OPP_Preise',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uEinvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EINVOICE: fieldBuilder.buildEdmTypeField(
          'U_EINVOICE',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link documentApprovalRequests} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_APPROVAL_REQUESTS: fieldBuilder.buildCollectionField(
          'Document_ApprovalRequests',
          DocumentApprovalRequest,
          true
        ),
        /**
         * Static representation of the {@link documentLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_LINES: fieldBuilder.buildCollectionField(
          'DocumentLines',
          DocumentLine,
          true
        ),
        /**
         * Static representation of the {@link eWayBillDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_WAY_BILL_DETAILS: fieldBuilder.buildComplexTypeField(
          'EWayBillDetails',
          EWayBillDetailsField,
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
         * Static representation of the {@link documentAdditionalExpenses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ADDITIONAL_EXPENSES: fieldBuilder.buildCollectionField(
          'DocumentAdditionalExpenses',
          DocumentAdditionalExpense,
          true
        ),
        /**
         * Static representation of the {@link documentDistributedExpenses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DISTRIBUTED_EXPENSES: fieldBuilder.buildCollectionField(
          'DocumentDistributedExpenses',
          DocumentDistributedExpense,
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
        /**
         * Static representation of the {@link withholdingTaxDataCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_DATA_COLLECTION: fieldBuilder.buildCollectionField(
          'WithholdingTaxDataCollection',
          WithholdingTaxData,
          true
        ),
        /**
         * Static representation of the {@link documentPackages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_PACKAGES: fieldBuilder.buildCollectionField(
          'DocumentPackages',
          DocumentPackage,
          true
        ),
        /**
         * Static representation of the {@link documentSpecialLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_SPECIAL_LINES: fieldBuilder.buildCollectionField(
          'DocumentSpecialLines',
          DocumentSpecialLine,
          true
        ),
        /**
         * Static representation of the {@link documentInstallments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_INSTALLMENTS: fieldBuilder.buildCollectionField(
          'DocumentInstallments',
          DocumentInstallment,
          true
        ),
        /**
         * Static representation of the {@link downPaymentsToDraw} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENTS_TO_DRAW: fieldBuilder.buildCollectionField(
          'DownPaymentsToDraw',
          DownPaymentToDraw,
          true
        ),
        /**
         * Static representation of the {@link taxExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXTENSION: fieldBuilder.buildComplexTypeField(
          'TaxExtension',
          TaxExtensionField,
          true
        ),
        /**
         * Static representation of the {@link addressExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_EXTENSION: fieldBuilder.buildComplexTypeField(
          'AddressExtension',
          AddressExtensionField,
          true
        ),
        /**
         * Static representation of the {@link documentReferences} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_REFERENCES: fieldBuilder.buildCollectionField(
          'DocumentReferences',
          DocumentReference,
          true
        ),
        /**
         * Static representation of the {@link baseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_TYPE: fieldBuilder.buildEdmTypeField(
          'BaseType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link baseEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_ENTRY: fieldBuilder.buildEdmTypeField(
          'BaseEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link indFinal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IND_FINAL: fieldBuilder.buildEnumField('IndFinal', BoYesNoEnum, true),
        /**
         * Static representation of the {@link soiWizardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOI_WIZARD_ID: fieldBuilder.buildEdmTypeField(
          'SOIWizardId',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Orders)
      };
    }

    return this._schema;
  }
}
