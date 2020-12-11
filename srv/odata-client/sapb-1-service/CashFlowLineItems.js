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
exports.CashFlowLineItems = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CashFlowLineItemsRequestBuilder_1 = require("./CashFlowLineItemsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CashFlowLineItems" of service "SAPB1".
 */
var CashFlowLineItems = /** @class */ (function (_super) {
    __extends(CashFlowLineItems, _super);
    function CashFlowLineItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CashFlowLineItems`.
     * @returns A builder that constructs instances of entity type `CashFlowLineItems`.
     */
    CashFlowLineItems.builder = function () {
        return core_1.EntityV4.entityBuilder(CashFlowLineItems);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CashFlowLineItems` entity type.
     * @returns A `CashFlowLineItems` request builder.
     */
    CashFlowLineItems.requestBuilder = function () {
        return new CashFlowLineItemsRequestBuilder_1.CashFlowLineItemsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CashFlowLineItems`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CashFlowLineItems`.
     */
    CashFlowLineItems.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, CashFlowLineItems);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CashFlowLineItems.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CashFlowLineItems.
     */
    CashFlowLineItems._entityName = 'CashFlowLineItems';
    /**
     * Default url path for the according service.
     */
    CashFlowLineItems._defaultServicePath = '/b1s/v2/';
    return CashFlowLineItems;
}(core_1.EntityV4));
exports.CashFlowLineItems = CashFlowLineItems;
(function (CashFlowLineItems) {
    /**
     * Static representation of the [[lineItemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashFlowLineItems.LINE_ITEM_ID = new core_1.NumberField('LineItemID', CashFlowLineItems, 'Edm.Int32');
    /**
     * Static representation of the [[lineItemName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashFlowLineItems.LINE_ITEM_NAME = new core_1.StringField('LineItemName', CashFlowLineItems, 'Edm.String');
    /**
     * Static representation of the [[activeLineItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashFlowLineItems.ACTIVE_LINE_ITEM = new core_1.EnumField('ActiveLineItem', CashFlowLineItems);
    /**
     * Static representation of the [[parentArticle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashFlowLineItems.PARENT_ARTICLE = new core_1.NumberField('ParentArticle', CashFlowLineItems, 'Edm.Int32');
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashFlowLineItems.LEVEL = new core_1.NumberField('Level', CashFlowLineItems, 'Edm.Int32');
    /**
     * Static representation of the [[drawer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashFlowLineItems.DRAWER = new core_1.NumberField('Drawer', CashFlowLineItems, 'Edm.Int32');
    /**
     * All fields of the CashFlowLineItems entity.
     */
    CashFlowLineItems._allFields = [
        CashFlowLineItems.LINE_ITEM_ID,
        CashFlowLineItems.LINE_ITEM_NAME,
        CashFlowLineItems.ACTIVE_LINE_ITEM,
        CashFlowLineItems.PARENT_ARTICLE,
        CashFlowLineItems.LEVEL,
        CashFlowLineItems.DRAWER
    ];
    /**
     * All fields selector.
     */
    CashFlowLineItems.ALL_FIELDS = new core_1.AllFields('*', CashFlowLineItems);
    /**
     * All key fields of the CashFlowLineItems entity.
     */
    CashFlowLineItems._keyFields = [CashFlowLineItems.LINE_ITEM_ID];
    /**
     * Mapping of all key field names to the respective static field property CashFlowLineItems.
     */
    CashFlowLineItems._keys = CashFlowLineItems._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CashFlowLineItems = exports.CashFlowLineItems || (exports.CashFlowLineItems = {}));
exports.CashFlowLineItems = CashFlowLineItems;
//# sourceMappingURL=CashFlowLineItems.js.map