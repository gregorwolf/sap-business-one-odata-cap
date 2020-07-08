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
exports.WithholdingTaxDataWtx = exports.WithholdingTaxDataWtxField = exports.createWithholdingTaxDataWtx = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxDataWtx.build]] instead.
 */
function createWithholdingTaxDataWtx(json) {
    return WithholdingTaxDataWtx.build(json);
}
exports.createWithholdingTaxDataWtx = createWithholdingTaxDataWtx;
/**
 * WithholdingTaxDataWtxField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WithholdingTaxDataWtxField = /** @class */ (function (_super) {
    __extends(WithholdingTaxDataWtxField, _super);
    function WithholdingTaxDataWtxField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WithholdingTaxDataWtx.wtAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmountSys = new v4_1.ComplexTypeNumberPropertyField('WTAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.wtAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmountFc = new v4_1.ComplexTypeNumberPropertyField('WTAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.wtAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmount = new v4_1.ComplexTypeNumberPropertyField('WTAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.withholdingType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingType = new v4_1.ComplexTypeStringPropertyField('WithholdingType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.taxableAmountinSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmountinSys = new v4_1.ComplexTypeNumberPropertyField('TaxableAmountinSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.taxableAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmountFc = new v4_1.ComplexTypeNumberPropertyField('TaxableAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.taxableAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmount = new v4_1.ComplexTypeNumberPropertyField('TaxableAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.category]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.category = new v4_1.ComplexTypeStringPropertyField('Category', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseType = new v4_1.ComplexTypeStringPropertyField('BaseType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.appliedWtAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmountSys = new v4_1.ComplexTypeNumberPropertyField('AppliedWTAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.appliedWtAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmountFc = new v4_1.ComplexTypeNumberPropertyField('AppliedWTAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.appliedWtAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmount = new v4_1.ComplexTypeNumberPropertyField('AppliedWTAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.glAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glAccount = new v4_1.ComplexTypeStringPropertyField('GLAccount', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseDocEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocEntry = new v4_1.ComplexTypeNumberPropertyField('BaseDocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseDocLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocLine = new v4_1.ComplexTypeNumberPropertyField('BaseDocLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseDocType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocType = new v4_1.ComplexTypeStringPropertyField('BaseDocType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.wtAbsId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAbsId = new v4_1.ComplexTypeStringPropertyField('WTAbsId', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxDataWtx.exemptRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exemptRate = new v4_1.ComplexTypeNumberPropertyField('ExemptRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseNetAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseNetAmountSys = new v4_1.ComplexTypeNumberPropertyField('BaseNetAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseNetAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseNetAmountFc = new v4_1.ComplexTypeNumberPropertyField('BaseNetAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseNetAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseNetAmount = new v4_1.ComplexTypeNumberPropertyField('BaseNetAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseVatmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseVatmountSys = new v4_1.ComplexTypeNumberPropertyField('BaseVatmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseVatmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseVatmountFc = new v4_1.ComplexTypeNumberPropertyField('BaseVatmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.baseVatmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseVatmount = new v4_1.ComplexTypeNumberPropertyField('BaseVatmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumBaseAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumBaseAmountSys = new v4_1.ComplexTypeNumberPropertyField('AccumBaseAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumBaseAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumBaseAmountFc = new v4_1.ComplexTypeNumberPropertyField('AccumBaseAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumBaseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumBaseAmount = new v4_1.ComplexTypeNumberPropertyField('AccumBaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumWTaxAmountSys = new v4_1.ComplexTypeNumberPropertyField('AccumWTaxAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumWTaxAmountFc = new v4_1.ComplexTypeNumberPropertyField('AccumWTaxAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxDataWtx.accumWTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumWTaxAmount = new v4_1.ComplexTypeNumberPropertyField('AccumWTaxAmount', _this, 'Edm.Double');
        return _this;
    }
    return WithholdingTaxDataWtxField;
}(v4_1.ComplexTypeField));
exports.WithholdingTaxDataWtxField = WithholdingTaxDataWtxField;
var WithholdingTaxDataWtx;
(function (WithholdingTaxDataWtx) {
    function build(json) {
        return v4_1.createComplexType(json, {
            WTAmountSys: function (wtAmountSys) { return ({ wtAmountSys: v4_1.edmToTs(wtAmountSys, 'Edm.Double') }); },
            WTAmountFC: function (wtAmountFc) { return ({ wtAmountFc: v4_1.edmToTs(wtAmountFc, 'Edm.Double') }); },
            WTAmount: function (wtAmount) { return ({ wtAmount: v4_1.edmToTs(wtAmount, 'Edm.Double') }); },
            WithholdingType: function (withholdingType) { return ({ withholdingType: v4_1.edmToTs(withholdingType, 'Edm.String') }); },
            TaxableAmountinSys: function (taxableAmountinSys) { return ({ taxableAmountinSys: v4_1.edmToTs(taxableAmountinSys, 'Edm.Double') }); },
            TaxableAmountFC: function (taxableAmountFc) { return ({ taxableAmountFc: v4_1.edmToTs(taxableAmountFc, 'Edm.Double') }); },
            TaxableAmount: function (taxableAmount) { return ({ taxableAmount: v4_1.edmToTs(taxableAmount, 'Edm.Double') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); },
            Category: function (category) { return ({ category: v4_1.edmToTs(category, 'Edm.String') }); },
            BaseType: function (baseType) { return ({ baseType: v4_1.edmToTs(baseType, 'Edm.String') }); },
            AppliedWTAmountSys: function (appliedWtAmountSys) { return ({ appliedWtAmountSys: v4_1.edmToTs(appliedWtAmountSys, 'Edm.Double') }); },
            AppliedWTAmountFC: function (appliedWtAmountFc) { return ({ appliedWtAmountFc: v4_1.edmToTs(appliedWtAmountFc, 'Edm.Double') }); },
            AppliedWTAmount: function (appliedWtAmount) { return ({ appliedWtAmount: v4_1.edmToTs(appliedWtAmount, 'Edm.Double') }); },
            GLAccount: function (glAccount) { return ({ glAccount: v4_1.edmToTs(glAccount, 'Edm.String') }); },
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            BaseDocEntry: function (baseDocEntry) { return ({ baseDocEntry: v4_1.edmToTs(baseDocEntry, 'Edm.Int32') }); },
            BaseDocLine: function (baseDocLine) { return ({ baseDocLine: v4_1.edmToTs(baseDocLine, 'Edm.Int32') }); },
            BaseDocType: function (baseDocType) { return ({ baseDocType: v4_1.edmToTs(baseDocType, 'Edm.String') }); },
            WTAbsId: function (wtAbsId) { return ({ wtAbsId: v4_1.edmToTs(wtAbsId, 'Edm.String') }); },
            ExemptRate: function (exemptRate) { return ({ exemptRate: v4_1.edmToTs(exemptRate, 'Edm.Double') }); },
            BaseNetAmountSys: function (baseNetAmountSys) { return ({ baseNetAmountSys: v4_1.edmToTs(baseNetAmountSys, 'Edm.Double') }); },
            BaseNetAmountFC: function (baseNetAmountFc) { return ({ baseNetAmountFc: v4_1.edmToTs(baseNetAmountFc, 'Edm.Double') }); },
            BaseNetAmount: function (baseNetAmount) { return ({ baseNetAmount: v4_1.edmToTs(baseNetAmount, 'Edm.Double') }); },
            BaseVatmountSys: function (baseVatmountSys) { return ({ baseVatmountSys: v4_1.edmToTs(baseVatmountSys, 'Edm.Double') }); },
            BaseVatmountFC: function (baseVatmountFc) { return ({ baseVatmountFc: v4_1.edmToTs(baseVatmountFc, 'Edm.Double') }); },
            BaseVatmount: function (baseVatmount) { return ({ baseVatmount: v4_1.edmToTs(baseVatmount, 'Edm.Double') }); },
            AccumBaseAmountSys: function (accumBaseAmountSys) { return ({ accumBaseAmountSys: v4_1.edmToTs(accumBaseAmountSys, 'Edm.Double') }); },
            AccumBaseAmountFC: function (accumBaseAmountFc) { return ({ accumBaseAmountFc: v4_1.edmToTs(accumBaseAmountFc, 'Edm.Double') }); },
            AccumBaseAmount: function (accumBaseAmount) { return ({ accumBaseAmount: v4_1.edmToTs(accumBaseAmount, 'Edm.Double') }); },
            AccumWTaxAmountSys: function (accumWTaxAmountSys) { return ({ accumWTaxAmountSys: v4_1.edmToTs(accumWTaxAmountSys, 'Edm.Double') }); },
            AccumWTaxAmountFC: function (accumWTaxAmountFc) { return ({ accumWTaxAmountFc: v4_1.edmToTs(accumWTaxAmountFc, 'Edm.Double') }); },
            AccumWTaxAmount: function (accumWTaxAmount) { return ({ accumWTaxAmount: v4_1.edmToTs(accumWTaxAmount, 'Edm.Double') }); }
        });
    }
    WithholdingTaxDataWtx.build = build;
})(WithholdingTaxDataWtx = exports.WithholdingTaxDataWtx || (exports.WithholdingTaxDataWtx = {}));
//# sourceMappingURL=WithholdingTaxDataWtx.js.map