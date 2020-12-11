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
exports.RoutingDateCalculationInput = exports.RoutingDateCalculationInputField = exports.createRoutingDateCalculationInput = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of RoutingDateCalculationInputField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function RoutingDateCalculationInputField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, RoutingDateCalculationInput) || this;
        /**
         * Representation of the [[RoutingDateCalculationInput.resourceCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.resourceCode = new core_1.ComplexTypeStringPropertyField('ResourceCode', _this, 'Edm.String');
        /**
         * Representation of the [[RoutingDateCalculationInput.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[RoutingDateCalculationInput.calculateFromDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculateFromDate = new core_1.ComplexTypeDatePropertyField('CalculateFromDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[RoutingDateCalculationInput.calculateUntilDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculateUntilDate = new core_1.ComplexTypeDatePropertyField('CalculateUntilDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[RoutingDateCalculationInput.capacitySum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.capacitySum = new core_1.ComplexTypeNumberPropertyField('CapacitySum', _this, 'Edm.Double');
        /**
         * Representation of the [[RoutingDateCalculationInput.firstDateProportion]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstDateProportion = new core_1.ComplexTypeNumberPropertyField('FirstDateProportion', _this, 'Edm.Double');
        /**
         * Representation of the [[RoutingDateCalculationInput.resourceAlloc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.resourceAlloc = new core_1.ComplexTypeEnumPropertyField('ResourceAlloc', _this);
        /**
         * Representation of the [[RoutingDateCalculationInput.worObjAbs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.worObjAbs = new core_1.ComplexTypeNumberPropertyField('WORObjAbs', _this, 'Edm.Int32');
        /**
         * Representation of the [[RoutingDateCalculationInput.worLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.worLine = new core_1.ComplexTypeNumberPropertyField('WORLine', _this, 'Edm.Int32');
        return _this;
    }
    return RoutingDateCalculationInputField;
}(core_1.ComplexTypeField));
exports.RoutingDateCalculationInputField = RoutingDateCalculationInputField;
var RoutingDateCalculationInput;
(function (RoutingDateCalculationInput) {
    /**
     * Metadata information on all properties of the `RoutingDateCalculationInput` complex type.
     */
    RoutingDateCalculationInput._propertyMetadata = [{
            originalName: 'ResourceCode',
            name: 'resourceCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WarehouseCode',
            name: 'warehouseCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CalculateFromDate',
            name: 'calculateFromDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CalculateUntilDate',
            name: 'calculateUntilDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CapacitySum',
            name: 'capacitySum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FirstDateProportion',
            name: 'firstDateProportion',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ResourceAlloc',
            name: 'resourceAlloc',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'WORObjAbs',
            name: 'worObjAbs',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WORLine',
            name: 'worLine',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, RoutingDateCalculationInput);
    }
    RoutingDateCalculationInput.build = build;
})(RoutingDateCalculationInput = exports.RoutingDateCalculationInput || (exports.RoutingDateCalculationInput = {}));
//# sourceMappingURL=RoutingDateCalculationInput.js.map