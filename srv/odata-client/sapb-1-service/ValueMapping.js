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
exports.ValueMapping = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ValueMappingRequestBuilder_1 = require("./ValueMappingRequestBuilder");
var VmThirdPartyValuesData_1 = require("./VmThirdPartyValuesData");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ValueMapping" of service "SAPB1".
 */
var ValueMapping = /** @class */ (function (_super) {
    __extends(ValueMapping, _super);
    function ValueMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ValueMapping`.
     * @returns A builder that constructs instances of entity type `ValueMapping`.
     */
    ValueMapping.builder = function () {
        return v4_1.Entity.entityBuilder(ValueMapping);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ValueMapping` entity type.
     * @returns A `ValueMapping` request builder.
     */
    ValueMapping.requestBuilder = function () {
        return new ValueMappingRequestBuilder_1.ValueMappingRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ValueMapping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ValueMapping`.
     */
    ValueMapping.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ValueMapping);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ValueMapping.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ValueMapping.
     */
    ValueMapping._entityName = 'ValueMapping';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ValueMapping.
     */
    ValueMapping._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ValueMapping._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ValueMapping;
}(v4_1.Entity));
exports.ValueMapping = ValueMapping;
(function (ValueMapping) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMapping.ABS_ENTRY = new v4_1.NumberField('AbsEntry', ValueMapping, 'Edm.Int32');
    /**
     * Static representation of the [[objectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMapping.OBJECT_ID = new v4_1.NumberField('ObjectId', ValueMapping, 'Edm.Int32');
    /**
     * Static representation of the [[objectAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMapping.OBJECT_ABS_ENTRY = new v4_1.StringField('ObjectAbsEntry', ValueMapping, 'Edm.String');
    /**
     * Static representation of the [[vmThirdPartyValuesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ValueMapping.VM_THIRD_PARTY_VALUES_COLLECTION = new v4_1.CollectionField('VM_ThirdPartyValuesCollection', ValueMapping, new VmThirdPartyValuesData_1.VmThirdPartyValuesDataField('', ValueMapping));
    /**
     * All fields of the ValueMapping entity.
     */
    ValueMapping._allFields = [
        ValueMapping.ABS_ENTRY,
        ValueMapping.OBJECT_ID,
        ValueMapping.OBJECT_ABS_ENTRY,
        ValueMapping.VM_THIRD_PARTY_VALUES_COLLECTION
    ];
    /**
     * All fields selector.
     */
    ValueMapping.ALL_FIELDS = new v4_1.AllFields('*', ValueMapping);
    /**
     * All key fields of the ValueMapping entity.
     */
    ValueMapping._keyFields = [ValueMapping.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property ValueMapping.
     */
    ValueMapping._keys = ValueMapping._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ValueMapping = exports.ValueMapping || (exports.ValueMapping = {}));
exports.ValueMapping = ValueMapping;
//# sourceMappingURL=ValueMapping.js.map