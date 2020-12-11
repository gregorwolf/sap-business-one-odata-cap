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
exports.JournalEntryDocumentTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var JournalEntryDocumentTypesRequestBuilder_1 = require("./JournalEntryDocumentTypesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JournalEntryDocumentTypes" of service "SAPB1".
 */
var JournalEntryDocumentTypes = /** @class */ (function (_super) {
    __extends(JournalEntryDocumentTypes, _super);
    function JournalEntryDocumentTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `JournalEntryDocumentTypes`.
     * @returns A builder that constructs instances of entity type `JournalEntryDocumentTypes`.
     */
    JournalEntryDocumentTypes.builder = function () {
        return core_1.EntityV4.entityBuilder(JournalEntryDocumentTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JournalEntryDocumentTypes` entity type.
     * @returns A `JournalEntryDocumentTypes` request builder.
     */
    JournalEntryDocumentTypes.requestBuilder = function () {
        return new JournalEntryDocumentTypesRequestBuilder_1.JournalEntryDocumentTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JournalEntryDocumentTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JournalEntryDocumentTypes`.
     */
    JournalEntryDocumentTypes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, JournalEntryDocumentTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JournalEntryDocumentTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JournalEntryDocumentTypes.
     */
    JournalEntryDocumentTypes._entityName = 'JournalEntryDocumentTypes';
    /**
     * Default url path for the according service.
     */
    JournalEntryDocumentTypes._defaultServicePath = '/b1s/v2/';
    return JournalEntryDocumentTypes;
}(core_1.EntityV4));
exports.JournalEntryDocumentTypes = JournalEntryDocumentTypes;
var JournalEntries_1 = require("./JournalEntries");
(function (JournalEntryDocumentTypes) {
    /**
     * Static representation of the [[journalEntryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntryDocumentTypes.JOURNAL_ENTRY_TYPE = new core_1.StringField('JournalEntryType', JournalEntryDocumentTypes, 'Edm.String');
    /**
     * Static representation of the [[docTypeDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntryDocumentTypes.DOC_TYPE_DESCRIPTION = new core_1.StringField('DocTypeDescription', JournalEntryDocumentTypes, 'Edm.String');
    /**
     * Static representation of the [[shortName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntryDocumentTypes.SHORT_NAME = new core_1.StringField('ShortName', JournalEntryDocumentTypes, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntryDocumentTypes.JOURNAL_ENTRIES = new core_1.OneToManyLink('JournalEntries', JournalEntryDocumentTypes, JournalEntries_1.JournalEntries);
    /**
     * All fields of the JournalEntryDocumentTypes entity.
     */
    JournalEntryDocumentTypes._allFields = [
        JournalEntryDocumentTypes.JOURNAL_ENTRY_TYPE,
        JournalEntryDocumentTypes.DOC_TYPE_DESCRIPTION,
        JournalEntryDocumentTypes.SHORT_NAME,
        JournalEntryDocumentTypes.JOURNAL_ENTRIES
    ];
    /**
     * All fields selector.
     */
    JournalEntryDocumentTypes.ALL_FIELDS = new core_1.AllFields('*', JournalEntryDocumentTypes);
    /**
     * All key fields of the JournalEntryDocumentTypes entity.
     */
    JournalEntryDocumentTypes._keyFields = [JournalEntryDocumentTypes.JOURNAL_ENTRY_TYPE];
    /**
     * Mapping of all key field names to the respective static field property JournalEntryDocumentTypes.
     */
    JournalEntryDocumentTypes._keys = JournalEntryDocumentTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JournalEntryDocumentTypes = exports.JournalEntryDocumentTypes || (exports.JournalEntryDocumentTypes = {}));
exports.JournalEntryDocumentTypes = JournalEntryDocumentTypes;
//# sourceMappingURL=JournalEntryDocumentTypes.js.map