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
exports.AssetDocumentParams = exports.AssetDocumentParamsField = exports.createAssetDocumentParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of AssetDocumentParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function AssetDocumentParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, AssetDocumentParams) || this;
        /**
         * Representation of the [[AssetDocumentParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[AssetDocumentParams.cancellationOption]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cancellationOption = new core_1.ComplexTypeEnumPropertyField('CancellationOption', _this);
        /**
         * Representation of the [[AssetDocumentParams.cancellationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cancellationDate = new core_1.ComplexTypeDatePropertyField('CancellationDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return AssetDocumentParamsField;
}(core_1.ComplexTypeField));
exports.AssetDocumentParamsField = AssetDocumentParamsField;
var AssetDocumentParams;
(function (AssetDocumentParams) {
    /**
     * Metadata information on all properties of the `AssetDocumentParams` complex type.
     */
    AssetDocumentParams._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CancellationOption',
            name: 'cancellationOption',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CancellationDate',
            name: 'cancellationDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, AssetDocumentParams);
    }
    AssetDocumentParams.build = build;
})(AssetDocumentParams = exports.AssetDocumentParams || (exports.AssetDocumentParams = {}));
//# sourceMappingURL=AssetDocumentParams.js.map