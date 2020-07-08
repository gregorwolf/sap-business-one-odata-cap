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
exports.RoutingDateCalculationInput = exports.RoutingDateCalculationInputField = exports.createRoutingDateCalculationInput = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[RoutingDateCalculationInput.build]] instead.
 */
function createRoutingDateCalculationInput(json) {
    return RoutingDateCalculationInput.build(json);
}
exports.createRoutingDateCalculationInput = createRoutingDateCalculationInput;
/**
 * RoutingDateCalculationInputField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RoutingDateCalculationInputField = /** @class */ (function (_super) {
    __extends(RoutingDateCalculationInputField, _super);
    function RoutingDateCalculationInputField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[RoutingDateCalculationInput.resourceCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.resourceCode = new v4_1.ComplexTypeStringPropertyField('ResourceCode', _this, 'Edm.String');
        /**
         * Representation of the [[RoutingDateCalculationInput.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[RoutingDateCalculationInput.calculateFromDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculateFromDate = new v4_1.ComplexTypeDatePropertyField('CalculateFromDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[RoutingDateCalculationInput.calculateUntilDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculateUntilDate = new v4_1.ComplexTypeDatePropertyField('CalculateUntilDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[RoutingDateCalculationInput.capacitySum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.capacitySum = new v4_1.ComplexTypeNumberPropertyField('CapacitySum', _this, 'Edm.Double');
        /**
         * Representation of the [[RoutingDateCalculationInput.firstDateProportion]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstDateProportion = new v4_1.ComplexTypeNumberPropertyField('FirstDateProportion', _this, 'Edm.Double');
        /**
         * Representation of the [[RoutingDateCalculationInput.worObjAbs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.worObjAbs = new v4_1.ComplexTypeNumberPropertyField('WORObjAbs', _this, 'Edm.Int32');
        /**
         * Representation of the [[RoutingDateCalculationInput.worLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.worLine = new v4_1.ComplexTypeNumberPropertyField('WORLine', _this, 'Edm.Int32');
        return _this;
    }
    return RoutingDateCalculationInputField;
}(v4_1.ComplexTypeField));
exports.RoutingDateCalculationInputField = RoutingDateCalculationInputField;
var RoutingDateCalculationInput;
(function (RoutingDateCalculationInput) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ResourceCode: function (resourceCode) { return ({ resourceCode: v4_1.edmToTs(resourceCode, 'Edm.String') }); },
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); },
            CalculateFromDate: function (calculateFromDate) { return ({ calculateFromDate: v4_1.edmToTs(calculateFromDate, 'Edm.DateTimeOffset') }); },
            CalculateUntilDate: function (calculateUntilDate) { return ({ calculateUntilDate: v4_1.edmToTs(calculateUntilDate, 'Edm.DateTimeOffset') }); },
            CapacitySum: function (capacitySum) { return ({ capacitySum: v4_1.edmToTs(capacitySum, 'Edm.Double') }); },
            FirstDateProportion: function (firstDateProportion) { return ({ firstDateProportion: v4_1.edmToTs(firstDateProportion, 'Edm.Double') }); },
            WORObjAbs: function (worObjAbs) { return ({ worObjAbs: v4_1.edmToTs(worObjAbs, 'Edm.Int32') }); },
            WORLine: function (worLine) { return ({ worLine: v4_1.edmToTs(worLine, 'Edm.Int32') }); }
        });
    }
    RoutingDateCalculationInput.build = build;
})(RoutingDateCalculationInput = exports.RoutingDateCalculationInput || (exports.RoutingDateCalculationInput = {}));
//# sourceMappingURL=RoutingDateCalculationInput.js.map