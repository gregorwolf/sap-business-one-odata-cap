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
exports.UserGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UserGroupsRequestBuilder_1 = require("./UserGroupsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "UserGroups" of service "SAPB1".
 */
var UserGroups = /** @class */ (function (_super) {
    __extends(UserGroups, _super);
    function UserGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `UserGroups`.
     * @returns A builder that constructs instances of entity type `UserGroups`.
     */
    UserGroups.builder = function () {
        return core_1.EntityV4.entityBuilder(UserGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserGroups` entity type.
     * @returns A `UserGroups` request builder.
     */
    UserGroups.requestBuilder = function () {
        return new UserGroupsRequestBuilder_1.UserGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserGroups`.
     */
    UserGroups.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, UserGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserGroups.
     */
    UserGroups._entityName = 'UserGroups';
    /**
     * Default url path for the according service.
     */
    UserGroups._defaultServicePath = '/b1s/v2/';
    return UserGroups;
}(core_1.EntityV4));
exports.UserGroups = UserGroups;
(function (UserGroups) {
    /**
     * Static representation of the [[userGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserGroups.USER_GROUP_ID = new core_1.NumberField('UserGroupId', UserGroups, 'Edm.Int32');
    /**
     * Static representation of the [[userGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserGroups.USER_GROUP_NAME = new core_1.StringField('UserGroupName', UserGroups, 'Edm.String');
    /**
     * Static representation of the [[userGroupDec]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserGroups.USER_GROUP_DEC = new core_1.StringField('UserGroupDec', UserGroups, 'Edm.String');
    /**
     * Static representation of the [[tplId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserGroups.TPL_ID = new core_1.NumberField('TPLId', UserGroups, 'Edm.Int32');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserGroups.START_DATE = new core_1.DateField('StartDate', UserGroups, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserGroups.DUE_DATE = new core_1.DateField('DueDate', UserGroups, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[userGroupType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserGroups.USER_GROUP_TYPE = new core_1.EnumField('UserGroupType', UserGroups);
    /**
     * All fields of the UserGroups entity.
     */
    UserGroups._allFields = [
        UserGroups.USER_GROUP_ID,
        UserGroups.USER_GROUP_NAME,
        UserGroups.USER_GROUP_DEC,
        UserGroups.TPL_ID,
        UserGroups.START_DATE,
        UserGroups.DUE_DATE,
        UserGroups.USER_GROUP_TYPE
    ];
    /**
     * All fields selector.
     */
    UserGroups.ALL_FIELDS = new core_1.AllFields('*', UserGroups);
    /**
     * All key fields of the UserGroups entity.
     */
    UserGroups._keyFields = [UserGroups.USER_GROUP_ID];
    /**
     * Mapping of all key field names to the respective static field property UserGroups.
     */
    UserGroups._keys = UserGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserGroups = exports.UserGroups || (exports.UserGroups = {}));
exports.UserGroups = UserGroups;
//# sourceMappingURL=UserGroups.js.map