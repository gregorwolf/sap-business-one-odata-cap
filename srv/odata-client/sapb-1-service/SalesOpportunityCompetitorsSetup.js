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
exports.SalesOpportunityCompetitorsSetup = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesOpportunityCompetitorsSetupRequestBuilder_1 = require("./SalesOpportunityCompetitorsSetupRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SalesOpportunityCompetitorsSetup" of service "SAPB1".
 */
var SalesOpportunityCompetitorsSetup = /** @class */ (function (_super) {
    __extends(SalesOpportunityCompetitorsSetup, _super);
    function SalesOpportunityCompetitorsSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SalesOpportunityCompetitorsSetup`.
     * @returns A builder that constructs instances of entity type `SalesOpportunityCompetitorsSetup`.
     */
    SalesOpportunityCompetitorsSetup.builder = function () {
        return core_1.EntityV4.entityBuilder(SalesOpportunityCompetitorsSetup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesOpportunityCompetitorsSetup` entity type.
     * @returns A `SalesOpportunityCompetitorsSetup` request builder.
     */
    SalesOpportunityCompetitorsSetup.requestBuilder = function () {
        return new SalesOpportunityCompetitorsSetupRequestBuilder_1.SalesOpportunityCompetitorsSetupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunityCompetitorsSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesOpportunityCompetitorsSetup`.
     */
    SalesOpportunityCompetitorsSetup.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, SalesOpportunityCompetitorsSetup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesOpportunityCompetitorsSetup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesOpportunityCompetitorsSetup.
     */
    SalesOpportunityCompetitorsSetup._entityName = 'SalesOpportunityCompetitorsSetup';
    /**
     * Default url path for the according service.
     */
    SalesOpportunityCompetitorsSetup._defaultServicePath = '/b1s/v2/';
    return SalesOpportunityCompetitorsSetup;
}(core_1.EntityV4));
exports.SalesOpportunityCompetitorsSetup = SalesOpportunityCompetitorsSetup;
(function (SalesOpportunityCompetitorsSetup) {
    /**
     * Static representation of the [[sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityCompetitorsSetup.SEQUENCE_NO = new core_1.NumberField('SequenceNo', SalesOpportunityCompetitorsSetup, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityCompetitorsSetup.NAME = new core_1.StringField('Name', SalesOpportunityCompetitorsSetup, 'Edm.String');
    /**
     * Static representation of the [[threatLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityCompetitorsSetup.THREAT_LEVEL = new core_1.EnumField('ThreatLevel', SalesOpportunityCompetitorsSetup);
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityCompetitorsSetup.DETAILS = new core_1.StringField('Details', SalesOpportunityCompetitorsSetup, 'Edm.String');
    /**
     * All fields of the SalesOpportunityCompetitorsSetup entity.
     */
    SalesOpportunityCompetitorsSetup._allFields = [
        SalesOpportunityCompetitorsSetup.SEQUENCE_NO,
        SalesOpportunityCompetitorsSetup.NAME,
        SalesOpportunityCompetitorsSetup.THREAT_LEVEL,
        SalesOpportunityCompetitorsSetup.DETAILS
    ];
    /**
     * All fields selector.
     */
    SalesOpportunityCompetitorsSetup.ALL_FIELDS = new core_1.AllFields('*', SalesOpportunityCompetitorsSetup);
    /**
     * All key fields of the SalesOpportunityCompetitorsSetup entity.
     */
    SalesOpportunityCompetitorsSetup._keyFields = [SalesOpportunityCompetitorsSetup.SEQUENCE_NO];
    /**
     * Mapping of all key field names to the respective static field property SalesOpportunityCompetitorsSetup.
     */
    SalesOpportunityCompetitorsSetup._keys = SalesOpportunityCompetitorsSetup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesOpportunityCompetitorsSetup = exports.SalesOpportunityCompetitorsSetup || (exports.SalesOpportunityCompetitorsSetup = {}));
exports.SalesOpportunityCompetitorsSetup = SalesOpportunityCompetitorsSetup;
//# sourceMappingURL=SalesOpportunityCompetitorsSetup.js.map