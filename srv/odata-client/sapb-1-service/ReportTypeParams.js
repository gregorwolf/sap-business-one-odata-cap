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
exports.ReportTypeParams = exports.ReportTypeParamsField = exports.createReportTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ReportTypeParams.build]] instead.
 */
function createReportTypeParams(json) {
    return ReportTypeParams.build(json);
}
exports.createReportTypeParams = createReportTypeParams;
/**
 * ReportTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ReportTypeParamsField = /** @class */ (function (_super) {
    __extends(ReportTypeParamsField, _super);
    function ReportTypeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ReportTypeParams.typeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.typeCode = new v4_1.ComplexTypeStringPropertyField('TypeCode', _this, 'Edm.String');
        /**
         * Representation of the [[ReportTypeParams.typeName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.typeName = new v4_1.ComplexTypeStringPropertyField('TypeName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportTypeParams.addonName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addonName = new v4_1.ComplexTypeStringPropertyField('AddonName', _this, 'Edm.String');
        /**
         * Representation of the [[ReportTypeParams.addonFormType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addonFormType = new v4_1.ComplexTypeStringPropertyField('AddonFormType', _this, 'Edm.String');
        /**
         * Representation of the [[ReportTypeParams.menuId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.menuId = new v4_1.ComplexTypeStringPropertyField('MenuID', _this, 'Edm.String');
        return _this;
    }
    return ReportTypeParamsField;
}(v4_1.ComplexTypeField));
exports.ReportTypeParamsField = ReportTypeParamsField;
var ReportTypeParams;
(function (ReportTypeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TypeCode: function (typeCode) { return ({ typeCode: v4_1.edmToTs(typeCode, 'Edm.String') }); },
            TypeName: function (typeName) { return ({ typeName: v4_1.edmToTs(typeName, 'Edm.String') }); },
            AddonName: function (addonName) { return ({ addonName: v4_1.edmToTs(addonName, 'Edm.String') }); },
            AddonFormType: function (addonFormType) { return ({ addonFormType: v4_1.edmToTs(addonFormType, 'Edm.String') }); },
            MenuID: function (menuId) { return ({ menuId: v4_1.edmToTs(menuId, 'Edm.String') }); }
        });
    }
    ReportTypeParams.build = build;
})(ReportTypeParams = exports.ReportTypeParams || (exports.ReportTypeParams = {}));
//# sourceMappingURL=ReportTypeParams.js.map