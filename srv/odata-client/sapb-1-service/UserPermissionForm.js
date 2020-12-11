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
exports.UserPermissionForm = exports.UserPermissionFormField = exports.createUserPermissionForm = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of UserPermissionFormField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserPermissionFormField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserPermissionForm) || this;
        /**
         * Representation of the [[UserPermissionForm.formType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formType = new core_1.ComplexTypeStringPropertyField('FormType', _this, 'Edm.String');
        /**
         * Representation of the [[UserPermissionForm.displayOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayOrder = new core_1.ComplexTypeNumberPropertyField('DisplayOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[UserPermissionForm.permissionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.permissionId = new core_1.ComplexTypeStringPropertyField('PermissionID', _this, 'Edm.String');
        return _this;
    }
    return UserPermissionFormField;
}(core_1.ComplexTypeField));
exports.UserPermissionFormField = UserPermissionFormField;
var UserPermissionForm;
(function (UserPermissionForm) {
    /**
     * Metadata information on all properties of the `UserPermissionForm` complex type.
     */
    UserPermissionForm._propertyMetadata = [{
            originalName: 'FormType',
            name: 'formType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DisplayOrder',
            name: 'displayOrder',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PermissionID',
            name: 'permissionId',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserPermissionForm);
    }
    UserPermissionForm.build = build;
})(UserPermissionForm = exports.UserPermissionForm || (exports.UserPermissionForm = {}));
//# sourceMappingURL=UserPermissionForm.js.map