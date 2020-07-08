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
exports.Teams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TeamsRequestBuilder_1 = require("./TeamsRequestBuilder");
var TeamMember_1 = require("./TeamMember");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Teams" of service "SAPB1".
 */
var Teams = /** @class */ (function (_super) {
    __extends(Teams, _super);
    function Teams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Teams`.
     * @returns A builder that constructs instances of entity type `Teams`.
     */
    Teams.builder = function () {
        return v4_1.Entity.entityBuilder(Teams);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Teams` entity type.
     * @returns A `Teams` request builder.
     */
    Teams.requestBuilder = function () {
        return new TeamsRequestBuilder_1.TeamsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Teams`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Teams`.
     */
    Teams.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Teams);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Teams.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Teams.
     */
    Teams._entityName = 'Teams';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Teams.
     */
    Teams._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Teams._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Teams;
}(v4_1.Entity));
exports.Teams = Teams;
(function (Teams) {
    /**
     * Static representation of the [[teamId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Teams.TEAM_ID = new v4_1.NumberField('TeamID', Teams, 'Edm.Int32');
    /**
     * Static representation of the [[teamName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Teams.TEAM_NAME = new v4_1.StringField('TeamName', Teams, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Teams.DESCRIPTION = new v4_1.StringField('Description', Teams, 'Edm.String');
    /**
     * Static representation of the [[teamMembers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Teams.TEAM_MEMBERS = new v4_1.CollectionField('TeamMembers', Teams, new TeamMember_1.TeamMemberField('', Teams));
    /**
     * All fields of the Teams entity.
     */
    Teams._allFields = [
        Teams.TEAM_ID,
        Teams.TEAM_NAME,
        Teams.DESCRIPTION,
        Teams.TEAM_MEMBERS
    ];
    /**
     * All fields selector.
     */
    Teams.ALL_FIELDS = new v4_1.AllFields('*', Teams);
    /**
     * All key fields of the Teams entity.
     */
    Teams._keyFields = [Teams.TEAM_ID];
    /**
     * Mapping of all key field names to the respective static field property Teams.
     */
    Teams._keys = Teams._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Teams = exports.Teams || (exports.Teams = {}));
exports.Teams = Teams;
//# sourceMappingURL=Teams.js.map