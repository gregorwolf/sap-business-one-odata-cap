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
exports.VmThirdPartyValuesData = exports.VmThirdPartyValuesDataField = exports.createVmThirdPartyValuesData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[VmThirdPartyValuesData.build]] instead.
 */
function createVmThirdPartyValuesData(json) {
    return VmThirdPartyValuesData.build(json);
}
exports.createVmThirdPartyValuesData = createVmThirdPartyValuesData;
/**
 * VmThirdPartyValuesDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var VmThirdPartyValuesDataField = /** @class */ (function (_super) {
    __extends(VmThirdPartyValuesDataField, _super);
    /**
     * Creates an instance of VmThirdPartyValuesDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function VmThirdPartyValuesDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, VmThirdPartyValuesData) || this;
        /**
         * Representation of the [[VmThirdPartyValuesData.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[VmThirdPartyValuesData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineId', _this, 'Edm.Int32');
        /**
         * Representation of the [[VmThirdPartyValuesData.thirdPartySystemId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.thirdPartySystemId = new core_1.ComplexTypeNumberPropertyField('ThirdPartySystemId', _this, 'Edm.Int32');
        /**
         * Representation of the [[VmThirdPartyValuesData.thirdPartyValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.thirdPartyValue = new core_1.ComplexTypeStringPropertyField('ThirdPartyValue', _this, 'Edm.String');
        return _this;
    }
    return VmThirdPartyValuesDataField;
}(core_1.ComplexTypeField));
exports.VmThirdPartyValuesDataField = VmThirdPartyValuesDataField;
var VmThirdPartyValuesData;
(function (VmThirdPartyValuesData) {
    /**
     * Metadata information on all properties of the `VmThirdPartyValuesData` complex type.
     */
    VmThirdPartyValuesData._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineId',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ThirdPartySystemId',
            name: 'thirdPartySystemId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ThirdPartyValue',
            name: 'thirdPartyValue',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, VmThirdPartyValuesData);
    }
    VmThirdPartyValuesData.build = build;
})(VmThirdPartyValuesData = exports.VmThirdPartyValuesData || (exports.VmThirdPartyValuesData = {}));
//# sourceMappingURL=VmThirdPartyValuesData.js.map