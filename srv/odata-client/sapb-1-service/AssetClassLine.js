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
exports.AssetClassLine = exports.AssetClassLineField = exports.createAssetClassLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AssetClassLine.build]] instead.
 */
function createAssetClassLine(json) {
    return AssetClassLine.build(json);
}
exports.createAssetClassLine = createAssetClassLine;
/**
 * AssetClassLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AssetClassLineField = /** @class */ (function (_super) {
    __extends(AssetClassLineField, _super);
    function AssetClassLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AssetClassLine.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[AssetClassLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[AssetClassLine.depreciationAreaId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationAreaId = new v4_1.ComplexTypeStringPropertyField('DepreciationAreaID', _this, 'Edm.String');
        /**
         * Representation of the [[AssetClassLine.accountDetermination]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountDetermination = new v4_1.ComplexTypeStringPropertyField('AccountDetermination', _this, 'Edm.String');
        /**
         * Representation of the [[AssetClassLine.depreciationTypeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationTypeId = new v4_1.ComplexTypeStringPropertyField('DepreciationTypeID', _this, 'Edm.String');
        /**
         * Representation of the [[AssetClassLine.useLife]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useLife = new v4_1.ComplexTypeNumberPropertyField('UseLife', _this, 'Edm.Int32');
        return _this;
    }
    return AssetClassLineField;
}(v4_1.ComplexTypeField));
exports.AssetClassLineField = AssetClassLineField;
var AssetClassLine;
(function (AssetClassLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            DepreciationAreaID: function (depreciationAreaId) { return ({ depreciationAreaId: v4_1.edmToTs(depreciationAreaId, 'Edm.String') }); },
            AccountDetermination: function (accountDetermination) { return ({ accountDetermination: v4_1.edmToTs(accountDetermination, 'Edm.String') }); },
            DepreciationTypeID: function (depreciationTypeId) { return ({ depreciationTypeId: v4_1.edmToTs(depreciationTypeId, 'Edm.String') }); },
            UseLife: function (useLife) { return ({ useLife: v4_1.edmToTs(useLife, 'Edm.Int32') }); }
        });
    }
    AssetClassLine.build = build;
})(AssetClassLine = exports.AssetClassLine || (exports.AssetClassLine = {}));
//# sourceMappingURL=AssetClassLine.js.map