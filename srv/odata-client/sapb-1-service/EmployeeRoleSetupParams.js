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
exports.EmployeeRoleSetupParams = exports.EmployeeRoleSetupParamsField = exports.createEmployeeRoleSetupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeRoleSetupParams.build]] instead.
 */
function createEmployeeRoleSetupParams(json) {
    return EmployeeRoleSetupParams.build(json);
}
exports.createEmployeeRoleSetupParams = createEmployeeRoleSetupParams;
/**
 * EmployeeRoleSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeRoleSetupParamsField = /** @class */ (function (_super) {
    __extends(EmployeeRoleSetupParamsField, _super);
    function EmployeeRoleSetupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeeRoleSetupParams.typeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.typeId = new v4_1.ComplexTypeNumberPropertyField('TypeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeRoleSetupParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        return _this;
    }
    return EmployeeRoleSetupParamsField;
}(v4_1.ComplexTypeField));
exports.EmployeeRoleSetupParamsField = EmployeeRoleSetupParamsField;
var EmployeeRoleSetupParams;
(function (EmployeeRoleSetupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TypeID: function (typeId) { return ({ typeId: v4_1.edmToTs(typeId, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); }
        });
    }
    EmployeeRoleSetupParams.build = build;
})(EmployeeRoleSetupParams = exports.EmployeeRoleSetupParams || (exports.EmployeeRoleSetupParams = {}));
//# sourceMappingURL=EmployeeRoleSetupParams.js.map