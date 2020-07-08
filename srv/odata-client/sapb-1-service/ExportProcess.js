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
exports.ExportProcess = exports.ExportProcessField = exports.createExportProcess = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ExportProcess.build]] instead.
 */
function createExportProcess(json) {
    return ExportProcess.build(json);
}
exports.createExportProcess = createExportProcess;
/**
 * ExportProcessField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExportProcessField = /** @class */ (function (_super) {
    __extends(ExportProcessField, _super);
    function ExportProcessField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ExportProcess.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExportProcess.exportationDocumentTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationDocumentTypeCode = new v4_1.ComplexTypeNumberPropertyField('ExportationDocumentTypeCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExportProcess.exportationDeclarationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationDeclarationNumber = new v4_1.ComplexTypeNumberPropertyField('ExportationDeclarationNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExportProcess.exportationDeclarationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationDeclarationDate = new v4_1.ComplexTypeDatePropertyField('ExportationDeclarationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExportProcess.exportationNatureCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationNatureCode = new v4_1.ComplexTypeNumberPropertyField('ExportationNatureCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExportProcess.exportationRegistryNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationRegistryNumber = new v4_1.ComplexTypeNumberPropertyField('ExportationRegistryNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExportProcess.exportationRegistryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationRegistryDate = new v4_1.ComplexTypeDatePropertyField('ExportationRegistryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExportProcess.ladingBillNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ladingBillNumber = new v4_1.ComplexTypeStringPropertyField('LadingBillNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ExportProcess.ladingBillDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ladingBillDate = new v4_1.ComplexTypeDatePropertyField('LadingBillDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExportProcess.merchandiseLeftCustomsDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.merchandiseLeftCustomsDate = new v4_1.ComplexTypeDatePropertyField('MerchandiseLeftCustomsDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExportProcess.ladingBillTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ladingBillTypeCode = new v4_1.ComplexTypeNumberPropertyField('LadingBillTypeCode', _this, 'Edm.Int32');
        return _this;
    }
    return ExportProcessField;
}(v4_1.ComplexTypeField));
exports.ExportProcessField = ExportProcessField;
var ExportProcess;
(function (ExportProcess) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            ExportationDocumentTypeCode: function (exportationDocumentTypeCode) { return ({ exportationDocumentTypeCode: v4_1.edmToTs(exportationDocumentTypeCode, 'Edm.Int32') }); },
            ExportationDeclarationNumber: function (exportationDeclarationNumber) { return ({ exportationDeclarationNumber: v4_1.edmToTs(exportationDeclarationNumber, 'Edm.Int32') }); },
            ExportationDeclarationDate: function (exportationDeclarationDate) { return ({ exportationDeclarationDate: v4_1.edmToTs(exportationDeclarationDate, 'Edm.DateTimeOffset') }); },
            ExportationNatureCode: function (exportationNatureCode) { return ({ exportationNatureCode: v4_1.edmToTs(exportationNatureCode, 'Edm.Int32') }); },
            ExportationRegistryNumber: function (exportationRegistryNumber) { return ({ exportationRegistryNumber: v4_1.edmToTs(exportationRegistryNumber, 'Edm.Int32') }); },
            ExportationRegistryDate: function (exportationRegistryDate) { return ({ exportationRegistryDate: v4_1.edmToTs(exportationRegistryDate, 'Edm.DateTimeOffset') }); },
            LadingBillNumber: function (ladingBillNumber) { return ({ ladingBillNumber: v4_1.edmToTs(ladingBillNumber, 'Edm.String') }); },
            LadingBillDate: function (ladingBillDate) { return ({ ladingBillDate: v4_1.edmToTs(ladingBillDate, 'Edm.DateTimeOffset') }); },
            MerchandiseLeftCustomsDate: function (merchandiseLeftCustomsDate) { return ({ merchandiseLeftCustomsDate: v4_1.edmToTs(merchandiseLeftCustomsDate, 'Edm.DateTimeOffset') }); },
            LadingBillTypeCode: function (ladingBillTypeCode) { return ({ ladingBillTypeCode: v4_1.edmToTs(ladingBillTypeCode, 'Edm.Int32') }); }
        });
    }
    ExportProcess.build = build;
})(ExportProcess = exports.ExportProcess || (exports.ExportProcess = {}));
//# sourceMappingURL=ExportProcess.js.map