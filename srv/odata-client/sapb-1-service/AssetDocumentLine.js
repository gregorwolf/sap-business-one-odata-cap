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
exports.AssetDocumentLine = exports.AssetDocumentLineField = exports.createAssetDocumentLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[AssetDocumentLine.build]] instead.
 */
function createAssetDocumentLine(json) {
    return AssetDocumentLine.build(json);
}
exports.createAssetDocumentLine = createAssetDocumentLine;
/**
 * AssetDocumentLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AssetDocumentLineField = /** @class */ (function (_super) {
    __extends(AssetDocumentLineField, _super);
    /**
     * Creates an instance of AssetDocumentLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function AssetDocumentLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, AssetDocumentLine) || this;
        /**
         * Representation of the [[AssetDocumentLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[AssetDocumentLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[AssetDocumentLine.assetNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assetNumber = new core_1.ComplexTypeStringPropertyField('AssetNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.glAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glAccount = new core_1.ComplexTypeStringPropertyField('GLAccount', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[AssetDocumentLine.totalLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalLc = new core_1.ComplexTypeNumberPropertyField('TotalLC', _this, 'Edm.Double');
        /**
         * Representation of the [[AssetDocumentLine.totalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalFc = new core_1.ComplexTypeNumberPropertyField('TotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[AssetDocumentLine.totalSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalSc = new core_1.ComplexTypeNumberPropertyField('TotalSC', _this, 'Edm.Double');
        /**
         * Representation of the [[AssetDocumentLine.depreciationArea]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationArea = new core_1.ComplexTypeStringPropertyField('DepreciationArea', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.newAssetNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newAssetNumber = new core_1.ComplexTypeStringPropertyField('NewAssetNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.partial]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.partial = new core_1.ComplexTypeEnumPropertyField('Partial', _this);
        /**
         * Representation of the [[AssetDocumentLine.apc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apc = new core_1.ComplexTypeNumberPropertyField('APC', _this, 'Edm.Double');
        /**
         * Representation of the [[AssetDocumentLine.newAssetClass]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newAssetClass = new core_1.ComplexTypeStringPropertyField('NewAssetClass', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new core_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new core_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new core_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new core_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new core_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new core_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        return _this;
    }
    return AssetDocumentLineField;
}(core_1.ComplexTypeField));
exports.AssetDocumentLineField = AssetDocumentLineField;
var AssetDocumentLine;
(function (AssetDocumentLine) {
    /**
     * Metadata information on all properties of the `AssetDocumentLine` complex type.
     */
    AssetDocumentLine._propertyMetadata = [{
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
            originalName: 'AssetNumber',
            name: 'assetNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GLAccount',
            name: 'glAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalLC',
            name: 'totalLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalFC',
            name: 'totalFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalSC',
            name: 'totalSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DepreciationArea',
            name: 'depreciationArea',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'NewAssetNumber',
            name: 'newAssetNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Partial',
            name: 'partial',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'APC',
            name: 'apc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'NewAssetClass',
            name: 'newAssetClass',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule',
            name: 'distributionRule',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule2',
            name: 'distributionRule2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule3',
            name: 'distributionRule3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule4',
            name: 'distributionRule4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule5',
            name: 'distributionRule5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Project',
            name: 'project',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, AssetDocumentLine);
    }
    AssetDocumentLine.build = build;
})(AssetDocumentLine = exports.AssetDocumentLine || (exports.AssetDocumentLine = {}));
//# sourceMappingURL=AssetDocumentLine.js.map