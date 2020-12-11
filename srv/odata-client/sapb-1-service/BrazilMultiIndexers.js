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
exports.BrazilMultiIndexers = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BrazilMultiIndexersRequestBuilder_1 = require("./BrazilMultiIndexersRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BrazilMultiIndexers" of service "SAPB1".
 */
var BrazilMultiIndexers = /** @class */ (function (_super) {
    __extends(BrazilMultiIndexers, _super);
    function BrazilMultiIndexers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BrazilMultiIndexers`.
     * @returns A builder that constructs instances of entity type `BrazilMultiIndexers`.
     */
    BrazilMultiIndexers.builder = function () {
        return core_1.EntityV4.entityBuilder(BrazilMultiIndexers);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BrazilMultiIndexers` entity type.
     * @returns A `BrazilMultiIndexers` request builder.
     */
    BrazilMultiIndexers.requestBuilder = function () {
        return new BrazilMultiIndexersRequestBuilder_1.BrazilMultiIndexersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilMultiIndexers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BrazilMultiIndexers`.
     */
    BrazilMultiIndexers.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, BrazilMultiIndexers);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BrazilMultiIndexers.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BrazilMultiIndexers.
     */
    BrazilMultiIndexers._entityName = 'BrazilMultiIndexers';
    /**
     * Default url path for the according service.
     */
    BrazilMultiIndexers._defaultServicePath = '/b1s/v2/';
    return BrazilMultiIndexers;
}(core_1.EntityV4));
exports.BrazilMultiIndexers = BrazilMultiIndexers;
(function (BrazilMultiIndexers) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilMultiIndexers.ID = new core_1.NumberField('ID', BrazilMultiIndexers, 'Edm.Int32');
    /**
     * Static representation of the [[indexerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilMultiIndexers.INDEXER_TYPE = new core_1.EnumField('IndexerType', BrazilMultiIndexers);
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilMultiIndexers.CODE = new core_1.StringField('Code', BrazilMultiIndexers, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilMultiIndexers.DESCRIPTION = new core_1.StringField('Description', BrazilMultiIndexers, 'Edm.String');
    /**
     * Static representation of the [[firstRefIndexerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilMultiIndexers.FIRST_REF_INDEXER_CODE = new core_1.StringField('FirstRefIndexerCode', BrazilMultiIndexers, 'Edm.String');
    /**
     * Static representation of the [[secondRefIndexerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilMultiIndexers.SECOND_REF_INDEXER_CODE = new core_1.StringField('SecondRefIndexerCode', BrazilMultiIndexers, 'Edm.String');
    /**
     * Static representation of the [[thirdRefIndexerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilMultiIndexers.THIRD_REF_INDEXER_CODE = new core_1.StringField('ThirdRefIndexerCode', BrazilMultiIndexers, 'Edm.String');
    /**
     * All fields of the BrazilMultiIndexers entity.
     */
    BrazilMultiIndexers._allFields = [
        BrazilMultiIndexers.ID,
        BrazilMultiIndexers.INDEXER_TYPE,
        BrazilMultiIndexers.CODE,
        BrazilMultiIndexers.DESCRIPTION,
        BrazilMultiIndexers.FIRST_REF_INDEXER_CODE,
        BrazilMultiIndexers.SECOND_REF_INDEXER_CODE,
        BrazilMultiIndexers.THIRD_REF_INDEXER_CODE
    ];
    /**
     * All fields selector.
     */
    BrazilMultiIndexers.ALL_FIELDS = new core_1.AllFields('*', BrazilMultiIndexers);
    /**
     * All key fields of the BrazilMultiIndexers entity.
     */
    BrazilMultiIndexers._keyFields = [BrazilMultiIndexers.ID];
    /**
     * Mapping of all key field names to the respective static field property BrazilMultiIndexers.
     */
    BrazilMultiIndexers._keys = BrazilMultiIndexers._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BrazilMultiIndexers = exports.BrazilMultiIndexers || (exports.BrazilMultiIndexers = {}));
exports.BrazilMultiIndexers = BrazilMultiIndexers;
//# sourceMappingURL=BrazilMultiIndexers.js.map