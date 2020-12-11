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
exports.UserTablesMd = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UserTablesMdRequestBuilder_1 = require("./UserTablesMdRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "UserTablesMD" of service "SAPB1".
 */
var UserTablesMd = /** @class */ (function (_super) {
    __extends(UserTablesMd, _super);
    function UserTablesMd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `UserTablesMd`.
     * @returns A builder that constructs instances of entity type `UserTablesMd`.
     */
    UserTablesMd.builder = function () {
        return core_1.EntityV4.entityBuilder(UserTablesMd);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserTablesMd` entity type.
     * @returns A `UserTablesMd` request builder.
     */
    UserTablesMd.requestBuilder = function () {
        return new UserTablesMdRequestBuilder_1.UserTablesMdRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserTablesMd`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserTablesMd`.
     */
    UserTablesMd.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, UserTablesMd);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserTablesMd.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserTablesMd.
     */
    UserTablesMd._entityName = 'UserTablesMD';
    /**
     * Default url path for the according service.
     */
    UserTablesMd._defaultServicePath = '/b1s/v2/';
    return UserTablesMd;
}(core_1.EntityV4));
exports.UserTablesMd = UserTablesMd;
var UserObjectsMd_1 = require("./UserObjectsMd");
var UserFieldsMd_1 = require("./UserFieldsMd");
(function (UserTablesMd) {
    /**
     * Static representation of the [[tableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserTablesMd.TABLE_NAME = new core_1.StringField('TableName', UserTablesMd, 'Edm.String');
    /**
     * Static representation of the [[tableDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserTablesMd.TABLE_DESCRIPTION = new core_1.StringField('TableDescription', UserTablesMd, 'Edm.String');
    /**
     * Static representation of the [[tableType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserTablesMd.TABLE_TYPE = new core_1.EnumField('TableType', UserTablesMd);
    /**
     * Static representation of the [[archivable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserTablesMd.ARCHIVABLE = new core_1.EnumField('Archivable', UserTablesMd);
    /**
     * Static representation of the [[archiveDateField]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserTablesMd.ARCHIVE_DATE_FIELD = new core_1.StringField('ArchiveDateField', UserTablesMd, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[userObjectsMd]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserTablesMd.USER_OBJECTS_MD = new core_1.OneToManyLink('UserObjectsMD', UserTablesMd, UserObjectsMd_1.UserObjectsMd);
    /**
     * Static representation of the one-to-many navigation property [[userFieldsMd]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserTablesMd.USER_FIELDS_MD = new core_1.OneToManyLink('UserFieldsMD', UserTablesMd, UserFieldsMd_1.UserFieldsMd);
    /**
     * All fields of the UserTablesMd entity.
     */
    UserTablesMd._allFields = [
        UserTablesMd.TABLE_NAME,
        UserTablesMd.TABLE_DESCRIPTION,
        UserTablesMd.TABLE_TYPE,
        UserTablesMd.ARCHIVABLE,
        UserTablesMd.ARCHIVE_DATE_FIELD,
        UserTablesMd.USER_OBJECTS_MD,
        UserTablesMd.USER_FIELDS_MD
    ];
    /**
     * All fields selector.
     */
    UserTablesMd.ALL_FIELDS = new core_1.AllFields('*', UserTablesMd);
    /**
     * All key fields of the UserTablesMd entity.
     */
    UserTablesMd._keyFields = [UserTablesMd.TABLE_NAME];
    /**
     * Mapping of all key field names to the respective static field property UserTablesMd.
     */
    UserTablesMd._keys = UserTablesMd._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserTablesMd = exports.UserTablesMd || (exports.UserTablesMd = {}));
exports.UserTablesMd = UserTablesMd;
//# sourceMappingURL=UserTablesMd.js.map