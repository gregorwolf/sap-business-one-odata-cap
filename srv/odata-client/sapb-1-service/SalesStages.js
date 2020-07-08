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
exports.SalesStages = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesStagesRequestBuilder_1 = require("./SalesStagesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SalesStages" of service "SAPB1".
 */
var SalesStages = /** @class */ (function (_super) {
    __extends(SalesStages, _super);
    function SalesStages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesStages`.
     * @returns A builder that constructs instances of entity type `SalesStages`.
     */
    SalesStages.builder = function () {
        return v4_1.Entity.entityBuilder(SalesStages);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesStages` entity type.
     * @returns A `SalesStages` request builder.
     */
    SalesStages.requestBuilder = function () {
        return new SalesStagesRequestBuilder_1.SalesStagesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesStages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesStages`.
     */
    SalesStages.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SalesStages);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesStages.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesStages.
     */
    SalesStages._entityName = 'SalesStages';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesStages.
     */
    SalesStages._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SalesStages._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SalesStages;
}(v4_1.Entity));
exports.SalesStages = SalesStages;
var SalesOpportunities_1 = require("./SalesOpportunities");
(function (SalesStages) {
    /**
     * Static representation of the [[sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesStages.SEQUENCE_NO = new v4_1.NumberField('SequenceNo', SalesStages, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesStages.NAME = new v4_1.StringField('Name', SalesStages, 'Edm.String');
    /**
     * Static representation of the [[stageno]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesStages.STAGENO = new v4_1.NumberField('Stageno', SalesStages, 'Edm.Int32');
    /**
     * Static representation of the [[closingPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesStages.CLOSING_PERCENTAGE = new v4_1.NumberField('ClosingPercentage', SalesStages, 'Edm.Double');
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesStages.SALES_OPPORTUNITIES = new v4_1.OneToManyLink('SalesOpportunities', SalesStages, SalesOpportunities_1.SalesOpportunities);
    /**
     * All fields of the SalesStages entity.
     */
    SalesStages._allFields = [
        SalesStages.SEQUENCE_NO,
        SalesStages.NAME,
        SalesStages.STAGENO,
        SalesStages.CLOSING_PERCENTAGE,
        SalesStages.SALES_OPPORTUNITIES
    ];
    /**
     * All fields selector.
     */
    SalesStages.ALL_FIELDS = new v4_1.AllFields('*', SalesStages);
    /**
     * All key fields of the SalesStages entity.
     */
    SalesStages._keyFields = [SalesStages.SEQUENCE_NO];
    /**
     * Mapping of all key field names to the respective static field property SalesStages.
     */
    SalesStages._keys = SalesStages._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesStages = exports.SalesStages || (exports.SalesStages = {}));
exports.SalesStages = SalesStages;
//# sourceMappingURL=SalesStages.js.map