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
exports.ImportProcess = exports.ImportProcessField = exports.createImportProcess = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ImportProcessField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ImportProcessField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ImportProcess) || this;
        /**
         * Representation of the [[ImportProcess.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ImportProcess.importationDocumentTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importationDocumentTypeCode = new core_1.ComplexTypeStringPropertyField('ImportationDocumentTypeCode', _this, 'Edm.String');
        /**
         * Representation of the [[ImportProcess.importationDocumentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importationDocumentNumber = new core_1.ComplexTypeStringPropertyField('ImportationDocumentNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ImportProcess.dateOfRegistryDiDsiDa]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateOfRegistryDiDsiDa = new core_1.ComplexTypeDatePropertyField('DateOfRegistry_DI_DSI_DA', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ImportProcess.customsClearanceDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsClearanceDate = new core_1.ComplexTypeDatePropertyField('CustomsClearanceDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ImportProcess.drawbackRegimeConcessionAccountNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.drawbackRegimeConcessionAccountNumber = new core_1.ComplexTypeStringPropertyField('DrawbackRegimeConcessionAccountNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ImportProcess.additionalNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalNumber = new core_1.ComplexTypeStringPropertyField('AdditionalNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ImportProcess.additionalItemDiscountValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalItemDiscountValue = new core_1.ComplexTypeNumberPropertyField('AdditionalItemDiscountValue', _this, 'Edm.Double');
        return _this;
    }
    return ImportProcessField;
}(core_1.ComplexTypeField));
exports.ImportProcessField = ImportProcessField;
var ImportProcess;
(function (ImportProcess) {
    /**
     * Metadata information on all properties of the `ImportProcess` complex type.
     */
    ImportProcess._propertyMetadata = [{
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ImportationDocumentTypeCode',
            name: 'importationDocumentTypeCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ImportationDocumentNumber',
            name: 'importationDocumentNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DateOfRegistry_DI_DSI_DA',
            name: 'dateOfRegistryDiDsiDa',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CustomsClearanceDate',
            name: 'customsClearanceDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'DrawbackRegimeConcessionAccountNumber',
            name: 'drawbackRegimeConcessionAccountNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AdditionalNumber',
            name: 'additionalNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AdditionalItemDiscountValue',
            name: 'additionalItemDiscountValue',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ImportProcess);
    }
    ImportProcess.build = build;
})(ImportProcess = exports.ImportProcess || (exports.ImportProcess = {}));
//# sourceMappingURL=ImportProcess.js.map