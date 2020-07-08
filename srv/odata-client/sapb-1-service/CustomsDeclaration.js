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
exports.CustomsDeclaration = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomsDeclarationRequestBuilder_1 = require("./CustomsDeclarationRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "CustomsDeclaration" of service "SAPB1".
 */
var CustomsDeclaration = /** @class */ (function (_super) {
    __extends(CustomsDeclaration, _super);
    function CustomsDeclaration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CustomsDeclaration`.
     * @returns A builder that constructs instances of entity type `CustomsDeclaration`.
     */
    CustomsDeclaration.builder = function () {
        return v4_1.Entity.entityBuilder(CustomsDeclaration);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomsDeclaration` entity type.
     * @returns A `CustomsDeclaration` request builder.
     */
    CustomsDeclaration.requestBuilder = function () {
        return new CustomsDeclarationRequestBuilder_1.CustomsDeclarationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomsDeclaration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomsDeclaration`.
     */
    CustomsDeclaration.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, CustomsDeclaration);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomsDeclaration.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomsDeclaration.
     */
    CustomsDeclaration._entityName = 'CustomsDeclaration';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomsDeclaration.
     */
    CustomsDeclaration._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    CustomsDeclaration._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CustomsDeclaration;
}(v4_1.Entity));
exports.CustomsDeclaration = CustomsDeclaration;
(function (CustomsDeclaration) {
    /**
     * Static representation of the [[ccdNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsDeclaration.CCD_NUM = new v4_1.StringField('CCDNum', CustomsDeclaration, 'Edm.String');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsDeclaration.DATE = new v4_1.DateField('Date', CustomsDeclaration, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[customsBroker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsDeclaration.CUSTOMS_BROKER = new v4_1.StringField('CustomsBroker', CustomsDeclaration, 'Edm.String');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsDeclaration.DOC_NUM = new v4_1.StringField('DocNum', CustomsDeclaration, 'Edm.String');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsDeclaration.DOC_DATE = new v4_1.DateField('DocDate', CustomsDeclaration, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[supplyNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsDeclaration.SUPPLY_NUM = new v4_1.StringField('SupplyNum', CustomsDeclaration, 'Edm.String');
    /**
     * Static representation of the [[supplyDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsDeclaration.SUPPLY_DATE = new v4_1.DateField('SupplyDate', CustomsDeclaration, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[customsTerminal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsDeclaration.CUSTOMS_TERMINAL = new v4_1.StringField('CustomsTerminal', CustomsDeclaration, 'Edm.String');
    /**
     * Static representation of the [[paymentKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsDeclaration.PAYMENT_KEY = new v4_1.StringField('PaymentKey', CustomsDeclaration, 'Edm.String');
    /**
     * All fields of the CustomsDeclaration entity.
     */
    CustomsDeclaration._allFields = [
        CustomsDeclaration.CCD_NUM,
        CustomsDeclaration.DATE,
        CustomsDeclaration.CUSTOMS_BROKER,
        CustomsDeclaration.DOC_NUM,
        CustomsDeclaration.DOC_DATE,
        CustomsDeclaration.SUPPLY_NUM,
        CustomsDeclaration.SUPPLY_DATE,
        CustomsDeclaration.CUSTOMS_TERMINAL,
        CustomsDeclaration.PAYMENT_KEY
    ];
    /**
     * All fields selector.
     */
    CustomsDeclaration.ALL_FIELDS = new v4_1.AllFields('*', CustomsDeclaration);
    /**
     * All key fields of the CustomsDeclaration entity.
     */
    CustomsDeclaration._keyFields = [CustomsDeclaration.CCD_NUM];
    /**
     * Mapping of all key field names to the respective static field property CustomsDeclaration.
     */
    CustomsDeclaration._keys = CustomsDeclaration._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomsDeclaration = exports.CustomsDeclaration || (exports.CustomsDeclaration = {}));
exports.CustomsDeclaration = CustomsDeclaration;
//# sourceMappingURL=CustomsDeclaration.js.map