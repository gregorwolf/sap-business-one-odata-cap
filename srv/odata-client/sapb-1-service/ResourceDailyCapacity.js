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
exports.ResourceDailyCapacity = exports.ResourceDailyCapacityField = exports.createResourceDailyCapacity = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ResourceDailyCapacity.build]] instead.
 */
function createResourceDailyCapacity(json) {
    return ResourceDailyCapacity.build(json);
}
exports.createResourceDailyCapacity = createResourceDailyCapacity;
/**
 * ResourceDailyCapacityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ResourceDailyCapacityField = /** @class */ (function (_super) {
    __extends(ResourceDailyCapacityField, _super);
    /**
     * Creates an instance of ResourceDailyCapacityField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ResourceDailyCapacityField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ResourceDailyCapacity) || this;
        /**
         * Representation of the [[ResourceDailyCapacity.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceDailyCapacity.weekday]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weekday = new core_1.ComplexTypeEnumPropertyField('Weekday', _this);
        /**
         * Representation of the [[ResourceDailyCapacity.factor1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor1 = new core_1.ComplexTypeNumberPropertyField('Factor1', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceDailyCapacity.factor2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor2 = new core_1.ComplexTypeNumberPropertyField('Factor2', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceDailyCapacity.factor3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor3 = new core_1.ComplexTypeNumberPropertyField('Factor3', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceDailyCapacity.factor4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor4 = new core_1.ComplexTypeNumberPropertyField('Factor4', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceDailyCapacity.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new core_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceDailyCapacity.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceDailyCapacity.singleRun]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.singleRun = new core_1.ComplexTypeNumberPropertyField('SingleRun', _this, 'Edm.Double');
        return _this;
    }
    return ResourceDailyCapacityField;
}(core_1.ComplexTypeField));
exports.ResourceDailyCapacityField = ResourceDailyCapacityField;
var ResourceDailyCapacity;
(function (ResourceDailyCapacity) {
    /**
     * Metadata information on all properties of the `ResourceDailyCapacity` complex type.
     */
    ResourceDailyCapacity._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Weekday',
            name: 'weekday',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Factor1',
            name: 'factor1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Factor2',
            name: 'factor2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Factor3',
            name: 'factor3',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Factor4',
            name: 'factor4',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Total',
            name: 'total',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SingleRun',
            name: 'singleRun',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ResourceDailyCapacity);
    }
    ResourceDailyCapacity.build = build;
})(ResourceDailyCapacity = exports.ResourceDailyCapacity || (exports.ResourceDailyCapacity = {}));
//# sourceMappingURL=ResourceDailyCapacity.js.map