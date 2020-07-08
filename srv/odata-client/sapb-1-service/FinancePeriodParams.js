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
exports.FinancePeriodParams = exports.FinancePeriodParamsField = exports.createFinancePeriodParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[FinancePeriodParams.build]] instead.
 */
function createFinancePeriodParams(json) {
    return FinancePeriodParams.build(json);
}
exports.createFinancePeriodParams = createFinancePeriodParams;
/**
 * FinancePeriodParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FinancePeriodParamsField = /** @class */ (function (_super) {
    __extends(FinancePeriodParamsField, _super);
    function FinancePeriodParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[FinancePeriodParams.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new v4_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[FinancePeriodParams.periodIndicator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodIndicator = new v4_1.ComplexTypeStringPropertyField('PeriodIndicator', _this, 'Edm.String');
        return _this;
    }
    return FinancePeriodParamsField;
}(v4_1.ComplexTypeField));
exports.FinancePeriodParamsField = FinancePeriodParamsField;
var FinancePeriodParams;
(function (FinancePeriodParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsoluteEntry: function (absoluteEntry) { return ({ absoluteEntry: v4_1.edmToTs(absoluteEntry, 'Edm.Int32') }); },
            PeriodIndicator: function (periodIndicator) { return ({ periodIndicator: v4_1.edmToTs(periodIndicator, 'Edm.String') }); }
        });
    }
    FinancePeriodParams.build = build;
})(FinancePeriodParams = exports.FinancePeriodParams || (exports.FinancePeriodParams = {}));
//# sourceMappingURL=FinancePeriodParams.js.map