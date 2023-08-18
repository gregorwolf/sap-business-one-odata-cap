/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductionOrders } from './ProductionOrders';
import { ProductionOrdersRequestBuilder } from './ProductionOrdersRequestBuilder';
import { ProductTreesApi } from './ProductTreesApi';
import { UsersApi } from './UsersApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { WarehousesApi } from './WarehousesApi';
import { JournalEntriesApi } from './JournalEntriesApi';
import { DistributionRulesApi } from './DistributionRulesApi';
import { ProjectsApi } from './ProjectsApi';
import { UnitOfMeasurementsApi } from './UnitOfMeasurementsApi';
import { Attachments2Api } from './Attachments2Api';
import { ProductionOrderLine } from './ProductionOrderLine';
import { ProductionOrdersSalesOrderLine } from './ProductionOrdersSalesOrderLine';
import { ProductionOrdersStage } from './ProductionOrdersStage';
import { ProductionOrdersDocumentReference } from './ProductionOrdersDocumentReference';
import { BoProductionOrderStatusEnum } from './BoProductionOrderStatusEnum';
import { BoProductionOrderTypeEnum } from './BoProductionOrderTypeEnum';
import { BoProductionOrderOriginEnum } from './BoProductionOrderOriginEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
import { BoUpdateAllocationEnum } from './BoUpdateAllocationEnum';
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
export class ProductionOrdersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductionOrders<DeSerializersT>, DeSerializersT>
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
  ): ProductionOrdersApi<DeSerializersT> {
    return new ProductionOrdersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productTree} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TREE: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      ProductTreesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_2: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE_6: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductTreesApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      JournalEntriesApi<DeSerializersT>,
      DistributionRulesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      UnitOfMeasurementsApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_TREE: new OneToOneLink('ProductTree', this, linkedApis[0]),
      USER: new OneToOneLink('User', this, linkedApis[1]),
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[2]
      ),
      WAREHOUSE_2: new OneToOneLink('Warehouse2', this, linkedApis[3]),
      JOURNAL_ENTRY: new OneToOneLink('JournalEntry', this, linkedApis[4]),
      DISTRIBUTION_RULE_6: new OneToOneLink(
        'DistributionRule6',
        this,
        linkedApis[5]
      ),
      PROJECT_2: new OneToOneLink('Project2', this, linkedApis[6]),
      UNIT_OF_MEASUREMENT: new OneToOneLink(
        'UnitOfMeasurement',
        this,
        linkedApis[7]
      ),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[8])
    };
    return this;
  }

  entityConstructor = ProductionOrders;

  requestBuilder(): ProductionOrdersRequestBuilder<DeSerializersT> {
    return new ProductionOrdersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductionOrders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductionOrders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductionOrders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductionOrders, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductionOrders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABSOLUTE_ENTRY: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ITEM_NO: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_ORDER_STATUS: EnumField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      BoProductionOrderStatusEnum,
      true,
      true
    >;
    PRODUCTION_ORDER_TYPE: EnumField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      BoProductionOrderTypeEnum,
      true,
      true
    >;
    PLANNED_QUANTITY: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COMPLETED_QUANTITY: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    REJECTED_QUANTITY: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PRODUCTION_ORDER_ORIGIN_ENTRY: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRODUCTION_ORDER_ORIGIN_NUMBER: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRODUCTION_ORDER_ORIGIN: EnumField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      BoProductionOrderOriginEnum,
      true,
      true
    >;
    USER_SIGNATURE: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSING_DATE: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    RELEASE_DATE: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CUSTOMER_CODE: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_UOM: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_REMARKS: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PRINTED: EnumField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DISTRIBUTION_RULE: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_2: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_3: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_4: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_5: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UO_M_ENTRY: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ROUTING_DATE_CALCULATION: EnumField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      ResourceAllocationEnum,
      true,
      true
    >;
    UPDATE_ALLOCATION: EnumField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      BoUpdateAllocationEnum,
      true,
      true
    >;
    SAP_PASSPORT: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRODUCTION_ORDER_LINES: CollectionField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      ProductionOrderLine,
      true,
      true
    >;
    PRODUCTION_ORDERS_SALES_ORDER_LINES: CollectionField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      ProductionOrdersSalesOrderLine,
      true,
      true
    >;
    PRODUCTION_ORDERS_STAGES: CollectionField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      ProductionOrdersStage,
      true,
      true
    >;
    PRODUCTION_ORDERS_DOCUMENT_REFERENCES: CollectionField<
      ProductionOrders<DeSerializers>,
      DeSerializersT,
      ProductionOrdersDocumentReference,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productTree} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TREE: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      ProductTreesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_2: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRY: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE_6: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      ProductionOrders<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductionOrders<DeSerializers>>;
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
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link itemNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NO: fieldBuilder.buildEdmTypeField('ItemNo', 'Edm.String', true),
        /**
         * Static representation of the {@link productionOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_STATUS: fieldBuilder.buildEnumField(
          'ProductionOrderStatus',
          BoProductionOrderStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link productionOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_TYPE: fieldBuilder.buildEnumField(
          'ProductionOrderType',
          BoProductionOrderTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link plannedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PlannedQuantity',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link completedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CompletedQuantity',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link rejectedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REJECTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RejectedQuantity',
          'Edm.Double',
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
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link productionOrderOriginEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_ORIGIN_ENTRY: fieldBuilder.buildEdmTypeField(
          'ProductionOrderOriginEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link productionOrderOriginNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_ORIGIN_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductionOrderOriginNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link productionOrderOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_ORIGIN: fieldBuilder.buildEnumField(
          'ProductionOrderOrigin',
          BoProductionOrderOriginEnum,
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
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
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
         * Static representation of the {@link releaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'ReleaseDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link customerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryUom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UOM: fieldBuilder.buildEdmTypeField(
          'InventoryUOM',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.Int32',
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
         * Static representation of the {@link printed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTED: fieldBuilder.buildEnumField('Printed', BoYesNoEnum, true),
        /**
         * Static representation of the {@link distributionRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE: fieldBuilder.buildEdmTypeField(
          'DistributionRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link project} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT: fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true),
        /**
         * Static representation of the {@link distributionRule2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_2: fieldBuilder.buildEdmTypeField(
          'DistributionRule2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionRule3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_3: fieldBuilder.buildEdmTypeField(
          'DistributionRule3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionRule4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_4: fieldBuilder.buildEdmTypeField(
          'DistributionRule4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionRule5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_5: fieldBuilder.buildEdmTypeField(
          'DistributionRule5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uoMEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UO_M_ENTRY: fieldBuilder.buildEdmTypeField(
          'UoMEntry',
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
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField('Priority', 'Edm.Int32', true),
        /**
         * Static representation of the {@link routingDateCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTING_DATE_CALCULATION: fieldBuilder.buildEnumField(
          'RoutingDateCalculation',
          ResourceAllocationEnum,
          true
        ),
        /**
         * Static representation of the {@link updateAllocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_ALLOCATION: fieldBuilder.buildEnumField(
          'UpdateAllocation',
          BoUpdateAllocationEnum,
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
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link productionOrderLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_LINES: fieldBuilder.buildCollectionField(
          'ProductionOrderLines',
          ProductionOrderLine,
          true
        ),
        /**
         * Static representation of the {@link productionOrdersSalesOrderLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDERS_SALES_ORDER_LINES: fieldBuilder.buildCollectionField(
          'ProductionOrdersSalesOrderLines',
          ProductionOrdersSalesOrderLine,
          true
        ),
        /**
         * Static representation of the {@link productionOrdersStages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDERS_STAGES: fieldBuilder.buildCollectionField(
          'ProductionOrdersStages',
          ProductionOrdersStage,
          true
        ),
        /**
         * Static representation of the {@link productionOrdersDocumentReferences} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDERS_DOCUMENT_REFERENCES:
          fieldBuilder.buildCollectionField(
            'ProductionOrdersDocumentReferences',
            ProductionOrdersDocumentReference,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductionOrders)
      };
    }

    return this._schema;
  }
}
