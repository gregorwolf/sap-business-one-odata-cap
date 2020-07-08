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
exports.Attachments2 = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Attachments2RequestBuilder_1 = require("./Attachments2RequestBuilder");
var Attachments2Line_1 = require("./Attachments2Line");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Attachments2" of service "SAPB1".
 */
var Attachments2 = /** @class */ (function (_super) {
    __extends(Attachments2, _super);
    function Attachments2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Attachments2`.
     * @returns A builder that constructs instances of entity type `Attachments2`.
     */
    Attachments2.builder = function () {
        return v4_1.Entity.entityBuilder(Attachments2);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Attachments2` entity type.
     * @returns A `Attachments2` request builder.
     */
    Attachments2.requestBuilder = function () {
        return new Attachments2RequestBuilder_1.Attachments2RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Attachments2`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Attachments2`.
     */
    Attachments2.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Attachments2);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Attachments2.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Attachments2.
     */
    Attachments2._entityName = 'Attachments2';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Attachments2.
     */
    Attachments2._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Attachments2._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Attachments2;
}(v4_1.Entity));
exports.Attachments2 = Attachments2;
var ServiceContracts_1 = require("./ServiceContracts");
var Campaigns_1 = require("./Campaigns");
var BlanketAgreements_1 = require("./BlanketAgreements");
var CustomerEquipmentCards_1 = require("./CustomerEquipmentCards");
var ProjectManagements_1 = require("./ProjectManagements");
(function (Attachments2) {
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachments2.ABSOLUTE_ENTRY = new v4_1.NumberField('AbsoluteEntry', Attachments2, 'Edm.Int32');
    /**
     * Static representation of the [[attachments2Lines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachments2.ATTACHMENTS_2_LINES = new v4_1.CollectionField('Attachments2_Lines', Attachments2, new Attachments2Line_1.Attachments2LineField('', Attachments2));
    /**
     * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachments2.SERVICE_CONTRACTS = new v4_1.OneToManyLink('ServiceContracts', Attachments2, ServiceContracts_1.ServiceContracts);
    /**
     * Static representation of the one-to-many navigation property [[campaigns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachments2.CAMPAIGNS = new v4_1.OneToManyLink('Campaigns', Attachments2, Campaigns_1.Campaigns);
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachments2.BLANKET_AGREEMENTS = new v4_1.OneToManyLink('BlanketAgreements', Attachments2, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachments2.CUSTOMER_EQUIPMENT_CARDS = new v4_1.OneToManyLink('CustomerEquipmentCards', Attachments2, CustomerEquipmentCards_1.CustomerEquipmentCards);
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Attachments2.PROJECT_MANAGEMENTS = new v4_1.OneToManyLink('ProjectManagements', Attachments2, ProjectManagements_1.ProjectManagements);
    /**
     * All fields of the Attachments2 entity.
     */
    Attachments2._allFields = [
        Attachments2.ABSOLUTE_ENTRY,
        Attachments2.ATTACHMENTS_2_LINES,
        Attachments2.SERVICE_CONTRACTS,
        Attachments2.CAMPAIGNS,
        Attachments2.BLANKET_AGREEMENTS,
        Attachments2.CUSTOMER_EQUIPMENT_CARDS,
        Attachments2.PROJECT_MANAGEMENTS
    ];
    /**
     * All fields selector.
     */
    Attachments2.ALL_FIELDS = new v4_1.AllFields('*', Attachments2);
    /**
     * All key fields of the Attachments2 entity.
     */
    Attachments2._keyFields = [Attachments2.ABSOLUTE_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property Attachments2.
     */
    Attachments2._keys = Attachments2._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Attachments2 = exports.Attachments2 || (exports.Attachments2 = {}));
exports.Attachments2 = Attachments2;
//# sourceMappingURL=Attachments2.js.map