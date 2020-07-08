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
exports.EmployeeTransferParams = exports.EmployeeTransferParamsField = exports.createEmployeeTransferParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeTransferParams.build]] instead.
 */
function createEmployeeTransferParams(json) {
    return EmployeeTransferParams.build(json);
}
exports.createEmployeeTransferParams = createEmployeeTransferParams;
/**
 * EmployeeTransferParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeTransferParamsField = /** @class */ (function (_super) {
    __extends(EmployeeTransferParamsField, _super);
    function EmployeeTransferParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeeTransferParams.transferId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferId = new v4_1.ComplexTypeNumberPropertyField('TransferID', _this, 'Edm.Int32');
        return _this;
    }
    return EmployeeTransferParamsField;
}(v4_1.ComplexTypeField));
exports.EmployeeTransferParamsField = EmployeeTransferParamsField;
var EmployeeTransferParams;
(function (EmployeeTransferParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TransferID: function (transferId) { return ({ transferId: v4_1.edmToTs(transferId, 'Edm.Int32') }); }
        });
    }
    EmployeeTransferParams.build = build;
})(EmployeeTransferParams = exports.EmployeeTransferParams || (exports.EmployeeTransferParams = {}));
//# sourceMappingURL=EmployeeTransferParams.js.map