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
exports.UserObjectsMd = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UserObjectsMdRequestBuilder_1 = require("./UserObjectsMdRequestBuilder");
var UserObjectMdChildTable_1 = require("./UserObjectMdChildTable");
var UserObjectMdFindColumn_1 = require("./UserObjectMdFindColumn");
var UserObjectMdFormColumn_1 = require("./UserObjectMdFormColumn");
var UserObjectMdEnhancedFormColumn_1 = require("./UserObjectMdEnhancedFormColumn");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "UserObjectsMD" of service "SAPB1".
 */
var UserObjectsMd = /** @class */ (function (_super) {
    __extends(UserObjectsMd, _super);
    function UserObjectsMd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `UserObjectsMd`.
     * @returns A builder that constructs instances of entity type `UserObjectsMd`.
     */
    UserObjectsMd.builder = function () {
        return core_1.EntityV4.entityBuilder(UserObjectsMd);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserObjectsMd` entity type.
     * @returns A `UserObjectsMd` request builder.
     */
    UserObjectsMd.requestBuilder = function () {
        return new UserObjectsMdRequestBuilder_1.UserObjectsMdRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserObjectsMd`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserObjectsMd`.
     */
    UserObjectsMd.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, UserObjectsMd);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserObjectsMd.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserObjectsMd.
     */
    UserObjectsMd._entityName = 'UserObjectsMD';
    /**
     * Default url path for the according service.
     */
    UserObjectsMd._defaultServicePath = '/b1s/v2/';
    return UserObjectsMd;
}(core_1.EntityV4));
exports.UserObjectsMd = UserObjectsMd;
var UserTablesMd_1 = require("./UserTablesMd");
(function (UserObjectsMd) {
    /**
     * Static representation of the [[tableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.TABLE_NAME = new core_1.StringField('TableName', UserObjectsMd, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.CODE = new core_1.StringField('Code', UserObjectsMd, 'Edm.String');
    /**
     * Static representation of the [[logTableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.LOG_TABLE_NAME = new core_1.StringField('LogTableName', UserObjectsMd, 'Edm.String');
    /**
     * Static representation of the [[canCreateDefaultForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.CAN_CREATE_DEFAULT_FORM = new core_1.EnumField('CanCreateDefaultForm', UserObjectsMd);
    /**
     * Static representation of the [[objectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.OBJECT_TYPE = new core_1.EnumField('ObjectType', UserObjectsMd);
    /**
     * Static representation of the [[extensionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.EXTENSION_NAME = new core_1.StringField('ExtensionName', UserObjectsMd, 'Edm.String');
    /**
     * Static representation of the [[canCancel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.CAN_CANCEL = new core_1.EnumField('CanCancel', UserObjectsMd);
    /**
     * Static representation of the [[canDelete]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.CAN_DELETE = new core_1.EnumField('CanDelete', UserObjectsMd);
    /**
     * Static representation of the [[canLog]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.CAN_LOG = new core_1.EnumField('CanLog', UserObjectsMd);
    /**
     * Static representation of the [[manageSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.MANAGE_SERIES = new core_1.EnumField('ManageSeries', UserObjectsMd);
    /**
     * Static representation of the [[canFind]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.CAN_FIND = new core_1.EnumField('CanFind', UserObjectsMd);
    /**
     * Static representation of the [[canYearTransfer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.CAN_YEAR_TRANSFER = new core_1.EnumField('CanYearTransfer', UserObjectsMd);
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.NAME = new core_1.StringField('Name', UserObjectsMd, 'Edm.String');
    /**
     * Static representation of the [[canClose]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.CAN_CLOSE = new core_1.EnumField('CanClose', UserObjectsMd);
    /**
     * Static representation of the [[overwriteDllfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.OVERWRITE_DLLFILE = new core_1.EnumField('OverwriteDllfile', UserObjectsMd);
    /**
     * Static representation of the [[useUniqueFormType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.USE_UNIQUE_FORM_TYPE = new core_1.EnumField('UseUniqueFormType', UserObjectsMd);
    /**
     * Static representation of the [[canArchive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.CAN_ARCHIVE = new core_1.EnumField('CanArchive', UserObjectsMd);
    /**
     * Static representation of the [[menuItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.MENU_ITEM = new core_1.EnumField('MenuItem', UserObjectsMd);
    /**
     * Static representation of the [[menuCaption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.MENU_CAPTION = new core_1.StringField('MenuCaption', UserObjectsMd, 'Edm.String');
    /**
     * Static representation of the [[fatherMenuId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.FATHER_MENU_ID = new core_1.NumberField('FatherMenuID', UserObjectsMd, 'Edm.Int32');
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.POSITION = new core_1.NumberField('Position', UserObjectsMd, 'Edm.Int32');
    /**
     * Static representation of the [[menuUid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.MENU_UID = new core_1.StringField('MenuUID', UserObjectsMd, 'Edm.String');
    /**
     * Static representation of the [[enableEnhancedForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.ENABLE_ENHANCED_FORM = new core_1.EnumField('EnableEnhancedForm', UserObjectsMd);
    /**
     * Static representation of the [[rebuildEnhancedForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.REBUILD_ENHANCED_FORM = new core_1.EnumField('RebuildEnhancedForm', UserObjectsMd);
    /**
     * Static representation of the [[formSrf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.FORM_SRF = new core_1.StringField('FormSRF', UserObjectsMd, 'Edm.String');
    /**
     * Static representation of the [[userObjectMdChildTables]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.USER_OBJECT_MD_CHILD_TABLES = new core_1.CollectionField('UserObjectMD_ChildTables', UserObjectsMd, UserObjectMdChildTable_1.UserObjectMdChildTable);
    /**
     * Static representation of the [[userObjectMdFindColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.USER_OBJECT_MD_FIND_COLUMNS = new core_1.CollectionField('UserObjectMD_FindColumns', UserObjectsMd, UserObjectMdFindColumn_1.UserObjectMdFindColumn);
    /**
     * Static representation of the [[userObjectMdFormColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.USER_OBJECT_MD_FORM_COLUMNS = new core_1.CollectionField('UserObjectMD_FormColumns', UserObjectsMd, UserObjectMdFormColumn_1.UserObjectMdFormColumn);
    /**
     * Static representation of the [[userObjectMdEnhancedFormColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.USER_OBJECT_MD_ENHANCED_FORM_COLUMNS = new core_1.CollectionField('UserObjectMD_EnhancedFormColumns', UserObjectsMd, UserObjectMdEnhancedFormColumn_1.UserObjectMdEnhancedFormColumn);
    /**
     * Static representation of the one-to-one navigation property [[userTablesMd]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserObjectsMd.USER_TABLES_MD = new core_1.OneToOneLink('UserTablesMD', UserObjectsMd, UserTablesMd_1.UserTablesMd);
    /**
     * All fields of the UserObjectsMd entity.
     */
    UserObjectsMd._allFields = [
        UserObjectsMd.TABLE_NAME,
        UserObjectsMd.CODE,
        UserObjectsMd.LOG_TABLE_NAME,
        UserObjectsMd.CAN_CREATE_DEFAULT_FORM,
        UserObjectsMd.OBJECT_TYPE,
        UserObjectsMd.EXTENSION_NAME,
        UserObjectsMd.CAN_CANCEL,
        UserObjectsMd.CAN_DELETE,
        UserObjectsMd.CAN_LOG,
        UserObjectsMd.MANAGE_SERIES,
        UserObjectsMd.CAN_FIND,
        UserObjectsMd.CAN_YEAR_TRANSFER,
        UserObjectsMd.NAME,
        UserObjectsMd.CAN_CLOSE,
        UserObjectsMd.OVERWRITE_DLLFILE,
        UserObjectsMd.USE_UNIQUE_FORM_TYPE,
        UserObjectsMd.CAN_ARCHIVE,
        UserObjectsMd.MENU_ITEM,
        UserObjectsMd.MENU_CAPTION,
        UserObjectsMd.FATHER_MENU_ID,
        UserObjectsMd.POSITION,
        UserObjectsMd.MENU_UID,
        UserObjectsMd.ENABLE_ENHANCED_FORM,
        UserObjectsMd.REBUILD_ENHANCED_FORM,
        UserObjectsMd.FORM_SRF,
        UserObjectsMd.USER_OBJECT_MD_CHILD_TABLES,
        UserObjectsMd.USER_OBJECT_MD_FIND_COLUMNS,
        UserObjectsMd.USER_OBJECT_MD_FORM_COLUMNS,
        UserObjectsMd.USER_OBJECT_MD_ENHANCED_FORM_COLUMNS,
        UserObjectsMd.USER_TABLES_MD
    ];
    /**
     * All fields selector.
     */
    UserObjectsMd.ALL_FIELDS = new core_1.AllFields('*', UserObjectsMd);
    /**
     * All key fields of the UserObjectsMd entity.
     */
    UserObjectsMd._keyFields = [UserObjectsMd.CODE];
    /**
     * Mapping of all key field names to the respective static field property UserObjectsMd.
     */
    UserObjectsMd._keys = UserObjectsMd._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserObjectsMd = exports.UserObjectsMd || (exports.UserObjectsMd = {}));
exports.UserObjectsMd = UserObjectsMd;
//# sourceMappingURL=UserObjectsMd.js.map