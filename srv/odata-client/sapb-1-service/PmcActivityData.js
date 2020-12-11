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
exports.PmcActivityData = exports.PmcActivityDataField = exports.createPmcActivityData = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmcActivityData.build]] instead.
 */
function createPmcActivityData(json) {
    return PmcActivityData.build(json);
}
exports.createPmcActivityData = createPmcActivityData;
/**
 * PmcActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmcActivityDataField = /** @class */ (function (_super) {
    __extends(PmcActivityDataField, _super);
    /**
     * Creates an instance of PmcActivityDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmcActivityDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmcActivityData) || this;
        /**
         * Representation of the [[PmcActivityData.activityId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activityId = new core_1.ComplexTypeNumberPropertyField('ActivityID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmcActivityData.activityType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activityType = new core_1.ComplexTypeStringPropertyField('ActivityType', _this, 'Edm.String');
        /**
         * Representation of the [[PmcActivityData.laborItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.laborItem = new core_1.ComplexTypeStringPropertyField('LaborItem', _this, 'Edm.String');
        /**
         * Representation of the [[PmcActivityData.isChargeable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isChargeable = new core_1.ComplexTypeEnumPropertyField('IsChargeable', _this);
        /**
         * Representation of the [[PmcActivityData.isAbsence]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isAbsence = new core_1.ComplexTypeEnumPropertyField('IsAbsence', _this);
        return _this;
    }
    return PmcActivityDataField;
}(core_1.ComplexTypeField));
exports.PmcActivityDataField = PmcActivityDataField;
var PmcActivityData;
(function (PmcActivityData) {
    /**
     * Metadata information on all properties of the `PmcActivityData` complex type.
     */
    PmcActivityData._propertyMetadata = [{
            originalName: 'ActivityID',
            name: 'activityId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ActivityType',
            name: 'activityType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LaborItem',
            name: 'laborItem',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'IsChargeable',
            name: 'isChargeable',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IsAbsence',
            name: 'isAbsence',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmcActivityData);
    }
    PmcActivityData.build = build;
})(PmcActivityData = exports.PmcActivityData || (exports.PmcActivityData = {}));
//# sourceMappingURL=PmcActivityData.js.map