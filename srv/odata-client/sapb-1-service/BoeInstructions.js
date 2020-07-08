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
exports.BoeInstructions = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BoeInstructionsRequestBuilder_1 = require("./BoeInstructionsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BOEInstructions" of service "SAPB1".
 */
var BoeInstructions = /** @class */ (function (_super) {
    __extends(BoeInstructions, _super);
    function BoeInstructions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BoeInstructions`.
     * @returns A builder that constructs instances of entity type `BoeInstructions`.
     */
    BoeInstructions.builder = function () {
        return v4_1.Entity.entityBuilder(BoeInstructions);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BoeInstructions` entity type.
     * @returns A `BoeInstructions` request builder.
     */
    BoeInstructions.requestBuilder = function () {
        return new BoeInstructionsRequestBuilder_1.BoeInstructionsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BoeInstructions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BoeInstructions`.
     */
    BoeInstructions.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BoeInstructions);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BoeInstructions.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BoeInstructions.
     */
    BoeInstructions._entityName = 'BOEInstructions';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BoeInstructions.
     */
    BoeInstructions._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BoeInstructions._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BoeInstructions;
}(v4_1.Entity));
exports.BoeInstructions = BoeInstructions;
(function (BoeInstructions) {
    /**
     * Static representation of the [[instructionEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BoeInstructions.INSTRUCTION_ENTRY = new v4_1.NumberField('InstructionEntry', BoeInstructions, 'Edm.Int32');
    /**
     * Static representation of the [[instructionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BoeInstructions.INSTRUCTION_CODE = new v4_1.StringField('InstructionCode', BoeInstructions, 'Edm.String');
    /**
     * Static representation of the [[instructionDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BoeInstructions.INSTRUCTION_DESC = new v4_1.StringField('InstructionDesc', BoeInstructions, 'Edm.String');
    /**
     * All fields of the BoeInstructions entity.
     */
    BoeInstructions._allFields = [
        BoeInstructions.INSTRUCTION_ENTRY,
        BoeInstructions.INSTRUCTION_CODE,
        BoeInstructions.INSTRUCTION_DESC
    ];
    /**
     * All fields selector.
     */
    BoeInstructions.ALL_FIELDS = new v4_1.AllFields('*', BoeInstructions);
    /**
     * All key fields of the BoeInstructions entity.
     */
    BoeInstructions._keyFields = [BoeInstructions.INSTRUCTION_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property BoeInstructions.
     */
    BoeInstructions._keys = BoeInstructions._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BoeInstructions = exports.BoeInstructions || (exports.BoeInstructions = {}));
exports.BoeInstructions = BoeInstructions;
//# sourceMappingURL=BoeInstructions.js.map