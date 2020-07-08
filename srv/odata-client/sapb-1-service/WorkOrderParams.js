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
exports.WorkOrderParams = exports.WorkOrderParamsField = exports.createWorkOrderParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WorkOrderParams.build]] instead.
 */
function createWorkOrderParams(json) {
    return WorkOrderParams.build(json);
}
exports.createWorkOrderParams = createWorkOrderParams;
/**
 * WorkOrderParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WorkOrderParamsField = /** @class */ (function (_super) {
    __extends(WorkOrderParamsField, _super);
    function WorkOrderParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WorkOrderParams.orderNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orderNum = new v4_1.ComplexTypeNumberPropertyField('OrderNum', _this, 'Edm.Int32');
        return _this;
    }
    return WorkOrderParamsField;
}(v4_1.ComplexTypeField));
exports.WorkOrderParamsField = WorkOrderParamsField;
var WorkOrderParams;
(function (WorkOrderParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            OrderNum: function (orderNum) { return ({ orderNum: v4_1.edmToTs(orderNum, 'Edm.Int32') }); }
        });
    }
    WorkOrderParams.build = build;
})(WorkOrderParams = exports.WorkOrderParams || (exports.WorkOrderParams = {}));
//# sourceMappingURL=WorkOrderParams.js.map