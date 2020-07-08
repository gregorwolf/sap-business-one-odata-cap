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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPermissionTree = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UserPermissionTreeRequestBuilder_1 = require("./UserPermissionTreeRequestBuilder");
var UserPermissionForm_1 = require("./UserPermissionForm");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "UserPermissionTree" of service "SAPB1".
 */
var UserPermissionTree = /** @class */ (function (_super) {
    __extends(UserPermissionTree, _super);
    function UserPermissionTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `UserPermissionTree`.
     * @returns A builder that constructs instances of entity type `UserPermissionTree`.
     */
    UserPermissionTree.builder = function () {
        return v4_1.Entity.entityBuilder(UserPermissionTree);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserPermissionTree` entity type.
     * @returns A `UserPermissionTree` request builder.
     */
    UserPermissionTree.requestBuilder = function () {
        return new UserPermissionTreeRequestBuilder_1.UserPermissionTreeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserPermissionTree`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserPermissionTree`.
     */
    UserPermissionTree.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, UserPermissionTree);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserPermissionTree.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserPermissionTree.
     */
    UserPermissionTree._entityName = 'UserPermissionTree';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserPermissionTree.
     */
    UserPermissionTree._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    UserPermissionTree._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return UserPermissionTree;
}(v4_1.Entity));
exports.UserPermissionTree = UserPermissionTree;
var Users_1 = require("./Users");
(function (UserPermissionTree) {
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissionTree.USER_SIGNATURE = new v4_1.NumberField('UserSignature', UserPermissionTree, 'Edm.Int32');
    /**
     * Static representation of the [[displayOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissionTree.DISPLAY_ORDER = new v4_1.NumberField('DisplayOrder', UserPermissionTree, 'Edm.Int32');
    /**
     * Static representation of the [[permissionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissionTree.PERMISSION_ID = new v4_1.StringField('PermissionID', UserPermissionTree, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissionTree.NAME = new v4_1.StringField('Name', UserPermissionTree, 'Edm.String');
    /**
     * Static representation of the [[levels]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissionTree.LEVELS = new v4_1.NumberField('Levels', UserPermissionTree, 'Edm.Int32');
    /**
     * Static representation of the [[parentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissionTree.PARENT_ID = new v4_1.StringField('ParentID', UserPermissionTree, 'Edm.String');
    /**
     * Static representation of the [[userPermissionForms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissionTree.USER_PERMISSION_FORMS = new v4_1.CollectionField('UserPermissionForms', UserPermissionTree, new UserPermissionForm_1.UserPermissionFormField('', UserPermissionTree));
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserPermissionTree.USER = new v4_1.OneToOneLink('User', UserPermissionTree, Users_1.Users);
    /**
     * All fields of the UserPermissionTree entity.
     */
    UserPermissionTree._allFields = [
        UserPermissionTree.USER_SIGNATURE,
        UserPermissionTree.DISPLAY_ORDER,
        UserPermissionTree.PERMISSION_ID,
        UserPermissionTree.NAME,
        UserPermissionTree.LEVELS,
        UserPermissionTree.PARENT_ID,
        UserPermissionTree.USER_PERMISSION_FORMS,
        UserPermissionTree.USER
    ];
    /**
     * All fields selector.
     */
    UserPermissionTree.ALL_FIELDS = new v4_1.AllFields('*', UserPermissionTree);
    /**
     * All key fields of the UserPermissionTree entity.
     */
    UserPermissionTree._keyFields = [UserPermissionTree.PERMISSION_ID];
    /**
     * Mapping of all key field names to the respective static field property UserPermissionTree.
     */
    UserPermissionTree._keys = UserPermissionTree._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserPermissionTree = exports.UserPermissionTree || (exports.UserPermissionTree = {}));
exports.UserPermissionTree = UserPermissionTree;
//# sourceMappingURL=UserPermissionTree.js.map