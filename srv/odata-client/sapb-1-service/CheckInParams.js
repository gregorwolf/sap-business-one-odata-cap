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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckInParams = exports.CheckInParamsField = exports.createCheckInParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CheckInParams.build]] instead.
 */
function createCheckInParams(json) {
    return CheckInParams.build(json);
}
exports.createCheckInParams = createCheckInParams;
/**
 * CheckInParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CheckInParamsField = /** @class */ (function (_super) {
    __extends(CheckInParamsField, _super);
    /**
     * Creates an instance of CheckInParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CheckInParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CheckInParams) || this;
        /**
         * Representation of the [[CheckInParams.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CheckInParams.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new core_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[CheckInParams.time]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.time = new core_1.ComplexTypeTimePropertyField('Time', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[CheckInParams.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new core_1.ComplexTypeStringPropertyField('Location', _this, 'Edm.String');
        /**
         * Representation of the [[CheckInParams.latitude]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.latitude = new core_1.ComplexTypeStringPropertyField('Latitude', _this, 'Edm.String');
        /**
         * Representation of the [[CheckInParams.longitude]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.longitude = new core_1.ComplexTypeStringPropertyField('Longitude', _this, 'Edm.String');
        /**
         * Representation of the [[CheckInParams.handledBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.handledBy = new core_1.ComplexTypeNumberPropertyField('HandledBy', _this, 'Edm.Int32');
        /**
         * Representation of the [[CheckInParams.handledByEmployee]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.handledByEmployee = new core_1.ComplexTypeNumberPropertyField('HandledByEmployee', _this, 'Edm.Int32');
        return _this;
    }
    return CheckInParamsField;
}(core_1.ComplexTypeField));
exports.CheckInParamsField = CheckInParamsField;
var CheckInParams;
(function (CheckInParams) {
    /**
     * Metadata information on all properties of the `CheckInParams` complex type.
     */
    CheckInParams._propertyMetadata = [{
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Date',
            name: 'date',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Time',
            name: 'time',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'Location',
            name: 'location',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Latitude',
            name: 'latitude',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Longitude',
            name: 'longitude',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'HandledBy',
            name: 'handledBy',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'HandledByEmployee',
            name: 'handledByEmployee',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CheckInParams);
    }
    CheckInParams.build = build;
})(CheckInParams = exports.CheckInParams || (exports.CheckInParams = {}));
//# sourceMappingURL=CheckInParams.js.map