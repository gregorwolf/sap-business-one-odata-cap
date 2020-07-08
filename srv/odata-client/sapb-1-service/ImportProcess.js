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
exports.ImportProcess = exports.ImportProcessField = exports.createImportProcess = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ImportProcess.build]] instead.
 */
function createImportProcess(json) {
    return ImportProcess.build(json);
}
exports.createImportProcess = createImportProcess;
/**
 * ImportProcessField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ImportProcessField = /** @class */ (function (_super) {
    __extends(ImportProcessField, _super);
    function ImportProcessField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ImportProcess.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ImportProcess.importationDocumentTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importationDocumentTypeCode = new v4_1.ComplexTypeStringPropertyField('ImportationDocumentTypeCode', _this, 'Edm.String');
        /**
         * Representation of the [[ImportProcess.importationDocumentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importationDocumentNumber = new v4_1.ComplexTypeStringPropertyField('ImportationDocumentNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ImportProcess.dateOfRegistryDiDsiDa]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateOfRegistryDiDsiDa = new v4_1.ComplexTypeDatePropertyField('DateOfRegistry_DI_DSI_DA', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ImportProcess.customsClearanceDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsClearanceDate = new v4_1.ComplexTypeDatePropertyField('CustomsClearanceDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ImportProcess.drawbackRegimeConcessionAccountNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.drawbackRegimeConcessionAccountNumber = new v4_1.ComplexTypeStringPropertyField('DrawbackRegimeConcessionAccountNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ImportProcess.additionalNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalNumber = new v4_1.ComplexTypeStringPropertyField('AdditionalNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ImportProcess.additionalItemDiscountValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalItemDiscountValue = new v4_1.ComplexTypeNumberPropertyField('AdditionalItemDiscountValue', _this, 'Edm.Double');
        return _this;
    }
    return ImportProcessField;
}(v4_1.ComplexTypeField));
exports.ImportProcessField = ImportProcessField;
var ImportProcess;
(function (ImportProcess) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            ImportationDocumentTypeCode: function (importationDocumentTypeCode) { return ({ importationDocumentTypeCode: v4_1.edmToTs(importationDocumentTypeCode, 'Edm.String') }); },
            ImportationDocumentNumber: function (importationDocumentNumber) { return ({ importationDocumentNumber: v4_1.edmToTs(importationDocumentNumber, 'Edm.String') }); },
            DateOfRegistry_DI_DSI_DA: function (dateOfRegistryDiDsiDa) { return ({ dateOfRegistryDiDsiDa: v4_1.edmToTs(dateOfRegistryDiDsiDa, 'Edm.DateTimeOffset') }); },
            CustomsClearanceDate: function (customsClearanceDate) { return ({ customsClearanceDate: v4_1.edmToTs(customsClearanceDate, 'Edm.DateTimeOffset') }); },
            DrawbackRegimeConcessionAccountNumber: function (drawbackRegimeConcessionAccountNumber) { return ({ drawbackRegimeConcessionAccountNumber: v4_1.edmToTs(drawbackRegimeConcessionAccountNumber, 'Edm.String') }); },
            AdditionalNumber: function (additionalNumber) { return ({ additionalNumber: v4_1.edmToTs(additionalNumber, 'Edm.String') }); },
            AdditionalItemDiscountValue: function (additionalItemDiscountValue) { return ({ additionalItemDiscountValue: v4_1.edmToTs(additionalItemDiscountValue, 'Edm.Double') }); }
        });
    }
    ImportProcess.build = build;
})(ImportProcess = exports.ImportProcess || (exports.ImportProcess = {}));
//# sourceMappingURL=ImportProcess.js.map