"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionOrders = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ProductionOrdersRequestBuilder_1 = require("./ProductionOrdersRequestBuilder");
var ProductionOrderLine_1 = require("./ProductionOrderLine");
var ProductionOrdersSalesOrderLine_1 = require("./ProductionOrdersSalesOrderLine");
var ProductionOrdersStage_1 = require("./ProductionOrdersStage");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ProductionOrders" of service "SAPB1".
 */
var ProductionOrders = /** @class */ (function (_super) {
    __extends(ProductionOrders, _super);
    function ProductionOrders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ProductionOrders`.
     * @returns A builder that constructs instances of entity type `ProductionOrders`.
     */
    ProductionOrders.builder = function () {
        return v4_1.Entity.entityBuilder(ProductionOrders);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ProductionOrders` entity type.
     * @returns A `ProductionOrders` request builder.
     */
    ProductionOrders.requestBuilder = function () {
        return new ProductionOrdersRequestBuilder_1.ProductionOrdersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProductionOrders`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ProductionOrders`.
     */
    ProductionOrders.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ProductionOrders);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ProductionOrders.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ProductionOrders.
     */
    ProductionOrders._entityName = 'ProductionOrders';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ProductionOrders.
     */
    ProductionOrders._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ProductionOrders._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ProductionOrders;
}(v4_1.Entity));
exports.ProductionOrders = ProductionOrders;
var ProductTrees_1 = require("./ProductTrees");
var Users_1 = require("./Users");
var BusinessPartners_1 = require("./BusinessPartners");
var Warehouses_1 = require("./Warehouses");
var JournalEntries_1 = require("./JournalEntries");
var DistributionRules_1 = require("./DistributionRules");
var Projects_1 = require("./Projects");
var UnitOfMeasurements_1 = require("./UnitOfMeasurements");
(function (ProductionOrders) {
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.ABSOLUTE_ENTRY = new v4_1.NumberField('AbsoluteEntry', ProductionOrders, 'Edm.Int32');
    /**
     * Static representation of the [[documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.DOCUMENT_NUMBER = new v4_1.NumberField('DocumentNumber', ProductionOrders, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.SERIES = new v4_1.NumberField('Series', ProductionOrders, 'Edm.Int32');
    /**
     * Static representation of the [[itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.ITEM_NO = new v4_1.StringField('ItemNo', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[plannedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.PLANNED_QUANTITY = new v4_1.NumberField('PlannedQuantity', ProductionOrders, 'Edm.Double');
    /**
     * Static representation of the [[completedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.COMPLETED_QUANTITY = new v4_1.NumberField('CompletedQuantity', ProductionOrders, 'Edm.Double');
    /**
     * Static representation of the [[rejectedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.REJECTED_QUANTITY = new v4_1.NumberField('RejectedQuantity', ProductionOrders, 'Edm.Double');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.POSTING_DATE = new v4_1.DateField('PostingDate', ProductionOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.DUE_DATE = new v4_1.DateField('DueDate', ProductionOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[productionOrderOriginEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.PRODUCTION_ORDER_ORIGIN_ENTRY = new v4_1.NumberField('ProductionOrderOriginEntry', ProductionOrders, 'Edm.Int32');
    /**
     * Static representation of the [[productionOrderOriginNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.PRODUCTION_ORDER_ORIGIN_NUMBER = new v4_1.NumberField('ProductionOrderOriginNumber', ProductionOrders, 'Edm.Int32');
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.USER_SIGNATURE = new v4_1.NumberField('UserSignature', ProductionOrders, 'Edm.Int32');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.REMARKS = new v4_1.StringField('Remarks', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.CLOSING_DATE = new v4_1.DateField('ClosingDate', ProductionOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[releaseDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.RELEASE_DATE = new v4_1.DateField('ReleaseDate', ProductionOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[customerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.CUSTOMER_CODE = new v4_1.StringField('CustomerCode', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.WAREHOUSE = new v4_1.StringField('Warehouse', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[inventoryUom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.INVENTORY_UOM = new v4_1.StringField('InventoryUOM', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.JOURNAL_REMARKS = new v4_1.StringField('JournalRemarks', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[transactionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.TRANSACTION_NUMBER = new v4_1.NumberField('TransactionNumber', ProductionOrders, 'Edm.Int32');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.CREATION_DATE = new v4_1.DateField('CreationDate', ProductionOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.DISTRIBUTION_RULE = new v4_1.StringField('DistributionRule', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.PROJECT = new v4_1.StringField('Project', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.DISTRIBUTION_RULE_2 = new v4_1.StringField('DistributionRule2', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.DISTRIBUTION_RULE_3 = new v4_1.StringField('DistributionRule3', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.DISTRIBUTION_RULE_4 = new v4_1.StringField('DistributionRule4', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.DISTRIBUTION_RULE_5 = new v4_1.StringField('DistributionRule5', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.UO_M_ENTRY = new v4_1.NumberField('UoMEntry', ProductionOrders, 'Edm.Int32');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.START_DATE = new v4_1.DateField('StartDate', ProductionOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[productDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.PRODUCT_DESCRIPTION = new v4_1.StringField('ProductDescription', ProductionOrders, 'Edm.String');
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.PRIORITY = new v4_1.NumberField('Priority', ProductionOrders, 'Edm.Int32');
    /**
     * Static representation of the [[productionOrderLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.PRODUCTION_ORDER_LINES = new v4_1.CollectionField('ProductionOrderLines', ProductionOrders, new ProductionOrderLine_1.ProductionOrderLineField('', ProductionOrders));
    /**
     * Static representation of the [[productionOrdersSalesOrderLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.PRODUCTION_ORDERS_SALES_ORDER_LINES = new v4_1.CollectionField('ProductionOrdersSalesOrderLines', ProductionOrders, new ProductionOrdersSalesOrderLine_1.ProductionOrdersSalesOrderLineField('', ProductionOrders));
    /**
     * Static representation of the [[productionOrdersStages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.PRODUCTION_ORDERS_STAGES = new v4_1.CollectionField('ProductionOrdersStages', ProductionOrders, new ProductionOrdersStage_1.ProductionOrdersStageField('', ProductionOrders));
    /**
     * Static representation of the one-to-one navigation property [[productTree]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.PRODUCT_TREE = new v4_1.OneToOneLink('ProductTree', ProductionOrders, ProductTrees_1.ProductTrees);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.USER = new v4_1.OneToOneLink('User', ProductionOrders, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', ProductionOrders, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.WAREHOUSE_2 = new v4_1.OneToOneLink('Warehouse2', ProductionOrders, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', ProductionOrders, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.DISTRIBUTION_RULE_6 = new v4_1.OneToOneLink('DistributionRule6', ProductionOrders, DistributionRules_1.DistributionRules);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.PROJECT_2 = new v4_1.OneToOneLink('Project2', ProductionOrders, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductionOrders.UNIT_OF_MEASUREMENT = new v4_1.OneToOneLink('UnitOfMeasurement', ProductionOrders, UnitOfMeasurements_1.UnitOfMeasurements);
    /**
     * All fields of the ProductionOrders entity.
     */
    ProductionOrders._allFields = [
        ProductionOrders.ABSOLUTE_ENTRY,
        ProductionOrders.DOCUMENT_NUMBER,
        ProductionOrders.SERIES,
        ProductionOrders.ITEM_NO,
        ProductionOrders.PLANNED_QUANTITY,
        ProductionOrders.COMPLETED_QUANTITY,
        ProductionOrders.REJECTED_QUANTITY,
        ProductionOrders.POSTING_DATE,
        ProductionOrders.DUE_DATE,
        ProductionOrders.PRODUCTION_ORDER_ORIGIN_ENTRY,
        ProductionOrders.PRODUCTION_ORDER_ORIGIN_NUMBER,
        ProductionOrders.USER_SIGNATURE,
        ProductionOrders.REMARKS,
        ProductionOrders.CLOSING_DATE,
        ProductionOrders.RELEASE_DATE,
        ProductionOrders.CUSTOMER_CODE,
        ProductionOrders.WAREHOUSE,
        ProductionOrders.INVENTORY_UOM,
        ProductionOrders.JOURNAL_REMARKS,
        ProductionOrders.TRANSACTION_NUMBER,
        ProductionOrders.CREATION_DATE,
        ProductionOrders.DISTRIBUTION_RULE,
        ProductionOrders.PROJECT,
        ProductionOrders.DISTRIBUTION_RULE_2,
        ProductionOrders.DISTRIBUTION_RULE_3,
        ProductionOrders.DISTRIBUTION_RULE_4,
        ProductionOrders.DISTRIBUTION_RULE_5,
        ProductionOrders.UO_M_ENTRY,
        ProductionOrders.START_DATE,
        ProductionOrders.PRODUCT_DESCRIPTION,
        ProductionOrders.PRIORITY,
        ProductionOrders.PRODUCTION_ORDER_LINES,
        ProductionOrders.PRODUCTION_ORDERS_SALES_ORDER_LINES,
        ProductionOrders.PRODUCTION_ORDERS_STAGES,
        ProductionOrders.PRODUCT_TREE,
        ProductionOrders.USER,
        ProductionOrders.BUSINESS_PARTNER,
        ProductionOrders.WAREHOUSE_2,
        ProductionOrders.JOURNAL_ENTRY,
        ProductionOrders.DISTRIBUTION_RULE_6,
        ProductionOrders.PROJECT_2,
        ProductionOrders.UNIT_OF_MEASUREMENT
    ];
    /**
     * All fields selector.
     */
    ProductionOrders.ALL_FIELDS = new v4_1.AllFields('*', ProductionOrders);
    /**
     * All key fields of the ProductionOrders entity.
     */
    ProductionOrders._keyFields = [ProductionOrders.ABSOLUTE_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property ProductionOrders.
     */
    ProductionOrders._keys = ProductionOrders._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ProductionOrders = exports.ProductionOrders || (exports.ProductionOrders = {}));
exports.ProductionOrders = ProductionOrders;
//# sourceMappingURL=ProductionOrders.js.map