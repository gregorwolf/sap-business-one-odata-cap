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
exports.DeductionTaxGroupParams = exports.DeductionTaxGroupParamsField = exports.createDeductionTaxGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxGroupParams.build]] instead.
 */
function createDeductionTaxGroupParams(json) {
    return DeductionTaxGroupParams.build(json);
}
exports.createDeductionTaxGroupParams = createDeductionTaxGroupParams;
/**
 * DeductionTaxGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DeductionTaxGroupParamsField = /** @class */ (function (_super) {
    __extends(DeductionTaxGroupParamsField, _super);
    function DeductionTaxGroupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DeductionTaxGroupParams.groupKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupKey = new v4_1.ComplexTypeNumberPropertyField('GroupKey', _this, 'Edm.Int32');
        return _this;
    }
    return DeductionTaxGroupParamsField;
}(v4_1.ComplexTypeField));
exports.DeductionTaxGroupParamsField = DeductionTaxGroupParamsField;
var DeductionTaxGroupParams;
(function (DeductionTaxGroupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            GroupKey: function (groupKey) { return ({ groupKey: v4_1.edmToTs(groupKey, 'Edm.Int32') }); }
        });
    }
    DeductionTaxGroupParams.build = build;
})(DeductionTaxGroupParams = exports.DeductionTaxGroupParams || (exports.DeductionTaxGroupParams = {}));
//# sourceMappingURL=DeductionTaxGroupParams.js.map