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
exports.ChecksforPaymentParams = exports.ChecksforPaymentParamsField = exports.createChecksforPaymentParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ChecksforPaymentParams.build]] instead.
 */
function createChecksforPaymentParams(json) {
    return ChecksforPaymentParams.build(json);
}
exports.createChecksforPaymentParams = createChecksforPaymentParams;
/**
 * ChecksforPaymentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ChecksforPaymentParamsField = /** @class */ (function (_super) {
    __extends(ChecksforPaymentParamsField, _super);
    function ChecksforPaymentParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ChecksforPaymentParams.checkKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkKey = new v4_1.ComplexTypeNumberPropertyField('CheckKey', _this, 'Edm.Int32');
        return _this;
    }
    return ChecksforPaymentParamsField;
}(v4_1.ComplexTypeField));
exports.ChecksforPaymentParamsField = ChecksforPaymentParamsField;
var ChecksforPaymentParams;
(function (ChecksforPaymentParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CheckKey: function (checkKey) { return ({ checkKey: v4_1.edmToTs(checkKey, 'Edm.Int32') }); }
        });
    }
    ChecksforPaymentParams.build = build;
})(ChecksforPaymentParams = exports.ChecksforPaymentParams || (exports.ChecksforPaymentParams = {}));
//# sourceMappingURL=ChecksforPaymentParams.js.map