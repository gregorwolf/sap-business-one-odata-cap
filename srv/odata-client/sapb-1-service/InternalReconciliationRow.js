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
exports.InternalReconciliationRow = exports.InternalReconciliationRowField = exports.createInternalReconciliationRow = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationRow.build]] instead.
 */
function createInternalReconciliationRow(json) {
    return InternalReconciliationRow.build(json);
}
exports.createInternalReconciliationRow = createInternalReconciliationRow;
/**
 * InternalReconciliationRowField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InternalReconciliationRowField = /** @class */ (function (_super) {
    __extends(InternalReconciliationRowField, _super);
    function InternalReconciliationRowField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InternalReconciliationRow.lineSeq]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineSeq = new v4_1.ComplexTypeNumberPropertyField('LineSeq', _this, 'Edm.Int32');
        /**
         * Representation of the [[InternalReconciliationRow.shortName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shortName = new v4_1.ComplexTypeStringPropertyField('ShortName', _this, 'Edm.String');
        /**
         * Representation of the [[InternalReconciliationRow.transId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transId = new v4_1.ComplexTypeNumberPropertyField('TransId', _this, 'Edm.Int32');
        /**
         * Representation of the [[InternalReconciliationRow.transRowId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transRowId = new v4_1.ComplexTypeNumberPropertyField('TransRowId', _this, 'Edm.Int32');
        /**
         * Representation of the [[InternalReconciliationRow.srcObjTyp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.srcObjTyp = new v4_1.ComplexTypeStringPropertyField('SrcObjTyp', _this, 'Edm.String');
        /**
         * Representation of the [[InternalReconciliationRow.srcObjAbs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.srcObjAbs = new v4_1.ComplexTypeNumberPropertyField('SrcObjAbs', _this, 'Edm.Int32');
        /**
         * Representation of the [[InternalReconciliationRow.reconcileAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconcileAmount = new v4_1.ComplexTypeNumberPropertyField('ReconcileAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[InternalReconciliationRow.cashDiscount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashDiscount = new v4_1.ComplexTypeNumberPropertyField('CashDiscount', _this, 'Edm.Double');
        return _this;
    }
    return InternalReconciliationRowField;
}(v4_1.ComplexTypeField));
exports.InternalReconciliationRowField = InternalReconciliationRowField;
var InternalReconciliationRow;
(function (InternalReconciliationRow) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineSeq: function (lineSeq) { return ({ lineSeq: v4_1.edmToTs(lineSeq, 'Edm.Int32') }); },
            ShortName: function (shortName) { return ({ shortName: v4_1.edmToTs(shortName, 'Edm.String') }); },
            TransId: function (transId) { return ({ transId: v4_1.edmToTs(transId, 'Edm.Int32') }); },
            TransRowId: function (transRowId) { return ({ transRowId: v4_1.edmToTs(transRowId, 'Edm.Int32') }); },
            SrcObjTyp: function (srcObjTyp) { return ({ srcObjTyp: v4_1.edmToTs(srcObjTyp, 'Edm.String') }); },
            SrcObjAbs: function (srcObjAbs) { return ({ srcObjAbs: v4_1.edmToTs(srcObjAbs, 'Edm.Int32') }); },
            ReconcileAmount: function (reconcileAmount) { return ({ reconcileAmount: v4_1.edmToTs(reconcileAmount, 'Edm.Double') }); },
            CashDiscount: function (cashDiscount) { return ({ cashDiscount: v4_1.edmToTs(cashDiscount, 'Edm.Double') }); }
        });
    }
    InternalReconciliationRow.build = build;
})(InternalReconciliationRow = exports.InternalReconciliationRow || (exports.InternalReconciliationRow = {}));
//# sourceMappingURL=InternalReconciliationRow.js.map