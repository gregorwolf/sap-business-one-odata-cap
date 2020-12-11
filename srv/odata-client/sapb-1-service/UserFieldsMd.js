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
exports.UserFieldsMd = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UserFieldsMdRequestBuilder_1 = require("./UserFieldsMdRequestBuilder");
var ValidValueMd_1 = require("./ValidValueMd");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "UserFieldsMD" of service "SAPB1".
 */
var UserFieldsMd = /** @class */ (function (_super) {
    __extends(UserFieldsMd, _super);
    function UserFieldsMd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `UserFieldsMd`.
     * @returns A builder that constructs instances of entity type `UserFieldsMd`.
     */
    UserFieldsMd.builder = function () {
        return core_1.EntityV4.entityBuilder(UserFieldsMd);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserFieldsMd` entity type.
     * @returns A `UserFieldsMd` request builder.
     */
    UserFieldsMd.requestBuilder = function () {
        return new UserFieldsMdRequestBuilder_1.UserFieldsMdRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserFieldsMd`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserFieldsMd`.
     */
    UserFieldsMd.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, UserFieldsMd);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserFieldsMd.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserFieldsMd.
     */
    UserFieldsMd._entityName = 'UserFieldsMD';
    /**
     * Default url path for the according service.
     */
    UserFieldsMd._defaultServicePath = '/b1s/v2/';
    return UserFieldsMd;
}(core_1.EntityV4));
exports.UserFieldsMd = UserFieldsMd;
var UserTablesMd_1 = require("./UserTablesMd");
(function (UserFieldsMd) {
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.NAME = new core_1.StringField('Name', UserFieldsMd, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.TYPE = new core_1.EnumField('Type', UserFieldsMd);
    /**
     * Static representation of the [[size]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.SIZE = new core_1.NumberField('Size', UserFieldsMd, 'Edm.Int32');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.DESCRIPTION = new core_1.StringField('Description', UserFieldsMd, 'Edm.String');
    /**
     * Static representation of the [[subType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.SUB_TYPE = new core_1.EnumField('SubType', UserFieldsMd);
    /**
     * Static representation of the [[linkedTable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.LINKED_TABLE = new core_1.StringField('LinkedTable', UserFieldsMd, 'Edm.String');
    /**
     * Static representation of the [[defaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.DEFAULT_VALUE = new core_1.StringField('DefaultValue', UserFieldsMd, 'Edm.String');
    /**
     * Static representation of the [[tableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.TABLE_NAME = new core_1.StringField('TableName', UserFieldsMd, 'Edm.String');
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.FIELD_ID = new core_1.NumberField('FieldID', UserFieldsMd, 'Edm.Int32');
    /**
     * Static representation of the [[editSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.EDIT_SIZE = new core_1.NumberField('EditSize', UserFieldsMd, 'Edm.Int32');
    /**
     * Static representation of the [[mandatory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.MANDATORY = new core_1.EnumField('Mandatory', UserFieldsMd);
    /**
     * Static representation of the [[linkedUdo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.LINKED_UDO = new core_1.StringField('LinkedUDO', UserFieldsMd, 'Edm.String');
    /**
     * Static representation of the [[linkedSystemObject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.LINKED_SYSTEM_OBJECT = new core_1.EnumField('LinkedSystemObject', UserFieldsMd);
    /**
     * Static representation of the [[validValuesMd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.VALID_VALUES_MD = new core_1.CollectionField('ValidValuesMD', UserFieldsMd, ValidValueMd_1.ValidValueMd);
    /**
     * Static representation of the one-to-one navigation property [[userTablesMd]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserFieldsMd.USER_TABLES_MD = new core_1.OneToOneLink('UserTablesMD', UserFieldsMd, UserTablesMd_1.UserTablesMd);
    /**
     * All fields of the UserFieldsMd entity.
     */
    UserFieldsMd._allFields = [
        UserFieldsMd.NAME,
        UserFieldsMd.TYPE,
        UserFieldsMd.SIZE,
        UserFieldsMd.DESCRIPTION,
        UserFieldsMd.SUB_TYPE,
        UserFieldsMd.LINKED_TABLE,
        UserFieldsMd.DEFAULT_VALUE,
        UserFieldsMd.TABLE_NAME,
        UserFieldsMd.FIELD_ID,
        UserFieldsMd.EDIT_SIZE,
        UserFieldsMd.MANDATORY,
        UserFieldsMd.LINKED_UDO,
        UserFieldsMd.LINKED_SYSTEM_OBJECT,
        UserFieldsMd.VALID_VALUES_MD,
        UserFieldsMd.USER_TABLES_MD
    ];
    /**
     * All fields selector.
     */
    UserFieldsMd.ALL_FIELDS = new core_1.AllFields('*', UserFieldsMd);
    /**
     * All key fields of the UserFieldsMd entity.
     */
    UserFieldsMd._keyFields = [UserFieldsMd.TABLE_NAME, UserFieldsMd.FIELD_ID];
    /**
     * Mapping of all key field names to the respective static field property UserFieldsMd.
     */
    UserFieldsMd._keys = UserFieldsMd._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserFieldsMd = exports.UserFieldsMd || (exports.UserFieldsMd = {}));
exports.UserFieldsMd = UserFieldsMd;
//# sourceMappingURL=UserFieldsMd.js.map