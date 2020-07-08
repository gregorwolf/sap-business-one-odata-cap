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
exports.DepreciationLevel = exports.DepreciationLevelField = exports.createDepreciationLevel = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DepreciationLevel.build]] instead.
 */
function createDepreciationLevel(json) {
    return DepreciationLevel.build(json);
}
exports.createDepreciationLevel = createDepreciationLevel;
/**
 * DepreciationLevelField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DepreciationLevelField = /** @class */ (function (_super) {
    __extends(DepreciationLevelField, _super);
    function DepreciationLevelField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DepreciationLevel.level]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.level = new v4_1.ComplexTypeNumberPropertyField('Level', _this, 'Edm.Int32');
        /**
         * Representation of the [[DepreciationLevel.numberOfYears]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numberOfYears = new v4_1.ComplexTypeNumberPropertyField('NumberOfYears', _this, 'Edm.Int32');
        /**
         * Representation of the [[DepreciationLevel.percentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentage = new v4_1.ComplexTypeNumberPropertyField('Percentage', _this, 'Edm.Double');
        /**
         * Representation of the [[DepreciationLevel.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new v4_1.ComplexTypeNumberPropertyField('Amount', _this, 'Edm.Double');
        return _this;
    }
    return DepreciationLevelField;
}(v4_1.ComplexTypeField));
exports.DepreciationLevelField = DepreciationLevelField;
var DepreciationLevel;
(function (DepreciationLevel) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Level: function (level) { return ({ level: v4_1.edmToTs(level, 'Edm.Int32') }); },
            NumberOfYears: function (numberOfYears) { return ({ numberOfYears: v4_1.edmToTs(numberOfYears, 'Edm.Int32') }); },
            Percentage: function (percentage) { return ({ percentage: v4_1.edmToTs(percentage, 'Edm.Double') }); },
            Amount: function (amount) { return ({ amount: v4_1.edmToTs(amount, 'Edm.Double') }); }
        });
    }
    DepreciationLevel.build = build;
})(DepreciationLevel = exports.DepreciationLevel || (exports.DepreciationLevel = {}));
//# sourceMappingURL=DepreciationLevel.js.map