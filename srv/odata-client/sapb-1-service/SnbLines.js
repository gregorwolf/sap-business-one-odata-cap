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
exports.SnbLines = exports.SnbLinesField = exports.createSnbLines = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SnbLines.build]] instead.
 */
function createSnbLines(json) {
    return SnbLines.build(json);
}
exports.createSnbLines = createSnbLines;
/**
 * SnbLinesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SnbLinesField = /** @class */ (function (_super) {
    __extends(SnbLinesField, _super);
    function SnbLinesField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SnbLines.snbAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.snbAbsEntry = new v4_1.ComplexTypeNumberPropertyField('SnbAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[SnbLines.newCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newCost = new v4_1.ComplexTypeNumberPropertyField('NewCost', _this, 'Edm.Double');
        /**
         * Representation of the [[SnbLines.debitCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitCredit = new v4_1.ComplexTypeNumberPropertyField('DebitCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[SnbLines.systemNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemNumber = new v4_1.ComplexTypeNumberPropertyField('SystemNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SnbLines.lotNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lotNumber = new v4_1.ComplexTypeStringPropertyField('LotNumber', _this, 'Edm.String');
        /**
         * Representation of the [[SnbLines.manufactureNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufactureNumber = new v4_1.ComplexTypeStringPropertyField('ManufactureNumber', _this, 'Edm.String');
        /**
         * Representation of the [[SnbLines.admissionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.admissionDate = new v4_1.ComplexTypeDatePropertyField('AdmissionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SnbLines.expirationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expirationDate = new v4_1.ComplexTypeDatePropertyField('ExpirationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SnbLines.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new v4_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        return _this;
    }
    return SnbLinesField;
}(v4_1.ComplexTypeField));
exports.SnbLinesField = SnbLinesField;
var SnbLines;
(function (SnbLines) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SnbAbsEntry: function (snbAbsEntry) { return ({ snbAbsEntry: v4_1.edmToTs(snbAbsEntry, 'Edm.Int32') }); },
            NewCost: function (newCost) { return ({ newCost: v4_1.edmToTs(newCost, 'Edm.Double') }); },
            DebitCredit: function (debitCredit) { return ({ debitCredit: v4_1.edmToTs(debitCredit, 'Edm.Double') }); },
            SystemNumber: function (systemNumber) { return ({ systemNumber: v4_1.edmToTs(systemNumber, 'Edm.Int32') }); },
            LotNumber: function (lotNumber) { return ({ lotNumber: v4_1.edmToTs(lotNumber, 'Edm.String') }); },
            ManufactureNumber: function (manufactureNumber) { return ({ manufactureNumber: v4_1.edmToTs(manufactureNumber, 'Edm.String') }); },
            AdmissionDate: function (admissionDate) { return ({ admissionDate: v4_1.edmToTs(admissionDate, 'Edm.DateTimeOffset') }); },
            ExpirationDate: function (expirationDate) { return ({ expirationDate: v4_1.edmToTs(expirationDate, 'Edm.DateTimeOffset') }); },
            BaseLine: function (baseLine) { return ({ baseLine: v4_1.edmToTs(baseLine, 'Edm.Int32') }); }
        });
    }
    SnbLines.build = build;
})(SnbLines = exports.SnbLines || (exports.SnbLines = {}));
//# sourceMappingURL=SnbLines.js.map