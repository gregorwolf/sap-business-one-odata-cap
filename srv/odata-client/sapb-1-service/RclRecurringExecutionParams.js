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
exports.RclRecurringExecutionParams = exports.RclRecurringExecutionParamsField = exports.createRclRecurringExecutionParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[RclRecurringExecutionParams.build]] instead.
 */
function createRclRecurringExecutionParams(json) {
    return RclRecurringExecutionParams.build(json);
}
exports.createRclRecurringExecutionParams = createRclRecurringExecutionParams;
/**
 * RclRecurringExecutionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RclRecurringExecutionParamsField = /** @class */ (function (_super) {
    __extends(RclRecurringExecutionParamsField, _super);
    function RclRecurringExecutionParamsField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RclRecurringExecutionParamsField;
}(v4_1.ComplexTypeField));
exports.RclRecurringExecutionParamsField = RclRecurringExecutionParamsField;
var RclRecurringExecutionParams;
(function (RclRecurringExecutionParams) {
    function build(json) {
        return v4_1.createComplexType(json, {});
    }
    RclRecurringExecutionParams.build = build;
})(RclRecurringExecutionParams = exports.RclRecurringExecutionParams || (exports.RclRecurringExecutionParams = {}));
//# sourceMappingURL=RclRecurringExecutionParams.js.map