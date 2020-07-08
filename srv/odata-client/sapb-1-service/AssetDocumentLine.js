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
exports.AssetDocumentLine = exports.AssetDocumentLineField = exports.createAssetDocumentLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function AssetDocumentLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AssetDocumentLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[AssetDocumentLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[AssetDocumentLine.assetNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assetNumber = new v4_1.ComplexTypeStringPropertyField('AssetNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.glAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glAccount = new v4_1.ComplexTypeStringPropertyField('GLAccount', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[AssetDocumentLine.totalLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalLc = new v4_1.ComplexTypeNumberPropertyField('TotalLC', _this, 'Edm.Double');
        /**
         * Representation of the [[AssetDocumentLine.totalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalFc = new v4_1.ComplexTypeNumberPropertyField('TotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[AssetDocumentLine.totalSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalSc = new v4_1.ComplexTypeNumberPropertyField('TotalSC', _this, 'Edm.Double');
        /**
         * Representation of the [[AssetDocumentLine.depreciationArea]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationArea = new v4_1.ComplexTypeStringPropertyField('DepreciationArea', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.newAssetNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newAssetNumber = new v4_1.ComplexTypeStringPropertyField('NewAssetNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.apc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apc = new v4_1.ComplexTypeNumberPropertyField('APC', _this, 'Edm.Double');
        /**
         * Representation of the [[AssetDocumentLine.newAssetClass]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.newAssetClass = new v4_1.ComplexTypeStringPropertyField('NewAssetClass', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new v4_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new v4_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new v4_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new v4_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new v4_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new v4_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        return _this;
    }
    return AssetDocumentLineField;
}(v4_1.ComplexTypeField));
exports.AssetDocumentLineField = AssetDocumentLineField;
var AssetDocumentLine;
(function (AssetDocumentLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            AssetNumber: function (assetNumber) { return ({ assetNumber: v4_1.edmToTs(assetNumber, 'Edm.String') }); },
            GLAccount: function (glAccount) { return ({ glAccount: v4_1.edmToTs(glAccount, 'Edm.String') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            TotalLC: function (totalLc) { return ({ totalLc: v4_1.edmToTs(totalLc, 'Edm.Double') }); },
            TotalFC: function (totalFc) { return ({ totalFc: v4_1.edmToTs(totalFc, 'Edm.Double') }); },
            TotalSC: function (totalSc) { return ({ totalSc: v4_1.edmToTs(totalSc, 'Edm.Double') }); },
            DepreciationArea: function (depreciationArea) { return ({ depreciationArea: v4_1.edmToTs(depreciationArea, 'Edm.String') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            NewAssetNumber: function (newAssetNumber) { return ({ newAssetNumber: v4_1.edmToTs(newAssetNumber, 'Edm.String') }); },
            APC: function (apc) { return ({ apc: v4_1.edmToTs(apc, 'Edm.Double') }); },
            NewAssetClass: function (newAssetClass) { return ({ newAssetClass: v4_1.edmToTs(newAssetClass, 'Edm.String') }); },
            DistributionRule: function (distributionRule) { return ({ distributionRule: v4_1.edmToTs(distributionRule, 'Edm.String') }); },
            DistributionRule2: function (distributionRule2) { return ({ distributionRule2: v4_1.edmToTs(distributionRule2, 'Edm.String') }); },
            DistributionRule3: function (distributionRule3) { return ({ distributionRule3: v4_1.edmToTs(distributionRule3, 'Edm.String') }); },
            DistributionRule4: function (distributionRule4) { return ({ distributionRule4: v4_1.edmToTs(distributionRule4, 'Edm.String') }); },
            DistributionRule5: function (distributionRule5) { return ({ distributionRule5: v4_1.edmToTs(distributionRule5, 'Edm.String') }); },
            Project: function (project) { return ({ project: v4_1.edmToTs(project, 'Edm.String') }); }
        });
    }
    AssetDocumentLine.build = build;
})(AssetDocumentLine = exports.AssetDocumentLine || (exports.AssetDocumentLine = {}));
//# sourceMappingURL=AssetDocumentLine.js.map