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
exports.ExternalReconciliationFilterParams = exports.ExternalReconciliationFilterParamsField = exports.createExternalReconciliationFilterParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliationFilterParams.build]] instead.
 */
function createExternalReconciliationFilterParams(json) {
    return ExternalReconciliationFilterParams.build(json);
}
exports.createExternalReconciliationFilterParams = createExternalReconciliationFilterParams;
/**
 * ExternalReconciliationFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExternalReconciliationFilterParamsField = /** @class */ (function (_super) {
    __extends(ExternalReconciliationFilterParamsField, _super);
    function ExternalReconciliationFilterParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ExternalReconciliationFilterParams.accountCodeFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCodeFrom = new v4_1.ComplexTypeStringPropertyField('AccountCodeFrom', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalReconciliationFilterParams.accountCodeTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCodeTo = new v4_1.ComplexTypeStringPropertyField('AccountCodeTo', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalReconciliationFilterParams.reconciliationDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationDateFrom = new v4_1.ComplexTypeDatePropertyField('ReconciliationDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalReconciliationFilterParams.reconciliationDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationDateTo = new v4_1.ComplexTypeDatePropertyField('ReconciliationDateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalReconciliationFilterParams.reconciliationNoFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationNoFrom = new v4_1.ComplexTypeNumberPropertyField('ReconciliationNoFrom', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalReconciliationFilterParams.reconciliationNoTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationNoTo = new v4_1.ComplexTypeNumberPropertyField('ReconciliationNoTo', _this, 'Edm.Int32');
        return _this;
    }
    return ExternalReconciliationFilterParamsField;
}(v4_1.ComplexTypeField));
exports.ExternalReconciliationFilterParamsField = ExternalReconciliationFilterParamsField;
var ExternalReconciliationFilterParams;
(function (ExternalReconciliationFilterParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AccountCodeFrom: function (accountCodeFrom) { return ({ accountCodeFrom: v4_1.edmToTs(accountCodeFrom, 'Edm.String') }); },
            AccountCodeTo: function (accountCodeTo) { return ({ accountCodeTo: v4_1.edmToTs(accountCodeTo, 'Edm.String') }); },
            ReconciliationDateFrom: function (reconciliationDateFrom) { return ({ reconciliationDateFrom: v4_1.edmToTs(reconciliationDateFrom, 'Edm.DateTimeOffset') }); },
            ReconciliationDateTo: function (reconciliationDateTo) { return ({ reconciliationDateTo: v4_1.edmToTs(reconciliationDateTo, 'Edm.DateTimeOffset') }); },
            ReconciliationNoFrom: function (reconciliationNoFrom) { return ({ reconciliationNoFrom: v4_1.edmToTs(reconciliationNoFrom, 'Edm.Int32') }); },
            ReconciliationNoTo: function (reconciliationNoTo) { return ({ reconciliationNoTo: v4_1.edmToTs(reconciliationNoTo, 'Edm.Int32') }); }
        });
    }
    ExternalReconciliationFilterParams.build = build;
})(ExternalReconciliationFilterParams = exports.ExternalReconciliationFilterParams || (exports.ExternalReconciliationFilterParams = {}));
//# sourceMappingURL=ExternalReconciliationFilterParams.js.map