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
exports.AssetDocumentParams = exports.AssetDocumentParamsField = exports.createAssetDocumentParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AssetDocumentParams.build]] instead.
 */
function createAssetDocumentParams(json) {
    return AssetDocumentParams.build(json);
}
exports.createAssetDocumentParams = createAssetDocumentParams;
/**
 * AssetDocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AssetDocumentParamsField = /** @class */ (function (_super) {
    __extends(AssetDocumentParamsField, _super);
    function AssetDocumentParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AssetDocumentParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[AssetDocumentParams.cancellationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cancellationDate = new v4_1.ComplexTypeDatePropertyField('CancellationDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return AssetDocumentParamsField;
}(v4_1.ComplexTypeField));
exports.AssetDocumentParamsField = AssetDocumentParamsField;
var AssetDocumentParams;
(function (AssetDocumentParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.Int32') }); },
            CancellationDate: function (cancellationDate) { return ({ cancellationDate: v4_1.edmToTs(cancellationDate, 'Edm.DateTimeOffset') }); }
        });
    }
    AssetDocumentParams.build = build;
})(AssetDocumentParams = exports.AssetDocumentParams || (exports.AssetDocumentParams = {}));
//# sourceMappingURL=AssetDocumentParams.js.map