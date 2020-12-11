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
exports.Layer = exports.LayerField = exports.createLayer = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[Layer.build]] instead.
 */
function createLayer(json) {
    return Layer.build(json);
}
exports.createLayer = createLayer;
/**
 * LayerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var LayerField = /** @class */ (function (_super) {
    __extends(LayerField, _super);
    /**
     * Creates an instance of LayerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function LayerField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, Layer) || this;
        /**
         * Representation of the [[Layer.transactionSequenceNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionSequenceNum = new core_1.ComplexTypeNumberPropertyField('TransactionSequenceNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[Layer.layerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layerId = new core_1.ComplexTypeNumberPropertyField('LayerID', _this, 'Edm.Int32');
        /**
         * Representation of the [[Layer.docNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docNumber = new core_1.ComplexTypeStringPropertyField('DocNumber', _this, 'Edm.String');
        /**
         * Representation of the [[Layer.docType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docType = new core_1.ComplexTypeEnumPropertyField('DocType', _this);
        /**
         * Representation of the [[Layer.entryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.entryDate = new core_1.ComplexTypeDatePropertyField('EntryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[Layer.currentCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currentCost = new core_1.ComplexTypeNumberPropertyField('CurrentCost', _this, 'Edm.Double');
        /**
         * Representation of the [[Layer.openQty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openQty = new core_1.ComplexTypeNumberPropertyField('OpenQty', _this, 'Edm.Double');
        return _this;
    }
    return LayerField;
}(core_1.ComplexTypeField));
exports.LayerField = LayerField;
var Layer;
(function (Layer) {
    /**
     * Metadata information on all properties of the `Layer` complex type.
     */
    Layer._propertyMetadata = [{
            originalName: 'TransactionSequenceNum',
            name: 'transactionSequenceNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LayerID',
            name: 'layerId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocNumber',
            name: 'docNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocType',
            name: 'docType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EntryDate',
            name: 'entryDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CurrentCost',
            name: 'currentCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OpenQty',
            name: 'openQty',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, Layer);
    }
    Layer.build = build;
})(Layer = exports.Layer || (exports.Layer = {}));
//# sourceMappingURL=Layer.js.map