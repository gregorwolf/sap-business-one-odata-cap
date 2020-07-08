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
exports.EmployeeRolesInfo = exports.EmployeeRolesInfoField = exports.createEmployeeRolesInfo = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeRolesInfo.build]] instead.
 */
function createEmployeeRolesInfo(json) {
    return EmployeeRolesInfo.build(json);
}
exports.createEmployeeRolesInfo = createEmployeeRolesInfo;
/**
 * EmployeeRolesInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeRolesInfoField = /** @class */ (function (_super) {
    __extends(EmployeeRolesInfoField, _super);
    function EmployeeRolesInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeeRolesInfo.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new v4_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeRolesInfo.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeRolesInfo.roleId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.roleId = new v4_1.ComplexTypeNumberPropertyField('RoleID', _this, 'Edm.Int32');
        return _this;
    }
    return EmployeeRolesInfoField;
}(v4_1.ComplexTypeField));
exports.EmployeeRolesInfoField = EmployeeRolesInfoField;
var EmployeeRolesInfo;
(function (EmployeeRolesInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            EmployeeID: function (employeeId) { return ({ employeeId: v4_1.edmToTs(employeeId, 'Edm.Int32') }); },
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            RoleID: function (roleId) { return ({ roleId: v4_1.edmToTs(roleId, 'Edm.Int32') }); }
        });
    }
    EmployeeRolesInfo.build = build;
})(EmployeeRolesInfo = exports.EmployeeRolesInfo || (exports.EmployeeRolesInfo = {}));
//# sourceMappingURL=EmployeeRolesInfo.js.map