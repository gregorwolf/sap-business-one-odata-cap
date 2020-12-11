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
exports.RoutingDateCalculationOutput = exports.RoutingDateCalculationOutputField = exports.createRoutingDateCalculationOutput = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of RoutingDateCalculationOutputField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function RoutingDateCalculationOutputField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, RoutingDateCalculationOutput) || this;
        /**
         * Representation of the [[RoutingDateCalculationOutput.resultDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.resultDate = new core_1.ComplexTypeDatePropertyField('ResultDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[RoutingDateCalculationOutput.proportion]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.proportion = new core_1.ComplexTypeNumberPropertyField('Proportion', _this, 'Edm.Double');
        return _this;
    }
    return RoutingDateCalculationOutputField;
}(core_1.ComplexTypeField));
exports.RoutingDateCalculationOutputField = RoutingDateCalculationOutputField;
var RoutingDateCalculationOutput;
(function (RoutingDateCalculationOutput) {
    /**
     * Metadata information on all properties of the `RoutingDateCalculationOutput` complex type.
     */
    RoutingDateCalculationOutput._propertyMetadata = [{
            originalName: 'ResultDate',
            name: 'resultDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Proportion',
            name: 'proportion',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, RoutingDateCalculationOutput);
    }
    RoutingDateCalculationOutput.build = build;
})(RoutingDateCalculationOutput = exports.RoutingDateCalculationOutput || (exports.RoutingDateCalculationOutput = {}));
//# sourceMappingURL=RoutingDateCalculationOutput.js.map