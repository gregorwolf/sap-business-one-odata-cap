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
exports.ProductionOrderParams = exports.ProductionOrderParamsField = exports.createProductionOrderParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ProductionOrderParams.build]] instead.
 */
function createProductionOrderParams(json) {
    return ProductionOrderParams.build(json);
}
exports.createProductionOrderParams = createProductionOrderParams;
/**
 * ProductionOrderParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ProductionOrderParamsField = /** @class */ (function (_super) {
    __extends(ProductionOrderParamsField, _super);
    function ProductionOrderParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ProductionOrderParams.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new v4_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        return _this;
    }
    return ProductionOrderParamsField;
}(v4_1.ComplexTypeField));
exports.ProductionOrderParamsField = ProductionOrderParamsField;
var ProductionOrderParams;
(function (ProductionOrderParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsoluteEntry: function (absoluteEntry) { return ({ absoluteEntry: v4_1.edmToTs(absoluteEntry, 'Edm.Int32') }); }
        });
    }
    ProductionOrderParams.build = build;
})(ProductionOrderParams = exports.ProductionOrderParams || (exports.ProductionOrderParams = {}));
//# sourceMappingURL=ProductionOrderParams.js.map