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
exports.MaterialRevaluationSnbParams = exports.MaterialRevaluationSnbParamsField = exports.createMaterialRevaluationSnbParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationSnbParams.build]] instead.
 */
function createMaterialRevaluationSnbParams(json) {
    return MaterialRevaluationSnbParams.build(json);
}
exports.createMaterialRevaluationSnbParams = createMaterialRevaluationSnbParams;
/**
 * MaterialRevaluationSnbParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MaterialRevaluationSnbParamsField = /** @class */ (function (_super) {
    __extends(MaterialRevaluationSnbParamsField, _super);
    function MaterialRevaluationSnbParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[MaterialRevaluationSnbParams.snbAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.snbAbsEntry = new v4_1.ComplexTypeNumberPropertyField('SnbAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.newCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newCost = new v4_1.ComplexTypeNumberPropertyField('NewCost', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.debitCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitCredit = new v4_1.ComplexTypeNumberPropertyField('DebitCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.systemNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemNumber = new v4_1.ComplexTypeNumberPropertyField('SystemNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.lotNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lotNumber = new v4_1.ComplexTypeStringPropertyField('LotNumber', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.manufactureNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufactureNumber = new v4_1.ComplexTypeStringPropertyField('ManufactureNumber', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.admissionDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.admissionDate = new v4_1.ComplexTypeDatePropertyField('AdmissionDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[MaterialRevaluationSnbParams.expirationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expirationDate = new v4_1.ComplexTypeDatePropertyField('ExpirationDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return MaterialRevaluationSnbParamsField;
}(v4_1.ComplexTypeField));
exports.MaterialRevaluationSnbParamsField = MaterialRevaluationSnbParamsField;
var MaterialRevaluationSnbParams;
(function (MaterialRevaluationSnbParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SnbAbsEntry: function (snbAbsEntry) { return ({ snbAbsEntry: v4_1.edmToTs(snbAbsEntry, 'Edm.Int32') }); },
            NewCost: function (newCost) { return ({ newCost: v4_1.edmToTs(newCost, 'Edm.Double') }); },
            DebitCredit: function (debitCredit) { return ({ debitCredit: v4_1.edmToTs(debitCredit, 'Edm.Double') }); },
            SystemNumber: function (systemNumber) { return ({ systemNumber: v4_1.edmToTs(systemNumber, 'Edm.Int32') }); },
            LotNumber: function (lotNumber) { return ({ lotNumber: v4_1.edmToTs(lotNumber, 'Edm.String') }); },
            ManufactureNumber: function (manufactureNumber) { return ({ manufactureNumber: v4_1.edmToTs(manufactureNumber, 'Edm.String') }); },
            AdmissionDate: function (admissionDate) { return ({ admissionDate: v4_1.edmToTs(admissionDate, 'Edm.DateTimeOffset') }); },
            ExpirationDate: function (expirationDate) { return ({ expirationDate: v4_1.edmToTs(expirationDate, 'Edm.DateTimeOffset') }); }
        });
    }
    MaterialRevaluationSnbParams.build = build;
})(MaterialRevaluationSnbParams = exports.MaterialRevaluationSnbParams || (exports.MaterialRevaluationSnbParams = {}));
//# sourceMappingURL=MaterialRevaluationSnbParams.js.map