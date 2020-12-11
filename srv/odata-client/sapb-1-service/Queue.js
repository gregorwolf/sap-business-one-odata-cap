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
exports.Queue = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var QueueRequestBuilder_1 = require("./QueueRequestBuilder");
var QueueMember_1 = require("./QueueMember");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Queue" of service "SAPB1".
 */
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    function Queue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Queue`.
     * @returns A builder that constructs instances of entity type `Queue`.
     */
    Queue.builder = function () {
        return core_1.EntityV4.entityBuilder(Queue);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Queue` entity type.
     * @returns A `Queue` request builder.
     */
    Queue.requestBuilder = function () {
        return new QueueRequestBuilder_1.QueueRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Queue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Queue`.
     */
    Queue.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Queue);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Queue.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Queue.
     */
    Queue._entityName = 'Queue';
    /**
     * Default url path for the according service.
     */
    Queue._defaultServicePath = '/b1s/v2/';
    return Queue;
}(core_1.EntityV4));
exports.Queue = Queue;
var Users_1 = require("./Users");
var ServiceCalls_1 = require("./ServiceCalls");
(function (Queue) {
    /**
     * Static representation of the [[queueId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Queue.QUEUE_ID = new core_1.StringField('QueueID', Queue, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Queue.DESCRIPTION = new core_1.StringField('Description', Queue, 'Edm.String');
    /**
     * Static representation of the [[inactive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Queue.INACTIVE = new core_1.EnumField('Inactive', Queue);
    /**
     * Static representation of the [[queueManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Queue.QUEUE_MANAGER = new core_1.NumberField('QueueManager', Queue, 'Edm.Int32');
    /**
     * Static representation of the [[queueEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Queue.QUEUE_EMAIL = new core_1.StringField('QueueEmail', Queue, 'Edm.String');
    /**
     * Static representation of the [[queueMembers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Queue.QUEUE_MEMBERS = new core_1.CollectionField('QueueMembers', Queue, QueueMember_1.QueueMember);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Queue.USER = new core_1.OneToOneLink('User', Queue, Users_1.Users);
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Queue.SERVICE_CALLS = new core_1.OneToManyLink('ServiceCalls', Queue, ServiceCalls_1.ServiceCalls);
    /**
     * All fields of the Queue entity.
     */
    Queue._allFields = [
        Queue.QUEUE_ID,
        Queue.DESCRIPTION,
        Queue.INACTIVE,
        Queue.QUEUE_MANAGER,
        Queue.QUEUE_EMAIL,
        Queue.QUEUE_MEMBERS,
        Queue.USER,
        Queue.SERVICE_CALLS
    ];
    /**
     * All fields selector.
     */
    Queue.ALL_FIELDS = new core_1.AllFields('*', Queue);
    /**
     * All key fields of the Queue entity.
     */
    Queue._keyFields = [Queue.QUEUE_ID];
    /**
     * Mapping of all key field names to the respective static field property Queue.
     */
    Queue._keys = Queue._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Queue = exports.Queue || (exports.Queue = {}));
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map