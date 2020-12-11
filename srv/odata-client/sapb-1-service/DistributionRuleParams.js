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
exports.DistributionRuleParams = exports.DistributionRuleParamsField = exports.createDistributionRuleParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of DistributionRuleParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DistributionRuleParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DistributionRuleParams) || this;
        /**
         * Representation of the [[DistributionRuleParams.factorCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factorCode = new core_1.ComplexTypeStringPropertyField('FactorCode', _this, 'Edm.String');
        /**
         * Representation of the [[DistributionRuleParams.factorDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factorDescription = new core_1.ComplexTypeStringPropertyField('FactorDescription', _this, 'Edm.String');
        return _this;
    }
    return DistributionRuleParamsField;
}(core_1.ComplexTypeField));
exports.DistributionRuleParamsField = DistributionRuleParamsField;
var DistributionRuleParams;
(function (DistributionRuleParams) {
    /**
     * Metadata information on all properties of the `DistributionRuleParams` complex type.
     */
    DistributionRuleParams._propertyMetadata = [{
            originalName: 'FactorCode',
            name: 'factorCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FactorDescription',
            name: 'factorDescription',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DistributionRuleParams);
    }
    DistributionRuleParams.build = build;
})(DistributionRuleParams = exports.DistributionRuleParams || (exports.DistributionRuleParams = {}));
//# sourceMappingURL=DistributionRuleParams.js.map