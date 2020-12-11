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
exports.PmcSubprojectTypeData = exports.PmcSubprojectTypeDataField = exports.createPmcSubprojectTypeData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmcSubprojectTypeData.build]] instead.
 */
function createPmcSubprojectTypeData(json) {
    return PmcSubprojectTypeData.build(json);
}
exports.createPmcSubprojectTypeData = createPmcSubprojectTypeData;
/**
 * PmcSubprojectTypeDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmcSubprojectTypeDataField = /** @class */ (function (_super) {
    __extends(PmcSubprojectTypeDataField, _super);
    /**
     * Creates an instance of PmcSubprojectTypeDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmcSubprojectTypeDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmcSubprojectTypeData) || this;
        /**
         * Representation of the [[PmcSubprojectTypeData.subprojectTypeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectTypeId = new core_1.ComplexTypeNumberPropertyField('SubprojectTypeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmcSubprojectTypeData.subprojectTypeName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectTypeName = new core_1.ComplexTypeStringPropertyField('SubprojectTypeName', _this, 'Edm.String');
        return _this;
    }
    return PmcSubprojectTypeDataField;
}(core_1.ComplexTypeField));
exports.PmcSubprojectTypeDataField = PmcSubprojectTypeDataField;
var PmcSubprojectTypeData;
(function (PmcSubprojectTypeData) {
    /**
     * Metadata information on all properties of the `PmcSubprojectTypeData` complex type.
     */
    PmcSubprojectTypeData._propertyMetadata = [{
            originalName: 'SubprojectTypeID',
            name: 'subprojectTypeId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SubprojectTypeName',
            name: 'subprojectTypeName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmcSubprojectTypeData);
    }
    PmcSubprojectTypeData.build = build;
})(PmcSubprojectTypeData = exports.PmcSubprojectTypeData || (exports.PmcSubprojectTypeData = {}));
//# sourceMappingURL=PmcSubprojectTypeData.js.map