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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalReconciliationParams = exports.ExternalReconciliationParamsField = exports.createExternalReconciliationParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliationParams.build]] instead.
 */
function createExternalReconciliationParams(json) {
    return ExternalReconciliationParams.build(json);
}
exports.createExternalReconciliationParams = createExternalReconciliationParams;
/**
 * ExternalReconciliationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExternalReconciliationParamsField = /** @class */ (function (_super) {
    __extends(ExternalReconciliationParamsField, _super);
    function ExternalReconciliationParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ExternalReconciliationParams.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new v4_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalReconciliationParams.reconciliationNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationNo = new v4_1.ComplexTypeNumberPropertyField('ReconciliationNo', _this, 'Edm.Int32');
        return _this;
    }
    return ExternalReconciliationParamsField;
}(v4_1.ComplexTypeField));
exports.ExternalReconciliationParamsField = ExternalReconciliationParamsField;
var ExternalReconciliationParams;
(function (ExternalReconciliationParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AccountCode: function (accountCode) { return ({ accountCode: v4_1.edmToTs(accountCode, 'Edm.String') }); },
            ReconciliationNo: function (reconciliationNo) { return ({ reconciliationNo: v4_1.edmToTs(reconciliationNo, 'Edm.Int32') }); }
        });
    }
    ExternalReconciliationParams.build = build;
})(ExternalReconciliationParams = exports.ExternalReconciliationParams || (exports.ExternalReconciliationParams = {}));
//# sourceMappingURL=ExternalReconciliationParams.js.map