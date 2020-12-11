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
exports.TrackingNotes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TrackingNotesRequestBuilder_1 = require("./TrackingNotesRequestBuilder");
var TrackingNoteItem_1 = require("./TrackingNoteItem");
var TrackingNoteBroker_1 = require("./TrackingNoteBroker");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TrackingNotes" of service "SAPB1".
 */
var TrackingNotes = /** @class */ (function (_super) {
    __extends(TrackingNotes, _super);
    function TrackingNotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `TrackingNotes`.
     * @returns A builder that constructs instances of entity type `TrackingNotes`.
     */
    TrackingNotes.builder = function () {
        return core_1.EntityV4.entityBuilder(TrackingNotes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TrackingNotes` entity type.
     * @returns A `TrackingNotes` request builder.
     */
    TrackingNotes.requestBuilder = function () {
        return new TrackingNotesRequestBuilder_1.TrackingNotesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TrackingNotes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TrackingNotes`.
     */
    TrackingNotes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, TrackingNotes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TrackingNotes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TrackingNotes.
     */
    TrackingNotes._entityName = 'TrackingNotes';
    /**
     * Default url path for the according service.
     */
    TrackingNotes._defaultServicePath = '/b1s/v2/';
    return TrackingNotes;
}(core_1.EntityV4));
exports.TrackingNotes = TrackingNotes;
(function (TrackingNotes) {
    /**
     * Static representation of the [[trackingNoteNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrackingNotes.TRACKING_NOTE_NUMBER = new core_1.NumberField('TrackingNoteNumber', TrackingNotes, 'Edm.Int32');
    /**
     * Static representation of the [[ccdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrackingNotes.CCD_NUMBER = new core_1.StringField('CCDNumber', TrackingNotes, 'Edm.String');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrackingNotes.DATE = new core_1.DateField('Date', TrackingNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[customsTerminal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrackingNotes.CUSTOMS_TERMINAL = new core_1.StringField('CustomsTerminal', TrackingNotes, 'Edm.String');
    /**
     * Static representation of the [[countryOfOrigin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrackingNotes.COUNTRY_OF_ORIGIN = new core_1.StringField('CountryOfOrigin', TrackingNotes, 'Edm.String');
    /**
     * Static representation of the [[isDirectImport]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrackingNotes.IS_DIRECT_IMPORT = new core_1.EnumField('IsDirectImport', TrackingNotes);
    /**
     * Static representation of the [[trackingNoteItemCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrackingNotes.TRACKING_NOTE_ITEM_COLLECTION = new core_1.CollectionField('TrackingNoteItemCollection', TrackingNotes, TrackingNoteItem_1.TrackingNoteItem);
    /**
     * Static representation of the [[trackingNoteBrokerCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TrackingNotes.TRACKING_NOTE_BROKER_COLLECTION = new core_1.CollectionField('TrackingNoteBrokerCollection', TrackingNotes, TrackingNoteBroker_1.TrackingNoteBroker);
    /**
     * All fields of the TrackingNotes entity.
     */
    TrackingNotes._allFields = [
        TrackingNotes.TRACKING_NOTE_NUMBER,
        TrackingNotes.CCD_NUMBER,
        TrackingNotes.DATE,
        TrackingNotes.CUSTOMS_TERMINAL,
        TrackingNotes.COUNTRY_OF_ORIGIN,
        TrackingNotes.IS_DIRECT_IMPORT,
        TrackingNotes.TRACKING_NOTE_ITEM_COLLECTION,
        TrackingNotes.TRACKING_NOTE_BROKER_COLLECTION
    ];
    /**
     * All fields selector.
     */
    TrackingNotes.ALL_FIELDS = new core_1.AllFields('*', TrackingNotes);
    /**
     * All key fields of the TrackingNotes entity.
     */
    TrackingNotes._keyFields = [TrackingNotes.TRACKING_NOTE_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property TrackingNotes.
     */
    TrackingNotes._keys = TrackingNotes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TrackingNotes = exports.TrackingNotes || (exports.TrackingNotes = {}));
exports.TrackingNotes = TrackingNotes;
//# sourceMappingURL=TrackingNotes.js.map