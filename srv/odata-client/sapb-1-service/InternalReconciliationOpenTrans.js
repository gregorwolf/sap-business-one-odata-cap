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
exports.InternalReconciliationOpenTrans = exports.InternalReconciliationOpenTransField = exports.createInternalReconciliationOpenTrans = void 0;
var InternalReconciliationOpenTransRow_1 = require("./InternalReconciliationOpenTransRow");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTrans.build]] instead.
 */
function createInternalReconciliationOpenTrans(json) {
    return InternalReconciliationOpenTrans.build(json);
}
exports.createInternalReconciliationOpenTrans = createInternalReconciliationOpenTrans;
/**
 * InternalReconciliationOpenTransField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InternalReconciliationOpenTransField = /** @class */ (function (_super) {
    __extends(InternalReconciliationOpenTransField, _super);
    function InternalReconciliationOpenTransField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InternalReconciliationOpenTrans.reconDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconDate = new v4_1.ComplexTypeDatePropertyField('ReconDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InternalReconciliationOpenTrans.internalReconciliationOpenTransRows]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalReconciliationOpenTransRows = new InternalReconciliationOpenTransRow_1.InternalReconciliationOpenTransRowField('InternalReconciliationOpenTransRows', _this);
        return _this;
    }
    return InternalReconciliationOpenTransField;
}(v4_1.ComplexTypeField));
exports.InternalReconciliationOpenTransField = InternalReconciliationOpenTransField;
var InternalReconciliationOpenTrans;
(function (InternalReconciliationOpenTrans) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ReconDate: function (reconDate) { return ({ reconDate: v4_1.edmToTs(reconDate, 'Edm.DateTimeOffset') }); },
            InternalReconciliationOpenTransRows: function (internalReconciliationOpenTransRows) { return ({ internalReconciliationOpenTransRows: InternalReconciliationOpenTransRow_1.InternalReconciliationOpenTransRow.build(internalReconciliationOpenTransRows) }); }
        });
    }
    InternalReconciliationOpenTrans.build = build;
})(InternalReconciliationOpenTrans = exports.InternalReconciliationOpenTrans || (exports.InternalReconciliationOpenTrans = {}));
//# sourceMappingURL=InternalReconciliationOpenTrans.js.map