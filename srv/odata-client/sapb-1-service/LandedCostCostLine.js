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
exports.LandedCostCostLine = exports.LandedCostCostLineField = exports.createLandedCostCostLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[LandedCostCostLine.build]] instead.
 */
function createLandedCostCostLine(json) {
    return LandedCostCostLine.build(json);
}
exports.createLandedCostCostLine = createLandedCostCostLine;
/**
 * LandedCostCostLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var LandedCostCostLineField = /** @class */ (function (_super) {
    __extends(LandedCostCostLineField, _super);
    /**
     * Creates an instance of LandedCostCostLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function LandedCostCostLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, LandedCostCostLine) || this;
        /**
         * Representation of the [[LandedCostCostLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostCostLine.landedCostCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.landedCostCode = new core_1.ComplexTypeStringPropertyField('LandedCostCode', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostCostLine.allocationBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allocationBy = new core_1.ComplexTypeEnumPropertyField('AllocationBy', _this);
        /**
         * Representation of the [[LandedCostCostLine.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new core_1.ComplexTypeNumberPropertyField('Amount', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostCostLine.amountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountFc = new core_1.ComplexTypeNumberPropertyField('AmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostCostLine.factor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor = new core_1.ComplexTypeNumberPropertyField('Factor', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostCostLine.costType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costType = new core_1.ComplexTypeEnumPropertyField('CostType', _this);
        /**
         * Representation of the [[LandedCostCostLine.includeForCustoms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.includeForCustoms = new core_1.ComplexTypeEnumPropertyField('IncludeForCustoms', _this);
        /**
         * Representation of the [[LandedCostCostLine.openAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmount = new core_1.ComplexTypeNumberPropertyField('OpenAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostCostLine.openAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmountFc = new core_1.ComplexTypeNumberPropertyField('OpenAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostCostLine.broker]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.broker = new core_1.ComplexTypeStringPropertyField('Broker', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostCostLine.brokerName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.brokerName = new core_1.ComplexTypeStringPropertyField('BrokerName', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostCostLine.costCategory]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costCategory = new core_1.ComplexTypeEnumPropertyField('CostCategory', _this);
        return _this;
    }
    return LandedCostCostLineField;
}(core_1.ComplexTypeField));
exports.LandedCostCostLineField = LandedCostCostLineField;
var LandedCostCostLine;
(function (LandedCostCostLine) {
    /**
     * Metadata information on all properties of the `LandedCostCostLine` complex type.
     */
    LandedCostCostLine._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LandedCostCode',
            name: 'landedCostCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AllocationBy',
            name: 'allocationBy',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Amount',
            name: 'amount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AmountFC',
            name: 'amountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Factor',
            name: 'factor',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CostType',
            name: 'costType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IncludeForCustoms',
            name: 'includeForCustoms',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'OpenAmount',
            name: 'openAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OpenAmountFC',
            name: 'openAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Broker',
            name: 'broker',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BrokerName',
            name: 'brokerName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostCategory',
            name: 'costCategory',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, LandedCostCostLine);
    }
    LandedCostCostLine.build = build;
})(LandedCostCostLine = exports.LandedCostCostLine || (exports.LandedCostCostLine = {}));
//# sourceMappingURL=LandedCostCostLine.js.map