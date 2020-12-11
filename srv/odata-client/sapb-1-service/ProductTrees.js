"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
exports.ProductTrees = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ProductTreesRequestBuilder_1 = require("./ProductTreesRequestBuilder");
var ProductTreeLine_1 = require("./ProductTreeLine");
var ProductTreeStage_1 = require("./ProductTreeStage");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ProductTrees" of service "SAPB1".
 */
var ProductTrees = /** @class */ (function (_super) {
    __extends(ProductTrees, _super);
    function ProductTrees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ProductTrees`.
     * @returns A builder that constructs instances of entity type `ProductTrees`.
     */
    ProductTrees.builder = function () {
        return core_1.EntityV4.entityBuilder(ProductTrees);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ProductTrees` entity type.
     * @returns A `ProductTrees` request builder.
     */
    ProductTrees.requestBuilder = function () {
        return new ProductTreesRequestBuilder_1.ProductTreesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProductTrees`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ProductTrees`.
     */
    ProductTrees.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ProductTrees);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ProductTrees.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ProductTrees.
     */
    ProductTrees._entityName = 'ProductTrees';
    /**
     * Default url path for the according service.
     */
    ProductTrees._defaultServicePath = '/b1s/v2/';
    return ProductTrees;
}(core_1.EntityV4));
exports.ProductTrees = ProductTrees;
var ProductionOrders_1 = require("./ProductionOrders");
var Items_1 = require("./Items");
var DistributionRules_1 = require("./DistributionRules");
var Projects_1 = require("./Projects");
var PriceLists_1 = require("./PriceLists");
(function (ProductTrees) {
    /**
     * Static representation of the [[treeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.TREE_CODE = new core_1.StringField('TreeCode', ProductTrees, 'Edm.String');
    /**
     * Static representation of the [[treeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.TREE_TYPE = new core_1.EnumField('TreeType', ProductTrees);
    /**
     * Static representation of the [[quantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.QUANTITY = new core_1.NumberField('Quantity', ProductTrees, 'Edm.Double');
    /**
     * Static representation of the [[distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.DISTRIBUTION_RULE = new core_1.StringField('DistributionRule', ProductTrees, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.PROJECT = new core_1.StringField('Project', ProductTrees, 'Edm.String');
    /**
     * Static representation of the [[distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.DISTRIBUTION_RULE_2 = new core_1.StringField('DistributionRule2', ProductTrees, 'Edm.String');
    /**
     * Static representation of the [[distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.DISTRIBUTION_RULE_3 = new core_1.StringField('DistributionRule3', ProductTrees, 'Edm.String');
    /**
     * Static representation of the [[distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.DISTRIBUTION_RULE_4 = new core_1.StringField('DistributionRule4', ProductTrees, 'Edm.String');
    /**
     * Static representation of the [[distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.DISTRIBUTION_RULE_5 = new core_1.StringField('DistributionRule5', ProductTrees, 'Edm.String');
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.PRICE_LIST = new core_1.NumberField('PriceList', ProductTrees, 'Edm.Int32');
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.WAREHOUSE = new core_1.StringField('Warehouse', ProductTrees, 'Edm.String');
    /**
     * Static representation of the [[planAvgProdSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.PLAN_AVG_PROD_SIZE = new core_1.NumberField('PlanAvgProdSize', ProductTrees, 'Edm.Double');
    /**
     * Static representation of the [[hideBomComponentsInPrintout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.HIDE_BOM_COMPONENTS_IN_PRINTOUT = new core_1.EnumField('HideBOMComponentsInPrintout', ProductTrees);
    /**
     * Static representation of the [[productDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.PRODUCT_DESCRIPTION = new core_1.StringField('ProductDescription', ProductTrees, 'Edm.String');
    /**
     * Static representation of the [[productTreeLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.PRODUCT_TREE_LINES = new core_1.CollectionField('ProductTreeLines', ProductTrees, ProductTreeLine_1.ProductTreeLine);
    /**
     * Static representation of the [[productTreeStages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.PRODUCT_TREE_STAGES = new core_1.CollectionField('ProductTreeStages', ProductTrees, ProductTreeStage_1.ProductTreeStage);
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.PRODUCTION_ORDERS = new core_1.OneToManyLink('ProductionOrders', ProductTrees, ProductionOrders_1.ProductionOrders);
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.ITEM = new core_1.OneToOneLink('Item', ProductTrees, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.DISTRIBUTION_RULE_6 = new core_1.OneToOneLink('DistributionRule6', ProductTrees, DistributionRules_1.DistributionRules);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.PROJECT_2 = new core_1.OneToOneLink('Project2', ProductTrees, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[priceList2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductTrees.PRICE_LIST_2 = new core_1.OneToOneLink('PriceList2', ProductTrees, PriceLists_1.PriceLists);
    /**
     * All fields of the ProductTrees entity.
     */
    ProductTrees._allFields = [
        ProductTrees.TREE_CODE,
        ProductTrees.TREE_TYPE,
        ProductTrees.QUANTITY,
        ProductTrees.DISTRIBUTION_RULE,
        ProductTrees.PROJECT,
        ProductTrees.DISTRIBUTION_RULE_2,
        ProductTrees.DISTRIBUTION_RULE_3,
        ProductTrees.DISTRIBUTION_RULE_4,
        ProductTrees.DISTRIBUTION_RULE_5,
        ProductTrees.PRICE_LIST,
        ProductTrees.WAREHOUSE,
        ProductTrees.PLAN_AVG_PROD_SIZE,
        ProductTrees.HIDE_BOM_COMPONENTS_IN_PRINTOUT,
        ProductTrees.PRODUCT_DESCRIPTION,
        ProductTrees.PRODUCT_TREE_LINES,
        ProductTrees.PRODUCT_TREE_STAGES,
        ProductTrees.PRODUCTION_ORDERS,
        ProductTrees.ITEM,
        ProductTrees.DISTRIBUTION_RULE_6,
        ProductTrees.PROJECT_2,
        ProductTrees.PRICE_LIST_2
    ];
    /**
     * All fields selector.
     */
    ProductTrees.ALL_FIELDS = new core_1.AllFields('*', ProductTrees);
    /**
     * All key fields of the ProductTrees entity.
     */
    ProductTrees._keyFields = [ProductTrees.TREE_CODE];
    /**
     * Mapping of all key field names to the respective static field property ProductTrees.
     */
    ProductTrees._keys = ProductTrees._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ProductTrees = exports.ProductTrees || (exports.ProductTrees = {}));
exports.ProductTrees = ProductTrees;
//# sourceMappingURL=ProductTrees.js.map