import { ProductionOrdersRequestBuilder } from './ProductionOrdersRequestBuilder';
import { Moment } from 'moment';
import { ProductionOrderLine } from './ProductionOrderLine';
import { ProductionOrdersSalesOrderLine } from './ProductionOrdersSalesOrderLine';
import { ProductionOrdersStage } from './ProductionOrdersStage';
import { BoProductionOrderStatusEnum } from './BoProductionOrderStatusEnum';
import { BoProductionOrderTypeEnum } from './BoProductionOrderTypeEnum';
import { BoProductionOrderOriginEnum } from './BoProductionOrderOriginEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
import { BoUpdateAllocationEnum } from './BoUpdateAllocationEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ProductionOrders" of service "SAPB1".
 */
export declare class ProductionOrders extends EntityV4 implements ProductionOrdersType {
    /**
     * Technical entity name for ProductionOrders.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Document Number.
     * @nullable
     */
    documentNumber?: number;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Item No.
     * @nullable
     */
    itemNo?: string;
    /**
     * Production Order Status.
     * @nullable
     */
    productionOrderStatus?: BoProductionOrderStatusEnum;
    /**
     * Production Order Type.
     * @nullable
     */
    productionOrderType?: BoProductionOrderTypeEnum;
    /**
     * Planned Quantity.
     * @nullable
     */
    plannedQuantity?: number;
    /**
     * Completed Quantity.
     * @nullable
     */
    completedQuantity?: number;
    /**
     * Rejected Quantity.
     * @nullable
     */
    rejectedQuantity?: number;
    /**
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Production Order Origin Entry.
     * @nullable
     */
    productionOrderOriginEntry?: number;
    /**
     * Production Order Origin Number.
     * @nullable
     */
    productionOrderOriginNumber?: number;
    /**
     * Production Order Origin.
     * @nullable
     */
    productionOrderOrigin?: BoProductionOrderOriginEnum;
    /**
     * User Signature.
     * @nullable
     */
    userSignature?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Closing Date.
     * @nullable
     */
    closingDate?: Moment;
    /**
     * Release Date.
     * @nullable
     */
    releaseDate?: Moment;
    /**
     * Customer Code.
     * @nullable
     */
    customerCode?: string;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Inventory Uom.
     * @nullable
     */
    inventoryUom?: string;
    /**
     * Journal Remarks.
     * @nullable
     */
    journalRemarks?: string;
    /**
     * Transaction Number.
     * @nullable
     */
    transactionNumber?: number;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Printed.
     * @nullable
     */
    printed?: BoYesNoEnum;
    /**
     * Distribution Rule.
     * @nullable
     */
    distributionRule?: string;
    /**
     * Project.
     * @nullable
     */
    project?: string;
    /**
     * Distribution Rule 2.
     * @nullable
     */
    distributionRule2?: string;
    /**
     * Distribution Rule 3.
     * @nullable
     */
    distributionRule3?: string;
    /**
     * Distribution Rule 4.
     * @nullable
     */
    distributionRule4?: string;
    /**
     * Distribution Rule 5.
     * @nullable
     */
    distributionRule5?: string;
    /**
     * Uo M Entry.
     * @nullable
     */
    uoMEntry?: number;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Product Description.
     * @nullable
     */
    productDescription?: string;
    /**
     * Priority.
     * @nullable
     */
    priority?: number;
    /**
     * Routing Date Calculation.
     * @nullable
     */
    routingDateCalculation?: ResourceAllocationEnum;
    /**
     * Update Allocation.
     * @nullable
     */
    updateAllocation?: BoUpdateAllocationEnum;
    /**
     * Production Order Lines.
     * @nullable
     */
    productionOrderLines?: ProductionOrderLine[];
    /**
     * Production Orders Sales Order Lines.
     * @nullable
     */
    productionOrdersSalesOrderLines?: ProductionOrdersSalesOrderLine[];
    /**
     * Production Orders Stages.
     * @nullable
     */
    productionOrdersStages?: ProductionOrdersStage[];
    /**
     * One-to-one navigation property to the [[ProductTrees]] entity.
     */
    productTree: ProductTrees;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[Warehouses]] entity.
     */
    warehouse2: Warehouses;
    /**
     * One-to-one navigation property to the [[JournalEntries]] entity.
     */
    journalEntry: JournalEntries;
    /**
     * One-to-one navigation property to the [[DistributionRules]] entity.
     */
    distributionRule6: DistributionRules;
    /**
     * One-to-one navigation property to the [[Projects]] entity.
     */
    project2: Projects;
    /**
     * One-to-one navigation property to the [[UnitOfMeasurements]] entity.
     */
    unitOfMeasurement: UnitOfMeasurements;
    /**
     * Returns an entity builder to construct instances of `ProductionOrders`.
     * @returns A builder that constructs instances of entity type `ProductionOrders`.
     */
    static builder(): EntityBuilderType<ProductionOrders, ProductionOrdersType>;
    /**
     * Returns a request builder to construct requests for operations on the `ProductionOrders` entity type.
     * @returns A `ProductionOrders` request builder.
     */
    static requestBuilder(): ProductionOrdersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProductionOrders`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ProductionOrders`.
     */
    static customField(fieldName: string): CustomFieldV4<ProductionOrders>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ProductTrees, ProductTreesType } from './ProductTrees';
