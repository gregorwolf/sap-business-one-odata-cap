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
exports.AssetClassLine = exports.AssetClassLineField = exports.createAssetClassLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of AssetClassLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function AssetClassLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, AssetClassLine) || this;
        /**
         * Representation of the [[AssetClassLine.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[AssetClassLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[AssetClassLine.depreciationAreaId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationAreaId = new core_1.ComplexTypeStringPropertyField('DepreciationAreaID', _this, 'Edm.String');
        /**
         * Representation of the [[AssetClassLine.activeStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activeStatus = new core_1.ComplexTypeEnumPropertyField('ActiveStatus', _this);
        /**
         * Representation of the [[AssetClassLine.accountDetermination]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountDetermination = new core_1.ComplexTypeStringPropertyField('AccountDetermination', _this, 'Edm.String');
        /**
         * Representation of the [[AssetClassLine.depreciationTypeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationTypeId = new core_1.ComplexTypeStringPropertyField('DepreciationTypeID', _this, 'Edm.String');
        /**
         * Representation of the [[AssetClassLine.useLife]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useLife = new core_1.ComplexTypeNumberPropertyField('UseLife', _this, 'Edm.Int32');
        return _this;
    }
    return AssetClassLineField;
}(core_1.ComplexTypeField));
exports.AssetClassLineField = AssetClassLineField;
var AssetClassLine;
(function (AssetClassLine) {
    /**
     * Metadata information on all properties of the `AssetClassLine` complex type.
     */
    AssetClassLine._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DepreciationAreaID',
            name: 'depreciationAreaId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ActiveStatus',
            name: 'activeStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AccountDetermination',
            name: 'accountDetermination',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DepreciationTypeID',
            name: 'depreciationTypeId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UseLife',
            name: 'useLife',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, AssetClassLine);
    }
    AssetClassLine.build = build;
})(AssetClassLine = exports.AssetClassLine || (exports.AssetClassLine = {}));
//# sourceMappingURL=AssetClassLine.js.map