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
exports.BoePortfolios = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BoePortfoliosRequestBuilder_1 = require("./BoePortfoliosRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BOEPortfolios" of service "SAPB1".
 */
var BoePortfolios = /** @class */ (function (_super) {
    __extends(BoePortfolios, _super);
    function BoePortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BoePortfolios`.
     * @returns A builder that constructs instances of entity type `BoePortfolios`.
     */
    BoePortfolios.builder = function () {
        return v4_1.Entity.entityBuilder(BoePortfolios);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BoePortfolios` entity type.
     * @returns A `BoePortfolios` request builder.
     */
    BoePortfolios.requestBuilder = function () {
        return new BoePortfoliosRequestBuilder_1.BoePortfoliosRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BoePortfolios`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BoePortfolios`.
     */
    BoePortfolios.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BoePortfolios);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BoePortfolios.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BoePortfolios.
     */
    BoePortfolios._entityName = 'BOEPortfolios';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BoePortfolios.
     */
    BoePortfolios._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BoePortfolios._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BoePortfolios;
}(v4_1.Entity));
exports.BoePortfolios = BoePortfolios;
(function (BoePortfolios) {
    /**
     * Static representation of the [[portfolioEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BoePortfolios.PORTFOLIO_ENTRY = new v4_1.NumberField('PortfolioEntry', BoePortfolios, 'Edm.Int32');
    /**
     * Static representation of the [[portfolioId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BoePortfolios.PORTFOLIO_ID = new v4_1.StringField('PortfolioID', BoePortfolios, 'Edm.String');
    /**
     * Static representation of the [[portfolioCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BoePortfolios.PORTFOLIO_CODE = new v4_1.StringField('PortfolioCode', BoePortfolios, 'Edm.String');
    /**
     * Static representation of the [[portfolioNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BoePortfolios.PORTFOLIO_NUM = new v4_1.StringField('PortfolioNum', BoePortfolios, 'Edm.String');
    /**
     * Static representation of the [[portfolioDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BoePortfolios.PORTFOLIO_DESCRIPTION = new v4_1.StringField('PortfolioDescription', BoePortfolios, 'Edm.String');
    /**
     * All fields of the BoePortfolios entity.
     */
    BoePortfolios._allFields = [
        BoePortfolios.PORTFOLIO_ENTRY,
        BoePortfolios.PORTFOLIO_ID,
        BoePortfolios.PORTFOLIO_CODE,
        BoePortfolios.PORTFOLIO_NUM,
        BoePortfolios.PORTFOLIO_DESCRIPTION
    ];
    /**
     * All fields selector.
     */
    BoePortfolios.ALL_FIELDS = new v4_1.AllFields('*', BoePortfolios);
    /**
     * All key fields of the BoePortfolios entity.
     */
    BoePortfolios._keyFields = [BoePortfolios.PORTFOLIO_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property BoePortfolios.
     */
    BoePortfolios._keys = BoePortfolios._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BoePortfolios = exports.BoePortfolios || (exports.BoePortfolios = {}));
exports.BoePortfolios = BoePortfolios;
//# sourceMappingURL=BoePortfolios.js.map