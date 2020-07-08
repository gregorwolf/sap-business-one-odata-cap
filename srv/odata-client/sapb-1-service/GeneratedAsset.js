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
exports.GeneratedAsset = exports.GeneratedAssetField = exports.createGeneratedAsset = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function GeneratedAssetField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[GeneratedAsset.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[GeneratedAsset.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[GeneratedAsset.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new v4_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[GeneratedAsset.assetCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assetCode = new v4_1.ComplexTypeStringPropertyField('AssetCode', _this, 'Edm.String');
        /**
         * Representation of the [[GeneratedAsset.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[GeneratedAsset.serialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumber = new v4_1.ComplexTypeStringPropertyField('SerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[GeneratedAsset.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new v4_1.ComplexTypeNumberPropertyField('amount', _this, 'Edm.Double');
        /**
         * Representation of the [[GeneratedAsset.amountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountSc = new v4_1.ComplexTypeNumberPropertyField('amountSC', _this, 'Edm.Double');
        return _this;
    }
    return GeneratedAssetField;
}(v4_1.ComplexTypeField));
exports.GeneratedAssetField = GeneratedAssetField;
var GeneratedAsset;
(function (GeneratedAsset) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            VisualOrder: function (visualOrder) { return ({ visualOrder: v4_1.edmToTs(visualOrder, 'Edm.Int32') }); },
            AssetCode: function (assetCode) { return ({ assetCode: v4_1.edmToTs(assetCode, 'Edm.String') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            SerialNumber: function (serialNumber) { return ({ serialNumber: v4_1.edmToTs(serialNumber, 'Edm.String') }); },
            amount: function (amount) { return ({ amount: v4_1.edmToTs(amount, 'Edm.Double') }); },
            amountSC: function (amountSc) { return ({ amountSc: v4_1.edmToTs(amountSc, 'Edm.Double') }); }
        });
    }
    GeneratedAsset.build = build;
})(GeneratedAsset = exports.GeneratedAsset || (exports.GeneratedAsset = {}));
//# sourceMappingURL=GeneratedAsset.js.map