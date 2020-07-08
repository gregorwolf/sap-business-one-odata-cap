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
exports.CycleCountDeterminationSetup = exports.CycleCountDeterminationSetupField = exports.createCycleCountDeterminationSetup = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function CycleCountDeterminationSetupField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CycleCountDeterminationSetup.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[CycleCountDeterminationSetup.entry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.entry = new v4_1.ComplexTypeNumberPropertyField('Entry', _this, 'Edm.Int32');
        /**
         * Representation of the [[CycleCountDeterminationSetup.cycleCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cycleCode = new v4_1.ComplexTypeNumberPropertyField('CycleCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[CycleCountDeterminationSetup.destinationUser]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.destinationUser = new v4_1.ComplexTypeNumberPropertyField('DestinationUser', _this, 'Edm.Int32');
        /**
         * Representation of the [[CycleCountDeterminationSetup.nextCountingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nextCountingDate = new v4_1.ComplexTypeDatePropertyField('NextCountingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[CycleCountDeterminationSetup.time]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.time = new v4_1.ComplexTypeTimePropertyField('Time', _this, 'Edm.TimeOfDay');
        return _this;
    }
    return CycleCountDeterminationSetupField;
}(v4_1.ComplexTypeField));
exports.CycleCountDeterminationSetupField = CycleCountDeterminationSetupField;
var CycleCountDeterminationSetup;
(function (CycleCountDeterminationSetup) {
    function build(json) {
        return v4_1.createComplexType(json, {
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); },
            Entry: function (entry) { return ({ entry: v4_1.edmToTs(entry, 'Edm.Int32') }); },
            CycleCode: function (cycleCode) { return ({ cycleCode: v4_1.edmToTs(cycleCode, 'Edm.Int32') }); },
            DestinationUser: function (destinationUser) { return ({ destinationUser: v4_1.edmToTs(destinationUser, 'Edm.Int32') }); },
            NextCountingDate: function (nextCountingDate) { return ({ nextCountingDate: v4_1.edmToTs(nextCountingDate, 'Edm.DateTimeOffset') }); },
            Time: function (time) { return ({ time: v4_1.edmToTs(time, 'Edm.TimeOfDay') }); }
        });
    }
    CycleCountDeterminationSetup.build = build;
})(CycleCountDeterminationSetup = exports.CycleCountDeterminationSetup || (exports.CycleCountDeterminationSetup = {}));
//# sourceMappingURL=CycleCountDeterminationSetup.js.map