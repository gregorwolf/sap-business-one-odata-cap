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
exports.ItemCycleCount = exports.ItemCycleCountField = exports.createItemCycleCount = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemCycleCount.build]] instead.
 */
function createItemCycleCount(json) {
    return ItemCycleCount.build(json);
}
exports.createItemCycleCount = createItemCycleCount;
/**
 * ItemCycleCountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemCycleCountField = /** @class */ (function (_super) {
    __extends(ItemCycleCountField, _super);
    function ItemCycleCountField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemCycleCount.cycleCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cycleCode = new v4_1.ComplexTypeNumberPropertyField('CycleCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemCycleCount.nextCountingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nextCountingDate = new v4_1.ComplexTypeDatePropertyField('NextCountingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemCycleCount.alertTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alertTime = new v4_1.ComplexTypeTimePropertyField('AlertTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ItemCycleCount.destinationUser]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.destinationUser = new v4_1.ComplexTypeNumberPropertyField('DestinationUser', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemCycleCount.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        return _this;
    }
    return ItemCycleCountField;
}(v4_1.ComplexTypeField));
exports.ItemCycleCountField = ItemCycleCountField;
var ItemCycleCount;
(function (ItemCycleCount) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CycleCode: function (cycleCode) { return ({ cycleCode: v4_1.edmToTs(cycleCode, 'Edm.Int32') }); },
            NextCountingDate: function (nextCountingDate) { return ({ nextCountingDate: v4_1.edmToTs(nextCountingDate, 'Edm.DateTimeOffset') }); },
            AlertTime: function (alertTime) { return ({ alertTime: v4_1.edmToTs(alertTime, 'Edm.TimeOfDay') }); },
            DestinationUser: function (destinationUser) { return ({ destinationUser: v4_1.edmToTs(destinationUser, 'Edm.Int32') }); },
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); }
        });
    }
    ItemCycleCount.build = build;
})(ItemCycleCount = exports.ItemCycleCount || (exports.ItemCycleCount = {}));
//# sourceMappingURL=ItemCycleCount.js.map