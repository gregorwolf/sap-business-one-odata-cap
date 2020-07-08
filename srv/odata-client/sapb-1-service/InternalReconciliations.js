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
exports.InternalReconciliations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InternalReconciliationsRequestBuilder_1 = require("./InternalReconciliationsRequestBuilder");
var InternalReconciliationRow_1 = require("./InternalReconciliationRow");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "InternalReconciliations" of service "SAPB1".
 */
var InternalReconciliations = /** @class */ (function (_super) {
    __extends(InternalReconciliations, _super);
    function InternalReconciliations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InternalReconciliations`.
     * @returns A builder that constructs instances of entity type `InternalReconciliations`.
     */
    InternalReconciliations.builder = function () {
        return v4_1.Entity.entityBuilder(InternalReconciliations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InternalReconciliations` entity type.
     * @returns A `InternalReconciliations` request builder.
     */
    InternalReconciliations.requestBuilder = function () {
        return new InternalReconciliationsRequestBuilder_1.InternalReconciliationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InternalReconciliations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InternalReconciliations`.
     */
    InternalReconciliations.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, InternalReconciliations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InternalReconciliations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InternalReconciliations.
     */
    InternalReconciliations._entityName = 'InternalReconciliations';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InternalReconciliations.
     */
    InternalReconciliations._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    InternalReconciliations._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InternalReconciliations;
}(v4_1.Entity));
exports.InternalReconciliations = InternalReconciliations;
(function (InternalReconciliations) {
    /**
     * Static representation of the [[reconNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InternalReconciliations.RECON_NUM = new v4_1.NumberField('ReconNum', InternalReconciliations, 'Edm.Int32');
    /**
     * Static representation of the [[reconDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InternalReconciliations.RECON_DATE = new v4_1.DateField('ReconDate', InternalReconciliations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[total]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InternalReconciliations.TOTAL = new v4_1.NumberField('Total', InternalReconciliations, 'Edm.Double');
    /**
     * Static representation of the [[cancelAbs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InternalReconciliations.CANCEL_ABS = new v4_1.NumberField('CancelAbs', InternalReconciliations, 'Edm.Int32');
    /**
     * Static representation of the [[internalReconciliationRows]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InternalReconciliations.INTERNAL_RECONCILIATION_ROWS = new v4_1.CollectionField('InternalReconciliationRows', InternalReconciliations, new InternalReconciliationRow_1.InternalReconciliationRowField('', InternalReconciliations));
    /**
     * All fields of the InternalReconciliations entity.
     */
    InternalReconciliations._allFields = [
        InternalReconciliations.RECON_NUM,
        InternalReconciliations.RECON_DATE,
        InternalReconciliations.TOTAL,
        InternalReconciliations.CANCEL_ABS,
        InternalReconciliations.INTERNAL_RECONCILIATION_ROWS
    ];
    /**
     * All fields selector.
     */
    InternalReconciliations.ALL_FIELDS = new v4_1.AllFields('*', InternalReconciliations);
    /**
     * All key fields of the InternalReconciliations entity.
     */
    InternalReconciliations._keyFields = [InternalReconciliations.RECON_NUM];
    /**
     * Mapping of all key field names to the respective static field property InternalReconciliations.
     */
    InternalReconciliations._keys = InternalReconciliations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InternalReconciliations = exports.InternalReconciliations || (exports.InternalReconciliations = {}));
exports.InternalReconciliations = InternalReconciliations;
//# sourceMappingURL=InternalReconciliations.js.map