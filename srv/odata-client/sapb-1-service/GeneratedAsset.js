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
exports.GeneratedAsset = exports.GeneratedAssetField = exports.createGeneratedAsset = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[GeneratedAsset.build]] instead.
 */
function createGeneratedAsset(json) {
    return GeneratedAsset.build(json);
}
exports.createGeneratedAsset = createGeneratedAsset;
/**
 * GeneratedAssetField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GeneratedAssetField = /** @class */ (function (_super) {
    __extends(GeneratedAssetField, _super);
    /**
     * Creates an instance of GeneratedAssetField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function GeneratedAssetField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, GeneratedAsset) || this;
        /**
         * Representation of the [[GeneratedAsset.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[GeneratedAsset.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[GeneratedAsset.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new core_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[GeneratedAsset.assetCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assetCode = new core_1.ComplexTypeStringPropertyField('AssetCode', _this, 'Edm.String');
        /**
         * Representation of the [[GeneratedAsset.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[GeneratedAsset.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[GeneratedAsset.serialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumber = new core_1.ComplexTypeStringPropertyField('SerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[GeneratedAsset.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new core_1.ComplexTypeNumberPropertyField('amount', _this, 'Edm.Double');
        /**
         * Representation of the [[GeneratedAsset.amountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountSc = new core_1.ComplexTypeNumberPropertyField('amountSC', _this, 'Edm.Double');
        return _this;
    }
    return GeneratedAssetField;
}(core_1.ComplexTypeField));
exports.GeneratedAssetField = GeneratedAssetField;
var GeneratedAsset;
(function (GeneratedAsset) {
    /**
     * Metadata information on all properties of the `GeneratedAsset` complex type.
     */
    GeneratedAsset._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'VisualOrder',
            name: 'visualOrder',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AssetCode',
            name: 'assetCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SerialNumber',
            name: 'serialNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'amount',
            name: 'amount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'amountSC',
            name: 'amountSc',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, GeneratedAsset);
    }
    GeneratedAsset.build = build;
})(GeneratedAsset = exports.GeneratedAsset || (exports.GeneratedAsset = {}));
//# sourceMappingURL=GeneratedAsset.js.map