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
exports.FifoLayer = exports.FifoLayerField = exports.createFifoLayer = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of FifoLayerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function FifoLayerField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, FifoLayer) || this;
        /**
         * Representation of the [[FifoLayer.transactionSequenceNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionSequenceNum = new core_1.ComplexTypeNumberPropertyField('TransactionSequenceNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[FifoLayer.layerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layerId = new core_1.ComplexTypeNumberPropertyField('LayerID', _this, 'Edm.Int32');
        /**
         * Representation of the [[FifoLayer.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[FifoLayer.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new core_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[FifoLayer.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new core_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[FifoLayer.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new core_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        return _this;
    }
    return FifoLayerField;
}(core_1.ComplexTypeField));
exports.FifoLayerField = FifoLayerField;
var FifoLayer;
(function (FifoLayer) {
    /**
     * Metadata information on all properties of the `FifoLayer` complex type.
     */
    FifoLayer._propertyMetadata = [{
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
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Price',
            name: 'price',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineTotal',
            name: 'lineTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseLine',
            name: 'baseLine',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, FifoLayer);
    }
    FifoLayer.build = build;
})(FifoLayer = exports.FifoLayer || (exports.FifoLayer = {}));
//# sourceMappingURL=FifoLayer.js.map