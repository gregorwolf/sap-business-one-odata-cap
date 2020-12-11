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
exports.TechnicianSchedulings = exports.TechnicianSchedulingsField = exports.createTechnicianSchedulings = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSchedulings.build]] instead.
 */
function createTechnicianSchedulings(json) {
    return TechnicianSchedulings.build(json);
}
exports.createTechnicianSchedulings = createTechnicianSchedulings;
/**
 * TechnicianSchedulingsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TechnicianSchedulingsField = /** @class */ (function (_super) {
    __extends(TechnicianSchedulingsField, _super);
    /**
     * Creates an instance of TechnicianSchedulingsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TechnicianSchedulingsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TechnicianSchedulings) || this;
        /**
         * Representation of the [[TechnicianSchedulings.serviceCallId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceCallId = new core_1.ComplexTypeNumberPropertyField('ServiceCallID', _this, 'Edm.Int32');
        /**
         * Representation of the [[TechnicianSchedulings.schedulingLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.schedulingLineNum = new core_1.ComplexTypeNumberPropertyField('SchedulingLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[TechnicianSchedulings.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new core_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TechnicianSchedulings.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new core_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TechnicianSchedulings.isClosed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isClosed = new core_1.ComplexTypeEnumPropertyField('IsClosed', _this);
        return _this;
    }
    return TechnicianSchedulingsField;
}(core_1.ComplexTypeField));
exports.TechnicianSchedulingsField = TechnicianSchedulingsField;
var TechnicianSchedulings;
(function (TechnicianSchedulings) {
    /**
     * Metadata information on all properties of the `TechnicianSchedulings` complex type.
     */
    TechnicianSchedulings._propertyMetadata = [{
            originalName: 'ServiceCallID',
            name: 'serviceCallId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SchedulingLineNum',
            name: 'schedulingLineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StartDate',
            name: 'startDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'EndDate',
            name: 'endDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'IsClosed',
            name: 'isClosed',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TechnicianSchedulings);
    }
    TechnicianSchedulings.build = build;
})(TechnicianSchedulings = exports.TechnicianSchedulings || (exports.TechnicianSchedulings = {}));
//# sourceMappingURL=TechnicianSchedulings.js.map