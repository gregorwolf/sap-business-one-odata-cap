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
exports.InternalReconciliationOpenTransParams = exports.InternalReconciliationOpenTransParamsField = exports.createInternalReconciliationOpenTransParams = void 0;
var InternalReconciliationBp_1 = require("./InternalReconciliationBp");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTransParams.build]] instead.
 */
function createInternalReconciliationOpenTransParams(json) {
    return InternalReconciliationOpenTransParams.build(json);
}
exports.createInternalReconciliationOpenTransParams = createInternalReconciliationOpenTransParams;
/**
 * InternalReconciliationOpenTransParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InternalReconciliationOpenTransParamsField = /** @class */ (function (_super) {
    __extends(InternalReconciliationOpenTransParamsField, _super);
    function InternalReconciliationOpenTransParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.reconDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconDate = new v4_1.ComplexTypeDatePropertyField('ReconDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.accountNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountNo = new v4_1.ComplexTypeStringPropertyField('AccountNo', _this, 'Edm.String');
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.fromDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromDate = new v4_1.ComplexTypeDatePropertyField('FromDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.toDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toDate = new v4_1.ComplexTypeDatePropertyField('ToDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.internalReconciliationBPs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalReconciliationBPs = new InternalReconciliationBp_1.InternalReconciliationBpField('InternalReconciliationBPs', _this);
        return _this;
    }
    return InternalReconciliationOpenTransParamsField;
}(v4_1.ComplexTypeField));
exports.InternalReconciliationOpenTransParamsField = InternalReconciliationOpenTransParamsField;
var InternalReconciliationOpenTransParams;
(function (InternalReconciliationOpenTransParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ReconDate: function (reconDate) { return ({ reconDate: v4_1.edmToTs(reconDate, 'Edm.DateTimeOffset') }); },
            AccountNo: function (accountNo) { return ({ accountNo: v4_1.edmToTs(accountNo, 'Edm.String') }); },
            FromDate: function (fromDate) { return ({ fromDate: v4_1.edmToTs(fromDate, 'Edm.DateTimeOffset') }); },
            ToDate: function (toDate) { return ({ toDate: v4_1.edmToTs(toDate, 'Edm.DateTimeOffset') }); },
            InternalReconciliationBPs: function (internalReconciliationBPs) { return ({ internalReconciliationBPs: InternalReconciliationBp_1.InternalReconciliationBp.build(internalReconciliationBPs) }); }
        });
    }
    InternalReconciliationOpenTransParams.build = build;
})(InternalReconciliationOpenTransParams = exports.InternalReconciliationOpenTransParams || (exports.InternalReconciliationOpenTransParams = {}));
//# sourceMappingURL=InternalReconciliationOpenTransParams.js.map