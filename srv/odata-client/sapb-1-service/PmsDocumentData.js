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
exports.PmsDocumentData = exports.PmsDocumentDataField = exports.createPmsDocumentData = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmsDocumentData.build]] instead.
 */
function createPmsDocumentData(json) {
    return PmsDocumentData.build(json);
}
exports.createPmsDocumentData = createPmsDocumentData;
/**
 * PmsDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmsDocumentDataField = /** @class */ (function (_super) {
    __extends(PmsDocumentDataField, _super);
    /**
     * Creates an instance of PmsDocumentDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmsDocumentDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmsDocumentData) || this;
        /**
         * Representation of the [[PmsDocumentData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsDocumentData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new core_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsDocumentData.docType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docType = new core_1.ComplexTypeEnumPropertyField('DocType', _this);
        /**
         * Representation of the [[PmsDocumentData.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsDocumentData.docDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docDate = new core_1.ComplexTypeDatePropertyField('DocDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmsDocumentData.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new core_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsDocumentData.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsDocumentData.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[PmsDocumentData.amountCategory]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountCategory = new core_1.ComplexTypeEnumPropertyField('AmountCategory', _this);
        return _this;
    }
    return PmsDocumentDataField;
}(core_1.ComplexTypeField));
exports.PmsDocumentDataField = PmsDocumentDataField;
var PmsDocumentData;
(function (PmsDocumentData) {
    /**
     * Metadata information on all properties of the `PmsDocumentData` complex type.
     */
    PmsDocumentData._propertyMetadata = [{
            originalName: 'LineID',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StageID',
            name: 'stageId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocType',
            name: 'docType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocDate',
            name: 'docDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Total',
            name: 'total',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AmountCategory',
            name: 'amountCategory',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmsDocumentData);
    }
    PmsDocumentData.build = build;
})(PmsDocumentData = exports.PmsDocumentData || (exports.PmsDocumentData = {}));
//# sourceMappingURL=PmsDocumentData.js.map