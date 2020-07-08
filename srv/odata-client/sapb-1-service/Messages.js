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
exports.Messages = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var MessagesRequestBuilder_1 = require("./MessagesRequestBuilder");
var MessageDataColumn_1 = require("./MessageDataColumn");
var Recipient_1 = require("./Recipient");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Messages" of service "SAPB1".
 */
var Messages = /** @class */ (function (_super) {
    __extends(Messages, _super);
    function Messages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Messages`.
     * @returns A builder that constructs instances of entity type `Messages`.
     */
    Messages.builder = function () {
        return v4_1.Entity.entityBuilder(Messages);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Messages` entity type.
     * @returns A `Messages` request builder.
     */
    Messages.requestBuilder = function () {
        return new MessagesRequestBuilder_1.MessagesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Messages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Messages`.
     */
    Messages.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Messages);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Messages.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Messages.
     */
    Messages._entityName = 'Messages';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Messages.
     */
    Messages._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Messages._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Messages;
}(v4_1.Entity));
exports.Messages = Messages;
(function (Messages) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Messages.CODE = new v4_1.NumberField('Code', Messages, 'Edm.Int32');
    /**
     * Static representation of the [[user]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Messages.USER = new v4_1.NumberField('User', Messages, 'Edm.Int32');
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Messages.SUBJECT = new v4_1.StringField('Subject', Messages, 'Edm.String');
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Messages.TEXT = new v4_1.StringField('Text', Messages, 'Edm.String');
    /**
     * Static representation of the [[attachment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Messages.ATTACHMENT = new v4_1.NumberField('Attachment', Messages, 'Edm.Int32');
    /**
     * Static representation of the [[messageDataColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Messages.MESSAGE_DATA_COLUMNS = new v4_1.CollectionField('MessageDataColumns', Messages, new MessageDataColumn_1.MessageDataColumnField('', Messages));
    /**
     * Static representation of the [[recipientCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Messages.RECIPIENT_COLLECTION = new v4_1.CollectionField('RecipientCollection', Messages, new Recipient_1.RecipientField('', Messages));
    /**
     * All fields of the Messages entity.
     */
    Messages._allFields = [
        Messages.CODE,
        Messages.USER,
        Messages.SUBJECT,
        Messages.TEXT,
        Messages.ATTACHMENT,
        Messages.MESSAGE_DATA_COLUMNS,
        Messages.RECIPIENT_COLLECTION
    ];
    /**
     * All fields selector.
     */
    Messages.ALL_FIELDS = new v4_1.AllFields('*', Messages);
    /**
     * All key fields of the Messages entity.
     */
    Messages._keyFields = [Messages.CODE];
    /**
     * Mapping of all key field names to the respective static field property Messages.
     */
    Messages._keys = Messages._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Messages = exports.Messages || (exports.Messages = {}));
exports.Messages = Messages;
//# sourceMappingURL=Messages.js.map