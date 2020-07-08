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
exports.SalesOpportunityReasonsSetup = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesOpportunityReasonsSetupRequestBuilder_1 = require("./SalesOpportunityReasonsSetupRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SalesOpportunityReasonsSetup" of service "SAPB1".
 */
var SalesOpportunityReasonsSetup = /** @class */ (function (_super) {
    __extends(SalesOpportunityReasonsSetup, _super);
    function SalesOpportunityReasonsSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesOpportunityReasonsSetup`.
     * @returns A builder that constructs instances of entity type `SalesOpportunityReasonsSetup`.
     */
    SalesOpportunityReasonsSetup.builder = function () {
        return v4_1.Entity.entityBuilder(SalesOpportunityReasonsSetup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesOpportunityReasonsSetup` entity type.
     * @returns A `SalesOpportunityReasonsSetup` request builder.
     */
    SalesOpportunityReasonsSetup.requestBuilder = function () {
        return new SalesOpportunityReasonsSetupRequestBuilder_1.SalesOpportunityReasonsSetupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunityReasonsSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesOpportunityReasonsSetup`.
     */
    SalesOpportunityReasonsSetup.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SalesOpportunityReasonsSetup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesOpportunityReasonsSetup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesOpportunityReasonsSetup.
     */
    SalesOpportunityReasonsSetup._entityName = 'SalesOpportunityReasonsSetup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesOpportunityReasonsSetup.
     */
    SalesOpportunityReasonsSetup._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SalesOpportunityReasonsSetup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SalesOpportunityReasonsSetup;
}(v4_1.Entity));
exports.SalesOpportunityReasonsSetup = SalesOpportunityReasonsSetup;
var SalesOpportunities_1 = require("./SalesOpportunities");
(function (SalesOpportunityReasonsSetup) {
    /**
     * Static representation of the [[sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityReasonsSetup.SEQUENCE_NO = new v4_1.NumberField('SequenceNo', SalesOpportunityReasonsSetup, 'Edm.Int32');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityReasonsSetup.DESCRIPTION = new v4_1.StringField('Description', SalesOpportunityReasonsSetup, 'Edm.String');
    /**
     * Static representation of the [[sort]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityReasonsSetup.SORT = new v4_1.NumberField('Sort', SalesOpportunityReasonsSetup, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityReasonsSetup.SALES_OPPORTUNITIES = new v4_1.OneToManyLink('SalesOpportunities', SalesOpportunityReasonsSetup, SalesOpportunities_1.SalesOpportunities);
    /**
     * All fields of the SalesOpportunityReasonsSetup entity.
     */
    SalesOpportunityReasonsSetup._allFields = [
        SalesOpportunityReasonsSetup.SEQUENCE_NO,
        SalesOpportunityReasonsSetup.DESCRIPTION,
        SalesOpportunityReasonsSetup.SORT,
        SalesOpportunityReasonsSetup.SALES_OPPORTUNITIES
    ];
    /**
     * All fields selector.
     */
    SalesOpportunityReasonsSetup.ALL_FIELDS = new v4_1.AllFields('*', SalesOpportunityReasonsSetup);
    /**
     * All key fields of the SalesOpportunityReasonsSetup entity.
     */
    SalesOpportunityReasonsSetup._keyFields = [SalesOpportunityReasonsSetup.SEQUENCE_NO];
    /**
     * Mapping of all key field names to the respective static field property SalesOpportunityReasonsSetup.
     */
    SalesOpportunityReasonsSetup._keys = SalesOpportunityReasonsSetup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesOpportunityReasonsSetup = exports.SalesOpportunityReasonsSetup || (exports.SalesOpportunityReasonsSetup = {}));
exports.SalesOpportunityReasonsSetup = SalesOpportunityReasonsSetup;
//# sourceMappingURL=SalesOpportunityReasonsSetup.js.map