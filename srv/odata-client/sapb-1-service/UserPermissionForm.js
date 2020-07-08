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
exports.UserPermissionForm = exports.UserPermissionFormField = exports.createUserPermissionForm = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UserPermissionForm.build]] instead.
 */
function createUserPermissionForm(json) {
    return UserPermissionForm.build(json);
}
exports.createUserPermissionForm = createUserPermissionForm;
/**
 * UserPermissionFormField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserPermissionFormField = /** @class */ (function (_super) {
    __extends(UserPermissionFormField, _super);
    function UserPermissionFormField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UserPermissionForm.formType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formType = new v4_1.ComplexTypeStringPropertyField('FormType', _this, 'Edm.String');
        /**
         * Representation of the [[UserPermissionForm.displayOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayOrder = new v4_1.ComplexTypeNumberPropertyField('DisplayOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserPermissionForm.permissionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.permissionId = new v4_1.ComplexTypeStringPropertyField('PermissionID', _this, 'Edm.String');
        return _this;
    }
    return UserPermissionFormField;
}(v4_1.ComplexTypeField));
exports.UserPermissionFormField = UserPermissionFormField;
var UserPermissionForm;
(function (UserPermissionForm) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FormType: function (formType) { return ({ formType: v4_1.edmToTs(formType, 'Edm.String') }); },
            DisplayOrder: function (displayOrder) { return ({ displayOrder: v4_1.edmToTs(displayOrder, 'Edm.Int32') }); },
            PermissionID: function (permissionId) { return ({ permissionId: v4_1.edmToTs(permissionId, 'Edm.String') }); }
        });
    }
    UserPermissionForm.build = build;
})(UserPermissionForm = exports.UserPermissionForm || (exports.UserPermissionForm = {}));
//# sourceMappingURL=UserPermissionForm.js.map