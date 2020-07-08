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
exports.EmployeeFullNamesParams = exports.EmployeeFullNamesParamsField = exports.createEmployeeFullNamesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeFullNamesParams.build]] instead.
 */
function createEmployeeFullNamesParams(json) {
    return EmployeeFullNamesParams.build(json);
}
exports.createEmployeeFullNamesParams = createEmployeeFullNamesParams;
/**
 * EmployeeFullNamesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeFullNamesParamsField = /** @class */ (function (_super) {
    __extends(EmployeeFullNamesParamsField, _super);
    function EmployeeFullNamesParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeeFullNamesParams.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new v4_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeFullNamesParams.employeeFullName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeFullName = new v4_1.ComplexTypeStringPropertyField('EmployeeFullName', _this, 'Edm.String');
        return _this;
    }
    return EmployeeFullNamesParamsField;
}(v4_1.ComplexTypeField));
exports.EmployeeFullNamesParamsField = EmployeeFullNamesParamsField;
var EmployeeFullNamesParams;
(function (EmployeeFullNamesParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            EmployeeID: function (employeeId) { return ({ employeeId: v4_1.edmToTs(employeeId, 'Edm.Int32') }); },
            EmployeeFullName: function (employeeFullName) { return ({ employeeFullName: v4_1.edmToTs(employeeFullName, 'Edm.String') }); }
        });
    }
    EmployeeFullNamesParams.build = build;
})(EmployeeFullNamesParams = exports.EmployeeFullNamesParams || (exports.EmployeeFullNamesParams = {}));
//# sourceMappingURL=EmployeeFullNamesParams.js.map