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
exports.ItemPeriodControl = exports.ItemPeriodControlField = exports.createItemPeriodControl = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemPeriodControl.build]] instead.
 */
function createItemPeriodControl(json) {
    return ItemPeriodControl.build(json);
}
exports.createItemPeriodControl = createItemPeriodControl;
/**
 * ItemPeriodControlField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemPeriodControlField = /** @class */ (function (_super) {
    __extends(ItemPeriodControlField, _super);
    function ItemPeriodControlField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemPeriodControl.fiscalYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fiscalYear = new v4_1.ComplexTypeStringPropertyField('FiscalYear', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPeriodControl.depreciationArea]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationArea = new v4_1.ComplexTypeStringPropertyField('DepreciationArea', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPeriodControl.subPeriod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subPeriod = new v4_1.ComplexTypeNumberPropertyField('SubPeriod', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPeriodControl.factor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor = new v4_1.ComplexTypeNumberPropertyField('Factor', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPeriodControl.actualUnits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualUnits = new v4_1.ComplexTypeNumberPropertyField('ActualUnits', _this, 'Edm.Int32');
        return _this;
    }
    return ItemPeriodControlField;
}(v4_1.ComplexTypeField));
exports.ItemPeriodControlField = ItemPeriodControlField;
var ItemPeriodControl;
(function (ItemPeriodControl) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FiscalYear: function (fiscalYear) { return ({ fiscalYear: v4_1.edmToTs(fiscalYear, 'Edm.String') }); },
            DepreciationArea: function (depreciationArea) { return ({ depreciationArea: v4_1.edmToTs(depreciationArea, 'Edm.String') }); },
            SubPeriod: function (subPeriod) { return ({ subPeriod: v4_1.edmToTs(subPeriod, 'Edm.Int32') }); },
            Factor: function (factor) { return ({ factor: v4_1.edmToTs(factor, 'Edm.Double') }); },
            ActualUnits: function (actualUnits) { return ({ actualUnits: v4_1.edmToTs(actualUnits, 'Edm.Int32') }); }
        });
    }
    ItemPeriodControl.build = build;
})(ItemPeriodControl = exports.ItemPeriodControl || (exports.ItemPeriodControl = {}));
//# sourceMappingURL=ItemPeriodControl.js.map