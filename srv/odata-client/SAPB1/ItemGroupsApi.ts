/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemGroups } from './ItemGroups';
import { ItemGroupsRequestBuilder } from './ItemGroupsRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { InventoryCyclesApi } from './InventoryCyclesApi';
import { UnitOfMeasurementGroupsApi } from './UnitOfMeasurementGroupsApi';
import { UnitOfMeasurementsApi } from './UnitOfMeasurementsApi';
import { ServiceCallsApi } from './ServiceCallsApi';
import { ItemsApi } from './ItemsApi';
import { BinLocationsApi } from './BinLocationsApi';
import { GlAccountAdvancedRulesApi } from './GlAccountAdvancedRulesApi';
import { ItemGroupsWarehouseInfo } from './ItemGroupsWarehouseInfo';
import { BoProcurementMethod } from './BoProcurementMethod';
import { BoMrpComponentWarehouse } from './BoMrpComponentWarehouse';
import { BoInventorySystem } from './BoInventorySystem';
import { BoPlanningSystem } from './BoPlanningSystem';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ItemClassEnum } from './ItemClassEnum';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ItemGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ItemGroups<DeSerializersT>, DeSerializersT>
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
  ): ItemGroupsApi<DeSerializersT> {
    return new ItemGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryCycles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_CYCLES: OneToOneLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      InventoryCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurementGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      InventoryCyclesApi<DeSerializersT>,
      UnitOfMeasurementGroupsApi<DeSerializersT>,
      UnitOfMeasurementsApi<DeSerializersT>,
      ServiceCallsApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      BinLocationsApi<DeSerializersT>,
      GlAccountAdvancedRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[0]),
      INVENTORY_CYCLES: new OneToOneLink(
        'InventoryCycles',
        this,
        linkedApis[1]
      ),
      UNIT_OF_MEASUREMENT_GROUP: new OneToOneLink(
        'UnitOfMeasurementGroup',
        this,
        linkedApis[2]
      ),
      UNIT_OF_MEASUREMENT: new OneToOneLink(
        'UnitOfMeasurement',
        this,
        linkedApis[3]
      ),
      SERVICE_CALLS: new OneToManyLink('ServiceCalls', this, linkedApis[4]),
      ITEMS: new OneToManyLink('Items', this, linkedApis[5]),
      BIN_LOCATIONS: new OneToManyLink('BinLocations', this, linkedApis[6]),
      GL_ACCOUNT_ADVANCED_RULES: new OneToManyLink(
        'GLAccountAdvancedRules',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = ItemGroups;

  requestBuilder(): ItemGroupsRequestBuilder<DeSerializersT> {
    return new ItemGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ItemGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ItemGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ItemGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ItemGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRICE_DIFFERENCES_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_INFLATION_ADJUST_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_ORDER_QUANTITY: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ORDER_INTERVAL: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EXCHANGE_RATE_DIFFERENCES_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCREASING_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_INFLATION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_METHOD: EnumField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      BoProcurementMethod,
      true,
      true
    >;
    COMPONENT_WAREHOUSE: EnumField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      BoMrpComponentWarehouse,
      true,
      true
    >;
    PURCHASE_OFFSET_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SYSTEM: EnumField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      BoInventorySystem,
      true,
      true
    >;
    WIP_MATERIAL_VARIANCE_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNING_SYSTEM: EnumField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      BoPlanningSystem,
      true,
      true
    >;
    PURCHASE_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURNING_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_INFLATION_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSES_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUES_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFERS_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEAD_TIME: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ORDER_MULTIPLE: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_INFLATION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECREASE_GL_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GOODS_CLEARING_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCREASE_GL_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_REVENUES_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALERT: EnumField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WIP_MATERIAL_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPED_GOODS_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT_REVENUES_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECREASING_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_IN_REVENUE_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANCE_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_EXPENSES_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_EXPENSES_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CYCLE_CODE: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COST_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_REVENUES_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PA_RETURN_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_CLEARING_ACT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_CREDIT_ACC: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_PURCHASE_CREDIT_ACC: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_PURCHASE_CREDIT_ACC: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CREDIT_ACC: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CREDIT_EU_ACC: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPTED_CREDITS: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CREDIT_FOREIGN_ACC: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_OFFSET_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WH_INCOMING_CENVAT_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WH_OUTGOING_CENVAT_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_IN_TRANSIT_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOLERANCE_DAYS: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEFAULT_UO_M_GROUP: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEFAULT_INVENTORY_UO_M: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_BALANCE_ACCOUNT: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_CLASS: EnumField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      ItemClassEnum,
      true,
      true
    >;
    RAW_MATERIAL: EnumField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    U_BS_WARENGRUPPEN: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_BESCHREIBUNG: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_RABATTGRUPPE_S: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_LIEFERANTENNUMMER: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_DUMMYARTIKEL: OrderableEdmTypeField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_GROUPS_WAREHOUSE_INFOS: CollectionField<
      ItemGroups<DeSerializers>,
      DeSerializersT,
      ItemGroupsWarehouseInfo,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryCycles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_CYCLES: OneToOneLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      InventoryCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurementGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      ItemGroups<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ItemGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link stockInflationAdjustAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_INFLATION_ADJUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'StockInflationAdjustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumOrderQuantity',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link orderInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_INTERVAL: fieldBuilder.buildEdmTypeField(
          'OrderInterval',
          'Edm.Int32',
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
         * Static representation of the {@link increasingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCREASING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'IncreasingAccount',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link procurementMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_METHOD: fieldBuilder.buildEnumField(
          'ProcurementMethod',
          BoProcurementMethod,
          true
        ),
        /**
         * Static representation of the {@link componentWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT_WAREHOUSE: fieldBuilder.buildEnumField(
          'ComponentWarehouse',
          BoMrpComponentWarehouse,
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
         * Static representation of the {@link inventorySystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SYSTEM: fieldBuilder.buildEnumField(
          'InventorySystem',
          BoInventorySystem,
          true
        ),
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
         * Static representation of the {@link planningSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_SYSTEM: fieldBuilder.buildEnumField(
          'PlanningSystem',
          BoPlanningSystem,
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
         * Static representation of the {@link returningAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURNING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ReturningAccount',
          'Edm.String',
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
         * Static representation of the {@link expensesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExpensesAccount',
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
         * Static representation of the {@link transfersAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'TransfersAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leadTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAD_TIME: fieldBuilder.buildEdmTypeField(
          'LeadTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link orderMultiple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_MULTIPLE: fieldBuilder.buildEdmTypeField(
          'OrderMultiple',
          'Edm.Double',
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
         * Static representation of the {@link inventoryAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InventoryAccount',
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
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.Int32', false),
        /**
         * Static representation of the {@link goodsClearingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_CLEARING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'GoodsClearingAccount',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link foreignRevenuesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_REVENUES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ForeignRevenuesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alert} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALERT: fieldBuilder.buildEnumField('Alert', BoYesNoEnum, true),
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
         * Static representation of the {@link shippedGoodsAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_GOODS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShippedGoodsAccount',
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
         * Static representation of the {@link decreasingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECREASING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DecreasingAccount',
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
         * Static representation of the {@link varianceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANCE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VarianceAccount',
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
         * Static representation of the {@link foreignExpensesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_EXPENSES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ForeignExpensesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cycleCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_CODE: fieldBuilder.buildEdmTypeField(
          'CycleCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link costAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CostAccount',
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
         * Static representation of the {@link paReturnAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PA_RETURN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PAReturnAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseClearingAct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_CLEARING_ACT: fieldBuilder.buildEdmTypeField(
          'ExpenseClearingAct',
          'Edm.String',
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
         * Static representation of the {@link expenseOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExpenseOffsetAccount',
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
         * Static representation of the {@link toleranceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_DAYS: fieldBuilder.buildEdmTypeField(
          'ToleranceDays',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link defaultUoMGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_UO_M_GROUP: fieldBuilder.buildEdmTypeField(
          'DefaultUoMGroup',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link defaultInventoryUoM} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENTORY_UO_M: fieldBuilder.buildEdmTypeField(
          'DefaultInventoryUoM',
          'Edm.Int32',
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
         * Static representation of the {@link itemClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CLASS: fieldBuilder.buildEnumField(
          'ItemClass',
          ItemClassEnum,
          true
        ),
        /**
         * Static representation of the {@link rawMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RAW_MATERIAL: fieldBuilder.buildEnumField(
          'RawMaterial',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link uBsWarengruppen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_WARENGRUPPEN: fieldBuilder.buildEdmTypeField(
          'U_BS_Warengruppen',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsBeschreibung} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_BESCHREIBUNG: fieldBuilder.buildEdmTypeField(
          'U_BS_Beschreibung',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsRabattgruppeS} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_RABATTGRUPPE_S: fieldBuilder.buildEdmTypeField(
          'U_BS_Rabattgruppe_S',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsLieferantennummer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_LIEFERANTENNUMMER: fieldBuilder.buildEdmTypeField(
          'U_BS_Lieferantennummer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsDummyartikel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_DUMMYARTIKEL: fieldBuilder.buildEdmTypeField(
          'U_BS_Dummyartikel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemGroupsWarehouseInfos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_GROUPS_WAREHOUSE_INFOS: fieldBuilder.buildCollectionField(
          'ItemGroupsWarehouseInfos',
          ItemGroupsWarehouseInfo,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemGroups)
      };
    }

    return this._schema;
  }
}
