"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ExportProcessField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ExportProcessField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ExportProcess) || this;
        /**
         * Representation of the [[ExportProcess.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExportProcess.exportationDocumentTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationDocumentTypeCode = new core_1.ComplexTypeNumberPropertyField('ExportationDocumentTypeCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExportProcess.exportationDeclarationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationDeclarationNumber = new core_1.ComplexTypeNumberPropertyField('ExportationDeclarationNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExportProcess.exportationDeclarationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationDeclarationDate = new core_1.ComplexTypeDatePropertyField('ExportationDeclarationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExportProcess.exportationNatureCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationNatureCode = new core_1.ComplexTypeNumberPropertyField('ExportationNatureCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExportProcess.exportationRegistryNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationRegistryNumber = new core_1.ComplexTypeNumberPropertyField('ExportationRegistryNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExportProcess.exportationRegistryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportationRegistryDate = new core_1.ComplexTypeDatePropertyField('ExportationRegistryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExportProcess.ladingBillNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ladingBillNumber = new core_1.ComplexTypeStringPropertyField('LadingBillNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ExportProcess.ladingBillDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ladingBillDate = new core_1.ComplexTypeDatePropertyField('LadingBillDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExportProcess.merchandiseLeftCustomsDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.merchandiseLeftCustomsDate = new core_1.ComplexTypeDatePropertyField('MerchandiseLeftCustomsDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExportProcess.ladingBillTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ladingBillTypeCode = new core_1.ComplexTypeNumberPropertyField('LadingBillTypeCode', _this, 'Edm.Int32');
        return _this;
    }
    return ExportProcessField;
}(core_1.ComplexTypeField));
exports.ExportProcessField = ExportProcessField;
var ExportProcess;
(function (ExportProcess) {
    /**
     * Metadata information on all properties of the `ExportProcess` complex type.
     */
    ExportProcess._propertyMetadata = [{
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ExportationDocumentTypeCode',
            name: 'exportationDocumentTypeCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ExportationDeclarationNumber',
            name: 'exportationDeclarationNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ExportationDeclarationDate',
            name: 'exportationDeclarationDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ExportationNatureCode',
            name: 'exportationNatureCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ExportationRegistryNumber',
            name: 'exportationRegistryNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ExportationRegistryDate',
            name: 'exportationRegistryDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'LadingBillNumber',
            name: 'ladingBillNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LadingBillDate',
            name: 'ladingBillDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'MerchandiseLeftCustomsDate',
            name: 'merchandiseLeftCustomsDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'LadingBillTypeCode',
            name: 'ladingBillTypeCode',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ExportProcess);
    }
    ExportProcess.build = build;
})(ExportProcess = exports.ExportProcess || (exports.ExportProcess = {}));
//# sourceMappingURL=ExportProcess.js.map