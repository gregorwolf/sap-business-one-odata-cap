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
exports.WithholdingTaxLine = exports.WithholdingTaxLineField = exports.createWithholdingTaxLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxLine.build]] instead.
 */
function createWithholdingTaxLine(json) {
    return WithholdingTaxLine.build(json);
}
exports.createWithholdingTaxLine = createWithholdingTaxLine;
/**
 * WithholdingTaxLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WithholdingTaxLineField = /** @class */ (function (_super) {
    __extends(WithholdingTaxLineField, _super);
    function WithholdingTaxLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WithholdingTaxLine.wtCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtCode = new v4_1.ComplexTypeStringPropertyField('WTCode', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.wtAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmountSys = new v4_1.ComplexTypeNumberPropertyField('WTAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.wtAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmountFc = new v4_1.ComplexTypeNumberPropertyField('WTAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.wtAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmount = new v4_1.ComplexTypeNumberPropertyField('WTAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.withholdingType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingType = new v4_1.ComplexTypeStringPropertyField('WithholdingType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.taxableAmountinSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmountinSys = new v4_1.ComplexTypeNumberPropertyField('TaxableAmountinSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.taxableAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmountFc = new v4_1.ComplexTypeNumberPropertyField('TaxableAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.taxableAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmount = new v4_1.ComplexTypeNumberPropertyField('TaxableAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.roundingType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.roundingType = new v4_1.ComplexTypeStringPropertyField('RoundingType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.criteria]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.criteria = new v4_1.ComplexTypeStringPropertyField('Criteria', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.category]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.category = new v4_1.ComplexTypeStringPropertyField('Category', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.baseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseType = new v4_1.ComplexTypeStringPropertyField('BaseType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.appliedWtAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmountSys = new v4_1.ComplexTypeNumberPropertyField('AppliedWTAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.appliedWtAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmountFc = new v4_1.ComplexTypeNumberPropertyField('AppliedWTAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.appliedWtAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmount = new v4_1.ComplexTypeNumberPropertyField('AppliedWTAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.glAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glAccount = new v4_1.ComplexTypeStringPropertyField('GLAccount', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.baseDocEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocEntry = new v4_1.ComplexTypeNumberPropertyField('BaseDocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.baseDocLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocLine = new v4_1.ComplexTypeNumberPropertyField('BaseDocLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.baseDocType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocType = new v4_1.ComplexTypeNumberPropertyField('BaseDocType', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.baseDocumentReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentReference = new v4_1.ComplexTypeNumberPropertyField('BaseDocumentReference', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.targetAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetAbsEntry = new v4_1.ComplexTypeNumberPropertyField('TargetAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.targetDocumentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetDocumentType = new v4_1.ComplexTypeNumberPropertyField('TargetDocumentType', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.cstCodeIncoming]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cstCodeIncoming = new v4_1.ComplexTypeStringPropertyField('CSTCodeIncoming', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.cstCodeOutgoing]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cstCodeOutgoing = new v4_1.ComplexTypeStringPropertyField('CSTCodeOutgoing', _this, 'Edm.String');
        return _this;
    }
    return WithholdingTaxLineField;
}(v4_1.ComplexTypeField));
exports.WithholdingTaxLineField = WithholdingTaxLineField;
var WithholdingTaxLine;
(function (WithholdingTaxLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            WTCode: function (wtCode) { return ({ wtCode: v4_1.edmToTs(wtCode, 'Edm.String') }); },
            WTAmountSys: function (wtAmountSys) { return ({ wtAmountSys: v4_1.edmToTs(wtAmountSys, 'Edm.Double') }); },
            WTAmountFC: function (wtAmountFc) { return ({ wtAmountFc: v4_1.edmToTs(wtAmountFc, 'Edm.Double') }); },
            WTAmount: function (wtAmount) { return ({ wtAmount: v4_1.edmToTs(wtAmount, 'Edm.Double') }); },
            WithholdingType: function (withholdingType) { return ({ withholdingType: v4_1.edmToTs(withholdingType, 'Edm.String') }); },
            TaxableAmountinSys: function (taxableAmountinSys) { return ({ taxableAmountinSys: v4_1.edmToTs(taxableAmountinSys, 'Edm.Double') }); },
            TaxableAmountFC: function (taxableAmountFc) { return ({ taxableAmountFc: v4_1.edmToTs(taxableAmountFc, 'Edm.Double') }); },
            TaxableAmount: function (taxableAmount) { return ({ taxableAmount: v4_1.edmToTs(taxableAmount, 'Edm.Double') }); },
            RoundingType: function (roundingType) { return ({ roundingType: v4_1.edmToTs(roundingType, 'Edm.String') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); },
            Criteria: function (criteria) { return ({ criteria: v4_1.edmToTs(criteria, 'Edm.String') }); },
            Category: function (category) { return ({ category: v4_1.edmToTs(category, 'Edm.String') }); },
            BaseType: function (baseType) { return ({ baseType: v4_1.edmToTs(baseType, 'Edm.String') }); },
            AppliedWTAmountSys: function (appliedWtAmountSys) { return ({ appliedWtAmountSys: v4_1.edmToTs(appliedWtAmountSys, 'Edm.Double') }); },
            AppliedWTAmountFC: function (appliedWtAmountFc) { return ({ appliedWtAmountFc: v4_1.edmToTs(appliedWtAmountFc, 'Edm.Double') }); },
            AppliedWTAmount: function (appliedWtAmount) { return ({ appliedWtAmount: v4_1.edmToTs(appliedWtAmount, 'Edm.Double') }); },
            GLAccount: function (glAccount) { return ({ glAccount: v4_1.edmToTs(glAccount, 'Edm.String') }); },
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            BaseDocEntry: function (baseDocEntry) { return ({ baseDocEntry: v4_1.edmToTs(baseDocEntry, 'Edm.Int32') }); },
            BaseDocLine: function (baseDocLine) { return ({ baseDocLine: v4_1.edmToTs(baseDocLine, 'Edm.Int32') }); },
            BaseDocType: function (baseDocType) { return ({ baseDocType: v4_1.edmToTs(baseDocType, 'Edm.Int32') }); },
            BaseDocumentReference: function (baseDocumentReference) { return ({ baseDocumentReference: v4_1.edmToTs(baseDocumentReference, 'Edm.Int32') }); },
            TargetAbsEntry: function (targetAbsEntry) { return ({ targetAbsEntry: v4_1.edmToTs(targetAbsEntry, 'Edm.Int32') }); },
            TargetDocumentType: function (targetDocumentType) { return ({ targetDocumentType: v4_1.edmToTs(targetDocumentType, 'Edm.Int32') }); },
            CSTCodeIncoming: function (cstCodeIncoming) { return ({ cstCodeIncoming: v4_1.edmToTs(cstCodeIncoming, 'Edm.String') }); },
            CSTCodeOutgoing: function (cstCodeOutgoing) { return ({ cstCodeOutgoing: v4_1.edmToTs(cstCodeOutgoing, 'Edm.String') }); }
        });
    }
    WithholdingTaxLine.build = build;
})(WithholdingTaxLine = exports.WithholdingTaxLine || (exports.WithholdingTaxLine = {}));
//# sourceMappingURL=WithholdingTaxLine.js.map