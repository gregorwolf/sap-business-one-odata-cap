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
exports.CycleCountDeterminationSetup = exports.CycleCountDeterminationSetupField = exports.createCycleCountDeterminationSetup = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CycleCountDeterminationSetup.build]] instead.
 */
function createCycleCountDeterminationSetup(json) {
    return CycleCountDeterminationSetup.build(json);
}
exports.createCycleCountDeterminationSetup = createCycleCountDeterminationSetup;
/**
 * CycleCountDeterminationSetupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CycleCountDeterminationSetupField = /** @class */ (function (_super) {
    __extends(CycleCountDeterminationSetupField, _super);
    /**
     * Creates an instance of CycleCountDeterminationSetupField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CycleCountDeterminationSetupField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CycleCountDeterminationSetup) || this;
        /**
         * Representation of the [[CycleCountDeterminationSetup.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[CycleCountDeterminationSetup.entry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.entry = new core_1.ComplexTypeNumberPropertyField('Entry', _this, 'Edm.Int32');
        /**
         * Representation of the [[CycleCountDeterminationSetup.cycleCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cycleCode = new core_1.ComplexTypeNumberPropertyField('CycleCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[CycleCountDeterminationSetup.alert]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alert = new core_1.ComplexTypeEnumPropertyField('Alert', _this);
        /**
         * Representation of the [[CycleCountDeterminationSetup.destinationUser]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.destinationUser = new core_1.ComplexTypeNumberPropertyField('DestinationUser', _this, 'Edm.Int32');
        /**
         * Representation of the [[CycleCountDeterminationSetup.nextCountingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nextCountingDate = new core_1.ComplexTypeDatePropertyField('NextCountingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[CycleCountDeterminationSetup.time]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.time = new core_1.ComplexTypeTimePropertyField('Time', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[CycleCountDeterminationSetup.excludeItemsWithZeroQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.excludeItemsWithZeroQuantity = new core_1.ComplexTypeEnumPropertyField('ExcludeItemsWithZeroQuantity', _this);
        /**
         * Representation of the [[CycleCountDeterminationSetup.changeExistingItems]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeExistingItems = new core_1.ComplexTypeEnumPropertyField('ChangeExistingItems', _this);
        return _this;
    }
    return CycleCountDeterminationSetupField;
}(core_1.ComplexTypeField));
exports.CycleCountDeterminationSetupField = CycleCountDeterminationSetupField;
var CycleCountDeterminationSetup;
(function (CycleCountDeterminationSetup) {
    /**
     * Metadata information on all properties of the `CycleCountDeterminationSetup` complex type.
     */
    CycleCountDeterminationSetup._propertyMetadata = [{
            originalName: 'WarehouseCode',
            name: 'warehouseCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Entry',
            name: 'entry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CycleCode',
            name: 'cycleCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Alert',
            name: 'alert',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DestinationUser',
            name: 'destinationUser',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'NextCountingDate',
            name: 'nextCountingDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Time',
            name: 'time',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'ExcludeItemsWithZeroQuantity',
            name: 'excludeItemsWithZeroQuantity',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ChangeExistingItems',
            name: 'changeExistingItems',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CycleCountDeterminationSetup);
    }
    CycleCountDeterminationSetup.build = build;
})(CycleCountDeterminationSetup = exports.CycleCountDeterminationSetup || (exports.CycleCountDeterminationSetup = {}));
//# sourceMappingURL=CycleCountDeterminationSetup.js.map