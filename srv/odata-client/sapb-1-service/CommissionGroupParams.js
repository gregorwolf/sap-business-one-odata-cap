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
exports.CommissionGroupParams = exports.CommissionGroupParamsField = exports.createCommissionGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CommissionGroupParams.build]] instead.
 */
function createCommissionGroupParams(json) {
    return CommissionGroupParams.build(json);
}
exports.createCommissionGroupParams = createCommissionGroupParams;
/**
 * CommissionGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CommissionGroupParamsField = /** @class */ (function (_super) {
    __extends(CommissionGroupParamsField, _super);
    function CommissionGroupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CommissionGroupParams.commissionGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.commissionGroupCode = new v4_1.ComplexTypeNumberPropertyField('CommissionGroupCode', _this, 'Edm.Int32');
        return _this;
    }
    return CommissionGroupParamsField;
}(v4_1.ComplexTypeField));
exports.CommissionGroupParamsField = CommissionGroupParamsField;
var CommissionGroupParams;
(function (CommissionGroupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CommissionGroupCode: function (commissionGroupCode) { return ({ commissionGroupCode: v4_1.edmToTs(commissionGroupCode, 'Edm.Int32') }); }
        });
    }
    CommissionGroupParams.build = build;
})(CommissionGroupParams = exports.CommissionGroupParams || (exports.CommissionGroupParams = {}));
//# sourceMappingURL=CommissionGroupParams.js.map