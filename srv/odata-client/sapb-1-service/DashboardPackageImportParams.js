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
exports.DashboardPackageImportParams = exports.DashboardPackageImportParamsField = exports.createDashboardPackageImportParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DashboardPackageImportParams.build]] instead.
 */
function createDashboardPackageImportParams(json) {
    return DashboardPackageImportParams.build(json);
}
exports.createDashboardPackageImportParams = createDashboardPackageImportParams;
/**
 * DashboardPackageImportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DashboardPackageImportParamsField = /** @class */ (function (_super) {
    __extends(DashboardPackageImportParamsField, _super);
    /**
     * Creates an instance of DashboardPackageImportParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DashboardPackageImportParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DashboardPackageImportParams) || this;
        /**
         * Representation of the [[DashboardPackageImportParams.packageFilePath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.packageFilePath = new core_1.ComplexTypeStringPropertyField('PackageFilePath', _this, 'Edm.String');
        /**
         * Representation of the [[DashboardPackageImportParams.importQueries]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importQueries = new core_1.ComplexTypeEnumPropertyField('ImportQueries', _this);
        /**
         * Representation of the [[DashboardPackageImportParams.forceOverwriteQuery]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.forceOverwriteQuery = new core_1.ComplexTypeEnumPropertyField('ForceOverwriteQuery', _this);
        /**
         * Representation of the [[DashboardPackageImportParams.forceOverwritePackage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.forceOverwritePackage = new core_1.ComplexTypeEnumPropertyField('ForceOverwritePackage', _this);
        return _this;
    }
    return DashboardPackageImportParamsField;
}(core_1.ComplexTypeField));
exports.DashboardPackageImportParamsField = DashboardPackageImportParamsField;
var DashboardPackageImportParams;
(function (DashboardPackageImportParams) {
    /**
     * Metadata information on all properties of the `DashboardPackageImportParams` complex type.
     */
    DashboardPackageImportParams._propertyMetadata = [{
            originalName: 'PackageFilePath',
            name: 'packageFilePath',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ImportQueries',
            name: 'importQueries',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ForceOverwriteQuery',
            name: 'forceOverwriteQuery',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ForceOverwritePackage',
            name: 'forceOverwritePackage',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DashboardPackageImportParams);
    }
    DashboardPackageImportParams.build = build;
})(DashboardPackageImportParams = exports.DashboardPackageImportParams || (exports.DashboardPackageImportParams = {}));
//# sourceMappingURL=DashboardPackageImportParams.js.map