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
exports.RouteStageParams = exports.RouteStageParamsField = exports.createRouteStageParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[RouteStageParams.build]] instead.
 */
function createRouteStageParams(json) {
    return RouteStageParams.build(json);
}
exports.createRouteStageParams = createRouteStageParams;
/**
 * RouteStageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RouteStageParamsField = /** @class */ (function (_super) {
    __extends(RouteStageParamsField, _super);
    /**
     * Creates an instance of RouteStageParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function RouteStageParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, RouteStageParams) || this;
        /**
         * Representation of the [[RouteStageParams.internalNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalNumber = new core_1.ComplexTypeNumberPropertyField('InternalNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[RouteStageParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[RouteStageParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        /**
         * Representation of the [[RouteStageParams.creationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationDate = new core_1.ComplexTypeDatePropertyField('CreationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[RouteStageParams.generationTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.generationTime = new core_1.ComplexTypeTimePropertyField('GenerationTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[RouteStageParams.dateOfUpdate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateOfUpdate = new core_1.ComplexTypeDatePropertyField('DateOfUpdate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return RouteStageParamsField;
}(core_1.ComplexTypeField));
exports.RouteStageParamsField = RouteStageParamsField;
var RouteStageParams;
(function (RouteStageParams) {
    /**
     * Metadata information on all properties of the `RouteStageParams` complex type.
     */
    RouteStageParams._propertyMetadata = [{
            originalName: 'InternalNumber',
            name: 'internalNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CreationDate',
            name: 'creationDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'GenerationTime',
            name: 'generationTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'DateOfUpdate',
            name: 'dateOfUpdate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, RouteStageParams);
    }
    RouteStageParams.build = build;
})(RouteStageParams = exports.RouteStageParams || (exports.RouteStageParams = {}));
//# sourceMappingURL=RouteStageParams.js.map