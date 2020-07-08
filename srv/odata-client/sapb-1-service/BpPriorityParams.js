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
exports.BpPriorityParams = exports.BpPriorityParamsField = exports.createBpPriorityParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BpPriorityParams.build]] instead.
 */
function createBpPriorityParams(json) {
    return BpPriorityParams.build(json);
}
exports.createBpPriorityParams = createBpPriorityParams;
/**
 * BpPriorityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpPriorityParamsField = /** @class */ (function (_super) {
    __extends(BpPriorityParamsField, _super);
    function BpPriorityParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BpPriorityParams.priority]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priority = new v4_1.ComplexTypeNumberPropertyField('Priority', _this, 'Edm.Int32');
        return _this;
    }
    return BpPriorityParamsField;
}(v4_1.ComplexTypeField));
exports.BpPriorityParamsField = BpPriorityParamsField;
var BpPriorityParams;
(function (BpPriorityParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Priority: function (priority) { return ({ priority: v4_1.edmToTs(priority, 'Edm.Int32') }); }
        });
    }
    BpPriorityParams.build = build;
})(BpPriorityParams = exports.BpPriorityParams || (exports.BpPriorityParams = {}));
//# sourceMappingURL=BpPriorityParams.js.map