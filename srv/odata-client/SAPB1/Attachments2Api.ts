/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Attachments2 } from './Attachments2';
import { Attachments2RequestBuilder } from './Attachments2RequestBuilder';
import { ChecksforPaymentApi } from './ChecksforPaymentApi';
import { CustomerEquipmentCardsApi } from './CustomerEquipmentCardsApi';
import { JournalEntriesApi } from './JournalEntriesApi';
import { ServiceContractsApi } from './ServiceContractsApi';
import { InventoryCountingsApi } from './InventoryCountingsApi';
import { InventoryOpeningBalancesApi } from './InventoryOpeningBalancesApi';
import { InventoryPostingsApi } from './InventoryPostingsApi';
import { BlanketAgreementsApi } from './BlanketAgreementsApi';
import { CampaignsApi } from './CampaignsApi';
import { PaymentDraftsApi } from './PaymentDraftsApi';
import { ProductionOrdersApi } from './ProductionOrdersApi';
import { ProjectManagementTimeSheetApi } from './ProjectManagementTimeSheetApi';
import { ProjectManagementsApi } from './ProjectManagementsApi';
import { IncomingPaymentsApi } from './IncomingPaymentsApi';
import { DepositsApi } from './DepositsApi';
import { VendorPaymentsApi } from './VendorPaymentsApi';
import { Attachments2Line } from './Attachments2Line';
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
  CollectionField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class Attachments2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Attachments2<DeSerializersT>, DeSerializersT>
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
  ): Attachments2Api<DeSerializersT> {
    return new Attachments2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link checksforPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKSFOR_PAYMENT: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      ChecksforPaymentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link journalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRIES: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceContracts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CONTRACTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      ServiceContractsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryCountings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTINGS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      InventoryCountingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryOpeningBalances} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_OPENING_BALANCES: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      InventoryOpeningBalancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryPostings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_POSTINGS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      InventoryPostingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link campaigns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CAMPAIGNS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      CampaignsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagementTimeSheet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENT_TIME_SHEET: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      ProjectManagementTimeSheetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      ProjectManagementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deposits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPOSITS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      DepositsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChecksforPaymentApi<DeSerializersT>,
      CustomerEquipmentCardsApi<DeSerializersT>,
      JournalEntriesApi<DeSerializersT>,
      ServiceContractsApi<DeSerializersT>,
      InventoryCountingsApi<DeSerializersT>,
      InventoryOpeningBalancesApi<DeSerializersT>,
      InventoryPostingsApi<DeSerializersT>,
      BlanketAgreementsApi<DeSerializersT>,
      CampaignsApi<DeSerializersT>,
      PaymentDraftsApi<DeSerializersT>,
      ProductionOrdersApi<DeSerializersT>,
      ProjectManagementTimeSheetApi<DeSerializersT>,
      ProjectManagementsApi<DeSerializersT>,
      IncomingPaymentsApi<DeSerializersT>,
      DepositsApi<DeSerializersT>,
      VendorPaymentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHECKSFOR_PAYMENT: new OneToManyLink(
        'ChecksforPayment',
        this,
        linkedApis[0]
      ),
      CUSTOMER_EQUIPMENT_CARDS: new OneToManyLink(
        'CustomerEquipmentCards',
        this,
        linkedApis[1]
      ),
      JOURNAL_ENTRIES: new OneToManyLink('JournalEntries', this, linkedApis[2]),
      SERVICE_CONTRACTS: new OneToManyLink(
        'ServiceContracts',
        this,
        linkedApis[3]
      ),
      INVENTORY_COUNTINGS: new OneToManyLink(
        'InventoryCountings',
        this,
        linkedApis[4]
      ),
      INVENTORY_OPENING_BALANCES: new OneToManyLink(
        'InventoryOpeningBalances',
        this,
        linkedApis[5]
      ),
      INVENTORY_POSTINGS: new OneToManyLink(
        'InventoryPostings',
        this,
        linkedApis[6]
      ),
      BLANKET_AGREEMENTS: new OneToManyLink(
        'BlanketAgreements',
        this,
        linkedApis[7]
      ),
      CAMPAIGNS: new OneToManyLink('Campaigns', this, linkedApis[8]),
      PAYMENT_DRAFTS: new OneToManyLink('PaymentDrafts', this, linkedApis[9]),
      PRODUCTION_ORDERS: new OneToManyLink(
        'ProductionOrders',
        this,
        linkedApis[10]
      ),
      PROJECT_MANAGEMENT_TIME_SHEET: new OneToManyLink(
        'ProjectManagementTimeSheet',
        this,
        linkedApis[11]
      ),
      PROJECT_MANAGEMENTS: new OneToManyLink(
        'ProjectManagements',
        this,
        linkedApis[12]
      ),
      INCOMING_PAYMENTS: new OneToManyLink(
        'IncomingPayments',
        this,
        linkedApis[13]
      ),
      DEPOSITS: new OneToManyLink('Deposits', this, linkedApis[14]),
      VENDOR_PAYMENTS: new OneToManyLink('VendorPayments', this, linkedApis[15])
    };
    return this;
  }

  entityConstructor = Attachments2;

  requestBuilder(): Attachments2RequestBuilder<DeSerializersT> {
    return new Attachments2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Attachments2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Attachments2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Attachments2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Attachments2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Attachments2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABSOLUTE_ENTRY: OrderableEdmTypeField<
      Attachments2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ATTACHMENTS_2_LINES: CollectionField<
      Attachments2<DeSerializers>,
      DeSerializersT,
      Attachments2Line,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checksforPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKSFOR_PAYMENT: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      ChecksforPaymentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link journalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRIES: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceContracts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CONTRACTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      ServiceContractsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryCountings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTINGS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      InventoryCountingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryOpeningBalances} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_OPENING_BALANCES: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      InventoryOpeningBalancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryPostings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_POSTINGS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      InventoryPostingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link campaigns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CAMPAIGNS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      CampaignsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagementTimeSheet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENT_TIME_SHEET: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      ProjectManagementTimeSheetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectManagements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_MANAGEMENTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      ProjectManagementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deposits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPOSITS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      DepositsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      Attachments2<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Attachments2<DeSerializers>>;
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
         * Static representation of the {@link attachments2Lines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENTS_2_LINES: fieldBuilder.buildCollectionField(
          'Attachments2_Lines',
          Attachments2Line,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Attachments2)
      };
    }

    return this._schema;
  }
}
