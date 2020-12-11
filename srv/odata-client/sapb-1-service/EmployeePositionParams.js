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
exports.EmployeePositionParams = exports.EmployeePositionParamsField = exports.createEmployeePositionParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EmployeePositionParams.build]] instead.
 */
function createEmployeePositionParams(json) {
    return EmployeePositionParams.build(json);
}
exports.createEmployeePositionParams = createEmployeePositionParams;
/**
 * EmployeePositionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeePositionParamsField = /** @class */ (function (_super) {
    __extends(EmployeePositionParamsField, _super);
    /**
     * Creates an instance of EmployeePositionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EmployeePositionParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EmployeePositionParams) || this;
        /**
         * Representation of the [[EmployeePositionParams.positionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.positionId = new core_1.ComplexTypeNumberPropertyField('PositionID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeePositionParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeePositionParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return EmployeePositionParamsField;
}(core_1.ComplexTypeField));
exports.EmployeePositionParamsField = EmployeePositionParamsField;
var EmployeePositionParams;
(function (EmployeePositionParams) {
    /**
     * Metadata information on all properties of the `EmployeePositionParams` complex type.
     */
    EmployeePositionParams._propertyMetadata = [{
            originalName: 'PositionID',
            name: 'positionId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EmployeePositionParams);
    }
    EmployeePositionParams.build = build;
})(EmployeePositionParams = exports.EmployeePositionParams || (exports.EmployeePositionParams = {}));
//# sourceMappingURL=EmployeePositionParams.js.map