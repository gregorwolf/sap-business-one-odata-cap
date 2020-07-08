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
exports.SalesOpportunitySourcesSetup = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesOpportunitySourcesSetupRequestBuilder_1 = require("./SalesOpportunitySourcesSetupRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SalesOpportunitySourcesSetup" of service "SAPB1".
 */
var SalesOpportunitySourcesSetup = /** @class */ (function (_super) {
    __extends(SalesOpportunitySourcesSetup, _super);
    function SalesOpportunitySourcesSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesOpportunitySourcesSetup`.
     * @returns A builder that constructs instances of entity type `SalesOpportunitySourcesSetup`.
     */
    SalesOpportunitySourcesSetup.builder = function () {
        return v4_1.Entity.entityBuilder(SalesOpportunitySourcesSetup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesOpportunitySourcesSetup` entity type.
     * @returns A `SalesOpportunitySourcesSetup` request builder.
     */
    SalesOpportunitySourcesSetup.requestBuilder = function () {
        return new SalesOpportunitySourcesSetupRequestBuilder_1.SalesOpportunitySourcesSetupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunitySourcesSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesOpportunitySourcesSetup`.
     */
    SalesOpportunitySourcesSetup.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SalesOpportunitySourcesSetup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesOpportunitySourcesSetup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesOpportunitySourcesSetup.
     */
    SalesOpportunitySourcesSetup._entityName = 'SalesOpportunitySourcesSetup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesOpportunitySourcesSetup.
     */
    SalesOpportunitySourcesSetup._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SalesOpportunitySourcesSetup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SalesOpportunitySourcesSetup;
}(v4_1.Entity));
exports.SalesOpportunitySourcesSetup = SalesOpportunitySourcesSetup;
var SalesOpportunities_1 = require("./SalesOpportunities");
(function (SalesOpportunitySourcesSetup) {
    /**
     * Static representation of the [[sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunitySourcesSetup.SEQUENCE_NO = new v4_1.NumberField('SequenceNo', SalesOpportunitySourcesSetup, 'Edm.Int32');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunitySourcesSetup.DESCRIPTION = new v4_1.StringField('Description', SalesOpportunitySourcesSetup, 'Edm.String');
    /**
     * Static representation of the [[sort]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunitySourcesSetup.SORT = new v4_1.NumberField('Sort', SalesOpportunitySourcesSetup, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunitySourcesSetup.SALES_OPPORTUNITIES = new v4_1.OneToManyLink('SalesOpportunities', SalesOpportunitySourcesSetup, SalesOpportunities_1.SalesOpportunities);
    /**
     * All fields of the SalesOpportunitySourcesSetup entity.
     */
    SalesOpportunitySourcesSetup._allFields = [
        SalesOpportunitySourcesSetup.SEQUENCE_NO,
        SalesOpportunitySourcesSetup.DESCRIPTION,
        SalesOpportunitySourcesSetup.SORT,
        SalesOpportunitySourcesSetup.SALES_OPPORTUNITIES
    ];
    /**
     * All fields selector.
     */
    SalesOpportunitySourcesSetup.ALL_FIELDS = new v4_1.AllFields('*', SalesOpportunitySourcesSetup);
    /**
     * All key fields of the SalesOpportunitySourcesSetup entity.
     */
    SalesOpportunitySourcesSetup._keyFields = [SalesOpportunitySourcesSetup.SEQUENCE_NO];
    /**
     * Mapping of all key field names to the respective static field property SalesOpportunitySourcesSetup.
     */
    SalesOpportunitySourcesSetup._keys = SalesOpportunitySourcesSetup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesOpportunitySourcesSetup = exports.SalesOpportunitySourcesSetup || (exports.SalesOpportunitySourcesSetup = {}));
exports.SalesOpportunitySourcesSetup = SalesOpportunitySourcesSetup;
//# sourceMappingURL=SalesOpportunitySourcesSetup.js.map