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
exports.DeductionTaxSubGroupParams = exports.DeductionTaxSubGroupParamsField = exports.createDeductionTaxSubGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxSubGroupParams.build]] instead.
 */
function createDeductionTaxSubGroupParams(json) {
    return DeductionTaxSubGroupParams.build(json);
}
exports.createDeductionTaxSubGroupParams = createDeductionTaxSubGroupParams;
/**
 * DeductionTaxSubGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DeductionTaxSubGroupParamsField = /** @class */ (function (_super) {
    __extends(DeductionTaxSubGroupParamsField, _super);
    function DeductionTaxSubGroupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DeductionTaxSubGroupParams.groupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupCode = new v4_1.ComplexTypeStringPropertyField('GroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[DeductionTaxSubGroupParams.groupName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupName = new v4_1.ComplexTypeStringPropertyField('GroupName', _this, 'Edm.String');
        return _this;
    }
    return DeductionTaxSubGroupParamsField;
}(v4_1.ComplexTypeField));
exports.DeductionTaxSubGroupParamsField = DeductionTaxSubGroupParamsField;
var DeductionTaxSubGroupParams;
(function (DeductionTaxSubGroupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            GroupCode: function (groupCode) { return ({ groupCode: v4_1.edmToTs(groupCode, 'Edm.String') }); },
            GroupName: function (groupName) { return ({ groupName: v4_1.edmToTs(groupName, 'Edm.String') }); }
        });
    }
    DeductionTaxSubGroupParams.build = build;
})(DeductionTaxSubGroupParams = exports.DeductionTaxSubGroupParams || (exports.DeductionTaxSubGroupParams = {}));
//# sourceMappingURL=DeductionTaxSubGroupParams.js.map