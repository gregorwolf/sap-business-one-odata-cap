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
exports.UserKeysMd = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UserKeysMdRequestBuilder_1 = require("./UserKeysMdRequestBuilder");
var UserKeysMdElement_1 = require("./UserKeysMdElement");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "UserKeysMD" of service "SAPB1".
 */
var UserKeysMd = /** @class */ (function (_super) {
    __extends(UserKeysMd, _super);
    function UserKeysMd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `UserKeysMd`.
     * @returns A builder that constructs instances of entity type `UserKeysMd`.
     */
    UserKeysMd.builder = function () {
        return v4_1.Entity.entityBuilder(UserKeysMd);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserKeysMd` entity type.
     * @returns A `UserKeysMd` request builder.
     */
    UserKeysMd.requestBuilder = function () {
        return new UserKeysMdRequestBuilder_1.UserKeysMdRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserKeysMd`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserKeysMd`.
     */
    UserKeysMd.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, UserKeysMd);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserKeysMd.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserKeysMd.
     */
    UserKeysMd._entityName = 'UserKeysMD';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserKeysMd.
     */
    UserKeysMd._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    UserKeysMd._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return UserKeysMd;
}(v4_1.Entity));
exports.UserKeysMd = UserKeysMd;
(function (UserKeysMd) {
    /**
     * Static representation of the [[tableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserKeysMd.TABLE_NAME = new v4_1.StringField('TableName', UserKeysMd, 'Edm.String');
    /**
     * Static representation of the [[keyIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserKeysMd.KEY_INDEX = new v4_1.NumberField('KeyIndex', UserKeysMd, 'Edm.Int32');
    /**
     * Static representation of the [[keyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserKeysMd.KEY_NAME = new v4_1.StringField('KeyName', UserKeysMd, 'Edm.String');
    /**
     * Static representation of the [[userKeysMdElements]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserKeysMd.USER_KEYS_MD_ELEMENTS = new v4_1.CollectionField('UserKeysMD_Elements', UserKeysMd, new UserKeysMdElement_1.UserKeysMdElementField('', UserKeysMd));
    /**
     * All fields of the UserKeysMd entity.
     */
    UserKeysMd._allFields = [
        UserKeysMd.TABLE_NAME,
        UserKeysMd.KEY_INDEX,
        UserKeysMd.KEY_NAME,
        UserKeysMd.USER_KEYS_MD_ELEMENTS
    ];
    /**
     * All fields selector.
     */
    UserKeysMd.ALL_FIELDS = new v4_1.AllFields('*', UserKeysMd);
    /**
     * All key fields of the UserKeysMd entity.
     */
    UserKeysMd._keyFields = [UserKeysMd.TABLE_NAME, UserKeysMd.KEY_INDEX];
    /**
     * Mapping of all key field names to the respective static field property UserKeysMd.
     */
    UserKeysMd._keys = UserKeysMd._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserKeysMd = exports.UserKeysMd || (exports.UserKeysMd = {}));
exports.UserKeysMd = UserKeysMd;
//# sourceMappingURL=UserKeysMd.js.map