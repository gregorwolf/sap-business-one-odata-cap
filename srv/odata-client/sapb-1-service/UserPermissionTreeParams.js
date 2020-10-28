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
exports.UserPermissionTreeParams = exports.UserPermissionTreeParamsField = exports.createUserPermissionTreeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserPermissionTreeParams.build]] instead.
 */
function createUserPermissionTreeParams(json) {
    return UserPermissionTreeParams.build(json);
}
exports.createUserPermissionTreeParams = createUserPermissionTreeParams;
/**
 * UserPermissionTreeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserPermissionTreeParamsField = /** @class */ (function (_super) {
    __extends(UserPermissionTreeParamsField, _super);
    function UserPermissionTreeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserPermissionTreeParams.permissionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.permissionId = new v4_1.ComplexTypeStringPropertyField('PermissionID', _this, 'Edm.String');
        return _this;
    }
    return UserPermissionTreeParamsField;
}(v4_1.ComplexTypeField));
exports.UserPermissionTreeParamsField = UserPermissionTreeParamsField;
var UserPermissionTreeParams;
(function (UserPermissionTreeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PermissionID: function (permissionId) { return ({ permissionId: v4_1.edmToTs(permissionId, 'Edm.String') }); }
        });
    }
    UserPermissionTreeParams.build = build;
})(UserPermissionTreeParams = exports.UserPermissionTreeParams || (exports.UserPermissionTreeParams = {}));
//# sourceMappingURL=UserPermissionTreeParams.js.map