import { Users, UsersType } from './Users';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Warehouses, WarehousesType } from './Warehouses';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { Projects, ProjectsType } from './Projects';
import { UnitOfMeasurements, UnitOfMeasurementsType } from './UnitOfMeasurements';
export interface ProductionOrdersType {
    absoluteEntry?: number | null;
    documentNumber?: number | null;
    series?: number | null;
    itemNo?: string | null;
    productionOrderStatus?: BoProductionOrderStatusEnum | null;
    productionOrderType?: BoProductionOrderTypeEnum | null;
    plannedQuantity?: number | null;
    completedQuantity?: number | null;
    rejectedQuantity?: number | null;
    postingDate?: Moment | null;
    dueDate?: Moment | null;
    productionOrderOriginEntry?: number | null;
    productionOrderOriginNumber?: number | null;
    productionOrderOrigin?: BoProductionOrderOriginEnum | null;
    userSignature?: number | null;
    remarks?: string | null;
    closingDate?: Moment | null;
    releaseDate?: Moment | null;
    customerCode?: string | null;
    warehouse?: string | null;
    inventoryUom?: string | null;
    journalRemarks?: string | null;
    transactionNumber?: number | null;
    creationDate?: Moment | null;
    printed?: BoYesNoEnum | null;
    distributionRule?: string | null;
    project?: string | null;
    distributionRule2?: string | null;
    distributionRule3?: string | null;
    distributionRule4?: string | null;
    distributionRule5?: string | null;
    uoMEntry?: number | null;
    startDate?: Moment | null;
    productDescription?: string | null;
    priority?: number | null;
    routingDateCalculation?: ResourceAllocationEnum | null;
    updateAllocation?: BoUpdateAllocationEnum | null;
    productionOrderLines?: ProductionOrderLine[] | null;
    productionOrdersSalesOrderLines?: ProductionOrdersSalesOrderLine[] | null;
    productionOrdersStages?: ProductionOrdersStage[] | null;
    productTree: ProductTreesType;
    user: UsersType;
    businessPartner: BusinessPartnersType;
    warehouse2: WarehousesType;
    journalEntry: JournalEntriesType;
    distributionRule6: DistributionRulesType;
    project2: ProjectsType;
    unitOfMeasurement: UnitOfMeasurementsType;
}
export declare namespace ProductionOrders {
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABSOLUTE_ENTRY: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_NUMBER: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_NO: StringField<ProductionOrders>;
    /**
     * Static representation of the [[productionOrderStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDER_STATUS: EnumField<ProductionOrders>;
    /**
     * Static representation of the [[productionOrderType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDER_TYPE: EnumField<ProductionOrders>;
    /**
     * Static representation of the [[plannedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_QUANTITY: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[completedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPLETED_QUANTITY: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[rejectedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REJECTED_QUANTITY: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_DATE: DateField<ProductionOrders>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: DateField<ProductionOrders>;
    /**
     * Static representation of the [[productionOrderOriginEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDER_ORIGIN_ENTRY: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[productionOrderOriginNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDER_ORIGIN_NUMBER: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[productionOrderOrigin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDER_ORIGIN: EnumField<ProductionOrders>;
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGNATURE: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<ProductionOrders>;
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSING_DATE: DateField<ProductionOrders>;
    /**
     * Static representation of the [[releaseDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELEASE_DATE: DateField<ProductionOrders>;
    /**
     * Static representation of the [[customerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CODE: StringField<ProductionOrders>;
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE: StringField<ProductionOrders>;
    /**
     * Static representation of the [[inventoryUom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_UOM: StringField<ProductionOrders>;
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_REMARKS: StringField<ProductionOrders>;
    /**
     * Static representation of the [[transactionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_NUMBER: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<ProductionOrders>;
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTED: EnumField<ProductionOrders>;
    /**
     * Static representation of the [[distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE: StringField<ProductionOrders>;
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT: StringField<ProductionOrders>;
    /**
     * Static representation of the [[distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_2: StringField<ProductionOrders>;
    /**
     * Static representation of the [[distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_3: StringField<ProductionOrders>;
    /**
     * Static representation of the [[distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_4: StringField<ProductionOrders>;
    /**
     * Static representation of the [[distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_5: StringField<ProductionOrders>;
    /**
     * Static representation of the [[uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UO_M_ENTRY: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<ProductionOrders>;
    /**
     * Static representation of the [[productDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_DESCRIPTION: StringField<ProductionOrders>;
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY: NumberField<ProductionOrders>;
    /**
     * Static representation of the [[routingDateCalculation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUTING_DATE_CALCULATION: EnumField<ProductionOrders>;
    /**
     * Static representation of the [[updateAllocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_ALLOCATION: EnumField<ProductionOrders>;
    /**
     * Static representation of the [[productionOrderLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDER_LINES: CollectionField<ProductionOrders, ProductionOrderLine>;
    /**
     * Static representation of the [[productionOrdersSalesOrderLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDERS_SALES_ORDER_LINES: CollectionField<ProductionOrders, ProductionOrdersSalesOrderLine>;
    /**
     * Static representation of the [[productionOrdersStages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_ORDERS_STAGES: CollectionField<ProductionOrders, ProductionOrdersStage>;
    /**
     * Static representation of the one-to-one navigation property [[productTree]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_TREE: OneToOneLink<ProductionOrders, ProductTrees>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<ProductionOrders, Users>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<ProductionOrders, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_2: OneToOneLink<ProductionOrders, Warehouses>;
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY: OneToOneLink<ProductionOrders, JournalEntries>;
    /**
     * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_RULE_6: OneToOneLink<ProductionOrders, DistributionRules>;
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECT_2: OneToOneLink<ProductionOrders, Projects>;
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASUREMENT: OneToOneLink<ProductionOrders, UnitOfMeasurements>;
    /**
     * All fields of the ProductionOrders entity.
     */
    const _allFields: Array<NumberField<ProductionOrders> | StringField<ProductionOrders> | EnumField<ProductionOrders> | DateField<ProductionOrders> | CollectionField<ProductionOrders, ProductionOrderLine> | CollectionField<ProductionOrders, ProductionOrdersSalesOrderLine> | CollectionField<ProductionOrders, ProductionOrdersStage> | OneToOneLink<ProductionOrders, ProductTrees> | OneToOneLink<ProductionOrders, Users> | OneToOneLink<ProductionOrders, BusinessPartners> | OneToOneLink<ProductionOrders, Warehouses> | OneToOneLink<ProductionOrders, JournalEntries> | OneToOneLink<ProductionOrders, DistributionRules> | OneToOneLink<ProductionOrders, Projects> | OneToOneLink<ProductionOrders, UnitOfMeasurements>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ProductionOrders>;
    /**
     * All key fields of the ProductionOrders entity.
     */
    const _keyFields: Array<Field<ProductionOrders>>;
    /**
     * Mapping of all key field names to the respective static field property ProductionOrders.
     */
    const _keys: {
        [keys: string]: Field<ProductionOrders>;
    };
}
//# sourceMappingURL=ProductionOrders.d.ts.map