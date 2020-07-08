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
exports.BpPriorities = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BpPrioritiesRequestBuilder_1 = require("./BpPrioritiesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BPPriorities" of service "SAPB1".
 */
var BpPriorities = /** @class */ (function (_super) {
    __extends(BpPriorities, _super);
    function BpPriorities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BpPriorities`.
     * @returns A builder that constructs instances of entity type `BpPriorities`.
     */
    BpPriorities.builder = function () {
        return v4_1.Entity.entityBuilder(BpPriorities);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BpPriorities` entity type.
     * @returns A `BpPriorities` request builder.
     */
    BpPriorities.requestBuilder = function () {
        return new BpPrioritiesRequestBuilder_1.BpPrioritiesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpPriorities`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpPriorities`.
     */
    BpPriorities.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BpPriorities);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BpPriorities.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BpPriorities.
     */
    BpPriorities._entityName = 'BPPriorities';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BpPriorities.
     */
    BpPriorities._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BpPriorities._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BpPriorities;
}(v4_1.Entity));
exports.BpPriorities = BpPriorities;
var BusinessPartners_1 = require("./BusinessPartners");
(function (BpPriorities) {
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpPriorities.PRIORITY = new v4_1.NumberField('Priority', BpPriorities, 'Edm.Int32');
    /**
     * Static representation of the [[priorityDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpPriorities.PRIORITY_DESCRIPTION = new v4_1.StringField('PriorityDescription', BpPriorities, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpPriorities.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', BpPriorities, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the BpPriorities entity.
     */
    BpPriorities._allFields = [
        BpPriorities.PRIORITY,
        BpPriorities.PRIORITY_DESCRIPTION,
        BpPriorities.BUSINESS_PARTNERS
    ];
    /**
     * All fields selector.
     */
    BpPriorities.ALL_FIELDS = new v4_1.AllFields('*', BpPriorities);
    /**
     * All key fields of the BpPriorities entity.
     */
    BpPriorities._keyFields = [BpPriorities.PRIORITY];
    /**
     * Mapping of all key field names to the respective static field property BpPriorities.
     */
    BpPriorities._keys = BpPriorities._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BpPriorities = exports.BpPriorities || (exports.BpPriorities = {}));
exports.BpPriorities = BpPriorities;
//# sourceMappingURL=BpPriorities.js.map