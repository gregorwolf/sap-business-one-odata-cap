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
exports.TechnicianSchedulingsParams = exports.TechnicianSchedulingsParamsField = exports.createTechnicianSchedulingsParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSchedulingsParams.build]] instead.
 */
function createTechnicianSchedulingsParams(json) {
    return TechnicianSchedulingsParams.build(json);
}
exports.createTechnicianSchedulingsParams = createTechnicianSchedulingsParams;
/**
 * TechnicianSchedulingsParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TechnicianSchedulingsParamsField = /** @class */ (function (_super) {
    __extends(TechnicianSchedulingsParamsField, _super);
    /**
     * Creates an instance of TechnicianSchedulingsParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TechnicianSchedulingsParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TechnicianSchedulingsParams) || this;
        /**
         * Representation of the [[TechnicianSchedulingsParams.technician]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.technician = new core_1.ComplexTypeNumberPropertyField('Technician', _this, 'Edm.Int32');
        /**
         * Representation of the [[TechnicianSchedulingsParams.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new core_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TechnicianSchedulingsParams.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new core_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return TechnicianSchedulingsParamsField;
}(core_1.ComplexTypeField));
exports.TechnicianSchedulingsParamsField = TechnicianSchedulingsParamsField;
var TechnicianSchedulingsParams;
(function (TechnicianSchedulingsParams) {
    /**
     * Metadata information on all properties of the `TechnicianSchedulingsParams` complex type.
     */
    TechnicianSchedulingsParams._propertyMetadata = [{
            originalName: 'Technician',
            name: 'technician',
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
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TechnicianSchedulingsParams);
    }
    TechnicianSchedulingsParams.build = build;
})(TechnicianSchedulingsParams = exports.TechnicianSchedulingsParams || (exports.TechnicianSchedulingsParams = {}));
//# sourceMappingURL=TechnicianSchedulingsParams.js.map