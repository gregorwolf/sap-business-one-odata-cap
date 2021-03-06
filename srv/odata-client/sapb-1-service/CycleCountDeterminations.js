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
exports.CycleCountDeterminations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CycleCountDeterminationsRequestBuilder_1 = require("./CycleCountDeterminationsRequestBuilder");
var CycleCountDeterminationSetup_1 = require("./CycleCountDeterminationSetup");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CycleCountDeterminations" of service "SAPB1".
 */
var CycleCountDeterminations = /** @class */ (function (_super) {
    __extends(CycleCountDeterminations, _super);
    function CycleCountDeterminations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CycleCountDeterminations`.
     * @returns A builder that constructs instances of entity type `CycleCountDeterminations`.
     */
    CycleCountDeterminations.builder = function () {
        return core_1.EntityV4.entityBuilder(CycleCountDeterminations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CycleCountDeterminations` entity type.
     * @returns A `CycleCountDeterminations` request builder.
     */
    CycleCountDeterminations.requestBuilder = function () {
        return new CycleCountDeterminationsRequestBuilder_1.CycleCountDeterminationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CycleCountDeterminations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CycleCountDeterminations`.
     */
    CycleCountDeterminations.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, CycleCountDeterminations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CycleCountDeterminations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CycleCountDeterminations.
     */
    CycleCountDeterminations._entityName = 'CycleCountDeterminations';
    /**
     * Default url path for the according service.
     */
    CycleCountDeterminations._defaultServicePath = '/b1s/v2/';
    return CycleCountDeterminations;
}(core_1.EntityV4));
exports.CycleCountDeterminations = CycleCountDeterminations;
(function (CycleCountDeterminations) {
    /**
     * Static representation of the [[warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CycleCountDeterminations.WAREHOUSE_CODE = new core_1.StringField('WarehouseCode', CycleCountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[cycleBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CycleCountDeterminations.CYCLE_BY = new core_1.EnumField('CycleBy', CycleCountDeterminations);
    /**
     * Static representation of the [[cycleCountDeterminationSetupCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CycleCountDeterminations.CYCLE_COUNT_DETERMINATION_SETUP_COLLECTION = new core_1.CollectionField('CycleCountDeterminationSetupCollection', CycleCountDeterminations, CycleCountDeterminationSetup_1.CycleCountDeterminationSetup);
    /**
     * All fields of the CycleCountDeterminations entity.
     */
    CycleCountDeterminations._allFields = [
        CycleCountDeterminations.WAREHOUSE_CODE,
        CycleCountDeterminations.CYCLE_BY,
        CycleCountDeterminations.CYCLE_COUNT_DETERMINATION_SETUP_COLLECTION
    ];
    /**
     * All fields selector.
     */
    CycleCountDeterminations.ALL_FIELDS = new core_1.AllFields('*', CycleCountDeterminations);
    /**
     * All key fields of the CycleCountDeterminations entity.
     */
    CycleCountDeterminations._keyFields = [CycleCountDeterminations.WAREHOUSE_CODE];
    /**
     * Mapping of all key field names to the respective static field property CycleCountDeterminations.
     */
    CycleCountDeterminations._keys = CycleCountDeterminations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CycleCountDeterminations = exports.CycleCountDeterminations || (exports.CycleCountDeterminations = {}));
exports.CycleCountDeterminations = CycleCountDeterminations;
//# sourceMappingURL=CycleCountDeterminations.js.map