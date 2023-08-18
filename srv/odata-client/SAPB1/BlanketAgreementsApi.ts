/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BlanketAgreements } from './BlanketAgreements';
import { BlanketAgreementsRequestBuilder } from './BlanketAgreementsRequestBuilder';
import { JournalEntriesApi } from './JournalEntriesApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { Attachments2Api } from './Attachments2Api';
import { PaymentTermsTypesApi } from './PaymentTermsTypesApi';
import { PriceListsApi } from './PriceListsApi';
import { WizardPaymentMethodsApi } from './WizardPaymentMethodsApi';
import { ShippingTypesApi } from './ShippingTypesApi';
import { ProjectsApi } from './ProjectsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { PaymentDraftsApi } from './PaymentDraftsApi';
import { IncomingPaymentsApi } from './IncomingPaymentsApi';
import { VendorPaymentsApi } from './VendorPaymentsApi';
import { BlanketAgreementsItemsLine } from './BlanketAgreementsItemsLine';
import { BlanketAgreementTypeEnum } from './BlanketAgreementTypeEnum';
import { BlanketAgreementStatusEnum } from './BlanketAgreementStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BlanketAgreementMethodEnum } from './BlanketAgreementMethodEnum';
import { PriceModeEnum } from './PriceModeEnum';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BlanketAgreementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BlanketAgreements<DeSerializersT>, DeSerializersT>
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
  ): BlanketAgreementsApi<DeSerializersT> {
    return new BlanketAgreementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link journalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRIES: OneToManyLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTermsType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPE: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceList2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_LIST_2: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      PriceListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link wizardPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHOD: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingType2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_TYPE_2: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalEntriesApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>,
      PaymentTermsTypesApi<DeSerializersT>,
      PriceListsApi<DeSerializersT>,
      WizardPaymentMethodsApi<DeSerializersT>,
      ShippingTypesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      PaymentDraftsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      IncomingPaymentsApi<DeSerializersT>,
      VendorPaymentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_ENTRIES: new OneToManyLink('JournalEntries', this, linkedApis[0]),
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[1]
      ),
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[2]),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[3]),
      PAYMENT_TERMS_TYPE: new OneToOneLink(
        'PaymentTermsType',
        this,
        linkedApis[4]
      ),
      PRICE_LIST_2: new OneToOneLink('PriceList2', this, linkedApis[5]),
      WIZARD_PAYMENT_METHOD: new OneToOneLink(
        'WizardPaymentMethod',
        this,
        linkedApis[6]
      ),
      SHIPPING_TYPE_2: new OneToOneLink('ShippingType2', this, linkedApis[7]),
      PROJECT_2: new OneToOneLink('Project2', this, linkedApis[8]),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[9]),
      PAYMENT_DRAFTS: new OneToManyLink('PaymentDrafts', this, linkedApis[10]),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[11]
      ),
      INCOMING_PAYMENTS: new OneToManyLink(
        'IncomingPayments',
        this,
        linkedApis[12]
      ),
      VENDOR_PAYMENTS: new OneToManyLink('VendorPayments', this, linkedApis[13])
    };
    return this;
  }

  entityConstructor = BlanketAgreements;

  requestBuilder(): BlanketAgreementsRequestBuilder<DeSerializersT> {
    return new BlanketAgreementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BlanketAgreements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BlanketAgreements<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BlanketAgreements<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BlanketAgreements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BlanketAgreements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AGREEMENT_NO: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BP_CODE: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_NAME: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_CODE: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TERMINATE_DATE: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_TYPE: EnumField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      BlanketAgreementTypeEnum,
      true,
      true
    >;
    STATUS: EnumField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      BlanketAgreementStatusEnum,
      true,
      true
    >;
    OWNER: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IGNORE_PRICES_IN_AGREEMENT: EnumField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RENEWAL: EnumField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REMIND_UNIT: EnumField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      BoRemindUnits,
      true,
      true
    >;
    REMIND_TIME: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SETTLEMENT_PROBABILITY: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    AGREEMENT_METHOD: EnumField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      BlanketAgreementMethodEnum,
      true,
      true
    >;
    PAYMENT_TERMS: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRICE_LIST: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SIGNING_DATE: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    AMENDMENT_TO: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HAND_WRITTEN: EnumField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PERIOD_INDICATOR: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SHIPPING_TYPE: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NUM_AT_CARD: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_MODE: EnumField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      PriceModeEnum,
      true,
      true
    >;
    BP_CURRENCY: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAP_PASSPORT: OrderableEdmTypeField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLANKET_AGREEMENTS_ITEMS_LINES: CollectionField<
      BlanketAgreements<DeSerializers>,
      DeSerializersT,
      BlanketAgreementsItemsLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link journalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRIES: OneToManyLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTermsType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPE: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceList2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_LIST_2: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      PriceListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link wizardPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHOD: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingType2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_TYPE_2: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      ShippingTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      BlanketAgreements<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BlanketAgreements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link agreementNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_NO: fieldBuilder.buildEdmTypeField(
          'AgreementNo',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CODE: fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true),
        /**
         * Static representation of the {@link bpName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_NAME: fieldBuilder.buildEdmTypeField('BPName', 'Edm.String', true),
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
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link terminateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINATE_DATE: fieldBuilder.buildEdmTypeField(
          'TerminateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_TYPE: fieldBuilder.buildEnumField(
          'AgreementType',
          BlanketAgreementTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BlanketAgreementStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEdmTypeField('Owner', 'Edm.Int32', true),
        /**
         * Static representation of the {@link ignorePricesInAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IGNORE_PRICES_IN_AGREEMENT: fieldBuilder.buildEnumField(
          'IgnorePricesInAgreement',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link renewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL: fieldBuilder.buildEnumField('Renewal', BoYesNoEnum, true),
        /**
         * Static representation of the {@link remindUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMIND_UNIT: fieldBuilder.buildEnumField(
          'RemindUnit',
          BoRemindUnits,
          true
        ),
        /**
         * Static representation of the {@link remindTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMIND_TIME: fieldBuilder.buildEdmTypeField(
          'RemindTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
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
         * Static representation of the {@link settlementProbability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_PROBABILITY: fieldBuilder.buildEdmTypeField(
          'SettlementProbability',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link agreementMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_METHOD: fieldBuilder.buildEnumField(
          'AgreementMethod',
          BlanketAgreementMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link paymentTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS: fieldBuilder.buildEdmTypeField(
          'PaymentTerms',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link priceList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_LIST: fieldBuilder.buildEdmTypeField(
          'PriceList',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link signingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNING_DATE: fieldBuilder.buildEdmTypeField(
          'SigningDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link amendmentTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMENDMENT_TO: fieldBuilder.buildEdmTypeField(
          'AmendmentTo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true),
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
         * Static representation of the {@link periodIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_INDICATOR: fieldBuilder.buildEdmTypeField(
          'PeriodIndicator',
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
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link shippingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_TYPE: fieldBuilder.buildEdmTypeField(
          'ShippingType',
          'Edm.Int32',
          true
        ),
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
         * Static representation of the {@link project} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT: fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true),
        /**
         * Static representation of the {@link priceMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_MODE: fieldBuilder.buildEnumField(
          'PriceMode',
          PriceModeEnum,
          true
        ),
        /**
         * Static representation of the {@link bpCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CURRENCY: fieldBuilder.buildEdmTypeField(
          'BPCurrency',
          'Edm.String',
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
         * Static representation of the {@link blanketAgreementsItemsLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLANKET_AGREEMENTS_ITEMS_LINES: fieldBuilder.buildCollectionField(
          'BlanketAgreements_ItemsLines',
          BlanketAgreementsItemsLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BlanketAgreements)
      };
    }

    return this._schema;
  }
}
