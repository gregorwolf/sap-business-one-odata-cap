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
exports.EmployeeFullNamesParams = exports.EmployeeFullNamesParamsField = exports.createEmployeeFullNamesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeFullNamesParams.build]] instead.
 */
function createEmployeeFullNamesParams(json) {
    return EmployeeFullNamesParams.build(json);
}
exports.createEmployeeFullNamesParams = createEmployeeFullNamesParams;
/**
 * EmployeeFullNamesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeFullNamesParamsField = /** @class */ (function (_super) {
    __extends(EmployeeFullNamesParamsField, _super);
    /**
     * Creates an instance of EmployeeFullNamesParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EmployeeFullNamesParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EmployeeFullNamesParams) || this;
        /**
         * Representation of the [[EmployeeFullNamesParams.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new core_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeFullNamesParams.employeeFullName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeFullName = new core_1.ComplexTypeStringPropertyField('EmployeeFullName', _this, 'Edm.String');
        return _this;
    }
    return EmployeeFullNamesParamsField;
}(core_1.ComplexTypeField));
exports.EmployeeFullNamesParamsField = EmployeeFullNamesParamsField;
var EmployeeFullNamesParams;
(function (EmployeeFullNamesParams) {
    /**
     * Metadata information on all properties of the `EmployeeFullNamesParams` complex type.
     */
    EmployeeFullNamesParams._propertyMetadata = [{
            originalName: 'EmployeeID',
            name: 'employeeId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EmployeeFullName',
            name: 'employeeFullName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EmployeeFullNamesParams);
    }
    EmployeeFullNamesParams.build = build;
})(EmployeeFullNamesParams = exports.EmployeeFullNamesParams || (exports.EmployeeFullNamesParams = {}));
//# sourceMappingURL=EmployeeFullNamesParams.js.map