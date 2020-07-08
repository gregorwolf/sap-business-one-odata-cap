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
exports.MaterialRevaluationFifo = exports.MaterialRevaluationFifoField = exports.createMaterialRevaluationFifo = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Layer_1 = require("./Layer");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationFifo.build]] instead.
 */
function createMaterialRevaluationFifo(json) {
    return MaterialRevaluationFifo.build(json);
}
exports.createMaterialRevaluationFifo = createMaterialRevaluationFifo;
/**
 * MaterialRevaluationFifoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MaterialRevaluationFifoField = /** @class */ (function (_super) {
    __extends(MaterialRevaluationFifoField, _super);
    function MaterialRevaluationFifoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[MaterialRevaluationFifo.layers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layers = new Layer_1.LayerField('Layers', _this);
        return _this;
    }
    return MaterialRevaluationFifoField;
}(v4_1.ComplexTypeField));
exports.MaterialRevaluationFifoField = MaterialRevaluationFifoField;
var MaterialRevaluationFifo;
(function (MaterialRevaluationFifo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Layers: function (layers) { return ({ layers: Layer_1.Layer.build(layers) }); }
        });
    }
    MaterialRevaluationFifo.build = build;
})(MaterialRevaluationFifo = exports.MaterialRevaluationFifo || (exports.MaterialRevaluationFifo = {}));
//# sourceMappingURL=MaterialRevaluationFifo.js.map