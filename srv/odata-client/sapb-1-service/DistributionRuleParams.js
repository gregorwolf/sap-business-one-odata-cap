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
exports.DistributionRuleParams = exports.DistributionRuleParamsField = exports.createDistributionRuleParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DistributionRuleParams.build]] instead.
 */
function createDistributionRuleParams(json) {
    return DistributionRuleParams.build(json);
}
exports.createDistributionRuleParams = createDistributionRuleParams;
/**
 * DistributionRuleParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DistributionRuleParamsField = /** @class */ (function (_super) {
    __extends(DistributionRuleParamsField, _super);
    function DistributionRuleParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DistributionRuleParams.factorCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factorCode = new v4_1.ComplexTypeStringPropertyField('FactorCode', _this, 'Edm.String');
        /**
         * Representation of the [[DistributionRuleParams.factorDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factorDescription = new v4_1.ComplexTypeStringPropertyField('FactorDescription', _this, 'Edm.String');
        return _this;
    }
    return DistributionRuleParamsField;
}(v4_1.ComplexTypeField));
exports.DistributionRuleParamsField = DistributionRuleParamsField;
var DistributionRuleParams;
(function (DistributionRuleParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FactorCode: function (factorCode) { return ({ factorCode: v4_1.edmToTs(factorCode, 'Edm.String') }); },
            FactorDescription: function (factorDescription) { return ({ factorDescription: v4_1.edmToTs(factorDescription, 'Edm.String') }); }
        });
    }
    DistributionRuleParams.build = build;
})(DistributionRuleParams = exports.DistributionRuleParams || (exports.DistributionRuleParams = {}));
//# sourceMappingURL=DistributionRuleParams.js.map