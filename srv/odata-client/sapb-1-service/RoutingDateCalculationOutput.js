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
exports.RoutingDateCalculationOutput = exports.RoutingDateCalculationOutputField = exports.createRoutingDateCalculationOutput = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[RoutingDateCalculationOutput.build]] instead.
 */
function createRoutingDateCalculationOutput(json) {
    return RoutingDateCalculationOutput.build(json);
}
exports.createRoutingDateCalculationOutput = createRoutingDateCalculationOutput;
/**
 * RoutingDateCalculationOutputField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RoutingDateCalculationOutputField = /** @class */ (function (_super) {
    __extends(RoutingDateCalculationOutputField, _super);
    function RoutingDateCalculationOutputField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[RoutingDateCalculationOutput.resultDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.resultDate = new v4_1.ComplexTypeDatePropertyField('ResultDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[RoutingDateCalculationOutput.proportion]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.proportion = new v4_1.ComplexTypeNumberPropertyField('Proportion', _this, 'Edm.Double');
        return _this;
    }
    return RoutingDateCalculationOutputField;
}(v4_1.ComplexTypeField));
exports.RoutingDateCalculationOutputField = RoutingDateCalculationOutputField;
var RoutingDateCalculationOutput;
(function (RoutingDateCalculationOutput) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ResultDate: function (resultDate) { return ({ resultDate: v4_1.edmToTs(resultDate, 'Edm.DateTimeOffset') }); },
            Proportion: function (proportion) { return ({ proportion: v4_1.edmToTs(proportion, 'Edm.Double') }); }
        });
    }
    RoutingDateCalculationOutput.build = build;
})(RoutingDateCalculationOutput = exports.RoutingDateCalculationOutput || (exports.RoutingDateCalculationOutput = {}));
//# sourceMappingURL=RoutingDateCalculationOutput.js.map