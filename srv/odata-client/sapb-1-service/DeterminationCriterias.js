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
exports.DeterminationCriterias = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DeterminationCriteriasRequestBuilder_1 = require("./DeterminationCriteriasRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DeterminationCriterias" of service "SAPB1".
 */
var DeterminationCriterias = /** @class */ (function (_super) {
    __extends(DeterminationCriterias, _super);
    function DeterminationCriterias() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `DeterminationCriterias`.
     * @returns A builder that constructs instances of entity type `DeterminationCriterias`.
     */
    DeterminationCriterias.builder = function () {
        return core_1.EntityV4.entityBuilder(DeterminationCriterias);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DeterminationCriterias` entity type.
     * @returns A `DeterminationCriterias` request builder.
     */
    DeterminationCriterias.requestBuilder = function () {
        return new DeterminationCriteriasRequestBuilder_1.DeterminationCriteriasRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeterminationCriterias`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeterminationCriterias`.
     */
    DeterminationCriterias.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, DeterminationCriterias);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DeterminationCriterias.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DeterminationCriterias.
     */
    DeterminationCriterias._entityName = 'DeterminationCriterias';
    /**
     * Default url path for the according service.
     */
    DeterminationCriterias._defaultServicePath = '/b1s/v2/';
    return DeterminationCriterias;
}(core_1.EntityV4));
exports.DeterminationCriterias = DeterminationCriterias;
(function (DeterminationCriterias) {
    /**
     * Static representation of the [[dmcId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeterminationCriterias.DMC_ID = new core_1.NumberField('DmcId', DeterminationCriterias, 'Edm.Int32');
    /**
     * Static representation of the [[determinationCriteria]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeterminationCriterias.DETERMINATION_CRITERIA = new core_1.StringField('DeterminationCriteria', DeterminationCriterias, 'Edm.String');
    /**
     * Static representation of the [[isActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeterminationCriterias.IS_ACTIVE = new core_1.EnumField('IsActive', DeterminationCriterias);
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeterminationCriterias.PRIORITY = new core_1.NumberField('Priority', DeterminationCriterias, 'Edm.Int32');
    /**
     * All fields of the DeterminationCriterias entity.
     */
    DeterminationCriterias._allFields = [
        DeterminationCriterias.DMC_ID,
        DeterminationCriterias.DETERMINATION_CRITERIA,
        DeterminationCriterias.IS_ACTIVE,
        DeterminationCriterias.PRIORITY
    ];
    /**
     * All fields selector.
     */
    DeterminationCriterias.ALL_FIELDS = new core_1.AllFields('*', DeterminationCriterias);
    /**
     * All key fields of the DeterminationCriterias entity.
     */
    DeterminationCriterias._keyFields = [DeterminationCriterias.DMC_ID];
    /**
     * Mapping of all key field names to the respective static field property DeterminationCriterias.
     */
    DeterminationCriterias._keys = DeterminationCriterias._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DeterminationCriterias = exports.DeterminationCriterias || (exports.DeterminationCriterias = {}));
exports.DeterminationCriterias = DeterminationCriterias;
//# sourceMappingURL=DeterminationCriterias.js.map