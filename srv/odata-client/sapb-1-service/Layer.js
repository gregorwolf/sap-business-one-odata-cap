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
exports.Layer = exports.LayerField = exports.createLayer = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function LayerField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Layer.transactionSequenceNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionSequenceNum = new v4_1.ComplexTypeNumberPropertyField('TransactionSequenceNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[Layer.layerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layerId = new v4_1.ComplexTypeNumberPropertyField('LayerID', _this, 'Edm.Int32');
        /**
         * Representation of the [[Layer.docNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docNumber = new v4_1.ComplexTypeStringPropertyField('DocNumber', _this, 'Edm.String');
        /**
         * Representation of the [[Layer.entryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.entryDate = new v4_1.ComplexTypeDatePropertyField('EntryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[Layer.currentCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currentCost = new v4_1.ComplexTypeNumberPropertyField('CurrentCost', _this, 'Edm.Double');
        /**
         * Representation of the [[Layer.openQty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openQty = new v4_1.ComplexTypeNumberPropertyField('OpenQty', _this, 'Edm.Double');
        return _this;
    }
    return LayerField;
}(v4_1.ComplexTypeField));
exports.LayerField = LayerField;
var Layer;
(function (Layer) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TransactionSequenceNum: function (transactionSequenceNum) { return ({ transactionSequenceNum: v4_1.edmToTs(transactionSequenceNum, 'Edm.Int32') }); },
            LayerID: function (layerId) { return ({ layerId: v4_1.edmToTs(layerId, 'Edm.Int32') }); },
            DocNumber: function (docNumber) { return ({ docNumber: v4_1.edmToTs(docNumber, 'Edm.String') }); },
            EntryDate: function (entryDate) { return ({ entryDate: v4_1.edmToTs(entryDate, 'Edm.DateTimeOffset') }); },
            CurrentCost: function (currentCost) { return ({ currentCost: v4_1.edmToTs(currentCost, 'Edm.Double') }); },
            OpenQty: function (openQty) { return ({ openQty: v4_1.edmToTs(openQty, 'Edm.Double') }); }
        });
    }
    Layer.build = build;
})(Layer = exports.Layer || (exports.Layer = {}));
//# sourceMappingURL=Layer.js.map