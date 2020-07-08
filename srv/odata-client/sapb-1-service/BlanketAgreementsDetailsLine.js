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
exports.BlanketAgreementsDetailsLine = exports.BlanketAgreementsDetailsLineField = exports.createBlanketAgreementsDetailsLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsDetailsLine.build]] instead.
 */
function createBlanketAgreementsDetailsLine(json) {
    return BlanketAgreementsDetailsLine.build(json);
}
exports.createBlanketAgreementsDetailsLine = createBlanketAgreementsDetailsLine;
/**
 * BlanketAgreementsDetailsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BlanketAgreementsDetailsLineField = /** @class */ (function (_super) {
    __extends(BlanketAgreementsDetailsLineField, _super);
    function BlanketAgreementsDetailsLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.agreementNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementNo = new v4_1.ComplexTypeNumberPropertyField('AgreementNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.agreementRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementRowNumber = new v4_1.ComplexTypeNumberPropertyField('AgreementRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.agreementEffectiveRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementEffectiveRowNumber = new v4_1.ComplexTypeNumberPropertyField('AgreementEffectiveRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.from]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.from = new v4_1.ComplexTypeDatePropertyField('From', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.to]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.to = new v4_1.ComplexTypeDatePropertyField('To', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.releaseInformation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.releaseInformation = new v4_1.ComplexTypeStringPropertyField('ReleaseInformation', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new v4_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.freeText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText = new v4_1.ComplexTypeStringPropertyField('FreeText', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.plannedAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedAmountLc = new v4_1.ComplexTypeNumberPropertyField('PlannedAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.plannedAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedAmountFc = new v4_1.ComplexTypeNumberPropertyField('PlannedAmountFC', _this, 'Edm.Double');
        return _this;
    }
    return BlanketAgreementsDetailsLineField;
}(v4_1.ComplexTypeField));
exports.BlanketAgreementsDetailsLineField = BlanketAgreementsDetailsLineField;
var BlanketAgreementsDetailsLine;
(function (BlanketAgreementsDetailsLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AgreementNo: function (agreementNo) { return ({ agreementNo: v4_1.edmToTs(agreementNo, 'Edm.Int32') }); },
            AgreementRowNumber: function (agreementRowNumber) { return ({ agreementRowNumber: v4_1.edmToTs(agreementRowNumber, 'Edm.Int32') }); },
            AgreementEffectiveRowNumber: function (agreementEffectiveRowNumber) { return ({ agreementEffectiveRowNumber: v4_1.edmToTs(agreementEffectiveRowNumber, 'Edm.Int32') }); },
            From: function (from) { return ({ from: v4_1.edmToTs(from, 'Edm.DateTimeOffset') }); },
            To: function (to) { return ({ to: v4_1.edmToTs(to, 'Edm.DateTimeOffset') }); },
            ReleaseInformation: function (releaseInformation) { return ({ releaseInformation: v4_1.edmToTs(releaseInformation, 'Edm.String') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            Warehouse: function (warehouse) { return ({ warehouse: v4_1.edmToTs(warehouse, 'Edm.String') }); },
            FreeText: function (freeText) { return ({ freeText: v4_1.edmToTs(freeText, 'Edm.String') }); },
            PlannedAmountLC: function (plannedAmountLc) { return ({ plannedAmountLc: v4_1.edmToTs(plannedAmountLc, 'Edm.Double') }); },
            PlannedAmountFC: function (plannedAmountFc) { return ({ plannedAmountFc: v4_1.edmToTs(plannedAmountFc, 'Edm.Double') }); }
        });
    }
    BlanketAgreementsDetailsLine.build = build;
})(BlanketAgreementsDetailsLine = exports.BlanketAgreementsDetailsLine || (exports.BlanketAgreementsDetailsLine = {}));
//# sourceMappingURL=BlanketAgreementsDetailsLine.js.map