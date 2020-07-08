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
exports.FifoLayer = exports.FifoLayerField = exports.createFifoLayer = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[FifoLayer.build]] instead.
 */
function createFifoLayer(json) {
    return FifoLayer.build(json);
}
exports.createFifoLayer = createFifoLayer;
/**
 * FifoLayerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FifoLayerField = /** @class */ (function (_super) {
    __extends(FifoLayerField, _super);
    function FifoLayerField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[FifoLayer.transactionSequenceNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionSequenceNum = new v4_1.ComplexTypeNumberPropertyField('TransactionSequenceNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[FifoLayer.layerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layerId = new v4_1.ComplexTypeNumberPropertyField('LayerID', _this, 'Edm.Int32');
        /**
         * Representation of the [[FifoLayer.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[FifoLayer.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new v4_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[FifoLayer.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new v4_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[FifoLayer.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new v4_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        return _this;
    }
    return FifoLayerField;
}(v4_1.ComplexTypeField));
exports.FifoLayerField = FifoLayerField;
var FifoLayer;
(function (FifoLayer) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TransactionSequenceNum: function (transactionSequenceNum) { return ({ transactionSequenceNum: v4_1.edmToTs(transactionSequenceNum, 'Edm.Int32') }); },
            LayerID: function (layerId) { return ({ layerId: v4_1.edmToTs(layerId, 'Edm.Int32') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            Price: function (price) { return ({ price: v4_1.edmToTs(price, 'Edm.Double') }); },
            LineTotal: function (lineTotal) { return ({ lineTotal: v4_1.edmToTs(lineTotal, 'Edm.Double') }); },
            BaseLine: function (baseLine) { return ({ baseLine: v4_1.edmToTs(baseLine, 'Edm.Int32') }); }
        });
    }
    FifoLayer.build = build;
})(FifoLayer = exports.FifoLayer || (exports.FifoLayer = {}));
//# sourceMappingURL=FifoLayer.js.map