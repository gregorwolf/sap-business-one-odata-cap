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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardPackageImportParams = exports.DashboardPackageImportParamsField = exports.createDashboardPackageImportParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function DashboardPackageImportParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DashboardPackageImportParams.packageFilePath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.packageFilePath = new v4_1.ComplexTypeStringPropertyField('PackageFilePath', _this, 'Edm.String');
        return _this;
    }
    return DashboardPackageImportParamsField;
}(v4_1.ComplexTypeField));
exports.DashboardPackageImportParamsField = DashboardPackageImportParamsField;
var DashboardPackageImportParams;
(function (DashboardPackageImportParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PackageFilePath: function (packageFilePath) { return ({ packageFilePath: v4_1.edmToTs(packageFilePath, 'Edm.String') }); }
        });
    }
    DashboardPackageImportParams.build = build;
})(DashboardPackageImportParams = exports.DashboardPackageImportParams || (exports.DashboardPackageImportParams = {}));
//# sourceMappingURL=DashboardPackageImportParams.js.map