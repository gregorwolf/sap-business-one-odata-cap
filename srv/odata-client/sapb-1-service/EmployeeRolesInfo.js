"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of EmployeeRolesInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EmployeeRolesInfoField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EmployeeRolesInfo) || this;
        /**
         * Representation of the [[EmployeeRolesInfo.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new core_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeRolesInfo.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeRolesInfo.roleId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.roleId = new core_1.ComplexTypeNumberPropertyField('RoleID', _this, 'Edm.Int32');
        return _this;
    }
    return EmployeeRolesInfoField;
}(core_1.ComplexTypeField));
exports.EmployeeRolesInfoField = EmployeeRolesInfoField;
var EmployeeRolesInfo;
(function (EmployeeRolesInfo) {
    /**
     * Metadata information on all properties of the `EmployeeRolesInfo` complex type.
     */
    EmployeeRolesInfo._propertyMetadata = [{
            originalName: 'EmployeeID',
            name: 'employeeId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RoleID',
            name: 'roleId',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EmployeeRolesInfo);
    }
    EmployeeRolesInfo.build = build;
})(EmployeeRolesInfo = exports.EmployeeRolesInfo || (exports.EmployeeRolesInfo = {}));
//# sourceMappingURL=EmployeeRolesInfo.js.map