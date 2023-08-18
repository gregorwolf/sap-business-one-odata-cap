/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Warehouses } from './Warehouses';
import { WarehousesRequestBuilder } from './WarehousesRequestBuilder';
import { UserDefaultGroupsApi } from './UserDefaultGroupsApi';
import { StockTransfersApi } from './StockTransfersApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { SalesTaxCodesApi } from './SalesTaxCodesApi';
import { CountriesApi } from './CountriesApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { BinLocationsApi } from './BinLocationsApi';
import { GlAccountAdvancedRulesApi } from './GlAccountAdvancedRulesApi';
import { InventoryTransferRequestsApi } from './InventoryTransferRequestsApi';
import { ResourceCapacitiesApi } from './ResourceCapacitiesApi';
import { StockTransferDraftsApi } from './StockTransferDraftsApi';
import { ProductionOrdersApi } from './ProductionOrdersApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { StockTakingsApi } from './StockTakingsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoDocWhsAutoIssueMethod } from './BoDocWhsAutoIssueMethod';
import { ReceivingBinLocationsMethodEnum } from './ReceivingBinLocationsMethodEnum';
import { AutoAllocOnReceiptMethodEnum } from './AutoAllocOnReceiptMethodEnum';
import { ReceivingUpToMethodEnum } from './ReceivingUpToMethodEnum';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WarehousesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Warehouses<DeSerializersT>, DeSerializersT>
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
  ): WarehousesApi<DeSerializersT> {
    return new WarehousesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransfers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      StockTransfersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      SalesTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link binLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATION: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTransferRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TRANSFER_REQUESTS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      InventoryTransferRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resourceCapacities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CAPACITIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ResourceCapacitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransferDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFER_DRAFTS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      StockTransferDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTakings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TAKINGS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      StockTakingsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UserDefaultGroupsApi<DeSerializersT>,
      StockTransfersApi<DeSerializersT>,
      ChartOfAccountsApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      SalesTaxCodesApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      BinLocationsApi<DeSerializersT>,
      BinLocationsApi<DeSerializersT>,
      GlAccountAdvancedRulesApi<DeSerializersT>,
      InventoryTransferRequestsApi<DeSerializersT>,
      ResourceCapacitiesApi<DeSerializersT>,
      StockTransferDraftsApi<DeSerializersT>,
      ProductionOrdersApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>,
      StockTakingsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      USER_DEFAULT_GROUPS: new OneToManyLink(
        'UserDefaultGroups',
        this,
        linkedApis[0]
      ),
      STOCK_TRANSFERS: new OneToManyLink('StockTransfers', this, linkedApis[1]),
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[2]),
      WAREHOUSE_LOCATION: new OneToOneLink(
        'WarehouseLocation',
        this,
        linkedApis[3]
      ),
      SALES_TAX_CODE: new OneToOneLink('SalesTaxCode', this, linkedApis[4]),
      COUNTRY_2: new OneToOneLink('Country2', this, linkedApis[5]),
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[6]),
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[7]
      ),
      BIN_LOCATION: new OneToOneLink('BinLocation', this, linkedApis[8]),
      BIN_LOCATIONS: new OneToManyLink('BinLocations', this, linkedApis[9]),
      GL_ACCOUNT_ADVANCED_RULES: new OneToManyLink(
        'GLAccountAdvancedRules',
        this,
        linkedApis[10]
      ),
      INVENTORY_TRANSFER_REQUESTS: new OneToManyLink(
        'InventoryTransferRequests',
        this,
        linkedApis[11]
      ),
      RESOURCE_CAPACITIES: new OneToManyLink(
        'ResourceCapacities',
        this,
        linkedApis[12]
      ),
      STOCK_TRANSFER_DRAFTS: new OneToManyLink(
        'StockTransferDrafts',
        this,
        linkedApis[13]
      ),
      PRODUCTION_ORDERS: new OneToManyLink(
        'ProductionOrders',
        this,
        linkedApis[14]
      ),
      BUSINESS_PLACES: new OneToManyLink(
        'BusinessPlaces',
        this,
        linkedApis[15]
      ),
      STOCK_TAKINGS: new OneToManyLink('StockTakings', this, linkedApis[16])
    };
    return this;
  }

  entityConstructor = Warehouses;

  requestBuilder(): WarehousesRequestBuilder<DeSerializersT> {
    return new WarehousesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Warehouses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Warehouses<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Warehouses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Warehouses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Warehouses, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STREET: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_INFLATION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECREASING_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_REVENUES_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURNING_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPED_GOODS_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_INFLATION_ADJUST_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_USE_TAX: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    COST_INFLATION_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_EXPENSES_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_EXPENSES_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_INFLATION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSES_CLEARING_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_RETURNING_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_IN_REVENUE_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEDERAL_TAX_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BLOCK: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECREASE_GL_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUES_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT_REVENUES_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_OFFSET_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OF_GOODS_SOLD: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_CODE: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_DIFFERENCES_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANCE_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCREASE_GL_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_DIFFERENCES_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WIP_MATERIAL_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_NAME: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_SHIP: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WIP_MATERIAL_VARIANCE_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFERS_ACC: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNAL_KEY: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FOREIGN_REVENUES_ACC: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING_FLOOR_ROOM: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NETTABLE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCREASING_ACC: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_OFFSETING_ACT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_CLEARING_ACC: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PLACE_ID: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_CREDIT_ACC: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_PURCHASE_CREDIT_ACC: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_PURCHASE_CREDIT_ACC: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CREDIT_ACC: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CREDIT_EU_ACC: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPTED_CREDITS: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CREDIT_FOREIGN_ACC: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WH_SHIP_TO_NAME: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISABLE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WH_INCOMING_CENVAT_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WH_OUTGOING_CENVAT_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_IN_TRANSIT_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TYPE: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NO: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOREKEEPER: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SHIPPER: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANAGE_SERIAL_AND_BATCH_NUMBERS: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    GLOBAL_LOCATION_NUMBER: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_BIN_LOCATIONS: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BIN_LOC_CODE_SEPARATOR: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_BIN: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEFAULT_BIN_ENFORCED: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AUTO_ALLOC_ON_ISSUE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoDocWhsAutoIssueMethod,
      true,
      true
    >;
    ENABLE_RECEIVING_BIN_LOCATIONS: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RECEIVING_BIN_LOCATIONS_BY: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      ReceivingBinLocationsMethodEnum,
      true,
      true
    >;
    PURCHASE_BALANCE_ACCOUNT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INACTIVE: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RESTRICT_RECEIPT_TO_EMPTY_BIN_LOCATION: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RECEIVE_UP_TO_MAX_QUANTITY: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AUTO_ALLOC_ON_RECEIPT: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      AutoAllocOnReceiptMethodEnum,
      true,
      true
    >;
    RECEIVE_UP_TO_MAX_WEIGHT: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RECEIVE_UP_TO_METHOD: EnumField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      ReceivingUpToMethodEnum,
      true,
      true
    >;
    LEGAL_TEXT: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_NAME_2: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_NAME_3: OrderableEdmTypeField<
      Warehouses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userDefaultGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_DEFAULT_GROUPS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      UserDefaultGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransfers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      StockTransfersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      SalesTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link binLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATION: OneToOneLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTransferRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TRANSFER_REQUESTS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      InventoryTransferRequestsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resourceCapacities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CAPACITIES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ResourceCapacitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransferDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFER_DRAFTS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      StockTransferDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTakings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TAKINGS: OneToManyLink<
      Warehouses<DeSerializersT>,
      DeSerializersT,
      StockTakingsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Warehouses<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link stockInflationOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_INFLATION_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'StockInflationOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link decreasingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECREASING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DecreasingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PurchaseAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link euRevenuesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_REVENUES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'EURevenuesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returningAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURNING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ReturningAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippedGoodsAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_GOODS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShippedGoodsAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stockInflationAdjustAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_INFLATION_ADJUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'StockInflationAdjustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowUseTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_USE_TAX: fieldBuilder.buildEnumField(
          'AllowUseTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link costInflationAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_INFLATION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CostInflationAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignExpensesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_EXPENSES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ForeignExpensesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link euExpensesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_EXPENSES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'EUExpensesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costInflationOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_INFLATION_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CostInflationOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expensesClearingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSES_CLEARING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExpensesClearingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseReturningAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_RETURNING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PurchaseReturningAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatInRevenueAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_IN_REVENUE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VATInRevenueAccount',
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
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField('Location', 'Edm.Int32', true),
        /**
         * Static representation of the {@link block} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK: fieldBuilder.buildEdmTypeField('Block', 'Edm.String', true),
        /**
         * Static representation of the {@link expenseAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExpenseAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link decreaseGlAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECREASE_GL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DecreaseGLAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenuesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RevenuesAccount',
          'Edm.String',
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
         * Static representation of the {@link exemptRevenuesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_REVENUES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExemptRevenuesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PurchaseOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costOfGoodsSold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OF_GOODS_SOLD: fieldBuilder.buildEdmTypeField(
          'CostOfGoodsSold',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_CODE: fieldBuilder.buildEdmTypeField(
          'WarehouseCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link priceDifferencesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DIFFERENCES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PriceDifferencesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link varianceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANCE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VarianceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link increaseGlAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCREASE_GL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'IncreaseGLAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRateDifferencesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_DIFFERENCES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExchangeRateDifferencesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wipMaterialAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_MATERIAL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WIPMaterialAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_NAME: fieldBuilder.buildEdmTypeField(
          'WarehouseName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropShip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_SHIP: fieldBuilder.buildEnumField('DropShip', BoYesNoEnum, true),
        /**
         * Static representation of the {@link wipMaterialVarianceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_MATERIAL_VARIANCE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WIPMaterialVarianceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transfersAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERS_ACC: fieldBuilder.buildEdmTypeField(
          'TransfersAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internalKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_KEY: fieldBuilder.buildEdmTypeField(
          'InternalKey',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link foreignRevenuesAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_REVENUES_ACC: fieldBuilder.buildEdmTypeField(
          'ForeignRevenuesAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link buildingFloorRoom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING_FLOOR_ROOM: fieldBuilder.buildEdmTypeField(
          'BuildingFloorRoom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link nettable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NETTABLE: fieldBuilder.buildEnumField('Nettable', BoYesNoEnum, true),
        /**
         * Static representation of the {@link increasingAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCREASING_ACC: fieldBuilder.buildEdmTypeField(
          'IncreasingAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseOffsetingAct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_OFFSETING_ACT: fieldBuilder.buildEdmTypeField(
          'ExpenseOffsetingAct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsClearingAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_CLEARING_ACC: fieldBuilder.buildEdmTypeField(
          'GoodsClearingAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stockAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'StockAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPlaceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PLACE_ID: fieldBuilder.buildEdmTypeField(
          'BusinessPlaceID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link purchaseCreditAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_CREDIT_ACC: fieldBuilder.buildEdmTypeField(
          'PurchaseCreditAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link euPurchaseCreditAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_PURCHASE_CREDIT_ACC: fieldBuilder.buildEdmTypeField(
          'EUPurchaseCreditAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignPurchaseCreditAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_PURCHASE_CREDIT_ACC: fieldBuilder.buildEdmTypeField(
          'ForeignPurchaseCreditAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCreditAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CREDIT_ACC: fieldBuilder.buildEdmTypeField(
          'SalesCreditAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCreditEuAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CREDIT_EU_ACC: fieldBuilder.buildEdmTypeField(
          'SalesCreditEUAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exemptedCredits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPTED_CREDITS: fieldBuilder.buildEdmTypeField(
          'ExemptedCredits',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCreditForeignAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CREDIT_FOREIGN_ACC: fieldBuilder.buildEdmTypeField(
          'SalesCreditForeignAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link negativeInventoryAdjustmentAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'NegativeInventoryAdjustmentAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link whShipToName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WH_SHIP_TO_NAME: fieldBuilder.buildEdmTypeField(
          'WHShipToName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link excisable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISABLE: fieldBuilder.buildEnumField('Excisable', BoYesNoEnum, true),
        /**
         * Static representation of the {@link whIncomingCenvatAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WH_INCOMING_CENVAT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WHIncomingCenvatAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link whOutgoingCenvatAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WH_OUTGOING_CENVAT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WHOutgoingCenvatAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stockInTransitAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_IN_TRANSIT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'StockInTransitAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wipOffsetProfitAndLossAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WipOffsetProfitAndLossAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryOffsetProfitAndLossAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT:
          fieldBuilder.buildEdmTypeField(
            'InventoryOffsetProfitAndLossAccount',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link addressType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TYPE: fieldBuilder.buildEdmTypeField(
          'AddressType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link streetNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NO: fieldBuilder.buildEdmTypeField(
          'StreetNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storekeeper} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOREKEEPER: fieldBuilder.buildEdmTypeField(
          'Storekeeper',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link shipper} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPER: fieldBuilder.buildEdmTypeField('Shipper', 'Edm.String', true),
        /**
         * Static representation of the {@link manageSerialAndBatchNumbers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGE_SERIAL_AND_BATCH_NUMBERS: fieldBuilder.buildEnumField(
          'ManageSerialAndBatchNumbers',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link globalLocationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_LOCATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'GlobalLocationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableBinLocations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_BIN_LOCATIONS: fieldBuilder.buildEnumField(
          'EnableBinLocations',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link binLocCodeSeparator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIN_LOC_CODE_SEPARATOR: fieldBuilder.buildEdmTypeField(
          'BinLocCodeSeparator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultBin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BIN: fieldBuilder.buildEdmTypeField(
          'DefaultBin',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link defaultBinEnforced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BIN_ENFORCED: fieldBuilder.buildEnumField(
          'DefaultBinEnforced',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link autoAllocOnIssue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_ALLOC_ON_ISSUE: fieldBuilder.buildEnumField(
          'AutoAllocOnIssue',
          BoDocWhsAutoIssueMethod,
          true
        ),
        /**
         * Static representation of the {@link enableReceivingBinLocations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_RECEIVING_BIN_LOCATIONS: fieldBuilder.buildEnumField(
          'EnableReceivingBinLocations',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link receivingBinLocationsBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_BIN_LOCATIONS_BY: fieldBuilder.buildEnumField(
          'ReceivingBinLocationsBy',
          ReceivingBinLocationsMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link purchaseBalanceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_BALANCE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PurchaseBalanceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE: fieldBuilder.buildEnumField('Inactive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link restrictReceiptToEmptyBinLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICT_RECEIPT_TO_EMPTY_BIN_LOCATION: fieldBuilder.buildEnumField(
          'RestrictReceiptToEmptyBinLocation',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link receiveUpToMaxQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVE_UP_TO_MAX_QUANTITY: fieldBuilder.buildEnumField(
          'ReceiveUpToMaxQuantity',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link autoAllocOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_ALLOC_ON_RECEIPT: fieldBuilder.buildEnumField(
          'AutoAllocOnReceipt',
          AutoAllocOnReceiptMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link receiveUpToMaxWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVE_UP_TO_MAX_WEIGHT: fieldBuilder.buildEnumField(
          'ReceiveUpToMaxWeight',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link receiveUpToMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVE_UP_TO_METHOD: fieldBuilder.buildEnumField(
          'ReceiveUpToMethod',
          ReceivingUpToMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link legalText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_TEXT: fieldBuilder.buildEdmTypeField(
          'LegalText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_NAME_2: fieldBuilder.buildEdmTypeField(
          'AddressName2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressName3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_NAME_3: fieldBuilder.buildEdmTypeField(
          'AddressName3',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Warehouses)
      };
    }

    return this._schema;
  }
}
