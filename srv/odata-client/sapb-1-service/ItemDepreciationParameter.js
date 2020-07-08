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
exports.ItemDepreciationParameter = exports.ItemDepreciationParameterField = exports.createItemDepreciationParameter = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemDepreciationParameter.build]] instead.
 */
function createItemDepreciationParameter(json) {
    return ItemDepreciationParameter.build(json);
}
exports.createItemDepreciationParameter = createItemDepreciationParameter;
/**
 * ItemDepreciationParameterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemDepreciationParameterField = /** @class */ (function (_super) {
    __extends(ItemDepreciationParameterField, _super);
    function ItemDepreciationParameterField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemDepreciationParameter.fiscalYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fiscalYear = new v4_1.ComplexTypeStringPropertyField('FiscalYear', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDepreciationParameter.depreciationArea]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationArea = new v4_1.ComplexTypeStringPropertyField('DepreciationArea', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDepreciationParameter.depreciationStartDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationStartDate = new v4_1.ComplexTypeDatePropertyField('DepreciationStartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemDepreciationParameter.depreciationEndDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationEndDate = new v4_1.ComplexTypeDatePropertyField('DepreciationEndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemDepreciationParameter.usefulLife]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.usefulLife = new v4_1.ComplexTypeNumberPropertyField('UsefulLife', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemDepreciationParameter.remainingLife]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingLife = new v4_1.ComplexTypeNumberPropertyField('RemainingLife', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemDepreciationParameter.depreciationType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationType = new v4_1.ComplexTypeStringPropertyField('DepreciationType', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDepreciationParameter.totalUnitsInUsefulLife]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalUnitsInUsefulLife = new v4_1.ComplexTypeNumberPropertyField('TotalUnitsInUsefulLife', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemDepreciationParameter.remainingUnits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingUnits = new v4_1.ComplexTypeNumberPropertyField('RemainingUnits', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemDepreciationParameter.standardUnits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.standardUnits = new v4_1.ComplexTypeNumberPropertyField('StandardUnits', _this, 'Edm.Int32');
        return _this;
    }
    return ItemDepreciationParameterField;
}(v4_1.ComplexTypeField));
exports.ItemDepreciationParameterField = ItemDepreciationParameterField;
var ItemDepreciationParameter;
(function (ItemDepreciationParameter) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FiscalYear: function (fiscalYear) { return ({ fiscalYear: v4_1.edmToTs(fiscalYear, 'Edm.String') }); },
            DepreciationArea: function (depreciationArea) { return ({ depreciationArea: v4_1.edmToTs(depreciationArea, 'Edm.String') }); },
            DepreciationStartDate: function (depreciationStartDate) { return ({ depreciationStartDate: v4_1.edmToTs(depreciationStartDate, 'Edm.DateTimeOffset') }); },
            DepreciationEndDate: function (depreciationEndDate) { return ({ depreciationEndDate: v4_1.edmToTs(depreciationEndDate, 'Edm.DateTimeOffset') }); },
            UsefulLife: function (usefulLife) { return ({ usefulLife: v4_1.edmToTs(usefulLife, 'Edm.Int32') }); },
            RemainingLife: function (remainingLife) { return ({ remainingLife: v4_1.edmToTs(remainingLife, 'Edm.Double') }); },
            DepreciationType: function (depreciationType) { return ({ depreciationType: v4_1.edmToTs(depreciationType, 'Edm.String') }); },
            TotalUnitsInUsefulLife: function (totalUnitsInUsefulLife) { return ({ totalUnitsInUsefulLife: v4_1.edmToTs(totalUnitsInUsefulLife, 'Edm.Int32') }); },
            RemainingUnits: function (remainingUnits) { return ({ remainingUnits: v4_1.edmToTs(remainingUnits, 'Edm.Int32') }); },
            StandardUnits: function (standardUnits) { return ({ standardUnits: v4_1.edmToTs(standardUnits, 'Edm.Int32') }); }
        });
    }
    ItemDepreciationParameter.build = build;
})(ItemDepreciationParameter = exports.ItemDepreciationParameter || (exports.ItemDepreciationParameter = {}));
//# sourceMappingURL=ItemDepreciationParameter.js.map