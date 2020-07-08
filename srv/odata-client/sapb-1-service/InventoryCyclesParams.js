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
exports.InventoryCyclesParams = exports.InventoryCyclesParamsField = exports.createInventoryCyclesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[InventoryCyclesParams.build]] instead.
 */
function createInventoryCyclesParams(json) {
    return InventoryCyclesParams.build(json);
}
exports.createInventoryCyclesParams = createInventoryCyclesParams;
/**
 * InventoryCyclesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryCyclesParamsField = /** @class */ (function (_super) {
    __extends(InventoryCyclesParamsField, _super);
    function InventoryCyclesParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InventoryCyclesParams.cycleCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cycleCode = new v4_1.ComplexTypeNumberPropertyField('CycleCode', _this, 'Edm.Int32');
        return _this;
    }
    return InventoryCyclesParamsField;
}(v4_1.ComplexTypeField));
exports.InventoryCyclesParamsField = InventoryCyclesParamsField;
var InventoryCyclesParams;
(function (InventoryCyclesParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CycleCode: function (cycleCode) { return ({ cycleCode: v4_1.edmToTs(cycleCode, 'Edm.Int32') }); }
        });
    }
    InventoryCyclesParams.build = build;
})(InventoryCyclesParams = exports.InventoryCyclesParams || (exports.InventoryCyclesParams = {}));
//# sourceMappingURL=InventoryCyclesParams.js.map