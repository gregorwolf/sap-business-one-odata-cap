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
exports.CostElements = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CostElementsRequestBuilder_1 = require("./CostElementsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "CostElements" of service "SAPB1".
 */
var CostElements = /** @class */ (function (_super) {
    __extends(CostElements, _super);
    function CostElements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CostElements`.
     * @returns A builder that constructs instances of entity type `CostElements`.
     */
    CostElements.builder = function () {
        return v4_1.Entity.entityBuilder(CostElements);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CostElements` entity type.
     * @returns A `CostElements` request builder.
     */
    CostElements.requestBuilder = function () {
        return new CostElementsRequestBuilder_1.CostElementsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CostElements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CostElements`.
     */
    CostElements.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, CostElements);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CostElements.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CostElements.
     */
    CostElements._entityName = 'CostElements';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CostElements.
     */
    CostElements._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    CostElements._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CostElements;
}(v4_1.Entity));
exports.CostElements = CostElements;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
(function (CostElements) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CostElements.CODE = new v4_1.StringField('Code', CostElements, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CostElements.DESCRIPTION = new v4_1.StringField('Description', CostElements, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CostElements.CHART_OF_ACCOUNTS = new v4_1.OneToManyLink('ChartOfAccounts', CostElements, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * All fields of the CostElements entity.
     */
    CostElements._allFields = [
        CostElements.CODE,
        CostElements.DESCRIPTION,
        CostElements.CHART_OF_ACCOUNTS
    ];
    /**
     * All fields selector.
     */
    CostElements.ALL_FIELDS = new v4_1.AllFields('*', CostElements);
    /**
     * All key fields of the CostElements entity.
     */
    CostElements._keyFields = [CostElements.CODE];
    /**
     * Mapping of all key field names to the respective static field property CostElements.
     */
    CostElements._keys = CostElements._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CostElements = exports.CostElements || (exports.CostElements = {}));
exports.CostElements = CostElements;
//# sourceMappingURL=CostElements.js.map